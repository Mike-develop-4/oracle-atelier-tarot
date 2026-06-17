const majorArcana = [
  {
    name: "愚者",
    number: "0",
    symbol: "☉",
    element: "风",
    upright: ["新的开始", "自由", "信任直觉"],
    reversed: ["冒进", "逃避责任", "计划不足"],
    advice: "把尝试拆小，先验证风险最低的一步。",
  },
  {
    name: "魔术师",
    number: "I",
    symbol: "✦",
    element: "水星",
    upright: ["资源整合", "表达", "行动力"],
    reversed: ["分心", "信息不透明", "技巧滥用"],
    advice: "列出手上已有资源，并把承诺落到明确交付。",
  },
  {
    name: "女祭司",
    number: "II",
    symbol: "☾",
    element: "月亮",
    upright: ["洞察", "潜意识", "等待"],
    reversed: ["忽略直觉", "隐情", "情绪封闭"],
    advice: "暂缓表态，先观察重复出现的细微信号。",
  },
  {
    name: "皇后",
    number: "III",
    symbol: "✿",
    element: "金星",
    upright: ["滋养", "创造", "丰盛"],
    reversed: ["过度付出", "依赖", "边界松散"],
    advice: "把照顾他人与照顾自己放到同一优先级。",
  },
  {
    name: "皇帝",
    number: "IV",
    symbol: "♜",
    element: "火",
    upright: ["秩序", "权威", "结构"],
    reversed: ["控制欲", "僵化", "责任失衡"],
    advice: "用规则替代情绪拉扯，明确权限和截止时间。",
  },
  {
    name: "教皇",
    number: "V",
    symbol: "☩",
    element: "土",
    upright: ["传统", "学习", "契约"],
    reversed: ["教条", "盲从", "价值冲突"],
    advice: "确认这件事是否真的符合你的核心价值。",
  },
  {
    name: "恋人",
    number: "VI",
    symbol: "♡",
    element: "风",
    upright: ["选择", "关系", "一致性"],
    reversed: ["摇摆", "诱惑", "沟通断层"],
    advice: "别只看吸引力，检查双方长期目标是否兼容。",
  },
  {
    name: "战车",
    number: "VII",
    symbol: "◆",
    element: "水",
    upright: ["推进", "胜利", "意志"],
    reversed: ["失控", "方向冲突", "急躁"],
    advice: "把目标压缩成一个主战场，不要多线硬冲。",
  },
  {
    name: "力量",
    number: "VIII",
    symbol: "∞",
    element: "火",
    upright: ["勇气", "耐心", "温柔掌控"],
    reversed: ["自我怀疑", "压抑", "冲动"],
    advice: "用稳定节奏替代强撑，真正的力量来自可持续。",
  },
  {
    name: "隐士",
    number: "IX",
    symbol: "♢",
    element: "土",
    upright: ["内省", "独处", "智慧"],
    reversed: ["孤立", "逃避连接", "过度分析"],
    advice: "给自己安静判断的空间，但设定重新行动的日期。",
  },
  {
    name: "命运之轮",
    number: "X",
    symbol: "◌",
    element: "木星",
    upright: ["转机", "周期", "机会"],
    reversed: ["停滞", "反复", "抗拒变化"],
    advice: "顺势调整策略，别用旧方法处理新局面。",
  },
  {
    name: "正义",
    number: "XI",
    symbol: "⚖",
    element: "风",
    upright: ["公平", "因果", "判断"],
    reversed: ["偏见", "责任不清", "失衡"],
    advice: "回到事实、证据与边界，避免只凭感受定论。",
  },
  {
    name: "倒吊人",
    number: "XII",
    symbol: "▽",
    element: "水",
    upright: ["暂停", "换位", "牺牲"],
    reversed: ["拖延", "无效等待", "抗拒放下"],
    advice: "换一个角度定义成功，暂停不等于失败。",
  },
  {
    name: "死神",
    number: "XIII",
    symbol: "✧",
    element: "水",
    upright: ["结束", "蜕变", "清理"],
    reversed: ["不愿告别", "旧事牵制", "转化受阻"],
    advice: "主动结束消耗项，才会为新阶段腾出位置。",
  },
  {
    name: "节制",
    number: "XIV",
    symbol: "♒",
    element: "火",
    upright: ["调和", "复原", "中庸"],
    reversed: ["失衡", "过量", "节奏错配"],
    advice: "先校准节奏，再追求结果；混合方案比极端选择更优。",
  },
  {
    name: "恶魔",
    number: "XV",
    symbol: "♑",
    element: "土",
    upright: ["欲望", "束缚", "现实诱因"],
    reversed: ["松绑", "觉察成瘾", "重获主动"],
    advice: "识别真正让你上瘾的回报，并设置可执行的退出机制。",
  },
  {
    name: "高塔",
    number: "XVI",
    symbol: "⌁",
    element: "火",
    upright: ["突变", "真相", "重建"],
    reversed: ["延迟爆发", "抗拒拆除", "侥幸"],
    advice: "别粉饰结构性问题，越早修正，代价越小。",
  },
  {
    name: "星星",
    number: "XVII",
    symbol: "✶",
    element: "风",
    upright: ["希望", "疗愈", "愿景"],
    reversed: ["失去信心", "期待过高", "能量涣散"],
    advice: "把远景拆成今天能完成的恢复动作。",
  },
  {
    name: "月亮",
    number: "XVIII",
    symbol: "☽",
    element: "水",
    upright: ["迷雾", "梦境", "敏感"],
    reversed: ["真相浮现", "恐惧消退", "混乱减少"],
    advice: "不要在信息模糊时做最终决定，先排除误解。",
  },
  {
    name: "太阳",
    number: "XIX",
    symbol: "☀",
    element: "火",
    upright: ["成功", "坦诚", "生命力"],
    reversed: ["过度乐观", "延迟快乐", "自我中心"],
    advice: "让成果被看见，同时检查乐观假设是否可靠。",
  },
  {
    name: "审判",
    number: "XX",
    symbol: "♬",
    element: "火",
    upright: ["召唤", "复盘", "觉醒"],
    reversed: ["自责", "逃避复盘", "迟疑"],
    advice: "从旧经验里提炼判断，不必被旧身份限制。",
  },
  {
    name: "世界",
    number: "XXI",
    symbol: "◎",
    element: "土",
    upright: ["完成", "整合", "阶段成果"],
    reversed: ["临门一脚", "未闭环", "范围过大"],
    advice: "收尾比扩张更重要，先把已有成果打包成闭环。",
  },
];

