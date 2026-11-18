"""EP11 練習題答案與網頁數字：圍剿華為的時間軸、臺灣封鎖情境估算、晶片荒。
用法：python3 calc_u11.py

情境模型（sims/choke.html 的「臺灣封鎖情境」用同一條式子，屬情境估算、非預測）：
  一年內少掉的新增運算力比例  L = s × max(0, T − b) / 12
  s：臺灣占比（書中 37%＝2019 年邏輯晶片；BCG 2024：2022 年 10 奈米以下先進邏輯產能 69%；全部晶圓產能 18%）
  T：斷供月數；b：下游庫存可撐的月數
來源：
  2019-05-16 生效 華為列入實體清單（84 FR 22961）https://www.govinfo.gov/content/pkg/FR-2019-05-21/html/2019-10616.htm
  2020-05-15 生效 外國直接產品規則（85 FR 29849）https://www.govinfo.gov/content/pkg/FR-2020-05-19/html/2020-10856.htm
  2020-08-17 生效 擴大規則（85 FR 51596）https://www.govinfo.gov/content/pkg/FR-2020-08-20/html/2020-18213.htm
  BCG×SIA 2024 https://www.semiconductors.org/wp-content/uploads/2024/05/Report_Emerging-Resilience-in-the-Semiconductor-Supply-Chain.pdf
"""
from datetime import date


def loss(s, T, b):
    return s * max(0, T - b) / 12


# ---------- Q1 先進邏輯 69%、封鎖 6 個月、庫存撐 2 個月
q1 = loss(0.69, 6, 2)
print(f"Q1 0.69 × (6−2)/12 = {q1:.4f} → 約 {q1*100:.1f}% 的年度先進邏輯產出")
print(f"   對照書中：全年停擺、s=37% → {loss(0.37, 12, 0)*100:.1f}%；s=69% 全年 → {loss(0.69, 12, 0)*100:.1f}%")
for T in (1, 3, 6, 12):
    print(f"   [網頁] s=69%、b=2：T={T:>2} 個月 → {loss(0.69, T, 2)*100:5.1f}%；s=18%：{loss(0.18, T, 2)*100:5.1f}%")

# ---------- Q2 2020-05-15 規則：已投產的晶圓在 9/14 前可出貨，寬限幾天
d0, d1 = date(2020, 5, 15), date(2020, 9, 14)
print(f"Q2 {d0} → {d1} = {(d1 - d0).days} 天")

# ---------- Q3 實體清單上的華為相關實體數
n = 1 + 68      # 2019-05-16：華為＋68 家海外關係企業
n += 46         # 2019-08-19：再加 46 家
print(f"   2019-08 後共 {n} 個華為實體（FR 原文：one hundred and fifteen）")
n += 38         # 2020-08-17：再加 38 家
print(f"Q3 2020-08-17 之後共 {n} 個")

# ---------- Q4 2021 晶片荒：車廠少產 770 萬輛、損失約 2,100 億美元（書中）
per_car = 210e9 / 7.7e6
print(f"Q4 每輛少產的車平均營收損失 = 2100 億 ÷ 770 萬 = {per_car:,.0f} 美元 ≈ {per_car/1e4:.2f} 萬美元")

# ---------- 網頁：產值粗估（僅情境示意）
sales_2025 = 795.6  # 十億美元，SIA 2026
print(f"[網頁] 若以 2025 年全球半導體銷售 {sales_2025} 十億美元 × 18%（臺灣總產能占比）粗估一年停擺：{sales_2025*0.18:.0f} 十億美元")
