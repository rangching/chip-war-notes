{
  no: 9, id: "u09", phase: 4, tier: "Tier 3｜經濟與權力",
  title: "無晶圓廠革命與英特爾的失落",
  hook: "英特爾曾經拒絕替第一代 iPhone 做晶片。這個決定的代價有多大？",
  tags: "創新者的兩難、x86、Arm、無晶圓廠、輝達、高通、蘋果晶片、損益兩平、建廠成本、英特爾 10 奈米、CUDA、AI 晶片",
  status: "planned", estDur: "約 15 分", segWord: "小節",
  sections: [
    { t: 0, title: "英特爾拒絕 iPhone" },
    { t: 110, title: "x86：城堡與護城河" },
    { t: 220, title: "Arm：只授權不製造" },
    { t: 335, title: "輝達與高通：沒有工廠" },
    { t: 450, title: "加州設計，臺灣製造" },
    { t: 565, title: "自建 vs 代工的算術" },
    { t: 680, title: "英特爾卡在 10 奈米" },
    { t: 790, title: "CUDA：AI 的軟體護城河" }
  ],
  formula: R`c_{\text{代工}}=\frac{\mathrm{NRE}}{Q}+\frac{P_w}{g},\qquad c_{\text{自建}}=\frac{\mathrm{NRE}+RD+F/N}{Q}+\frac{v}{g}`,
  pre: [
    { q: "英特爾每顆個人電腦處理器的毛利很高。如果有人請它做一顆便宜、但數量可能很大的手機晶片，為什麼它會猶豫？",
      a: "這就是「創新者的兩難」：現有業務太賺錢，新市場看起來利潤低、規模不明，接了反而拉低毛利。英特爾執行長歐德寧婉拒了 iPhone 的處理器訂單，事後承認實際出貨量是大家預估的 100 倍。蘋果改用 Arm 架構，幾年內手機獲利就超過英特爾的處理器生意。" },
    { q: "一座先進晶圓廠要兩、三百億美元。一家只賣一億顆晶片的公司，為什麼寧可付錢給台積電，也不自己蓋廠？",
      a: "晶圓廠的折舊與製程研發是固定成本，產能用不完也照付。一億顆約 100 mm² 的晶片只用掉一座月產 5 萬片晶圓廠約三分之一的產能；把整座廠的折舊和研發攤在一億顆上，每顆比付給代工廠還貴。代工廠把一座廠攤給很多客戶，每家只付自己用到的晶圓。輝達、高通、蘋果因此可以把錢花在設計與軟體上。" },
    { q: "輝達的 GPU 能成為 AI 的主力，只是因為晶片算得快嗎？",
      a: "不只。輝達 2006 年推出 CUDA，讓一般程式設計師也能用 GPU 做平行運算；書中引公司估計，到 2017 年至少投入 100 億美元。CUDA 免費，但只能跑在輝達的晶片上，大量研究與程式累積在它上面，形成類似當年 x86 的軟體護城河。書評指出原書對這類軟體優勢著墨不多。" }
  ],
  terms: [
    { zh: "創新者的兩難", en: "innovator's dilemma", m: "", d: "成功企業因既有業務太賺錢，不願投資看似利潤低的新市場，結果被新進者取代。" },
    { zh: "指令集架構", en: "instruction set architecture, ISA", m: "", d: "規定晶片如何執行運算的基本規則，像晶片的「語言文法」；軟體要依它撰寫。" },
    { zh: "x86", en: "x86", m: "", d: "英特爾與 AMD 使用、主宰個人電腦與伺服器的指令集；霸權來自軟體生態與轉換成本。" },
    { zh: "Arm 架構", en: "Arm", m: "", d: "以精簡指令集為基礎、以授權方式販售的省電架構，主宰手機；Arm 公司自己不製造晶片。" },
    { zh: "無晶圓廠公司", en: "fabless company", m: "", d: "只設計晶片、委外製造的公司；書中把 1984 年成立的晶片與技術公司視為第一家。" },
    { zh: "設計費", en: "non-recurring engineering, NRE", m: "\\mathrm{NRE}", d: "一顆晶片從設計、驗證到光罩的一次性費用；IBS 估計大型 2 奈米晶片約 7.25 億美元。" },
    { zh: "折舊", en: "depreciation", m: "F/N", d: "把建廠成本 F 攤到 N 年；不論產能用了多少，每年都要認列。" },
    { zh: "損益兩平出貨量", en: "break-even volume", m: "Q^*", d: "營收剛好等於總成本的出貨量；固定成本越高，需要賣越多才回本。" },
    { zh: "繪圖處理器", en: "GPU", m: "", d: "擁有數千個小核心、擅長同時做大量相同計算的晶片，原用於 3D 畫面，後來成為 AI 訓練主力。" },
    { zh: "CUDA", en: "CUDA", m: "", d: "輝達 2006 年推出的平台，讓 GPU 能用一般程式語言做非繪圖運算；只能跑在輝達晶片上。" },
    { zh: "整合元件製造商", en: "IDM", m: "", d: "設計與製造一手包辦的公司，例如英特爾；優點是兩者可互相最佳化，缺點是兩頭都要顧。" },
    { zh: "張量處理器", en: "TPU", m: "", d: "Google 為機器學習設計的專用晶片，代表雲端巨頭也開始自己設計 AI 晶片。" }
  ],
  practice: {
    intro: R`與模擬頁相同的一年期模型：建廠成本 $F=280$ 億美元（IBS 估計 2 奈米、月產 $W=5$ 萬片，2023）、折舊 $N=5$ 年、每片變動成本 $v=4{,}000$ 美元、代工稼動率 90%、代工毛利率 50%、設計費 7.25 億美元（IBS 估計）、自建廠每年製程研發 $RD=40$ 億美元、晶片售價 80 美元、晶粒 100 mm²（每片 640 顆毛晶粒）、良率 80%（每片 $g=512$ 顆好晶粒）。除 IBS 兩個數字外都是教學假設值。代工報價 $P_w=\dfrac{F/N/(12W\times0.9)+v}{1-\text{毛利率}}$。`,
    items: [
      { q: R`每年折舊 $F/N$，若產能 100% 用滿（每年 $12W=60$ 萬片），每片晶圓分攤多少美元折舊？（取整數）`,
        a: 9333, tol: 1,
        hint: R`$280\text{ 億}/5=56$ 億美元；$5.6\times10^9/600{,}000\approx9{,}333$。` },
      { q: R`代工廠稼動率 90%、毛利率 50%，每片晶圓報價 $P_w$ 約多少美元？（取整數）`,
        a: 28741, tol: 5,
        hint: R`$5.6\times10^9/540{,}000\approx10{,}370$，加變動成本 4,000 美元得 14,370，除以 $(1-0.5)$ 得約 28,741。媒體引述 2 奈米晶圓約 3 萬美元，量級相符。` },
      { q: R`委外代工時，損益兩平出貨量 $Q^*=\mathrm{NRE}/(\text{售價}-P_w/g)$ 約幾百萬顆？（取到小數點後一位）`,
        a: 30.4, tol: 0.2,
        hint: R`每顆晶圓成本 $28{,}741/512\approx56.1$ 美元，每顆貢獻 $80-56.1=23.9$ 美元；$7.25\times10^8/23.9\approx3{,}040$ 萬顆。` },
      { q: R`同一座廠內，自建與委外每年成本相等的晶圓數 $w=(RD+F/N)/(P_w-v)$。換算成出貨量約幾百萬顆？（取整數）`,
        a: 199, tol: 1,
        hint: R`$w=(40+56)\text{ 億}/(28{,}741-4{,}000)\approx38.8$ 萬片／年（一座廠產能的 65%），乘以 512 顆約 1.99 億顆。低於這個量，委外比較便宜。` }
    ]
  },
  notes: [
    { h: "一句話記住",
      b: "晶圓廠越來越貴，只有把產能攤給全世界客戶的代工廠扛得起；設計公司因此能把錢押在設計與軟體上。英特爾堅持一手包辦又守著 x86 的高毛利，先錯過手機、再卡在製程，而輝達靠 GPU 加上 CUDA 軟體，接走了 AI 時代。" },
    { h: "重點一：創新者的兩難與無晶圓廠革命",
      b: "2006 年賈伯斯宣布 Mac 改用英特爾處理器，看似英特爾帝國的又一次勝利。但商學碩士出身的執行長保羅・歐德寧（Paul Otellini）的任務是守住 x86 的高毛利；葛洛夫常把 x86 畫成城堡外的護城河。賈伯斯請英特爾替 iPhone 做處理器，歐德寧嫌價格太低而婉拒，事後承認出貨量是預估的 100 倍。1990 年蘋果等公司在英國劍橋合資成立 Arm，首任執行長羅賓・薩克斯比（Robin Saxby）堅持只授權、不製造；iPhone 改用 Arm 架構，早期由三星代工。<br><br>1984 年成立的晶片與技術公司被視為第一家無晶圓廠公司：好點子加上幾百萬美元就能創業，遠低於當時逾 1 億美元的建廠成本。1993 年黃仁勳（Jensen Huang）等三人在聖荷西一家 Denny's 創立輝達（NVIDIA）；雅各布斯 1985 年創立的高通也從不自己製造晶片。蘋果 2008 年收購 PA Semi、2010 年推出自研 A4，iPhone 上市四年內拿下全球手機利潤六成以上。手機背面寫著加州設計、中國組裝，作者補上一句：「But they can only be made in Taiwan.」（但它們只能在臺灣製造）。" },
    { h: "重點二：設計和製造分家的算術",
      b: R`<p>建廠成本 $F$ 每年折舊 $F/N$，再加上自己的製程研發 $RD$，這些都是固定成本；代工廠則把一座廠攤給許多客戶，每家只付晶圓報價 $P_w$。用模擬頁預設（2 奈米廠 280 億美元、晶片 100 mm²、售價 80 美元）：年出貨 1 億顆時，委外每顆約 63 美元、自建約 111 美元；委外約 3,000 萬顆就回本，自建要約 1.4 億顆；要到約 2 億顆、用掉一座廠 65% 產能，自建才開始比較便宜。</p>
<p>英特爾的處境正是反面：2010 年代每年研發逾 100 億美元，是台積電的 4 倍，但台積電每年的晶圓產量約是英特爾的 3 倍，打磨製程的機會更多。英特爾 2010 年代中期試過代工，只拿到一個大客戶就收攤；2015 年起 10 奈米、7 奈米一再延誤，業界普遍認為與太晚採用 EUV 有關。到 2020 年，全球一半的 EUV 機台裝在台積電。</p>` },
    { h: "重點三：補上原書的缺口──CUDA 與 AI",
      b: "CPU 擅長依序做各種事，AI 訓練卻需要重複大量相同的計算。輝達 2006 年推出 CUDA，讓 GPU 能做繪圖以外的平行運算；2010 年代初研究者發現用 GPU 訓練影像辨識快得多，輝達押注 AI。CUDA 免費，卻只能跑在輝達晶片上，十多年來大量研究程式、函式庫與工程師的技能都累積在它上面：這和英特爾的 x86 一樣，是軟體與生態系造成的轉換成本。書評指出原書對 CUDA、Wintel 這類軟體優勢只輕描淡寫。另一個值得注意的事實：輝達從未自己製造晶片，最先進的 GPU 全由台積電代工。" },
    { h: "〔今天的數字〕",
      b: `<ul>
<li><b>輝達：</b>電晶體數 H100 800 億（2022）→ Blackwell 2,080 億（2024，兩晶粒）→ Rubin 3,360 億（2026，兩晶粒、台積電 3 奈米）。2025-10-29 成為第一家市值 5 兆美元的公司；2026 會計年度營收 2,159 億美元，其中資料中心 1,937 億美元。<a href="https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/" target="_blank" rel="noopener">NVIDIA</a>、<a href="https://www.news4jax.com/news/2025/10/29/nvidia-has-started-the-5-trillion-club-a-look-at-its-rise-by-the-numbers/" target="_blank" rel="noopener">AP</a>、<a href="https://finviz.com/news/322510/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026" target="_blank" rel="noopener">財報</a></li>
<li><b>輝達人事：</b>2026-11-12 黃仁勳辭去執行長，董事會接受，由財務長 Colette Kress 代理執行長。<a href="https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" target="_blank" rel="noopener">NVIDIA 新聞稿</a></li>
<li><b>建廠成本：</b>書中：1990 年代新晶圓廠逾 1 億美元；先進邏輯廠約 200 億美元（約 2021）。最新估計：一座月產 5 萬片的 2 奈米廠約 280 億美元（IBS，2023）。<a href="https://www.tomshardware.com/tech-industry/firm-predicts-it-will-cost-dollar28-billion-to-build-a-2nm-fab-and-dollar30000-per-wafer-a-50-percent-increase-in-chipmaking-costs-as-complexity-rises" target="_blank" rel="noopener">Tom's Hardware</a></li>
<li><b>英特爾：</b>季辛格 2024-12 退休，陳立武（Lip-Bu Tan）2025-03 接任；首款 18A 產品 Panther Lake 2025-10 發表；美國政府 2025-08 入股 9.9%，輝達也投資 50 億美元。<a href="https://newsroom.intel.com/client-computing/intel-unveils-panther-lake-architecture-first-ai-pc-platform-built-on-18a" target="_blank" rel="noopener">Intel</a>、<a href="https://www.npr.org/2025/08/22/nx-s1-5509673/trump-says-us-government-will-take-stake-intel" target="_blank" rel="noopener">NPR</a></li>
</ul>` },
    { h: "〔書中勘誤〕",
      b: "書中談 2010 年葛洛夫的警告時，寫臉書「成立於 2006 年」；臉書實際成立於 2004 年。" },
    { h: "〔不同觀點〕",
      b: `<ul>
<li><b>軟體被低估：</b>The Chip Letter 認為原書對軟體（CUDA、Wintel、AI）只輕描淡寫，對智慧型手機的重要性也低估了。本集第四則重點就是補這個缺口。<a href="https://thechipletter.substack.com/p/chip-war-economics-battles-geopolitics" target="_blank" rel="noopener">The Chip Letter</a></li>
<li><b>創造性破壞的教材：</b>美國經濟研究所的書評把輝達在 AI 運算上超越英特爾，讀成熊彼得「創造性破壞」的例子。<a href="https://thedailyeconomy.org/article/book-review-how-the-chip-war-vindicates-economics/" target="_blank" rel="noopener">The Daily Economy</a></li>
<li><b>代工是唯一解嗎？</b>Kenneth Flamm 追問代工模式為何成為先進製造唯一可行的模式，書中沒有充分回答；英特爾 2025 年後重啟代工、爭取外部客戶，正是這個問題的實驗。<a href="https://www.cambridge.org/core/journals/journal-of-economic-history/article/chip-war-the-fight-for-the-worlds-most-critical-technology-by-chris-miller-new-york-ny-simon-and-schuster-2022-pp-464-3200-hardcover/1620C272B3E902EE431B93906C182EC1" target="_blank" rel="noopener">Journal of Economic History</a></li>
</ul>` },
    { h: "〔延伸閱讀〕",
      b: `<ul>
<li>作者 2024 年接受 Foreign Policy 專訪：輝達從未自己製造晶片，先進晶片高度依賴台積電。<a href="https://foreignpolicy.com/2024/12/13/trump-china-chips-semiconductors-tariffs/" target="_blank" rel="noopener">Foreign Policy</a></li>
<li>作者 2025 年專文：出口管制對製造有效、對 AI 模型有限。<a href="https://newsletter.ai-frontiers.org/p/how-us-export-controls-have-and-havent" target="_blank" rel="noopener">AI Frontiers</a></li>
<li>NVIDIA〈Inside NVIDIA Rubin GPU Architecture〉：3,360 億電晶體、HBM4 的技術細節。<a href="https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/" target="_blank" rel="noopener">NVIDIA 技術部落格</a></li>
</ul>` }
  ],
  quiz: [
    { q: "歐德寧婉拒 iPhone 處理器訂單，最主要的考量是什麼？",
      o: ["英特爾沒有能力設計低功耗晶片", "價格太低、看不出量，不想拉低毛利", "蘋果要求用 Arm 架構", "美國政府禁止"],
      a: 1, w: "這是典型的創新者的兩難。他事後承認實際出貨量是大家預估的 100 倍。" },
    { q: "x86 能長期稱霸個人電腦，主要靠什麼？",
      o: ["軟體生態與轉換成本", "它是技術上最省電的架構", "政府指定", "它是開放原始碼"],
      a: 0, w: "x86 稱霸是因為 IBM 第一台個人電腦剛好採用，之後軟體都依它撰寫；葛洛夫把它畫成城堡外的護城河。" },
    { q: "Arm 的商業模式是？",
      o: ["自建晶圓廠生產手機晶片", "只賣手機成品", "把架構授權給設計公司，由代工廠製造", "只做記憶體"],
      a: 2, w: "Arm 不製造晶片，授權架構給蘋果、高通等設計公司，再交給台積電、三星等代工廠生產。" },
    { q: "依本集的成本模型，年出貨量很小時委外代工比較便宜，主要原因是？",
      o: ["代工廠的晶圓品質比較好", "代工廠不收設計費", "代工廠沒有變動成本", "自建廠的折舊與製程研發是固定成本，產能用不完也要付"],
      a: 3, w: "固定成本攤在少量晶片上，每顆就很貴；代工廠把一座廠攤給很多客戶，每家只付用到的晶圓。" },
    { q: "作者說 iPhone 背面「加州設計、中國組裝」具有誤導性，因為？",
      o: ["其實是在日本設計", "最難取代的處理器只能在臺灣製造", "組裝其實在美國", "蘋果自己製造晶片"],
      a: 1, w: "組裝工作可以移到越南、印度，最先進的處理器卻只有台積電在臺灣做得出來。" },
    { q: "書中描述英特爾在 2010 年代失去製程領先，下列何者不是書中提到的原因？",
      o: ["10 奈米、7 奈米一再延誤，與太晚採用 EUV 有關", "代工業務缺乏開放、不與客戶競爭的文化", "晶圓產量只有台積電約三分之一", "英特爾的研發支出比台積電少"],
      a: 3, w: "相反地，英特爾每年研發逾 100 億美元，是台積電的 4 倍；問題在產量、文化與時機，不在錢。" },
    { q: "CUDA 為什麼被稱為輝達的軟體護城河？",
      o: ["它是英特爾開發的", "它只能在手機上用", "免費但只能跑在輝達晶片上，大量程式與人才累積在它上面", "它取代了 GPU 硬體"],
      a: 2, w: "使用者換到別家晶片，就得改寫程式、重學工具，這種轉換成本和 x86 很像。" },
    { q: "關於輝達 2026 年 11 月的人事，下列哪一個說法符合官方公告？",
      o: ["黃仁勳辭去執行長，財務長 Colette Kress 代理執行長", "輝達被英特爾收購", "黃仁勳改任台積電董事長", "輝達宣布自建晶圓廠"],
      a: 0, w: "依 NVIDIA 2026-11-12 新聞稿，董事會接受黃仁勳辭去執行長，由財務長 Colette Kress 代理。" }
  ],
  next: "下一集〈中國的挑戰：從「全民做半導體」到華為〉：中國每年花在進口晶片上的錢比進口原油還多。為什麼世界工廠做不出自己的晶片？",
  sim: {
    src: "sims/fabless.html",
    title: "設計和製造分家的算術：自建晶圓廠 vs 委外代工",
    desc: "一年期成本模型：依晶粒面積算出每片晶圓的毛晶粒數，乘上良率得到好晶粒；出貨量決定需要多少晶圓。自建晶圓廠要付整座廠的折舊（建廠成本 ÷ 折舊年數，不夠時再蓋一座）、製程研發與變動成本；委外代工則付晶圓報價，報價＝代工廠把一座廠攤給許多客戶後的每片成本 ÷（1－毛利率）。圖上是兩種做法的每顆成本對年出貨量（雙對數），虛線是售價，圓點是損益兩平出貨量。建廠成本 280 億美元（IBS 估計 2 奈米廠，2023）、設計費 7.25 億美元（IBS 估計）附來源，其餘為教學假設值。",
    try: [
      "用預設值，把年出貨量從 100 萬顆拉到 10 億顆：看兩條成本曲線在哪裡交叉（約 2 億顆），以及自建廠在超過一座廠產能時跳上去的階梯。",
      "把建廠成本調到 1 億美元（書中 1990 年代「逾 1 億美元」的量級）、製程研發調到 1 億、設計費降到 0.25 億：自建在約 1,500 萬顆就比代工便宜，這就是「真男人要有晶圓廠」還說得通的年代。",
      "把晶粒面積拉到 600 mm²（大型 AI 晶片）、售價拉到 500 美元：每片只剩約 72 顆好晶粒，每顆的晶圓成本暴增；委外約 720 萬顆就回本，而且因為很吃晶圓，自建與代工的交叉點也掉到約 2,800 萬顆。",
      "把代工毛利率從 50% 調到 70%：晶圓報價升到約 4.8 萬美元，售價 80 美元的晶片委外已經賣越多賠越多，交叉點也降到約 1.1 億顆。代工廠的議價能力越強，大客戶越想自己做。"
    ]
  }
}