const suitProfiles = [
  {
    suit: "权杖",
    element: "火",
    symbol: "♣",
    theme: "行动、热情、创造力与事业推进",
    advice: "把热情转化为可执行节奏，避免只停留在冲动上。",
  },
  {
    suit: "圣杯",
    element: "水",
    symbol: "♥",
    theme: "情绪、关系、直觉与内在满足",
    advice: "先确认真实感受，再决定如何表达与回应。",
  },
  {
    suit: "宝剑",
    element: "风",
    symbol: "♠",
    theme: "判断、沟通、冲突与理性切割",
    advice: "把事实和猜测分开，沟通时直指核心问题。",
  },
  {
    suit: "星币",
    element: "土",
    symbol: "♦",
    theme: "资源、金钱、身体与长期建设",
    advice: "把目标落到资源、时间和预算上，稳步累积。",
  },
];

const rankProfiles = [
  ["A", "Ace", ["种子", "启动", "潜力"], ["机会未落地", "动机不足", "起步受阻"]],
  ["II", "二", ["选择", "平衡", "协商"], ["摇摆", "僵持", "逃避决定"]],
  ["III", "三", ["扩展", "合作", "初步成果"], ["协作不稳", "期待落空", "方向分散"]],
  ["IV", "四", ["稳定", "基础", "安全感"], ["停滞", "保守", "安全区限制"]],
  ["V", "五", ["挑战", "竞争", "调整"], ["消耗", "内耗", "冲突升级"]],
  ["VI", "六", ["修复", "互惠", "阶段回报"], ["不公平", "旧账", "付出失衡"]],
  ["VII", "七", ["评估", "防守", "坚持"], ["过度防备", "信心不足", "判断延误"]],
  ["VIII", "八", ["推进", "练习", "效率"], ["急促", "重复劳动", "节奏失控"]],
  ["IX", "九", ["成熟", "收获", "自我确认"], ["孤军奋战", "满足延迟", "过度防御"]],
  ["X", "十", ["完成", "压力", "结果显现"], ["负担过重", "收尾困难", "责任堆积"]],
  ["P", "侍从", ["学习", "消息", "新手心态"], ["经验不足", "信息偏差", "承诺轻率"]],
  ["N", "骑士", ["行动", "追求", "推进力"], ["冒进", "路线不稳", "耐心不足"]],
  ["Q", "王后", ["接纳", "成熟表达", "稳定滋养"], ["情绪牵制", "过度照顾", "边界松动"]],
  ["K", "国王", ["掌控", "领导", "成熟决策"], ["固执", "权力拉扯", "控制过度"]],
];

