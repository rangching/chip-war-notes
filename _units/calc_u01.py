"""EP01 練習題答案與網頁用到的計算：摩爾定律翻倍週期、供應鏈斷鏈損失。
用法：python3 calc_u01.py

  摩爾定律           N(t) = N0 * 2^((t - t0) / T2)，T2 為翻倍週期（年）
  翻倍次數           n = log2(N1 / N0)，平均翻倍週期 = 年數 / n
  斷鏈損失           L_k = Σ_{r∈S} s[r][k]（環節 k 全球失去的占比）
  自給比例           K_k = Σ_{r∉S} s[r][k]（留下來的區域占比加總）
  整條鏈加權損失     Σ_k w_k L_k / Σ_k w_k
供應鏈數值直接讀 ../sims/chain.html 裡 /*DATA-BEGIN*/…/*DATA-END*/ 的 JSON，網頁與本檔用同一份數字。
摩爾定律資料點取自 source/facts_ep01.yaml 的 moore_* 條目（14 點，verified: true）。"""
import json
import math
import re
from pathlib import Path

# ---------- 讀模擬頁的資料常數
html = (Path(__file__).resolve().parent.parent / "sims" / "chain.html").read_text(encoding="utf-8")
DATA = json.loads(re.search(r"/\*DATA-BEGIN\*/(.*?)/\*DATA-END\*/", html, re.S).group(1))
REG, ACT = DATA["regions"], DATA["activities"]
ZH = dict(zip(REG, DATA["regionZh"]))
AZH = dict(zip(ACT, DATA["activityZh"]))


def loss(year, cut, act):
    D = DATA["sets"][year]
    return sum(D["share"][act][REG.index(r)] for r in cut)


def overall(year, cut):
    D = DATA["sets"][year]
    w = D["weight"]
    return sum(w[k] * loss(year, cut, k) for k in ACT) / sum(w.values())


def keep(year, cut, act):
    D = DATA["sets"][year]
    return min(100, sum(v for r, v in zip(REG, D["share"][act]) if r not in cut))


def adv_loss(year, cut):
    D = DATA["sets"][year]
    return sum(D["adv"]["share"][REG.index(r)] for r in cut)


# ---------- 摩爾定律：14 個代表性晶片（年份, 電晶體數）
MOORE = [
    ("Intel 4004", 1971, 2_300), ("Intel 8086", 1978, 29_000), ("Intel 80386", 1985, 275_000),
    ("Intel 80486", 1989, 1_180_235), ("Pentium", 1993, 3_100_000), ("Pentium 4", 2000, 42_000_000),
    ("Core 2 Duo", 2006, 291_000_000), ("Apple A7", 2013, 1_000_000_000), ("Apple A11", 2017, 4_300_000_000),
    ("Apple M1", 2020, 16_000_000_000), ("NVIDIA H100", 2022, 80_000_000_000), ("Apple M3 Max", 2023, 92_000_000_000),
    ("NVIDIA Blackwell", 2024, 208_000_000_000), ("NVIDIA Rubin", 2026, 336_000_000_000),
]
xs = [y for _, y, _ in MOORE]
ys = [math.log2(n) for _, _, n in MOORE]
mx, my = sum(xs) / len(xs), sum(ys) / len(ys)
slope = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
T2 = 1 / slope
print(f"[網頁] {len(MOORE)} 點最小平方擬合 log2(N) 對年份：翻倍週期 T2 = {T2:.3f} 年")

# Q1：Intel 4004（1971，2,300）→ Apple A17 Pro（2023，190 億）
n_dbl = math.log2(19_000_000_000 / 2_300)
print(f"Q1 4004→A17 Pro：翻倍 {n_dbl:.2f} 次，52 年 ÷ {n_dbl:.2f} = 每 {52 / n_dbl:.2f} 年翻倍一次")
print(f"   對照：若嚴格每 2 年翻倍，2023 年應有 {2_300 * 2 ** 26 / 1e8:,.0f} 億個（實際單晶粒手機晶片 190 億）")

# Q2：T2 取 2.09 年，10 年後變成幾倍
print(f"Q2 10 年 ÷ 2.09 年 = {10 / 2.09:.3f} 次翻倍 → 2^{10 / 2.09:.3f} = {2 ** (10 / 2.09):.1f} 倍")
print(f"   書中：1961 年 4 個 → 2020 年 A14 118 億，翻倍 {math.log2(11.8e9 / 4):.1f} 次")

# Q3：臺灣斷鏈（2022 資料），晶圓製造環節全球失去多少
for yr in ("2022", "2019"):
    tw = {k: loss(yr, ["TW"], k) for k in ACT}
    print(f"Q3[{yr}] 臺灣斷鏈：" + "、".join(f"{AZH[k]} −{v:g}%" for k, v in tw.items()))
    print(f"        晶圓製造 −{tw['fab']:g}%；10 奈米以下邏輯 −{adv_loss(yr, ['TW']):g}%")

# Q4：臺灣斷鏈時，整條價值鏈的加權損失
for yr in ("2022", "2019"):
    pub = DATA["sets"][yr]["overallPublished"][REG.index("TW")]
    print(f"Q4[{yr}] 臺灣斷鏈的整條價值鏈加權損失 = {overall(yr, ['TW']):.2f}%（報告「整體」列臺灣 {pub}%）")

# Q5：只剩美國＋盟友（美、歐、日、韓、臺），封裝測試的自給比例
allies = DATA["allies"]
others = [r for r in REG if r not in allies]
for yr in ("2022", "2019"):
    w = DATA["sets"][yr]["weight"]
    for name, gone in (("只剩美國＋盟友（美歐日韓臺）", others), ("只剩中國大陸", [r for r in REG if r != "CN"])):
        kp = {k: keep(yr, gone, k) for k in ACT}
        wk = sum(w[k] * kp[k] for k in ACT) / sum(w.values())
        weakest = min(kp, key=kp.get)
        print(f"Q5[{yr}] {name}：" + "、".join(f"{AZH[k]} {v:g}%" for k, v in kp.items()))
        print(f"        最弱環節 {AZH[weakest]} {kp[weakest]:g}%；整條鏈加權自給 {wk:.1f}%；"
              f"10 奈米以下邏輯自給 {100 - adv_loss(yr, gone):g}%")

# ---------- 檢查：各環節加總、加權結果與報告「整體」列比較
for yr in ("2022", "2019"):
    D = DATA["sets"][yr]
    sums = {k: round(sum(D["share"][k]), 1) for k in ACT}
    print(f"[檢查][{yr}] 各環節占比加總（四捨五入誤差應在 97–102）：{sums}；權重合計 {sum(D['weight'].values())}")
    calc = [overall(yr, [r]) for r in REG]
    print(f"[檢查][{yr}] 加權 vs 報告整體列：" + "、".join(
        f"{ZH[r]} {c:.1f}/{p}" for r, c, p in zip(REG, calc, D["overallPublished"])))
    for r in REG:
        v = {k: D["share"][k][REG.index(r)] for k in ACT}
        m = max(v.values())
        print(f"   {ZH[r]} 占比最大的環節：{'、'.join(AZH[k] for k in ACT if v[k] == m)}（{m:g}%）")
