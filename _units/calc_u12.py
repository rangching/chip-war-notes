"""EP12 練習題答案與網頁數字：出口管制的 TPP 與性能密度。
用法：python3 calc_u12.py

定義（ECCN 3A090 技術註解，2023-10-25 聯邦公報 88 FR 73458）：
  TPP = 2 × MacTOPS × 運算位元長度；2×MacTOPS 可對應規格表上的 TOPS／TFLOPS（不計稀疏加速）
  性能密度 PD = TPP ÷ 適用晶粒面積（mm²）
  https://www.govinfo.gov/content/pkg/FR-2023-10-25/html/2023-23055.htm
門檻：
  2022-10（87 FR 62186）：bits×TOPS ≥ 4800 且 晶片對外雙向傳輸率 ≥ 600 GB/s
  2023-10：3A090.a  TPP ≥ 4800；或 TPP ≥ 1600 且 PD ≥ 5.92
           3A090.b  2400 ≤ TPP < 4800 且 1.6 ≤ PD < 5.92；或 TPP ≥ 1600 且 3.2 ≤ PD < 5.92
  2026-11-16 遠端算力規則：1,200 萬 TPP（TechCrunch 2026-11-16）
晶片規格（不含稀疏）：
  A100 FP16 312 TFLOPS、826 mm²、NVLink 600 GB/s（NVIDIA Ampere 技術部落格）
  H100 SXM FP16 989.5／FP8 1,979 TFLOPS、814 mm²、NVLink 900 GB/s（NVIDIA Hopper 技術部落格、資料表）
  H200 運算同 H100（IFP 2025-12）；H20 FP8 296 TFLOPS（IFP 2025-12），晶粒面積假設同 GH100
  RTX 4090 FP8 660.6 TFLOPS、AD102 608.5 mm²（NVIDIA Ada 白皮書；非資料中心產品）
"""

CHIPS = [  # 名稱, 稠密 TFLOPS(或 TOPS), 位元, 晶粒 mm², 互連 GB/s, 資料中心用
    ("A100", 312, 16, 826, 600, True),
    ("A800", 312, 16, 826, 400, True),
    ("H100 SXM", 1979, 8, 814, 900, True),
    ("H800", 1979, 8, 814, 400, True),
    ("H20", 296, 8, 814, 900, True),
    ("H200", 1979, 8, 814, 900, True),
    ("RTX 4090", 660.6, 8, 608.5, 64, False),
]


def tpp(tops, bits):
    return tops * bits  # 規格表 TOPS 已是 2×MacTOPS


def rule2022(T, io):
    return T >= 4800 and io >= 600


def rule2023(T, pd):
    if T >= 4800 or (T >= 1600 and pd >= 5.92):
        return "3A090.a"
    if (2400 <= T < 4800 and 1.6 <= pd < 5.92) or (T >= 1600 and 3.2 <= pd < 5.92):
        return "3A090.b"
    return "未達門檻"


for n, tops, bits, area, io, dc in CHIPS:
    T = tpp(tops, bits); pd = T / area
    print(f"[網頁] {n:9s} TPP={T:8.0f}  PD={pd:5.2f}  2022:{'管制' if rule2022(T, io) else '不管'}  2023:{rule2023(T, pd)}  12M TPP≈{12e6/T:6.0f} 顆")

# ---------- Q1 H100：FP16 稠密 989.5 TFLOPS
print(f"Q1 H100 TPP = 989.5 × 16 = {tpp(989.5, 16):.0f}（FP8：1979 × 8 = {tpp(1979, 8):.0f}）")
# ---------- Q2 H20 性能密度
t20 = tpp(296, 8)
print(f"Q2 H20 TPP = 296×8 = {t20}；PD = {t20}/814 = {t20/814:.2f}（< 3.2 且 TPP < 2400 → 兩條都沒碰到）")
# ---------- Q3 1,200 萬 TPP 約等於幾顆 H100
print(f"Q3 12,000,000 ÷ {tpp(1979, 8)} = {12e6/tpp(1979, 8):.1f} 顆（報導：約 750 顆）")
# ---------- Q4 A100 性能密度
print(f"Q4 A100 PD = {tpp(312, 16)}/826 = {tpp(312, 16)/826:.2f}（≥ 5.92，且 TPP ≥ 4800）")
# ---------- 網頁：NVIDIA FY2026 資料中心占比
print(f"[網頁] NVIDIA FY2026 資料中心營收占比 = 1937/2159 = {1937/2159*100:.1f}%")