const minorArcana = suitProfiles.flatMap((suit) =>
  rankProfiles.map(([number, rank, upright, reversed]) => ({
    name: `${suit.suit}${rank}`,
    number,
    symbol: suit.symbol,
    element: suit.element,
    upright,
    reversed,
    advice: suit.advice,
    theme: suit.theme,
  })),
);

const deck = [...majorArcana, ...minorArcana];

const spreads = {
  single: {
    title: "单张洞察",
    caption: "快速聚焦当下能量与关键提醒。",
    positions: ["核心讯息"],
  },
  three: {
    title: "三张牌阵",
    caption: "从过去、现在、趋势三层梳理问题走向。",
    positions: ["过去根源", "当前状态", "发展趋势"],
  },
  five: {
    title: "五张决策牌阵",
    caption: "适合事业、关系与重要选择的深度判断。",
    positions: ["现状", "阻碍", "潜在资源", "行动策略", "可能结果"],
  },
  daily: {
    title: "每日指引",
    caption: "快速生成今日主题、提醒与行动建议。",
    positions: ["今日主题", "需要留意", "行动建议"],
  },
};

const state = {
  spread: "single",
  drawn: [],
  flipped: new Set(),
};

const board = document.querySelector("#cardBoard");
const spreadTitle = document.querySelector("#spreadTitle");
const spreadCaption = document.querySelector("#spreadCaption");
const readingState = document.querySelector("#readingState");
const cardCount = document.querySelector("#cardCount");
const reversedCount = document.querySelector("#reversedCount");
const clarityScore = document.querySelector("#clarityScore");
const emptyState = document.querySelector("#emptyState");
const readingReport = document.querySelector("#readingReport");
const summaryText = document.querySelector("#summaryText");
const positionList = document.querySelector("#positionList");
const adviceList = document.querySelector("#adviceList");
const questionInput = document.querySelector("#questionInput");
const saveButton = document.querySelector("#saveButton");
const toast = document.querySelector("#toast");
const proDialog = document.querySelector("#proDialog");
const topicSelect = document.querySelector("#topicSelect");
const toneSelect = document.querySelector("#toneSelect");
const historyList = document.querySelector("#historyList");
const summaryCard = document.querySelector(".summary-card");

function sampleDeck(count) {
  const pool = [...deck].sort(() => Math.random() - 0.5);
  return pool.slice(0, count).map((card, index) => ({
    ...card,
    position: spreads[state.spread].positions[index],
    reversedDraw: Math.random() < 0.28,
  }));
}

function updateSpread(spread) {
  state.spread = spread;
  state.drawn = [];
  state.flipped.clear();

  document.querySelectorAll(".spread-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.spread === spread);
  });

  spreadTitle.textContent = spreads[spread].title;
  spreadCaption.textContent = spreads[spread].caption;
  cardCount.textContent = `${spreads[spread].positions.length}/78`;
  reversedCount.textContent = "0";
  clarityScore.textContent = "--";
  readingState.textContent = "待抽牌";
  saveButton.disabled = true;
  renderBoard();
  hideReport();
}

function renderBoard() {
  board.className = `card-board ${state.spread}`;
  board.innerHTML = "";

  const positions = state.drawn.length
    ? state.drawn.map((card) => card.position)
    : spreads[state.spread].positions;

  positions.forEach((position, index) => {
    const card = state.drawn[index];
    const slot = document.createElement("div");
    slot.className = "tarot-slot";

    const label = document.createElement("div");
    label.className = "slot-label";
    label.textContent = position;

    const button = document.createElement("button");
    button.className = `tarot-card ${state.flipped.has(index) ? "flipped" : ""}`;
    button.type = "button";
    button.disabled = !card;
    button.setAttribute("aria-label", card ? `翻开${position}` : position);
    button.addEventListener("click", () => flipCard(index));

    button.innerHTML = card ? cardMarkup(card) : placeholderMarkup();

    slot.append(label, button);
    board.append(slot);
  });
}

