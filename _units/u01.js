{
  no: 1, id: "u01", phase: 1, tier: "Tier 1｜故事與直覺",
  title: "一片矽，如何決定世界秩序（全書總覽）",
  hook: "2020 年一艘美國驅逐艦穿越臺灣海峽，牽動世界的卻不是軍艦，而是海峽旁那幾座工廠。為什麼？",
  tags: "晶片戰爭、電晶體、摩爾定律、全球供應鏈、咽喉點、台積電、ASML、EUV、矽盾、臺灣困境、出口管制、地緣政治",
  status: "planned", estDur: "約 15 分", segWord: "小節",
  sections: [
    { t: 0, title: "你口袋裡的上百億個開關" },
    { t: 110, title: "電晶體：會計算的開關" },
    { t: 220, title: "摩爾定律：每兩年翻倍" },
    { t: 330, title: "一顆晶片的環球旅程" },
    { t: 445, title: "咽喉點：每環只剩少數公司" },
    { t: 565, title: "七十年權力史：八個部分" },
    { t: 690, title: "臺灣在正中央：矽盾之爭" },
    { t: 800, title: "2022 之後與系列地圖" }
  ],
  formula: R`N(t)=N_0\cdot 2^{(t-t_0)/T_2},\quad T_2\approx 2.09\ \text{年};\qquad L_k=\sum_{r\in S} s_{r,k}`,
  pre: [
    { q: "你手機裡的處理器大約有多少個電晶體？它們在做什麼？",
      a: "以 2023 年 Apple A17 Pro 為例，約 190 億個。每個電晶體都是用電壓控制的開關，開代表 1、關代表 0；幾個開關組成邏輯閘，邏輯閘再組成加法器、記憶體與處理器。開關越小、越多，晶片就越快、越省電。" },
    { q: "如果世界上某一個地區突然停止供應，晶片產業最怕的是哪一種缺口？",
      a: "最怕「只有一兩個地方做得出來」的那一環。平均來看，臺灣只占整條半導體價值鏈約 11%（2022）；但 10 奈米以下的先進邏輯產能，臺灣占 69%、南韓 31%（BCG×SIA，2024 年報告）；EUV 曝光機只有荷蘭 ASML 一家。平均值會把咽喉點藏起來。" },
    { q: "台積電讓臺灣更安全，還是讓臺灣更危險？",
      a: "這就是「矽盾」之爭。支持者認為全世界都依賴臺灣晶片，所以會設法避免戰爭；作者米勒認為這個說法太樂觀：它確實讓美國更重視臺灣，但嚇阻一旦失敗，全世界會少掉書中估計約 37% 的邏輯晶片產量，重建至少要好幾年。兩種說法可以同時部分成立，看完 EP11 再回答一次。" }
  ],
  terms: [
    { zh: "電晶體", en: "transistor", m: "", d: "用電壓控制電流通或斷的微小開關；通代表 1、斷代表 0，是所有數位運算的基本零件。" },
    { zh: "積體電路（晶片）", en: "integrated circuit (chip)", m: "", d: "把大量電晶體與導線一起做在同一片矽上的元件；1958–1959 年由基爾比與諾伊斯分別發明。" },
    { zh: "摩爾定律", en: "Moore's law", m: R`N(t)=N_0\cdot2^{(t-t_0)/T_2}`, d: "晶片上的電晶體數大約每兩年翻倍的經驗規律；高登・摩爾 1965 年提出，是預測，不是物理定律。" },
    { zh: "翻倍週期", en: "doubling time", m: R`T_2`, d: "數量變成兩倍需要的時間。14 顆代表性晶片（1971–2026）擬合約 2.09 年。" },
    { zh: "晶圓", en: "wafer", m: "", d: "高純度矽做成的圓形薄片，直徑多為 300 毫米；一片晶圓上同時做出數百顆晶片，再切割封裝。" },
    { zh: "晶圓代工", en: "foundry", m: "", d: "只替客戶製造晶片、不推出自有品牌晶片的商業模式；台積電 1987 年成立，開創專業代工。" },
    { zh: "無晶圓廠公司", en: "fabless company", m: "", d: "只設計晶片、把製造交給代工廠的公司，例如蘋果、輝達（NVIDIA）、高通。" },
    { zh: "極紫外光微影", en: "extreme ultraviolet (EUV) lithography", m: R`\lambda=13.5\ \text{nm}`, d: "用 13.5 奈米的極紫外光把電路圖案印到晶圓上，製造最先進晶片不可或缺；機台只有荷蘭 ASML 生產。" },
    { zh: "價值鏈占比", en: "value-added share", m: R`s_{r,k}`, d: "區域 r 在環節 k（設計、設備、材料、製造、封測等）創造的附加價值占全球的百分比。" },
    { zh: "咽喉點", en: "chokepoint", m: R`L_k=\sum_{r\in S}s_{r,k}`, d: "只有極少數公司或地區能提供的環節；一旦斷供，下游全部停擺，也可以被當成施壓的槓桿。" },
    { zh: "矽盾", en: "silicon shield", m: "", d: "認為全世界依賴臺灣晶片，因此各國有動機保衛臺灣、阻止衝突的論述；作者認為過於樂觀。" },
    { zh: "出口管制", en: "export controls", m: "", d: "政府限制特定技術或產品賣給特定國家或公司；美國用「實體清單」與外國直接產品規則卡住華為等企業。" }
  ],
  practice: {
    intro: R`摩爾定律 $N(t)=N_0\cdot2^{(t-t_0)/T_2}$；翻倍次數 $n=\log_2(N_1/N_0)$。供應鏈題用「動手玩」的 SIA×BCG 2022 年資料：區域 $r$ 在環節 $k$ 的占比 $s_{r,k}$，斷鏈的區域集合 $S$ 讓環節 $k$ 全球失去 $L_k=\sum_{r\in S}s_{r,k}$；整條價值鏈的加權損失是 $\sum_k w_kL_k\big/\sum_k w_k$（$w_k$＝該環節占全產業附加價值的比重：EDA 3、邏輯 30、類比離散 17、記憶體 9、設備 12、材料 5、晶圓製造 19、封測 6）。`,
    items: [
      { q: "1971 年 Intel 4004 有 2,300 個電晶體，2023 年 Apple A17 Pro 約 190 億個。這 52 年平均每幾年翻倍一次？（取到小數點後兩位）",
        a: 2.26, tol: 0.02,
        hint: R`翻倍次數 $\log_2(1.9\times10^{10}/2300)\approx22.98$，再用 52 年去除。若改用 14 顆代表性晶片做最小平方擬合，得到約 2.09 年。` },
      { q: "照擬合出的翻倍週期 2.09 年，10 年後晶片上的電晶體數會變成幾倍？（取到小數點後一位）",
        a: 27.6, tol: 0.3,
        hint: R`$2^{10/2.09}=2^{4.785}$。十年將近 28 倍，這就是指數成長。` },
      { q: "用模擬頁 2022 年資料：臺灣「斷鏈」時，晶圓製造環節（所有製程的產能）全球失去幾 %？",
        a: 18, tol: 0.5,
        hint: "直接讀臺灣在晶圓製造的占比。但若只看 10 奈米以下的先進邏輯產能，失去的是 69%：同一個地區，換個切法，衝擊差了將近四倍。" },
      { q: "同上，臺灣斷鏈時，整條價值鏈的加權損失約幾 %？（取到小數點後一位）",
        a: 11.0, tol: 0.3,
        hint: R`$(3\times3+30\times11+17\times5+9\times4+12\times0+5\times28+19\times18+6\times28)\div101$。報告「整體」列的臺灣正好是 11%；加權平均看起來不大，卻藏住了 69% 的那一段。` }
    ]
  },
  notes: [
    { h: "一句話記住",
      b: "晶片是上百億個開關組成的「新石油」：它照摩爾定律每兩年翻倍地進步，卻只能靠一條極度分工的全球供應鏈做出來；誰掌握無可替代的那一環，誰就握有權力，而最先進的製造正好集中在臺灣。" },
    { h: "〔全書地圖：八個部分，本系列怎麼走〕",
      b: `<ol>
<li><b>冷戰晶片</b>：電晶體與積體電路誕生，飛彈與太空計畫是第一批大客戶，矽谷成形。→ EP02、EP03</li>
<li><b>美國世界的電路</b>：封裝外移到香港、臺灣、南韓與東南亞，盟友被編進美國的供應鏈；蘇聯靠仿製追趕失敗。→ EP04</li>
<li><b>失去領先？</b>1980 年代日本以 DRAM 記憶體打垮矽谷，美國陷入恐慌。→ EP05</li>
<li><b>美國復興</b>：英特爾轉攻微處理器、美光存活、南韓崛起；精準武器在波灣戰爭奏效，冷戰以美國勝利收場。→ EP06</li>
<li><b>整合的世界？</b>張忠謀（Morris Chang）創立台積電，中國因文革錯過半導體，EUV 技術最後由 ASML 商品化。→ EP07</li>
<li><b>創新也外移？</b>無晶圓廠革命與 EUV 讓最尖端製造集中到臺灣，英特爾失速。→ EP08、EP09</li>
<li><b>中國的挑戰</b>：以國家基金、跨國併購與技術移轉追趕，華為崛起。→ EP10</li>
<li><b>晶片扼喉</b>：美國以出口管制擊垮福建晉華、圍剿華為；晶片荒與臺灣困境浮上檯面。→ EP11</li>
</ol>
<p>書出版於 2022 年 10 月，之後的 AI 晶片、各輪出口管制與台積電海外設廠，放在 EP12。</p>` },
    { h: "〔三個貫穿概念與三個常見誤解〕",
      b: R`<p><b>① 摩爾定律（指數）</b>：$N(t)=N_0\cdot2^{(t-t_0)/T_2}$。從 1971 年 Intel 4004 的 2,300 個，到 2026 年 NVIDIA Rubin 的 3,360 億個（兩顆晶粒封裝），14 個資料點擬合出翻倍週期約 2.09 年。它屢被宣告死亡又屢次突破；書末引述晶片設計師凱勒（Jim Keller）的話："We're not running out of atoms."</p>
<p><b>② 分工與咽喉點</b>：設計、EDA 軟體、設備、材料、製造、封測分散在不同地區，每一環常常只剩少數公司。SIA×BCG 2021 年報告算出，整條鏈有 50 多處單一地區市占超過 65% 的節點。效率極高，也極脆弱。</p>
<p><b>③ 晶片＝權力</b>：軍方是第一批客戶，精準武器改寫戰爭；今天的出口管制，則是把咽喉點當成武器。</p>
<p><b>三個要拆的誤解</b>：「只是中美之爭」（日本、南韓、荷蘭、臺灣都是主角）；「有錢就能蓋晶圓廠」（還要人才、設備、良率與幾十年累積；一座 2 奈米廠估計約 280 億美元，IBS 2023 年估計）；「矽盾保證臺灣安全」（見下一則）。</p>` },
    { h: "〔臺灣在正中央：矽盾與臺灣困境〕",
      b: `<ul>
<li><b>首尾呼應</b>：全書以 2020 年美艦穿越臺海開場，以 1958 年金門炮擊作結；炮擊後五天，基爾比（Jack Kilby）在德州展示了積體電路。晶片從誕生起就和臺海危機連在一起。</li>
<li><b>矽盾</b>：蔡英文（Tsai Ing-wen）在《外交事務》撰文，稱晶片產業是臺灣的「矽盾」。作者認為過於樂觀：它讓美國更重視臺灣，但嚇阻一旦失敗，全世界將少掉約 37% 的邏輯晶片產量（書中，約 2021），重建至少五年，損失以兆美元計。</li>
<li><b>臺灣困境</b>：作者認為最可能的威脅不是全面登陸，而是封鎖或有限施壓，逼臺灣交出產能與人才。iPhone 背面寫「加州設計、中國組裝」，最關鍵的處理器卻只能在臺灣製造。</li>
<li><b>作者後來的說法較細緻</b>：2025 年在臺北演講時說，先進半導體對臺灣「有一定保護作用」；2026 年受訪時說，戰爭也會讓中國自己的晶圓廠斷炊，這是一種約束，但不能排除武力。</li>
</ul>` },
    { h: "〔2022 年之後：先預告，細節在 EP12〕",
      b: `<ul>
<li><b>出口管制一輪接一輪</b>：2022-10 美國首輪先進運算與設備管制，之後 2023、2024 年再收緊，荷蘭、日本跟進；中國以稀土與採購禁令反制。</li>
<li><b>AI 讓晶片更像權力</b>：NVIDIA 2025-10 成為首家市值 5 兆美元的公司；作者 2026 年受訪時說，幾乎所有 AI 加速器晶片都由台積電製造。</li>
<li><b>中國沒有停下</b>：2023 年華為 Mate 60 Pro 搭載中芯國際（SMIC）7 奈米級晶片，在沒有 EUV 的情況下做到。</li>
<li><b>產能開始分散</b>：台積電宣布在美國投資共 1,650 億美元（2025），並在日本、德國設廠；BCG×SIA 預估臺灣的 10 奈米以下邏輯產能占比將從 2022 年 69% 降到 2032 年 47%。</li>
</ul>` },
    { h: "〔今天的數字〕",
      b: `<table>
<tr><th>項目</th><th>書中（約 2020–2021）</th><th>最新</th></tr>
<tr><td>手機處理器電晶體數</td><td>A14：118 億（2020）</td><td>A17 Pro：190 億（2023，Apple 發表會；之後 Apple 未再公布）<a href="https://tomshardware.com/news/apple-a17-pro-3nm-iphone-15-pro" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>最大的 AI GPU</td><td>—</td><td>NVIDIA Rubin：3,360 億（2026，兩顆晶粒封裝）<a href="https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>全球半導體銷售額</td><td>—</td><td>2024 年 6,305 億美元；2025 年 7,956 億美元（SIA／WSTS）<a href="https://www.semiconductors.org/wp-content/uploads/2026/07/SIA_2026_State-of-the-Semiconductor-Industry.pdf" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>臺灣占 10 奈米以下邏輯產能</td><td>92%（2019，BCG×SIA 2021）</td><td>69%（2022）；預估 2032 年 47%（BCG×SIA 2024）<a href="https://www.semiconductors.org/wp-content/uploads/2024/05/Report_Emerging-Resilience-in-the-Semiconductor-Supply-Chain.pdf" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>臺灣占整條價值鏈</td><td>9%（2019，BCG×SIA 2021）</td><td>11%（2022）；其中材料 28%、封測 28%、晶圓製造 18%（BCG×SIA 2024，Exhibit 2）</td></tr>
<tr><td>台積電晶圓代工市占</td><td>—</td><td>72.5%（2026 Q2，TrendForce）<a href="https://focustaiwan.tw/business/202609090025" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>EUV 曝光機</td><td>ASML 市占 100%（約 2021）</td><td>仍是唯一 EUV 製造商（路透，2026-01）；一台約 1.5–2 億美元，High-NA 約 3.5 億歐元（媒體估計，ASML 未公布定價）<a href="https://finance.yahoo.com/news/asml-rides-nvidias-coattails-lasers-060145161.html" target="_blank" rel="noopener">來源</a></td></tr>
<tr><td>一輛車用多少晶片</td><td>晶片價值約 1,000 美元</td><td>一般燃油車 1,000 顆以上（Roland Berger 估計，芝加哥聯準會 2022 引用）<a href="https://www.chicagofed.org/publications/chicago-fed-letter/2022/473" target="_blank" rel="noopener">來源</a></td></tr>
</table>
<p>注意口徑：「10 奈米以下邏輯產能」「整條價值鏈附加價值」「代工營收市占」是三種不同的量，不能互相比較。</p>` },
    { h: "〔不同觀點〕",
      b: `<ul>
<li><b>從誰的角度說故事？</b>半導體史電子報 The Chip Letter 認為全書是美國政策制定者的視角，對軟體（如 CUDA）與企業商業動機著墨不多。<a href="https://thechipletter.substack.com/p/chip-war-economics-battles-geopolitics" target="_blank" rel="noopener">連結</a></li>
<li><b>歐洲與南韓寫得少</b>：經濟學者 Kenneth Flamm 指出書中主要聚焦蘇聯、中國與臺灣，也追問「代工模式為什麼成為先進製造唯一可行的模式」，書中沒有充分回答。<a href="https://www.cambridge.org/core/journals/journal-of-economic-history/article/chip-war-the-fight-for-the-worlds-most-critical-technology-by-chris-miller-new-york-ny-simon-and-schuster-2022-pp-464-3200-hardcover/1620C272B3E902EE431B93906C182EC1" target="_blank" rel="noopener">連結</a></li>
<li><b>出口管制有沒有用？</b>Barry Eichengreen 在《外交事務》指出，本書完稿早於 2022 年 10 月的全面管制，沒有評估管制能否拖慢中國、會不會反而刺激中國加速自主。<a href="https://www.foreignaffairs.com/reviews/chip-war-fight-worlds-most-critical-technology" target="_blank" rel="noopener">連結</a></li>
<li><b>矽盾擋不擋得住？</b>澳洲國際事務研究所的 John West 同樣存疑；也有人反過來主張，產能分散到海外才是臺灣的保障。<a href="https://www.internationalaffairs.org.au/australianoutlook/book-review-chip-war-the-fight-for-the-worlds-most-critical-technology/" target="_blank" rel="noopener">連結</a></li>
</ul>` },
    { h: "〔延伸閱讀〕",
      b: `<ul>
<li>SIA×BCG《Emerging Resilience in the Semiconductor Supply Chain》（2024-05）：本集模擬頁的資料來源，Exhibit 2 是各區域在價值鏈各環節的占比。<a href="https://www.semiconductors.org/wp-content/uploads/2024/05/Report_Emerging-Resilience-in-the-Semiconductor-Supply-Chain.pdf" target="_blank" rel="noopener">PDF</a></li>
<li>SIA×BCG《Strengthening the Global Semiconductor Supply Chain in an Uncertain Era》（2021-04）：書中時代的分工全貌與「50 多處咽喉點」。<a href="https://www.bcg.com/publications/2021/strengthening-the-global-semiconductor-supply-chain" target="_blank" rel="noopener">連結</a></li>
<li>中央社《晶片戰爭》書摘〈台積電撐起矽盾 其他國家想複製也不容易〉（2023-02）：作者矽盾立場最直接的中文材料。<a href="https://www.cna.com.tw/news/afe/202302245003.aspx" target="_blank" rel="noopener">連結</a></li>
<li>Chris Miller〈How US Export Controls Have (and Haven't) Curbed Chinese AI〉（AI Frontiers，2025-07）：作者本人回看出口管制的得失。<a href="https://newsletter.ai-frontiers.org/p/how-us-export-controls-have-and-havent" target="_blank" rel="noopener">連結</a></li>
</ul>` }
  ],
  quiz: [
    { q: "作者認為二戰靠鋼鐵、冷戰靠核武，美中對抗可能由什麼決定？",
      o: ["石油產量", "運算能力（算力）", "稀土礦藏", "人口規模"],
      a: 1, w: "全書主旨：半導體決定國際政治、世界經濟與軍事力量的平衡，未來的競爭可能取決於誰掌握更多、更好的運算能力。" },
    { q: "摩爾定律最接近下列哪個描述？",
      o: ["晶片價格每年減半", "晶圓廠數量每兩年翻倍", "晶片上的電晶體數大約每兩年翻倍", "電晶體每兩年縮小成原來的一半長度"],
      a: 2, w: "摩爾定律談的是電晶體「數量」的指數成長，是經驗規律而非物理定律。14 顆代表性晶片擬合的翻倍週期約 2.09 年。" },
    { q: "2022 年，臺灣占全球 10 奈米以下先進邏輯晶片產能的比例大約是？",
      o: ["69%", "18%", "92%", "37%"],
      a: 0, w: "BCG×SIA 2024 年報告：臺灣 69%、南韓 31%。92% 是 2019 年的數字；18% 是所有製程的晶圓製造產能；37% 是書中估計的臺灣邏輯晶片產量占比。" },
    { q: "全世界唯一能製造 EUV 極紫外光曝光機的公司是？",
      o: ["尼康（日本）", "佳能（日本）", "應用材料（美國）", "ASML（荷蘭）"],
      a: 3, w: "ASML 是唯一的 EUV 曝光機製造商（路透，2026-01）。這是整條供應鏈最典型的咽喉點：一家公司、一種機器，決定誰能做最先進的晶片。" },
    { q: "在模擬頁按「只剩美國＋盟友」（美、歐、日、韓、臺，2022 年資料），哪一個環節的自給比例最低？",
      o: ["EDA 與核心 IP", "製造設備", "封裝測試", "邏輯晶片設計"],
      a: 2, w: "封裝測試只剩約 49%：中國大陸占 30%、「其他」地區（含新加坡等）占 20%。設計和設備是美國盟友的強項，勞力與資本密集的封測則大量在盟友圈之外。" },
    { q: "作者怎麼看「矽盾」？",
      o: ["矽盾保證臺灣不會被攻擊", "過於樂觀：它讓美國更重視臺灣，但嚇阻失效時全世界都受害", "矽盾是中國政府提出的說法", "作者主張臺灣立刻把所有產能移往美國"],
      a: 1, w: "作者認為矽盾說法相當樂觀；產能集中在臺灣，一旦嚇阻失敗，全球將少掉書中估計約 37% 的邏輯晶片，重建至少五年。" },
    { q: "為什麼說「晶片戰爭只是中美之爭」是一種誤解？",
      o: ["因為中國完全沒有半導體產業", "因為美國已經不做晶片設計", "因為這場競爭只發生在 1980 年代", "因為日本、南韓、荷蘭、臺灣都握有關鍵環節，也都是故事主角"],
      a: 3, w: "日本曾在 1980 年代擊敗矽谷、至今在設備與材料舉足輕重；南韓主導記憶體；荷蘭有 ASML；臺灣有最先進的製造。任何一方都無法獨自完成整條鏈。" },
    { q: "下列哪一組配對最符合書中描述的晶片分工？",
      o: ["設計在臺灣、先進製造在美國", "曝光設備來自荷蘭、最先進的製造在臺灣", "封裝測試在荷蘭、EDA 軟體來自中國", "晶片架構來自日本、設備來自印度"],
      a: 1, w: "典型分工：美國公司設計、英國 Arm 提供架構、美國 EDA 軟體、荷蘭日本美國的設備、臺灣製造、東南亞與中國封測組裝。" }
  ],
  sim: {
    src: "sims/chain.html",
    title: "供應鏈咽喉點：切斷一個地區，哪一環先停？",
    desc: "資料是 SIA×BCG 報告中七個地區在八個價值鏈環節的附加價值占比（預設 2022 年，可切換到書中時代的 2019 年），頁面下方標有來源與圖表編號。點一個或多個地區讓它「斷鏈」：該地區占比最大的環節會亮紅框，右欄顯示全球在每一環失去的百分比，下方算出整條鏈的加權損失與「最弱環節」的產出上限。快捷按鈕可直接看「只剩美國＋盟友」或「只剩中國大陸」時各環節的自給比例。",
    try: [
      "只點「臺灣」：整條鏈加權只失去約 11%，但最下面的參考列「10 奈米以下邏輯」一口氣失去 69%。平均值和咽喉點，差在哪裡？",
      "再加點「南韓」：記憶體與先進邏輯會一起崩掉。這就是 EP11 講的「臺灣困境」為什麼也牽動韓國。",
      "按「只剩美國＋盟友」，找出自給比例最低的環節；再點一下「其他」（含以色列、新加坡）把它加回來，看能補回多少。",
      "切到「2019（書中時代）」，比較臺灣在先進邏輯的占比從 92% 到 69% 的變化，想一想背後是誰在追趕。"
    ]
  },
  next: "下一集〈開關的誕生：從真空管到積體電路〉：一台塞滿整個房間、會吸引飛蛾的計算機，怎麼縮成指甲大的晶片？"
}
