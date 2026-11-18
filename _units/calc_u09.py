"""EP09 練習題答案：設計和製造分家的算術（與 sims/fabless.html 相同的模型）。
用法：python3 calc_u09.py

一年為單位：
  每片晶圓毛晶粒數   DPW = floor( π·150²/A − π·300/√(2A) )   （300 mm 晶圓常用近似式，A 用 mm²）
  每片好晶粒         g = DPW · Y
  需要的晶圓         w = Q / g                               （Q＝年出貨量）
  自建晶圓廠         需要 k = max(1, ceil(w / (12·W))) 座廠（W＝每座每月產能）
                     年成本 = NRE + RD + k·F/N + v·w
  委外代工           代工廠把一座廠的折舊攤給很多客戶，稼動率 u＝90%：
                     每片成本 = F/N/(12·W·u) + v；晶圓報價 P_w = 每片成本 /(1 − 毛利率)
                     年成本 = NRE + P_w·w
  損益兩平           售價·Q = 年成本
預設值：F＝280 億美元（IBS 估計 2 奈米、月產 5 萬片晶圓廠，2023，Tom's Hardware 報導）；
NRE＝7.25 億美元（IBS 估計大型 2 奈米晶片設計費，Tom's Hardware 報導）；
其餘（折舊 5 年、良率 80%、變動成本 4,000 美元／片、自有製程研發 40 億美元／年、代工毛利率 50%、
售價 80 美元、年出貨 1 億顆、晶粒 100 mm²）皆為教學假設值。"""
import math

F, N, W = 28e9, 5, 50000
A, Y, v = 100, 0.80, 4000
NRE, RD, gm, u = 0.725e9, 4e9, 0.50, 0.90
price, Q = 80, 100e6


def dpw(a):
    return math.floor(math.pi * 150**2 / a - math.pi * 300 / math.sqrt(2 * a))


g = dpw(A) * Y
dep_full = F / N / (12 * W)
cost_w = F / N / (12 * W * u) + v
Pw = cost_w / (1 - gm)


def own_cost(q):
    w = q / g
    k = max(1, math.ceil(w / (12 * W)))
    return NRE + RD + k * F / N + v * w, k


def fdy_cost(q):
    return NRE + Pw * q / g


print(f"毛晶粒 {dpw(A)}，好晶粒 {g:.1f} 顆／片")
print(f"Q1 每年折舊 {F/N/1e8:.0f} 億美元；滿載時每片晶圓分攤 ${dep_full:,.0f}")
print(f"Q2 代工晶圓報價 P_w = ({F/N/(12*W*u):,.0f} + {v}) / (1−{gm}) = ${Pw:,.0f}（媒體引述 2 奈米約 3 萬美元／片）")
q_be_f = NRE / (price - Pw / g)
print(f"Q3 委外代工損益兩平：NRE/(售價 − P_w/g) = {q_be_f/1e6:.1f} 百萬顆")
oc, k = own_cost(Q)
print(f"   出貨 1 億顆：自建每顆 ${oc/Q:.1f}（{k} 座廠、用掉產能 {Q/g/(12*W)*100:.0f}%），代工每顆 ${fdy_cost(Q)/Q:.1f}")
# 自建與代工成本相等的出貨量（同一座廠內）
w_x = (RD + F / N) / (Pw - v)
q_x = w_x * g
print(f"Q4 自建＝代工的出貨量：w = (RD+F/N)/(P_w−v) = {w_x:,.0f} 片／年 → {q_x/1e6:.0f} 百萬顆（占一座廠產能 {w_x/(12*W)*100:.0f}%）")
# 自建損益兩平（數值掃描）
q = 1e6
while q < 5e9:
    c, _ = own_cost(q)
    if price * q >= c:
        break
    q *= 1.001
print(f"[參考] 自建晶圓廠損益兩平約 {q/1e6:.0f} 百萬顆")
# 書中數字：1990 年代建廠逾 1 億美元 vs 無晶圓廠新創數百萬美元；NVIDIA CUDA 至 2017 至少 100 億美元
print(f"[參考] 280 億美元 ÷ 1 億美元 = {28e9/1e8:.0f} 倍（2023 估計 vs 書中 1990 年代）")
