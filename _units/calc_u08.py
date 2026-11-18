"""EP08 練習題答案：光刻解析度（Rayleigh 準則）與 EUV 反射鏡的能量損失。
用法：python3 calc_u08.py

  最小半週期（線寬）      CD = k1 · λ / NA
  sims/litho.html 的模型：50% 工作週期光柵，同調照明可印最小週期 p = λ/NA，
                         偶極離軸照明 p ≈ λ/(1.9·NA)（k1 = p/2·NA/λ 理論下限 0.25）
  多面反射鏡總穿透率      T = r^m      （每面反射率 r，共 m 面）
數值來源：ASML 官網 EUV 13.5 nm、NXE NA 0.33（約 13 nm）、EXE NA 0.55（約 8 nm）；
鉬／矽多層膜單面反射率約 70%（Fraunhofer IWS 2015）。光路 10 面鏡為教學假設。"""
cases = [("ArF 浸潤式", 193, 1.35, 0.28), ("EUV NXE", 13.5, 0.33, 0.30), ("High-NA EXE", 13.5, 0.55, 0.30)]
for i, (n, lam, na, k1) in enumerate(cases, 1):
    print(f"Q{i} {n}：λ={lam} nm、NA={na}、k1={k1} → CD = {k1*lam/na:.1f} nm")
r, m = 0.70, 10
print(f"Q4 每面反射率 {r:.0%}、{m} 面：剩下 {r**m*100:.2f}%（約 1/{1/r**m:.0f}）")
print(f"[參考] 反射率提高到 0.7075（Fraunhofer／Zeiss 紀錄）：剩 {0.7075**m*100:.2f}%")
# litho.html 預設 193 nm、NA 1.35、偶極照明的最小週期
print(f"[參考] litho.html：ArF 浸潤式偶極照明最小週期 ≈ {193/(1.9*1.35):.1f} nm（半週期 {193/(1.9*1.35)/2:.1f} nm）；同調 {193/1.35:.1f} nm")
print(f"[參考] EUV 偶極最小週期 ≈ {13.5/(1.9*0.33):.1f} nm；High-NA ≈ {13.5/(1.9*0.55):.1f} nm")
print(f"[參考] 打錫每秒 5 萬次 → 每小時 {50000*3600:,} 次；每天 {50000*86400:,} 次")
print(f"[參考] 波長比：193/13.5 = {193/13.5:.1f} 倍")
