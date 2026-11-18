"""EP07 練習題答案：良率與晶粒成本（與 sims/yield.html 相同的模型），以及台積電創立時的股權算術。
用法：python3 calc_u07.py

  Poisson 良率           Y = exp(−A·D0)      （A 用 cm²，D0 為每 cm² 缺陷數）
  完整晶粒數             300 mm 晶圓扣 3 mm 邊緣（可用半徑 147 mm），正方形晶粒以晶圓中心為格點原點排版，
                         四角都在可用圓內才算（與 yield.html 的 layout() 逐顆相同）
  每顆好晶片分攤晶圓成本 = 晶圓成本 ÷（完整晶粒數 × Y）
晶圓成本 17,000 美元與 D0 都是教學假設值（同 yield.html 預設），不是任何公司的報價。
台積電創立資本：政府約 48%、飛利浦出資 5,800 萬美元換 27.5%（書中數字）。"""
import math

RU = 147.0


def layout(A):
    s = math.sqrt(A)
    n = math.ceil(RU / s) + 1
    cnt = 0
    for i in range(-n, n):
        for j in range(-n, n):
            x0, y0, x1, y1 = i * s, j * s, i * s + s, j * s + s
            far = max(x0 * x0, x1 * x1) + max(y0 * y0, y1 * y1)
            if far <= RU * RU:
                cnt += 1
    return cnt


def Y(A, D0):
    return math.exp(-(A / 100) * D0)


print(f"Q1 A=100 mm²、D0=0.1/cm²：Y = {Y(100, 0.1)*100:.1f}%")
print(f"Q2 A=600 mm²（大型 AI 晶片量級）、D0=0.1/cm²：Y = {Y(600, 0.1)*100:.1f}%；D0=0.05 時 {Y(600, 0.05)*100:.1f}%")
n100 = layout(100)
good = n100 * Y(100, 0.1)
print(f"Q3 A=100 mm²：完整晶粒 {n100} 顆，期望好晶粒 {good:.1f} 顆，晶圓 $17,000 → 每顆 ${17000/good:.2f}")
n600 = layout(600)
good6 = n600 * Y(600, 0.1)
print(f"[參考] A=600 mm²：完整晶粒 {n600} 顆，好晶粒 {good6:.1f}，每顆 ${17000/good6:.1f}；面積 6 倍、成本 {17000/good6/(17000/good):.1f} 倍")
print(f"Q4 飛利浦 5,800 萬美元換 27.5% → 隱含台積電創立資本 {58/0.275:.0f} 百萬美元；政府 48% ≈ {58/0.275*0.48:.0f} 百萬美元")
# 學習曲線示意：D0 從 0.5 降到 0.1 時 100 mm² 晶片的良率
for d in (0.5, 0.3, 0.1, 0.05):
    print(f"[參考] D0={d}：A=100 mm² 良率 {Y(100, d)*100:.1f}%，每顆 ${17000/(n100*Y(100, d)):.2f}")
