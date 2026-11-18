"""EP06 練習題答案：精準打擊的機率（圓概率誤差 CEP）。
用法：python3 calc_u06.py

  落點為圓形常態分布（兩軸獨立、標準差 σ），CEP＝一半落點所在圓的半徑：CEP = σ·√(2 ln 2)
  單發落在半徑 R 目標內的機率   P = 1 − 0.5^((R/CEP)^2)
  達到 90% 摧毀率所需發數      n = ceil( ln(0.1) / ln(1 − P) )   （教學假設：命中一發即摧毀）
CEP 來源：John T. Correll〈The Emergence of Smart Bombs〉Air Force Magazine 2010-03
  二戰 1943 年轟炸機 1,200 ft；越戰初期無導引炸彈 420 ft（書中亦引此數）；
  鋪路 Mk 84 雷射導引炸彈越戰實測平均 20 ft；波灣戰爭精準彈藥平均 10 ft。
最後一段是蒙地卡羅驗證（與 sims/offset.html 相同的模型）。"""
import math
import random

FT = 0.3048


def p_hit(R, cep):
    return 1 - 0.5 ** ((R / cep) ** 2)


def n90(P):
    if P >= 1:
        return 1
    return math.ceil(math.log(0.1) / math.log(1 - P))


R = 15.0  # 目標半徑 15 m（例如一座橋墩或一棟建築）
cases = [("二戰 1943 轟炸機", 1200), ("越戰初期無導引", 420), ("鋪路 Mk84 越戰實測", 20), ("波灣戰爭精準彈藥", 10)]
for name, ft in cases:
    cep = ft * FT
    P = p_hit(R, cep)
    print(f"{name:14s} CEP {ft:5d} ft = {cep:6.1f} m → 單發命中 {P*100:7.3f}%，90% 摧毀需 {n90(P):6d} 發")

cep_v = 420 * FT
Pv = p_hit(R, cep_v)
print(f"Q1 越戰無導引、R=15 m：P = {Pv*100:.2f}%，n90 = {n90(Pv)}")
cep_l = 20 * FT
Pl = p_hit(R, cep_l)
print(f"[參考] 鋪路 Mk84（CEP 20 ft）、R=15 m：P = {Pl*100:.1f}%，n90 = {n90(Pl)}")
Pt = p_hit(3.0, cep_l)
Pt_v = p_hit(3.0, cep_v)
print(f"Q2 卡車大小目標 R=3 m：鋪路（CEP 20 ft）P = {Pt*100:.1f}%，n90 = {n90(Pt)}；無導引 n90 = {n90(Pt_v)}")
cep_w = 1200 * FT
Pw = p_hit(R, cep_w)
print(f"Q3 二戰 1943（CEP 1,200 ft）、R=15 m：n90 = {n90(Pw)}")

# Q4：書中 MX（CEP 364 ft）vs SS-25（平均偏差約 1,200 ft，口徑不完全相同，這裡當成 CEP 做教學比較）
Rf = 150 * FT
pm, ps = p_hit(Rf, 364 * FT), p_hit(Rf, 1200 * FT)
print(f"Q4 目標半徑 150 ft：MX P={pm*100:.2f}%，SS-25 P={ps*100:.2f}%，比值 = {pm/ps:.2f}（小 R 近似 (1200/364)^2 = {(1200/364)**2:.2f}）")

# 經典表格的目標 60×100 ft → 等面積圓半徑
Req = math.sqrt(60 * 100 / math.pi) * FT
print(f"[參考] 60×100 ft 目標等面積半徑 {Req:.1f} m；越戰無導引 n90 = {n90(p_hit(Req, cep_v))}，二戰 1943 n90 = {n90(p_hit(Req, cep_w))}")

# 蒙地卡羅驗證
rng = random.Random(6)
sig = cep_v / math.sqrt(2 * math.log(2))
N = 200000
hits = sum(1 for _ in range(N) if math.hypot(rng.gauss(0, sig), rng.gauss(0, sig)) <= R)
half = sum(1 for _ in range(N) if math.hypot(rng.gauss(0, sig), rng.gauss(0, sig)) <= cep_v)
print(f"[驗證] 蒙地卡羅 {N} 發：R=15 m 命中率 {hits/N*100:.3f}%（理論 {Pv*100:.3f}%）；落在 CEP 內比例 {half/N:.3f}（理論 0.500）")