function placeholderMarkup() {
  return `
    <span class="card-inner">
      <span class="card-face card-back"></span>
      <span class="card-face card-front">
        <span class="arcana-number"><span>?</span><span>?</span></span>
        <span class="card-symbol">✦</span>
        <span class="card-name">待抽牌</span>
      </span>
    </span>
  `;
}

function cardMarkup(card) {
  const orientation = card.reversedDraw ? "逆位" : "正位";
  const frontClass = card.reversedDraw ? "card-face card-front reversed" : "card-face card-front";
  return `
    <span class="card-inner">
      <span class="card-face card-back"></span>
      <span class="${frontClass}">
        <span class="arcana-number"><span>${card.number}</span><span>${card.element}</span></span>
        <span class="orientation-tag">${orientation}</span>
        <span class="card-symbol">${card.symbol}</span>
        <span class="card-name">${card.name}</span>
      </span>
    </span>
  `;
}

function drawCards() {
  const count = spreads[state.spread].positions.length;
  state.drawn = sampleDeck(count);
  state.flipped.clear();
  readingState.textContent = "请翻牌";
  reversedCount.textContent = String(state.drawn.filter((card) => card.reversedDraw).length);
  clarityScore.textContent = "--";
  saveButton.disabled = true;
  hideReport();
  renderBoard();
}

function flipCard(index) {
  if (!state.drawn[index]) return;
  state.flipped.add(index);
  readingState.textContent =
    state.flipped.size === state.drawn.length ? "已完成" : `已翻 ${state.flipped.size}/${state.drawn.length}`;
  renderBoard();

  if (state.flipped.size === state.drawn.length) {
    generateReport();
  }
}

function hideReport() {
  emptyState.classList.remove("hidden");
  readingReport.classList.add("hidden");
  positionList.innerHTML = "";
  adviceList.innerHTML = "";
  summaryText.textContent = "";
}

function generateReport() {
  const question = questionInput.value.trim();
  const topic = topicSelect.value;
  const tone = toneSelect.value;
  const reversed = state.drawn.filter((card) => card.reversedDraw).length;
  const clarity = Math.max(62, Math.round(92 - reversed * 7 + Math.random() * 6));
  clarityScore.textContent = clarity;

  const dominantElements = countElements(state.drawn);
  const lead = state.drawn[0];
  const final = state.drawn[state.drawn.length - 1];
  const theme = dominantElements[0]?.[0] || lead.element;
  const questionText = question ? `围绕“${question}”，` : `围绕${topic}议题，`;
  const toneText = {
    理性决策: "本报告会更强调证据、边界和下一步取舍。",
    温柔疗愈: "本报告会更强调情绪承接、内在修复和安全节奏。",
    直接犀利: "本报告会更直接指出拖延、幻想或需要面对的现实。",
  }[tone];

  const summary =
    `${questionText}本次牌面以「${lead.name}」开启，并由「${final.name}」收束，显示当前议题的主轴是${theme}能量。` +
    `${reversed ? `其中 ${reversed} 张逆位提示阻力主要来自节奏、边界或未被承认的情绪。` : "牌面整体顺畅，适合把想法推进到可执行层面。"}` +
    `建议把注意力放在最可控的下一步，而不是一次性追求完整答案。${toneText}`;
  typeSummary(summary);

  positionList.innerHTML = "";
  state.drawn.forEach((card) => {
    const meanings = card.reversedDraw ? card.reversed : card.upright;
    const item = document.createElement("div");
    item.className = "position-item";
    item.innerHTML = `
      <div class="position-title">
        <strong>${card.position}：${card.name}</strong>
        <span class="tag">${card.reversedDraw ? "逆位" : "正位"}</span>
        <span class="tag">${card.element}</span>
        ${card.theme ? `<span class="tag">小阿尔卡那</span>` : `<span class="tag">大阿尔卡那</span>`}
      </div>
      <div class="keywords">
        ${meanings.map((word) => `<span class="keyword">${word}</span>`).join("")}
      </div>
      <p>${buildInterpretation(card, meanings)}</p>
    `;
    positionList.append(item);
  });

  adviceList.innerHTML = "";
  buildAdvice().forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    adviceList.append(li);
  });

  emptyState.classList.add("hidden");
  readingReport.classList.remove("hidden");
  saveButton.disabled = false;
}

