"""EP02 練習題答案：真空管的可靠度、阿波羅晶片的故障率、義勇兵的重量比、加法器的電晶體數。
用法：python3 calc_u02.py

  系統的平均故障間隔   MTBF_系統 = MTBF_元件 / N   （N 個元件串聯、任何一個壞掉系統就停）
數字來源：書中（Miller 2022）ENIAC 18,000 支真空管、平均每兩天壞一支（1945）；
阿波羅晶片累計 1,900 萬小時僅 2 次故障（諾伊斯，1964）；義勇兵二型 95% 功能在 2.2 盎司晶片、其餘 5% 重 36 磅；
4 位元加法器 = 4 個全加器 × 9 個 NAND × 4 顆電晶體（本站 switch.html 的實作）。"""

# ---------- Q1 ENIAC：18,000 支真空管，系統平均每 2 天壞一支 → 單支真空管的平均壽命
N, sys_days = 18_000, 2
tube_days = N * sys_days
print(f"Q1 單支真空管 MTBF = {N} x {sys_days} 天 = {tube_days} 天 = {tube_days/365.25:.1f} 年")
# 反過來：如果要用 100 萬支同樣的真空管，系統多久壞一次？
print(f"   對照：100 萬支同品質真空管 → 每 {tube_days/1e6*24:.2f} 小時壞一支")

# ---------- Q2 阿波羅晶片：1,900 萬小時、2 次故障 → 平均每顆晶片多少小時壞一次
hours, fails = 19_000_000, 2
mtbf_chip = hours / fails
print(f"Q2 晶片 MTBF = {hours:,} / {fails} = {mtbf_chip:,.0f} 小時 = {mtbf_chip/8766:.0f} 年")
# 一台用約 4,000 顆晶片的導航電腦（CHM：每台約 4,000 個 Type-G 電路）
n_agc = 4000
print(f"   4,000 顆組成的電腦：每 {mtbf_chip/n_agc:,.0f} 小時（約 {mtbf_chip/n_agc/24:.0f} 天）才壞一顆")

# ---------- Q3 義勇兵二型：36 磅 ÷ 2.2 盎司
lb_to_oz = 16
ratio = 36 * lb_to_oz / 2.2
print(f"Q3 其餘 5% 功能的硬體重量是晶片的 {ratio:.1f} 倍（36 磅 = {36*lb_to_oz} 盎司）")

# ---------- Q4 4 位元加法器的電晶體數
per_nand, nand_per_fa, bits = 4, 9, 4
print(f"Q4 4 位元加法器 = {bits} x {nand_per_fa} x {per_nand} = {bits*nand_per_fa*per_nand} 顆電晶體")
print(f"   32 位元：{32*nand_per_fa*per_nand} 顆；A17 Pro 190 億顆約可放 {19e9/(32*nand_per_fa*per_nand):,.0f} 個 32 位元加法器（僅比例示意）")

# ---------- 網頁用：快捷營收、晶片價格
print(f"[頁面] 快捷營收 50 萬 → 2,100 萬美元（1958→1960）= {21e6/0.5e6:.0f} 倍")
print(f"[頁面] 快捷晶片 120 → 15 美元（1961-12→1962-10）跌 {1-15/120:.1%}")
print(f"[頁面] ENIAC 18,000 支真空管 vs A17 Pro 190 億電晶體（2023）= {19e9/18000:,.0f} 倍")
