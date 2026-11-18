{
  no: 12, id: "u12", phase: 5, tier: "Tier 3｜經濟與權力",
  title: "2022 之後：AI 晶片與新的戰線",
  hook: "書出版兩年後，一家做遊戲顯示卡的公司成了全世界市值最高的企業。晶片戰爭打到哪裡了？",
  tags: "出口管制、TPP、性能密度、ECCN 3A090、NVIDIA、H20、H200、HBM、CoWoS、CHIPS 法案、遠端算力規則、Mate 60",
  status: "planned", estDur: "約 15 分", segWord: "小節",
  sections: [
    { t: 0, title: "顯示卡公司登上世界第一" },
    { t: 110, title: "第一輪全面管制" },
    { t: 220, title: "TPP：管制是怎麼算的" },
    { t: 335, title: "降規晶片與 HBM" },
    { t: 450, title: "政策反覆與關稅" },
    { t: 565, title: "中國的回應" },
    { t: 680, title: "補助、入股與海外廠" },
    { t: 790, title: "最新動態與全系列回看" }
  ],
  formula: R`\mathrm{TPP}=2\times\mathrm{MacTOPS}\times L_{\text{bit}},\qquad \mathrm{PD}=\frac{\mathrm{TPP}}{A_{\text{die}}\ (\mathrm{mm^2})}`,
  pre: [
    { q: "美國要限制「先進 AI 晶片」出口，但「先進」要怎麼寫成法律？只寫型號（例如 H100）可以嗎？",
      a: "不行，換個名字、改一點規格就能繞過。所以美國商務部用一個可以計算的數字：總處理效能 TPP＝每秒運算次數×運算的位元長度，再加上 TPP 除以晶粒面積的「性能密度」。超過門檻就要許可，不管晶片叫什麼名字。" },
    { q: "2022 年的規則一公布，NVIDIA 就推出給中國的 A800、H800。它們怎麼合法出貨？後來為什麼又不行？",
      a: "2022 年的規則要同時滿足「算力 ≥ 4800」和「晶片對外傳輸率 ≥ 600 GB/s」才管，NVIDIA 把傳輸率降到門檻以下就能出貨。2023 年 10 月的新規則拿掉傳輸率條件、改看算力與性能密度，A800、H800 就被涵蓋了。之後的 H20 則是把算力本身大砍。" },
    { q: "書中認為美國握有咽喉點、中國很難追上。2022 年之後，哪些事情支持這個判斷？哪些在挑戰它？",
      a: "支持：中國先進晶片產量估計只有臺灣的 2～3%，仍缺 ASML 的 EUV；NVIDIA 晶片仍由台積電製造。挑戰：2023 年華為 Mate 60 Pro 用上中芯 7 奈米級晶片，中國 AI 模型也追近；美國政策本身在禁售、分成、關稅之間來回擺盪。" }
  ],
  terms: [
    { zh: "總處理效能（TPP）", en: "total processing performance", m: "\\mathrm{TPP}=2\\,\\mathrm{MacTOPS}\\times L", d: "ECCN 3A090 的管制指標：乘積累加運算的理論峰值（每秒兆次）乘 2，再乘輸入的位元長度，全晶片加總。" },
    { zh: "性能密度", en: "performance density", m: "\\mathrm{PD}=\\mathrm{TPP}/A", d: "TPP 除以邏輯晶粒的面積（平方公釐）；2023 年起用來抓「小而強」的晶片。" },
    { zh: "乘積累加", en: "multiply-accumulate (MAC)", m: "D=A\\times B+C", d: "AI 運算最基本的一步；業界把一次 MAC 算成 2 次運算，所以規格表的 TOPS 約等於 2×MacTOPS。" },
    { zh: "ECCN 3A090", en: "Export Control Classification Number 3A090", m: "", d: "美國《出口管理規則》商業管制清單中，先進運算積體電路的分類代碼，2022-10 新增、2023-10 改寫。" },
    { zh: "高頻寬記憶體", en: "high bandwidth memory (HBM)", m: "", d: "把多層 DRAM 垂直堆疊、緊貼 GPU 的記憶體；2024-12 起也列入美國管制。" },
    { zh: "CoWoS 先進封裝", en: "Chip on Wafer on Substrate", m: "", d: "台積電把 GPU 與 HBM 並排封裝在中介層上的技術，是 AI 晶片產能的瓶頸之一。" },
    { zh: "AI 擴散規則", en: "AI Diffusion Rule", m: "", d: "拜登政府 2025-01 公布、把全球分三級限制 AI 晶片配額的規則；川普政府 2025-05 宣布撤回，2026-11 正式撤銷。" },
    { zh: "遠端算力規則", en: "remote compute rule", m: "", d: "2026-11-16 暫行最終規則：出口 AI 晶片到可能替受限國家提供算力的資料中心需許可，門檻 1,200 萬 TPP。" },
    { zh: "232 條款關稅", en: "Section 232 tariff", m: "", d: "美國以國家安全為由課徵的關稅；2026-01 起對部分先進運算晶片課 25%。" },
    { zh: "晶片與科學法", en: "CHIPS and Science Act", m: "", d: "2022-08 簽署，390 億美元製造補助加投資稅額抵減；2025 年起部分補助改為換取股權。" },
    { zh: "環繞式閘極", en: "gate-all-around (GAA)", m: "", d: "閘極四面包住通道的電晶體結構；三星 3 奈米、台積電 N2、英特爾 18A 都採用。" }
  ],
  practice: {
    intro: R`依 ECCN 3A090 技術註解：規格表上的 TOPS／TFLOPS（不含稀疏加速）已是 $2\times\mathrm{MacTOPS}$，所以 $\mathrm{TPP}=\text{TOPS}\times\text{位元長度}$；$\mathrm{PD}=\mathrm{TPP}/\text{晶粒面積}$。2023-10 門檻：$\mathrm{TPP}\ge4800$，或 $\mathrm{TPP}\ge1600$ 且 $\mathrm{PD}\ge5.92$。`,
    items: [
      { q: R`H100 SXM 的 FP16 稠密運算約 989.5 TFLOPS。它的 TPP 是多少？`,
        a: 15832, tol: 2,
        hint: R`$989.5\times16$。用 FP8：$1979\times8$，結果相同，約是 4800 門檻的 3.3 倍。` },
      { q: R`H20 的 FP8 稠密運算約 296 TFLOPS；若晶粒面積與 H100 相同（814 mm²），性能密度是多少？（取到小數點後兩位）`,
        a: 2.91, tol: 0.02,
        hint: R`$\mathrm{TPP}=296\times8=2368$，$2368/814$。TPP 低於 2400、PD 低於 3.2，剛好避開 2023 年的兩條門檻。` },
      { q: R`2026-11 的遠端算力規則門檻是 1,200 萬 TPP。這大約等於幾顆 H100（TPP 15,832）？（取整數）`,
        a: 758, tol: 2,
        hint: R`$12{,}000{,}000\div15{,}832$。報導說「約 750 顆 H100／H200」。` },
      { q: R`A100 的 FP16 稠密運算 312 TFLOPS、晶粒 826 mm²。它的性能密度是多少？（取到小數點後兩位）`,
        a: 6.04, tol: 0.02,
        hint: R`$\mathrm{TPP}=312\times16=4992$，$4992/826$。TPP 與 PD 都超過門檻，A800 降低傳輸率也躲不掉 2023 年的規則。` }
    ]
  },
  notes: [
    { h: "〔一句話記住〕",
      b: "AI 讓「算力就是國力」從比喻變成現實：管制從卡設備、卡晶片一路延伸到卡記憶體與遠端算力，規則卻在禁售、分成與關稅之間來回擺盪；書中的咽喉點仍在，但戰線比書出版時長得多。" },
    { h: "〔重點一〕管制的五個階段",
      b: `<ol>
<li><b>2022-10-07 第一輪：</b>限制先進 AI 晶片與先進製程設備輸往中國，並限制美國人員支援中國先進晶圓廠。晶片門檻是「bits×TOPS ≥ 4800 且雙向傳輸率 ≥ 600 GB/s」。<a href="https://www.govinfo.gov/content/pkg/FR-2022-10-13/html/2022-21658.htm" target="_blank" rel="noopener">87 FR 62186</a></li>
<li><b>2023-10-17 第二輪：</b>拿掉傳輸率條件、改用 TPP 與性能密度，堵住 A800、H800 這類降規晶片；荷蘭、日本也跟進管制設備。<a href="https://www.govinfo.gov/content/pkg/FR-2023-10-25/html/2023-23055.htm" target="_blank" rel="noopener">88 FR 73458</a></li>
<li><b>2024-12-02 第三輪：</b>新增 HBM 管制、更多設備與軟體，140 個實體列入清單。<a href="https://www.wilmerhale.com/en/insights/client-alerts/20241206-bis-issues-sweeping-additional-restrictions-on-semiconductors-and-advanced-computing-entity-list-designations" target="_blank" rel="noopener">WilmerHale</a></li>
<li><b>2025 擺盪：</b>2025-01 公布 AI 擴散規則、05 宣布撤回；H20 在 04 改為需許可（NVIDIA 提列約 55 億美元費用）、08 以 15% 營收分成恢復；12 月宣布允許 H200、美方收 25%；2026-01 改為逐案審查並課 25% 的 232 條款關稅。<a href="https://www.govinfo.gov/content/pkg/FR-2026-01-15/html/2026-00789.htm" target="_blank" rel="noopener">聯邦公報 2026-01-15</a></li>
<li><b>2026-11-16 遠端算力規則：</b>出口 AI 晶片到可能替中國等受限國家提供算力的資料中心需許可，門檻 1,200 萬 TPP（約 750 顆 H100／H200），並正式撤銷 AI 擴散規則。<a href="https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/" target="_blank" rel="noopener">TechCrunch</a></li>
</ol>` },
    { h: "〔重點二〕為什麼有 A800、H800、H20？",
      b: "每一輪門檻都是一條可以計算的線，晶片公司就設計剛好落在線下的產品。2022 年的線要同時看算力與傳輸率，所以 A800、H800 只降傳輸率；2023 年改看 TPP 與性能密度，這兩顆就被涵蓋。H20 把 FP8 算力砍到約 296 TFLOPS（TPP 2,368），比 H100 的 15,832 低了約 85%，才落在線下。這也說明出口管制是「貓抓老鼠」：規則必須不斷更新，米勒 2023 年就這麼說。" },
    { h: "〔重點三〕供應鏈的重新布局",
      b: `<ul>
<li><b>美國：</b>晶片與科學法 2022-08 簽署；台積電補助 66 億美元（2024-11 定案），2025-03 宣布在美總投資擬達 1,650 億美元。2025-08 美國政府以補助款換取英特爾 9.9% 股權，之後軟銀、NVIDIA 也入股英特爾。<a href="https://pr.tsmc.com/english/news/3210" target="_blank" rel="noopener">台積電新聞稿</a></li>
<li><b>臺灣：</b>台積電 2 奈米 2025 年第四季量產，首次採用 GAA 奈米片電晶體；2026 年第三季 7 奈米以下占晶圓營收 79%。<a href="https://focustaiwan.tw/sci-tech/202512300026" target="_blank" rel="noopener">中央社</a></li>
<li><b>中國：</b>2023 年 Mate 60 Pro 的中芯 7 奈米級晶片；2024-05 大基金三期 3,440 億人民幣；2025-12 路透報導深圳 EUV 原型機能產生 EUV 光但尚未量產晶片。另以稀土管制、調查 NVIDIA、要求企業勿購 NVIDIA 中國特規卡反制。</li>
</ul>` },
    { h: "〔今天的數字〕",
      b: `<ul>
<li><b>NVIDIA：</b>書中（約 2021）的 NVIDIA 是 GPU 設計公司、AI 晶片新秀；2025-10-29 成為全球第一家市值 5 兆美元公司（<a href="https://www.news4jax.com/news/2025/10/29/nvidia-has-started-the-5-trillion-club-a-look-at-its-rise-by-the-numbers/" target="_blank" rel="noopener">AP</a>）；FY2026 營收 2,159 億美元，資料中心占約 89.7%。</li>
<li><b>最大 AI 晶片：</b>H100（2022）800 億個電晶體 → Rubin（2026）3,360 億個，台積電 3 奈米、288 GB HBM4（<a href="https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/" target="_blank" rel="noopener">NVIDIA</a>）。</li>
<li><b>HBM 市占（Counterpoint）：</b>2026 年第二季 SK 海力士 50%、三星 33%、美光 18%（<a href="https://counterpointresearch.com/insights/global-dram-and-hbm-market-share" target="_blank" rel="noopener">Counterpoint</a>）。</li>
<li><b>人事：</b>2026-11-12 黃仁勳辭去 NVIDIA 執行長，財務長 Colette Kress 代理執行長，Harvey C. Jones 出任董事長（<a href="https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" target="_blank" rel="noopener">NVIDIA 新聞稿</a>）。11-17 媒體報導 NVIDIA 停售 H200 給中國（二手轉述）。</li>
<li><b>尚未確定：</b>2026-11 川習深圳會談的晶片議題結果、美國「50% 關係企業規則」暫停期（至 2026-11-09）與中國稀土管制暫停期（至 2026-11-10）到期後是否延長，截至 2026-11-18 尚未確定。</li>
</ul>` },
    { h: "〔書評回看〕哪些應驗、哪些受到挑戰",
      b: `<ul>
<li><b>應驗：</b>書出版後幾天，美國就宣布 2022-10 的全面管制；「算力決定國力」在 AI 熱潮下更加明顯，米勒 2026 年說幾乎所有 AI 加速器都由台積電製造，中國先進晶片產量約只有臺灣的 2～3%（<a href="https://www.revueconflits.com/?p=60577" target="_blank" rel="noopener">Revue Conflits</a>）。書中預估中國 2030 年占全球晶圓產能 24%，依 BCG 口徑 2022 年已達 24%。</li>
<li><b>受到挑戰：</b>Mate 60 Pro 顯示中國在沒有 EUV 下做出 7 奈米級；米勒 2025 年承認管制沒擋住中國 AI 模型追近，效果更多落在「大規模部署」（<a href="https://newsletter.ai-frontiers.org/p/how-us-export-controls-have-and-havent" target="_blank" rel="noopener">AI Frontiers</a>）；H20 先禁後放，顯示管制政策本身不穩定。</li>
<li><b>書中較少談的：</b>The Chip Letter 指出書中對軟體（CUDA）著墨不足，而 NVIDIA 的護城河正有一大塊是軟體生態系。</li>
</ul>` },
    { h: "〔不同觀點〕",
      b: `<ul>
<li><b>管制有效嗎？</b>米勒 2026 年認為出口管制顯著改變了競賽，否則中國可能已是 AI 領先者（<a href="https://www.cmu.edu/cmist/news-archive/news/2026/march/chips-and-chokepoints-chris-miller-on-the-geopolitics-of-the-ai-supply-chain.html" target="_blank" rel="noopener">CMU 講座</a>）；Eichengreen 則提醒管制可能刺激中國加碼自主（<a href="https://www.foreignaffairs.com/reviews/chip-war-fight-worlds-most-critical-technology" target="_blank" rel="noopener">Foreign Affairs</a>）。</li>
<li><b>晶片還是設備？</b>RAND 的 Lennart Heim 與米勒討論：HBM 與製程設備是否比 NVIDIA 晶片本身更關鍵（<a href="https://a16z.com/podcast/h20s-to-china-15-with-chris-miller-and-lennart-heim/" target="_blank" rel="noopener">ChinaTalk／a16z</a>）。</li>
<li><b>矽盾與產能外移：</b>美國商務部長盧特尼克 2025 年提「50-50」產能對分，認為產能平衡才讓臺灣更安全，臺灣拒絕；在野黨則擔心海外投資掏空矽盾（<a href="https://iconnect007.com/article/147171/taiwan-rejects-us-proposal-for-5050-semiconductor-production-split/147168/ein" target="_blank" rel="noopener">I-Connect007</a>）。</li>
</ul>` },
    { h: "〔延伸閱讀〕",
      b: `<ul>
<li><a href="https://www.govinfo.gov/content/pkg/FR-2023-10-25/html/2023-23055.htm" target="_blank" rel="noopener">聯邦公報 88 FR 73458（2023-10）</a>：ECCN 3A090 與 TPP、性能密度的官方定義。</li>
<li><a href="https://ifp.org/should-the-us-sell-hopper-chips-to-china/" target="_blank" rel="noopener">IFP：美國該不該賣 Hopper 晶片給中國？（2025-12）</a></li>
<li><a href="https://www.semiconductors.org/wp-content/uploads/2024/05/Report_Emerging-Resilience-in-the-Semiconductor-Supply-Chain.pdf" target="_blank" rel="noopener">BCG×SIA：Emerging Resilience（2024）</a></li>
<li><a href="https://www.gmfus.org/news/chip-wars-revisited-geoeconomics-security-taiwan-and-global-tech-battle" target="_blank" rel="noopener">GMF：Chip Wars Revisited（2026-01）</a></li>
</ul>` }
  ],
  quiz: [
    { q: "依 ECCN 3A090 的技術註解，TPP 怎麼算？",
      o: ["電晶體數 × 時脈", "2 × MacTOPS × 運算的位元長度", "記憶體容量 × 頻寬", "晶粒面積 × 製程奈米數"],
      a: 1, w: "MacTOPS 是每秒兆次乘積累加的理論峰值；業界把一次 MAC 算 2 次運算，所以規格表的 TOPS×位元長度就是 TPP。" },
    { q: "2023-10 的新規則為什麼能涵蓋 A800、H800？",
      o: ["因為它們改用了 EUV 製程", "因為新規則改看記憶體容量", "因為新規則拿掉「傳輸率 ≥ 600 GB/s」條件，改看 TPP 與性能密度", "因為 NVIDIA 主動申報"],
      a: 2, w: "A800、H800 只把晶片對外傳輸率降到 600 GB/s 以下，算力沒變；新規則不再看傳輸率，就被涵蓋。" },
    { q: "H20 能在 2023 年規則下出貨，主要因為？",
      o: ["TPP 約 2,368、性能密度約 2.9，兩項都落在門檻以下", "它是在中國製造的", "它不含任何美國技術", "它的晶粒面積比 H100 小一半"],
      a: 0, w: "H20 把算力大砍到 H100 的約 15%；2025-04 美國改為要求許可，之後又反覆。" },
    { q: "2026-11-16 遠端算力規則的門檻 1,200 萬 TPP，大約相當於？",
      o: ["約 7.5 顆 H100", "約 7,500 顆 H100", "約 75,000 顆 A100", "約 750 顆 H100／H200"],
      a: 3, w: "$12{,}000{,}000\\div15{,}832\\approx758$。" },
    { q: "2023-09 華為 Mate 60 Pro 拆解的意義是？",
      o: ["證明中國已量產 EUV 光刻機", "證明中芯能在沒有 EUV 下做出 7 奈米級晶片", "證明台積電仍在替華為代工", "證明出口管制完全無效"],
      a: 1, w: "TechInsights 量測確認中芯 7 奈米級（N+2）；但產量、良率與成本是另一回事，作者估計中國先進晶片產量只有臺灣的 2～3%。" },
    { q: "2025-08 美國政府入股英特爾 9.9%，資金主要來自？",
      o: ["英特爾發行的新債券", "國防部採購合約", "尚未撥付的晶片與科學法補助等款項", "外國政府的捐款"],
      a: 2, w: "以 57 億美元未撥付的補助加 32 億美元安全飛地計畫款，共 89 億美元換股，無董事席位。" },
    { q: "關於 2026-11 的情勢，下列敘述何者正確？",
      o: ["川習深圳會談已確定全面解除晶片管制", "黃仁勳辭去 NVIDIA 執行長，由財務長 Colette Kress 代理", "AI 擴散規則已於 2026-11 恢復實施", "中國已宣布永久取消稀土管制"],
      a: 1, w: "人事變動見 NVIDIA 新聞稿；深圳會談與各項暫停措施到期後的結果，截至 2026-11-18 尚未確定；AI 擴散規則在 2026-11 被正式撤銷。" },
    { q: "書評回看本書，下列哪一項屬於「受到挑戰」的判斷？",
      o: ["晶片是地緣政治的戰略資源", "臺灣在先進製造中的地位無可取代", "美國很快就會實施全面出口管制", "卡住先進晶片就能讓中國的 AI 模型明顯落後"],
      a: 3, w: "米勒 2025 年自己承認：管制削弱了中國的晶片製造，卻沒能阻止中國 AI 模型在基準測試上追近。" }
  ],
  next: "全系列回顧：從 1947 年的第一顆電晶體、冷戰的飛彈訂單、日本的記憶體攻勢、張忠謀的代工模式、ASML 的 EUV，到中國的追趕與美國的扼喉，我們看到同一件事：晶片的歷史就是權力的歷史。下一場戰役不只比誰的電晶體更小，也比誰能把設計、設備、製造與信任串成一張不會被切斷的網，而臺灣始終站在這張網的正中央。",
  sim: {
    src: "sims/tpp.html",
    title: "出口管制門檻計算器：TPP 與性能密度",
    desc: "輸入規格表上的每秒運算量（TOPS／TFLOPS，不含稀疏）、位元長度與晶粒面積，依 ECCN 3A090 官方定義算出 TPP 與性能密度，並在圖上對照 2022-10、2023-10 兩套門檻。也可以點選 A100、A800、H100、H800、H20、H200、RTX 4090，看它們落在哪一區、為什麼會出現「降規版」。最下方列出 2025–2026 的規則變化（附來源）與 2026-11 遠端算力門檻換算成幾顆 GPU。",
    try: [
      "點 A100，再點 A800：兩者 TPP 一樣，為什麼 2022 年一個要管、一個不用管？切到 2023 規則再看一次。",
      "點 H20，把 TOPS 慢慢往上拉：拉到多少時會跨進 3A090.b 或 3A090.a？",
      "自己輸入一顆假想晶片：FP8 400 TOPS、晶粒 100 mm²。TPP 沒超過 4800，為什麼還是被管？（提示：性能密度）",
      "看看 1,200 萬 TPP 的遠端算力門檻：換成 H100 是幾顆？換成 H20 呢？"
    ]
  }
}
