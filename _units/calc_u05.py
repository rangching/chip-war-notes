"""EP05 練習題答案與 sims/dram.html 的價格戰模型（同一套規則，用來核對網頁預設情境）。
用法：python3 calc_u05.py

  Wright 學習曲線      c(Q) = c1 * (Q / Q1)^(-b)，b = -log2(1 - r)
                        （累積產量 Q 每翻倍，單位成本降低固定比例 r）
  翻倍次數              n = ln(目標比例) / ln(1 - r)
書中數字（Miller 2022）：惠普 1980 年報告，日本三家 DRAM 廠前 1,000 小時故障率 ≤ 0.02%、美國最佳 0.09%、最差 0.26%；
AMD 桑德斯說日本借錢 6–7%、他要 18%（1980 年代）。學習率 20% 參考 Irwin & Klenow（1994）對 1974–92 年
七代 DRAM 的估計平均值。價格戰模型為教學示意，參數不是史料。"""
import math

# ---------- Q1 惠普報告：最差美國廠 ÷ 日本廠
print(f"Q1 0.26% ÷ 0.02% = {0.26/0.02:.0f} 倍；最佳美國廠 0.09 ÷ 0.02 = {0.09/0.02:.1f} 倍（書中寫 4.5 倍）")

# ---------- Q2 借 1 億美元蓋廠，一年利息差
loan = 100e6
print(f"Q2 18% − 6.5% → 每年利息差 {(0.18-0.065)*loan/1e4:,.0f} 萬美元")

# ---------- Q3 學習率 20%，累積產量變 16 倍
r = 0.20
b = -math.log2(1 - r)
print(f"Q3 b = {b:.4f}；累積產量 ×16（4 次翻倍）→ 成本剩 {(1-r)**4:.4f} = {(1-r)**4*100:.1f}%；同式 16^(-b) = {16**(-b):.4f}")

# ---------- Q4 成本降到原來 10% 要翻倍幾次
n = math.log(0.1) / math.log(1 - r)
print(f"Q4 n = ln 0.1 / ln 0.8 = {n:.2f} 次翻倍（累積產量約 ×{2**n:,.0f}）")


# ---------- 價格戰模型（與 dram.html 相同）
def sim(r=0.20, i_us=0.18, i_jp=0.065, g_us=0.30, g_jp=0.60, stop_us=True, floor_year=None,
        E_jp=200, E_us=60, eps=0.8, gam=0.20, k=1.0, dlt=0.20, years=10):
    """每季一步。成本 = 學習成本 (Q/100)^(-b) + 資本成本 k(i+δ)。
    市場價格由需求 Q_d = D0 e^{γt} P^{-ε} 與總產能結清；美國廠虧損時停止擴產（可關），
    日本廠只要累積虧損未超過可承受額度的一半就照常擴產；累積虧損超過可承受額度即退出。
    floor_year：該年起價格不得低於日本廠成本（1986 年美日協議的價格監督示意）。"""
    b = -math.log2(1 - r)
    F = {"US": dict(K=100., Q=100., i=i_us, g=g_us, cash=0., E=E_us, alive=True, below=None, exit=None),
         "JP": dict(K=60., Q=60., i=i_jp, g=g_jp, cash=0., E=E_jp, alive=True, below=None, exit=None)}
    D0 = 160 * 1.8 ** eps  # 第 0 年兩家產能合計 160、價格 1.8
    dt, t, rows = 0.25, 0.0, []
    while t < years - 1e-9:
        cost = {n: (f["Q"] / 100) ** (-b) + k * (f["i"] + dlt) for n, f in F.items()}
        S = sum(f["K"] for f in F.values() if f["alive"])
        if S <= 0:
            break
        D = D0 * math.exp(gam * t)
        P = (S / D) ** (-1 / eps)
        sold = {n: (f["K"] if f["alive"] else 0) for n, f in F.items()}
        if floor_year is not None and t >= floor_year and F["JP"]["alive"] and P < cost["JP"]:
            P = cost["JP"]; Qd = D * P ** (-eps)
            sold = {n: (f["K"] / S * Qd if f["alive"] else 0) for n, f in F.items()}
        for n, f in F.items():
            if not f["alive"]:
                continue
            f["cash"] += (P - cost[n]) * sold[n] * dt
            f["Q"] += sold[n] * dt
            if P < cost[n] and f["below"] is None:
                f["below"] = t
            grow = f["g"]
            if n == "US" and stop_us and P < cost[n]:
                grow = 0
            if n == "JP" and f["cash"] < -0.5 * f["E"]:
                grow = 0
            f["K"] *= (1 + grow) ** dt
            if f["cash"] < -f["E"]:
                f["alive"] = False; f["exit"] = t
        rows.append((t, P, cost["US"], cost["JP"]))
        t += dt
    return F, rows


def show(name, **kw):
    F, rows = sim(**kw)
    s = "；".join(f"{'美國' if n=='US' else '日本'}：跌破成本 {('第 %.2f 年' % f['below']) if f['below'] is not None else '沒有'}、"
                 f"{('第 %.2f 年退出' % f['exit']) if f['exit'] is not None else '撐到最後'}、累積損益 {f['cash']:.0f}"
                 for n, f in F.items())
    print(f"[模擬] {name}：{s}")


show("預設")
show("美國也用 6.5% 借錢", i_us=0.065)
show("第 5 年起價格下限（協議示意）", floor_year=5)
show("日本主銀行支撐減半", E_jp=100)
show("學習率 30%", r=0.30)
