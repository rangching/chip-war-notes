{
  no: 8, id: "u08", phase: 4, tier: "Tier 2｜技術原理",
  title: "光刻：人類最精密的機器",
  hook: "一台要用三架貨機運送、價格超過一億歐元的機器，世界上只有一家公司做得出來。它在做什麼？",
  tags: "光刻、光罩、光阻、解析度、數值孔徑、EUV、13.5 奈米、ASML、蔡司、通快、High-NA、沒有 B 計畫",
  status: "planned", estDur: "約 15 分", segWord: "小節",
  sections: [
    { t: 0, title: "上億的機器，只有一家" },
    { t: 110, title: "微影：用光畫電路" },
    { t: 220, title: "解析度：波長與 NA" },
    { t: 335, title: "微影之戰：ASML 勝出" },
    { t: 450, title: "雷射打錫，每秒五萬次" },
    { t: 565, title: "最光滑的鏡子與供應鏈" },
    { t: 680, title: "沒有 B 計畫" },
    { t: 790, title: "High-NA 與今天的 ASML" }
  ],
  formula: R`CD=k_1\,\frac{\lambda}{NA}`,
  pre: [
    { q: "用一支粗的麥克筆，能不能畫出比筆頭還細的線？光刻機用光「畫」電路時，遇到的是同一個問題嗎？",
      a: "是同一個問題。光會繞射，能印出的最細線寬大約和波長成正比、和鏡頭收光的角度（數值孔徑 NA）成反比：$CD=k_1\lambda/NA$。電晶體縮到和光的波長同一級時，只能換更短波長的光、加大 NA，或用各種光學技巧把 $k_1$ 壓低。從 436 奈米的汞燈一路換到 193 奈米的雷射，最後是 13.5 奈米的極紫外光。" },
    { q: "13.5 奈米的極紫外光（EUV）沒有燈泡可以買，也會被空氣和玻璃吸收。你會怎麼產生它、怎麼把它送到晶圓上？",
      a: "ASML 的做法是讓直徑幾十微米的熔融錫滴飛過真空腔，先用雷射打成扁平狀，再用強脈衝把它打成數十萬度的電漿，放出極紫外光，每秒重複約 5 萬次。整條光路都要在真空中，而且不能用透鏡，只能用德國蔡司以上百層鉬、矽薄膜做成的反射鏡一路反射。" },
    { q: "EUV 的關鍵零件分別來自美國、德國、荷蘭等地。這樣的機器算是哪一國的技術？",
      a: "很難說屬於哪一國：光源技術來自美國的 Cymer，雷射來自德國通快，反射鏡來自德國蔡司，研究起點有美國國家實驗室，最後由荷蘭的 ASML 整合，ASML 自己只生產約一成五的零件。作者的說法是：一台有數十萬個零件的機器，有很多個父親。但能把它做出來的公司，只有一家。" }
  ],
  terms: [
    { zh: "光刻（微影）", en: "photolithography", m: "", d: "讓光穿過帶圖案的光罩，照在塗了光阻的晶圓上，把電路圖案轉印上去的製程。" },
    { zh: "光罩", en: "mask / reticle", m: "", d: "刻有電路圖案、決定哪裡透光哪裡擋光的板子；EUV 用的是反射式光罩。" },
    { zh: "光阻", en: "photoresist", m: "", d: "受光照後化學性質改變、可選擇性洗去的材料，用來定義圖案。" },
    { zh: "臨界尺寸", en: "critical dimension, CD", m: "CD", d: "能穩定印出的最細線寬（約為最小週期的一半）。" },
    { zh: "數值孔徑", en: "numerical aperture, NA", m: "NA=n\\sin\\theta", d: "鏡頭能收進多斜的光；NA 越大，收進越多繞射光，能印的線越細。" },
    { zh: "製程因子", en: "process factor", m: "k_1", d: "瑞利公式中由照明方式、光罩技巧、光阻決定的係數，理論下限 0.25。" },
    { zh: "繞射", en: "diffraction", m: "\\sin\\theta=m\\lambda/p", d: "光通過週期 p 的細縫後往特定角度散開；週期越細，散得越斜，越難被鏡頭收進來。" },
    { zh: "深紫外光", en: "DUV", m: "\\lambda=248,\\,193\\ \\text{nm}", d: "KrF 248 奈米、ArF 193 奈米準分子雷射光源；193 奈米撐了近二十年。" },
    { zh: "浸潤式微影", en: "immersion lithography", m: "", d: "在鏡頭與晶圓之間加一層水，讓 NA 大於 1，193 奈米可達 NA 1.35。" },
    { zh: "多重曝光", en: "multiple patterning", m: "", d: "把一層圖案拆成幾道光罩分次曝光，印出比單次極限更密的線；步驟多、成本高、良率風險大。" },
    { zh: "極紫外光微影", en: "EUV lithography", m: "\\lambda=13.5\\ \\text{nm}", d: "以雷射打錫滴產生的 13.5 奈米光、多層膜反射鏡成像的微影技術，只有 ASML 能量產。" },
    { zh: "高數值孔徑 EUV", en: "High-NA EUV", m: "NA=0.55", d: "把 EUV 的 NA 從 0.33 提高到 0.55，可印約 8 奈米的線；單價約 3.5 億歐元（媒體估計）。" }
  ],
  practice: {
    intro: R`瑞利公式 $CD=k_1\lambda/NA$。$k_1$ 理論下限 0.25，量產常見約 0.3 上下。EUV 光路由多面反射鏡組成，每面反射率 $r$，經過 $m$ 面後剩下 $r^m$。`,
    items: [
      { q: R`ArF 浸潤式：$\lambda=193$ nm、$NA=1.35$、$k_1=0.28$，可印的最細線寬約幾奈米？（取到小數點後一位）`,
        a: 40.0, tol: 0.2,
        hint: R`$0.28\times193/1.35\approx40.0$ nm。要做更細的圖案，只能靠多重曝光把一層拆成好幾次。` },
      { q: R`EUV（ASML NXE）：$\lambda=13.5$ nm、$NA=0.33$、$k_1=0.30$，最細線寬約幾奈米？（取到小數點後一位）`,
        a: 12.3, tol: 0.2,
        hint: R`$0.30\times13.5/0.33\approx12.3$ nm；ASML 官網寫 NXE 可印 13 奈米。` },
      { q: R`High-NA EUV（ASML EXE）：$NA=0.55$，其他同上，最細線寬約幾奈米？（取到小數點後一位）`,
        a: 7.4, tol: 0.2,
        hint: R`$0.30\times13.5/0.55\approx7.4$ nm；ASML 官網寫 EXE 可印 8 奈米。` },
      { q: R`鉬／矽多層膜反射鏡每面約反射 70% 的 EUV。假設光路有 10 面鏡子（教學假設），最後剩下光源的幾 %？（取到小數點後兩位）`,
        a: 2.82, tol: 0.05,
        hint: R`$0.7^{10}\approx0.0282$，只剩約 1/35。這就是為什麼光源要極強、每片鏡子的反射率提高一點點都很重要。` }
    ]
  },
  notes: [
    { h: "一句話記住",
      b: "光刻的極限由 $CD=k_1\\lambda/NA$ 決定；人類把光的波長從 436 奈米一路縮到 13.5 奈米，最後做出一台需要全球數千家供應商、卻只有 ASML 一家能整合出來的機器，也因此成了晶片戰爭裡最緊的一個咽喉點。" },
    { h: "重點一：用光畫電路，畫得多細看波長",
      b: R`<p>光刻的原理和拉斯羅普當年把顯微鏡倒過來用一樣：光穿過光罩、縮小投影到光阻上。但光會繞射：週期 $p$ 的圖案讓光往 $\sin\theta=m\lambda/p$ 的方向散開，鏡頭只收得進 $|\sin\theta|\le NA$ 的光。收不到第一級繞射光，圖案就糊成一片。</p>
<p>所以能印的最小週期約 $\lambda/NA$（正入射），用離軸照明可再縮到約 $\lambda/(2NA)$，對應 $k_1$ 的理論下限 0.25。193 奈米浸潤式（NA 1.35）配合多重曝光，撐了近二十年。</p>` },
    { h: "重點二：三場微影之戰",
      b: "1992 年，英特爾研發主管約翰・卡魯瑟斯（John Carruthers）向葛洛夫要兩億美元研究 EUV，葛洛夫問行不行得通，他回答：這就叫研究。1990 年代的微影業同時有三場戰爭：工程（電子束、X 光、EUV）、商業（美國 GCA 倒閉，佳能、尼康稱霸，1984 年從飛利浦分拆、一開始「沒廠房也沒錢」的 ASML 靠全球採購與系統整合突圍），以及當時沒人意識到的政治之戰。2001 年 ASML 併購美國最後一家大型微影公司 SVG，美國政府放行。飛利浦也是台積電的大股東；1989 年台積電廠房失火，保險理賠買了 19 台新機。" },
    { h: "重點三：EUV 怎麼做出來，以及沒有 B 計畫",
      b: "書中描述：錫滴直徑約 30 微米、以約時速 200 英里飛過真空，雷射先打一下加熱、再打一下變成約 50 萬度的電漿，每秒 5 萬次。雷射來自德國通快，花了約十年開發，一台雷射有 457,329 個零件；反射鏡來自德國蔡司，上百層鉬與矽交錯，放大到德國那麼大，最大起伏也只有 0.1 公釐。ASML 自己只生產約 15% 的零件，核心能力是管理數千家供應商；2012 年英特爾、三星、台積電在機器還不能用時就入股 ASML，英特爾一家投入 40 億美元。<br><br>2015 年，台積電微影專家嚴濤南被問到 EUV 不成功怎麼辦，他說「There is no Plan B.」（沒有 B 計畫）。張忠謀 2009 年在一碗牛肉麵前請回蔣尚義重掌研發，台積電研發團隊從 1997 年的 120 人擴大到 2013 年的 7,000 人。格羅方德則在 2018 年喊停：7 奈米已花 15 億美元，決定放棄尖端製程、研發砍三分之一。能做尖端邏輯晶片的公司，從四家變成三家。" },
    { h: "〔今天的數字〕",
      b: `<ul>
<li><b>單價：</b>書中（約 2021）：每台 EUV「逾 1 億美元」。最新：一般 EUV（NXE）約 1.5–2 億美元（AnandTech 2024 報導約 1.7 億歐元）；High-NA（EXE）約 3.5 億歐元，屬媒體估計，ASML 未公布官方定價。<a href="https://www.anandtech.com/show/21264" target="_blank" rel="noopener">AnandTech</a>、<a href="https://www.tomshardware.com/tech-industry/manufacturing/asmls-high-na-chipmaking-tool-will-cost-dollar380-million-the-company-already-has-orders-for-10-to-20-machines-and-is-ramping-up-production" target="_blank" rel="noopener">Tom's Hardware</a></li>
<li><b>解析度：</b>NXE（NA 0.33）可印 13 奈米、EXE（NA 0.55）可印 8 奈米（ASML 官網）。<a href="https://www.asml.com/en/products/euv-lithography-systems" target="_blank" rel="noopener">ASML</a></li>
<li><b>獨占與營收：</b>ASML 仍是唯一的 EUV 製造商（路透 2026-01）；2025 年營收 327 億歐元，中國（不含臺灣）占 33%。中國深圳的 EUV 原型機（路透 2025-12）能產生 EUV 光，但尚未量產晶片。<a href="https://finance.yahoo.com/news/asml-rides-nvidias-coattails-lasers-060145161.html" target="_blank" rel="noopener">路透</a>、<a href="https://www.eenewseurope.com/en/asml-reports-e32-7bn-sales-e9-6bn-net-income-for-2025/" target="_blank" rel="noopener">eeNews Europe</a></li>
<li><b>供應鏈：</b>一台 EUV 約 10 萬個零件、來自 5,000 多家供應商（BCG×SIA，2021）。<a href="https://www.semiconductors.org/wp-content/uploads/2021/05/BCG-x-SIA-Strengthening-the-Global-Semiconductor-Value-Chain-April-2021_1.pdf" target="_blank" rel="noopener">BCG×SIA</a></li>
</ul>` },
    { h: "〔書中勘誤〕",
      b: `<ul>
<li><b>打錫頻率：</b>書中同一段落先寫打錫「每秒五萬次」，介紹雷射時又寫種子雷射能命中「每秒 5,000 萬滴」。ASML 官網與路透（2026）都是每秒約 5 萬次，本網站採每秒約 5 萬次。<a href="https://www.asml.com/en/technology/lithography-principles/light-and-lasers" target="_blank" rel="noopener">ASML</a></li>
<li><b>2015 年產能的單位：</b>書中寫「以每月千片晶圓計」，台積電 180 萬、三星 250 萬、格羅方德 70 萬，單位寫法自相矛盾。對照 IC Insights 2015 年 12 月的統計，這些數字應是「每月約 180 萬、250 萬、70 萬片 8 吋約當晶圓」，而且三星的數字包含自家記憶體與手機晶片，並非只有代工。<a href="https://design-reuse.com/news/38983/2015-wafer-fab-capacity.html" target="_blank" rel="noopener">IC Insights（Design &amp; Reuse 轉載）</a></li>
</ul>` },
    { h: "〔不同觀點〕",
      b: `<ul>
<li><b>對 ASML 的依賴被看得太輕鬆？</b>The Chip Letter 認為本書站在美國政策制定者的角度，對「全世界依賴荷蘭一家公司」這種風險著墨太少。<a href="https://thechipletter.substack.com/p/chip-war-economics-battles-geopolitics" target="_blank" rel="noopener">The Chip Letter</a></li>
<li><b>看不見的代價：</b>牛津 STAIR 的書評肯定本書把 EUV 物理和數百億美元的晶圓廠經濟連起來，但認為對晶片製造高耗能的討論不足。<a href="https://stair.shox.bodleian.ox.ac.uk/STAIR/article/download/431/222/2186" target="_blank" rel="noopener">St Antony's International Review</a></li>
<li><b>複製 ASML 有多難：</b>作者 2023 年受訪時說，即使中國五年內做出全套設備，仍會落後。<a href="https://www.noahpinion.blog/p/interview-chris-miller-historian" target="_blank" rel="noopener">Noahpinion</a></li>
</ul>` },
    { h: "〔延伸閱讀〕",
      b: `<ul>
<li>ASML〈Light and lasers〉：錫滴、雙脈衝雷射與 13.5 奈米光的官方說明。<a href="https://www.asml.com/en/technology/lithography-principles/light-and-lasers" target="_blank" rel="noopener">ASML</a></li>
<li>Fraunhofer IWS：EUV 多層膜反射鏡的反射率紀錄。<a href="https://www.iws.fraunhofer.de/en/newsandmedia/press_releases/2015/press_release_2015-31.html" target="_blank" rel="noopener">Fraunhofer IWS</a></li>
<li>ASML 高 NA 量產機的可用度進展（2025）。<a href="https://bits-chips.com/article/asml-expects-high-na-euv-to-reach-production-grade-availability-by-year-end/" target="_blank" rel="noopener">Bits&amp;Chips</a></li>
</ul>` }
  ],
  quiz: [
    { q: "依瑞利公式 $CD=k_1\\lambda/NA$，下列哪一種做法無法讓線寬變細？",
      o: ["換更短波長的光", "加大數值孔徑 NA", "用離軸照明把 $k_1$ 壓低", "把光源亮度調高"],
      a: 3, w: "亮度影響曝光速度（產能），不改變繞射極限；解析度只看 $\\lambda$、NA 與 $k_1$。" },
    { q: "EUV 光的波長是多少？",
      o: ["193 奈米", "13.5 奈米", "248 奈米", "1 奈米"],
      a: 1, w: "13.5 奈米，比 ArF 的 193 奈米短約 14 倍。" },
    { q: "為什麼 EUV 機器用反射鏡而不用透鏡？",
      o: ["EUV 幾乎會被所有材料吸收，連空氣也是，只能用多層膜反射鏡並在真空中傳光", "透鏡太貴", "反射鏡比較輕", "專利限制"],
      a: 0, w: "所以整條光路要高真空，蔡司用上百層鉬與矽薄膜做反射鏡，每面也只反射約七成。" },
    { q: "書中認為 ASML 在 1990 年代勝出的關鍵是什麼？",
      o: ["荷蘭政府全額補助", "最早發明光刻", "全球採購最好零件、做系統整合，並在美日相爭中被視為中立", "擁有自己的晶圓廠"],
      a: 2, w: "ASML 創立時「沒廠房也沒錢」，只好向全球採購，反而成了優勢；飛利浦又是台積電大股東，讓它天生有客戶。" },
    { q: "EUV 光是怎麼產生的？",
      o: ["高壓汞燈", "準分子雷射直接輸出", "同步輻射加速器", "雷射打熔融錫滴，使其成為高溫電漿放出極紫外光"],
      a: 3, w: "先用弱脈衝把錫滴打扁、再用強脈衝打成電漿，每秒約 5 萬次。" },
    { q: "2018 年格羅方德放棄 7 奈米的影響是？",
      o: ["能做尖端邏輯晶片的公司從四家變三家", "ASML 失去最大客戶", "EUV 研發停止", "台積電市占下降"],
      a: 0, w: "它已在 7 奈米花了 15 億美元，還要再花差不多的錢，於是退出尖端製程；美國本土又少了一條通往最先進晶片的路。" },
    { q: "High-NA EUV 和一般 EUV 最主要的差別是？",
      o: ["換成更短的波長", "數值孔徑從 0.33 提高到 0.55，可印更細的線", "不需要真空", "改用透鏡"],
      a: 1, w: "波長同樣是 13.5 奈米；NA 提高後可印約 8 奈米，單價也翻倍到約 3.5 億歐元（媒體估計）。" }
  ],
  next: "下一集〈無晶圓廠革命與英特爾的失落〉：英特爾曾經拒絕替第一代 iPhone 做晶片。這個決定的代價有多大？",
  sim: {
    src: "sims/litho.html",
    title: "光刻解析度：光能畫多細？",
    desc: "以 Abbe 成像實際計算：50% 工作週期的線條光罩產生各級繞射光（$\\sin\\theta=m\\lambda/p$），鏡頭只收得進 $|\\sin\\theta|\\le NA$ 的級次，把收進來的繞射光疊加成晶圓上的光強度，再用光阻門檻判斷線條印不印得出來。可切換 g-line 436 nm 到 High-NA EUV 七種光源與鏡頭，以及正入射與偶極離軸照明；上方即時顯示最小週期與 $k_1$。",
    try: [
      "選「ArF 浸潤式 193 nm・NA 1.35」，把週期從 160 nm 慢慢縮小：用偶極離軸照明約在 75 nm 以下就印不出來；切回正入射，143 nm 以下就糊掉。",
      "週期固定 40 nm，從 ArF 浸潤式切到 EUV NA 0.33：193 奈米的光完全印不出來，EUV 卻能印出清楚線條。",
      "選 EUV NA 0.33 再切到 High-NA 0.55，找出各自的最小週期（約 21.5 nm 與 12.9 nm），算算 NA 提高了幾倍、線寬縮了幾倍。",
      "觀察「收進的繞射級次」：只收到第 0 級時沒有任何圖案資訊，至少要收進一個 ±1 級，圖案才印得出來。"
    ]
  }
}