function typeSummary(text) {
  summaryText.textContent = "";
  summaryCard.classList.add("typing");
  let index = 0;
  window.clearInterval(typeSummary.timer);
  typeSummary.timer = window.setInterval(() => {
    summaryText.textContent = text.slice(0, index);
    index += 2;
    if (index > text.length) {
      summaryText.textContent = text;
      summaryCard.classList.remove("typing");
      window.clearInterval(typeSummary.timer);
    }
  }, 18);
}

function countElements(cards) {
  const counts = cards.reduce((acc, card) => {
    acc[card.element] = (acc[card.element] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function buildInterpretation(card, meanings) {
  const tone = card.reversedDraw
    ? "这张逆位牌通常指出能量被压住、用力方向不够精准，或有一层尚未处理的心理阻力。"
    : "这张正位牌说明相关能量正在形成支持，适合主动承接并转化为行动。";
  const theme = card.theme ? `它所属牌组对应${card.theme}。` : "";

  return `${tone}在「${card.position}」位置上，它强调${meanings.join("、")}。${theme}${card.advice}`;
}

function buildAdvice() {
  const base = state.drawn.map((card) => card.advice);
  const hasTower = state.drawn.some((card) => card.name === "高塔");
  const hasMoon = state.drawn.some((card) => card.name === "月亮");
  const hasSun = state.drawn.some((card) => card.name === "太阳");
  const extra = [];

  if (hasTower) {
    extra.push("优先处理已经暴露的结构性问题，不要继续依赖临时补救。");
  }
  if (hasMoon) {
    extra.push("在关键沟通前先确认事实，避免把想象当成结论。");
  }
  if (hasSun) {
    extra.push("可以增加曝光与表达，主动争取资源会带来正反馈。");
  }

  return [...new Set([...base.slice(0, 3), ...extra])].slice(0, 4);
}

function saveReading() {
  const payload = {
    savedAt: new Date().toISOString(),
    question: questionInput.value.trim(),
    topic: topicSelect.value,
    tone: toneSelect.value,
    spread: spreads[state.spread].title,
    cards: state.drawn.map((card) => ({
      position: card.position,
      name: card.name,
      orientation: card.reversedDraw ? "逆位" : "正位",
    })),
    summary: summaryText.textContent,
  };

  const history = JSON.parse(localStorage.getItem("oracleAtelierReadings") || "[]");
  history.unshift(payload);
  localStorage.setItem("oracleAtelierReadings", JSON.stringify(history.slice(0, 12)));
  renderHistory();
  showToast("已保存到本地档案");
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("oracleAtelierReadings") || "[]");
  historyList.innerHTML = "";

  if (!history.length) {
    historyList.innerHTML = `<span class="history-empty">暂无保存记录</span>`;
    return;
  }

  history.slice(0, 6).forEach((item) => {
    const node = document.createElement("div");
    node.className = "history-item";
    const title = item.question || `${item.topic || "综合"}解读`;
    const cards = item.cards.map((card) => `${card.name}${card.orientation}`).join(" / ");
    node.innerHTML = `
      <strong>${title}</strong>
      <span>${item.spread} · ${new Date(item.savedAt).toLocaleDateString("zh-CN")}</span>
      <span>${cards}</span>
    `;
    historyList.append(node);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".spread-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateSpread(tab.dataset.spread));
});

document.querySelector("#drawButton").addEventListener("click", drawCards);
document.querySelector("#resetButton").addEventListener("click", () => updateSpread(state.spread));
saveButton.addEventListener("click", saveReading);
document.querySelector("#clearHistoryButton").addEventListener("click", () => {
  localStorage.removeItem("oracleAtelierReadings");
  renderHistory();
  showToast("历史档案已清空");
});

document.querySelector("#proButton").addEventListener("click", () => {
  if (typeof proDialog.showModal === "function") {
    proDialog.showModal();
  } else {
    showToast("当前浏览器不支持弹窗组件");
  }
});

updateSpread("single");
renderHistory();
