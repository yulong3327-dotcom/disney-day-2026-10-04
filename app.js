const stops = [
  { id: "tron", n: 1, time: "07:30", until: "08:05", title: "创极速光轮", area: "明日世界", type: "ride", priority: "must", x: 18.5, y: 34, summary: "早享第一站 · 必刷", detail: "从早享入口直奔明日世界，先玩创极速光轮。进队列前按现场要求寄存随身物品。", fallback: "当天暂未开放时，直接向动物城入口移动；下午再回明日世界补刷。" },
  { id: "zootopia", n: 2, time: "08:35", until: "10:00", title: "疯狂动物城：热力追踪", area: "疯狂动物城", type: "ride", priority: "must", x: 72, y: 12, summary: "开园后入区 · 必刷", detail: "08:05 起从明日世界向动物城移动。早享不包含提前进入动物城；正式开放后先排热力追踪，再在街区拍照。", fallback: "若队列异常长，记录实时等候并改为下午补刷，先保住 12:15 巡游。" },
  { id: "pirates", n: 3, time: "10:00", until: "10:45", title: "加勒比海盗：沉落宝藏之战", area: "宝藏湾", type: "ride", priority: "must", x: 85, y: 44, summary: "沿东侧向南 · 必刷", detail: "从动物城沿东侧进入宝藏湾，先玩加勒比海盗，随后在同一区域吃午饭。", fallback: "如排队超过 50 分钟，先吃午饭，巡游后再查等候；不要错过中午场。" },
  { id: "lunch", n: 4, time: "10:45", until: "11:25", title: "巴波萨烧烤午餐", area: "宝藏湾", type: "food", x: 87, y: 34.5, summary: "两人主餐参考约 198 元", detail: "近期官方菜单：卤豆腐脆葱菌菇面 89 元、香烤鸡腿菌菇黑米饭 109 元。尽量 11:25 前用完餐。", fallback: "若加勒比海盗排队耽误，改吃更快的近处简餐，演出结束后再补正餐。" },
  { id: "parade", n: 5, time: "11:45", until: "12:50", title: "12:15 花车巡游", area: "巡游路线", type: "show", x: 52, y: 53, summary: "11:45 到巡游路线 · 中午场", detail: "11:25 从宝藏湾往奇想花园一侧走，11:45 到巡游路线找位置。12:15 为官网公布的开场时间，花车经过你们站位可能更晚。", fallback: "官网目前另一场是 15:45，并非夜间；若中午场调整，按当天 App 改走下午场。" },
  { id: "soaring", n: 6, time: "13:00", until: "14:40", title: "翱翔·飞越地平线", area: "探险岛", type: "ride", priority: "must", x: 78.5, y: 68, summary: "巡游后向东南走 · 必刷", detail: "巡游后穿过奇想花园前往探险岛。先看官方 App 实时等候，时间窗已留较多排队缓冲。", fallback: "若等候超过 90 分钟，先玩附近短队项目并在 17:30 复查，四个必刷优先于二刷和矿山车。" },
  { id: "mine", n: 7, time: "14:50", until: "15:40", title: "七个小矮人矿山车", area: "梦幻世界", type: "ride", priority: "optional", x: 69, y: 24, summary: "机动项目 · 排队短才玩", detail: "从探险岛向梦幻世界移动；仅在预计 15:40 前能玩完时排队。否则逛梦幻世界、拍照并向明日世界前进。", fallback: "排队长就跳过，不挤占四个必刷项目或光轮二刷时间。" },
  { id: "tron-repeat", n: 8, time: "15:50", until: "16:50", title: "二刷创极速光轮", area: "明日世界", type: "ride", priority: "optional", x: 22, y: 38, summary: "很期待就二刷 · 以排队为准", detail: "从梦幻世界向明日世界移动。若前面四个必刷都已完成，且队列可接受，抓住二刷机会。", fallback: "若飞跃地平线或热力追踪尚未完成，二刷时段优先拿去补必刷。" },
  { id: "dinner", n: 9, time: "17:00", until: "17:40", title: "星露台餐厅晚餐", area: "明日世界", type: "food", x: 29.5, y: 46, summary: "两份主食参考约 198–218 元", detail: "就近吃晚餐。近期官方菜单：牛油果素汉堡 99 元，麻辣鸡肉汉堡或咖喱猪排饭 109 元。", fallback: "若前面项目拖时，晚餐可就近简化；当天菜品与价格以现场为准。" },
  { id: "night", n: 10, time: "19:10", until: "20:40", title: "20:00 城堡夜间演出", area: "奇想花园", type: "show", x: 46, y: 36, summary: "17:40–19:10 补漏与合照 · 19:10 就位", detail: "晚餐后留出补刷和合照时间，再回城堡区域。19:10 前后找观看位置，演出结束后预留疏散时间。", fallback: "可改看 21:15 场，但离园和取行李会更晚；演出可能因天气调整。" }
];

const morning = [
  { time: "05:30", title: "起床与早餐", summary: "吃前一晚准备好的早餐，检查身份证和手机电量。" },
  { time: "06:10", title: "退房寄存行李", summary: "若 4 日晚续住原酒店，可省去退房；班车时刻不合适就打车。" },
  { time: "07:00", title: "到乐园主入口", summary: "预留步行、安检和早享排队；两人一起入园。" }
];
const evening = [
  { time: "20:40", title: "离园，回酒店取行李", summary: "按人流预留出园和叫车时间；第二天下午去机场，今晚仍需安排住宿。" }
];

const pinContainer = document.getElementById("map-pins");
const list = document.getElementById("schedule-list");
const panel = document.getElementById("focus-panel");
const mapArt = document.getElementById("map-art");
const mapFrame = document.getElementById("map-frame");
const doneKey = "disney-2026-10-04-done";
let completed = new Set();
try { completed = new Set(JSON.parse(localStorage.getItem(doneKey) || "[]")); } catch { completed = new Set(); }
let selected = stops[0].id;
let zoom = 1;
let panX = 0;
let panY = 0;
let pointerStart = null;
let ignoreClick = false;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function tagName(type) { return type === "food" ? "用餐" : type === "show" ? "演出" : "项目"; }

function renderPins() {
  pinContainer.innerHTML = stops.filter(stop => stop.id !== "tron-repeat").map(stop => {
    const active = selected === stop.id || (stop.id === "tron" && selected === "tron-repeat");
    const done = completed.has(stop.id) && (stop.id !== "tron" || completed.has("tron-repeat"));
    const label = stop.id === "tron" ? "1·8" : stop.n;
    const accessible = stop.id === "tron" ? "第1站早享创极速光轮，第8站可二刷" : `第${stop.n}站 ${stop.title}，${stop.time}`;
    return `<button type="button" class="map-pin ${active ? "is-active" : ""} ${done ? "is-complete" : ""}" style="left:${stop.x}%;top:${stop.y}%" data-stop="${stop.id}" data-type="${stop.type}" aria-label="${escapeHtml(accessible)}" title="${escapeHtml(accessible)}">${label}</button>`;
  }).join("");
}

function renderSchedule() {
  const prep = morning.map(step => `<div class="schedule-item prep"><span class="time">${step.time}</span><div class="item-main"><div class="item-select static"><span class="item-title">${step.title}<span class="item-area">出发</span></span><span class="item-summary">${step.summary}</span></div></div></div>`).join("");
  const itinerary = stops.map(stop => `<div class="schedule-item ${selected === stop.id ? "is-active" : ""} ${completed.has(stop.id) ? "is-complete" : ""}" data-row="${stop.id}"><span class="time">${stop.time}</span><div class="item-main"><button type="button" class="item-select" data-select="${stop.id}" aria-label="查看${escapeHtml(stop.title)}的地图位置"><span class="item-title">${escapeHtml(stop.title)}<span class="item-area">${escapeHtml(stop.area)}</span></span><span class="item-summary">${escapeHtml(stop.summary)}</span></button><button type="button" class="complete-button" data-complete="${stop.id}" aria-label="${completed.has(stop.id) ? "标记未完成" : "标记已完成"}：${escapeHtml(stop.title)}" aria-pressed="${completed.has(stop.id)}" title="${completed.has(stop.id) ? "标记未完成" : "标记已完成"}">${completed.has(stop.id) ? "✓" : "○"}</button></div></div>`).join("");
  const finish = evening.map(step => `<div class="schedule-item prep"><span class="time">${step.time}</span><div class="item-main"><div class="item-select static"><span class="item-title">${step.title}<span class="item-area">收尾</span></span><span class="item-summary">${step.summary}</span></div></div></div>`).join("");
  list.innerHTML = prep + itinerary + finish;
  document.getElementById("progress-text").textContent = `${completed.size} / ${stops.length} 站`;
}

function renderFocus() {
  const stop = stops.find(s => s.id === selected);
  panel.innerHTML = `<div class="focus-top"><span class="focus-time">第 ${stop.n} 站 · ${stop.time}–${stop.until}</span><span class="tag ${stop.type}">${tagName(stop.type)}</span>${stop.priority ? `<span class="tag ${stop.priority}">${stop.priority === "must" ? "必刷" : "机动"}</span>` : ""}<span class="tag">${escapeHtml(stop.area)}</span></div><h3>${escapeHtml(stop.title)}</h3><p>${escapeHtml(stop.detail)}</p><div class="focus-fallback"><strong>现场调整：</strong>${escapeHtml(stop.fallback)}</div>`;
}

function applyTransform() {
  const maxX = Math.max(0, (mapFrame.clientWidth * (zoom - 1)) / 2);
  const maxY = Math.max(0, (mapFrame.clientHeight * (zoom - 1)) / 2);
  panX = Math.max(-maxX, Math.min(maxX, panX));
  panY = Math.max(-maxY, Math.min(maxY, panY));
  mapArt.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
}

function focusSelectedPin() {
  if (zoom === 1) return;
  const stop = stops.find(s => s.id === selected);
  panX = (0.5 - stop.x / 100) * mapFrame.clientWidth * zoom;
  panY = (0.5 - stop.y / 100) * mapFrame.clientHeight * zoom;
  applyTransform();
}

function selectStop(id, fromSchedule = false) {
  if (!stops.some(s => s.id === id)) return;
  selected = id;
  renderPins();
  renderSchedule();
  renderFocus();
  focusSelectedPin();
  if (fromSchedule && matchMedia("(max-width: 760px)").matches) {
    setView("map");
    document.getElementById("route").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setView(view) {
  document.querySelectorAll(".mobile-view-switch button").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-selected", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.getElementById("route").classList.toggle("is-hidden", view !== "map");
  document.getElementById("schedule").classList.toggle("is-hidden", view !== "schedule");
}

pinContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-stop]");
  if (button && !ignoreClick) selectStop(button.dataset.stop === "tron" && selected === "tron" ? "tron-repeat" : button.dataset.stop);
});

list.addEventListener("click", event => {
  const complete = event.target.closest("[data-complete]");
  if (complete) {
    const id = complete.dataset.complete;
    if (completed.has(id)) completed.delete(id); else completed.add(id);
    try { localStorage.setItem(doneKey, JSON.stringify([...completed])); } catch {}
    renderPins(); renderSchedule();
    return;
  }
  const select = event.target.closest("[data-select]");
  if (select) selectStop(select.dataset.select, true);
});

document.getElementById("clear-progress").addEventListener("click", () => {
  completed.clear();
  try { localStorage.removeItem(doneKey); } catch {}
  renderPins(); renderSchedule();
});

document.getElementById("navigation-form").addEventListener("submit", event => {
  event.preventDefault();
  const origin = document.getElementById("navigation-origin").value.trim() || "我的位置";
  const mode = document.getElementById("navigation-mode").value;
  const query = new URLSearchParams({ origin, destination: "上海迪士尼乐园", mode, region: "上海", output: "html", src: "codex.disney-day" });
  window.open(`https://api.map.baidu.com/direction?${query}`, "_blank", "noopener,noreferrer");
});

document.querySelectorAll(".mobile-view-switch button").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.getElementById("zoom-in").addEventListener("click", () => { zoom = Math.min(2.5, +(zoom + 0.25).toFixed(2)); focusSelectedPin(); });
document.getElementById("zoom-out").addEventListener("click", () => { zoom = Math.max(1, +(zoom - 0.25).toFixed(2)); if (zoom === 1) panX = panY = 0; applyTransform(); });
document.getElementById("zoom-reset").addEventListener("click", () => { zoom = 1; panX = panY = 0; applyTransform(); });

mapFrame.addEventListener("pointerdown", event => {
  if (event.target.closest(".map-pin") || zoom === 1) return;
  pointerStart = { x: event.clientX, y: event.clientY, panX, panY };
  ignoreClick = false;
  mapFrame.setPointerCapture(event.pointerId);
  mapFrame.classList.add("is-dragging");
});
mapFrame.addEventListener("pointermove", event => {
  if (!pointerStart) return;
  const dx = event.clientX - pointerStart.x;
  const dy = event.clientY - pointerStart.y;
  if (Math.abs(dx) + Math.abs(dy) > 4) ignoreClick = true;
  panX = pointerStart.panX + dx;
  panY = pointerStart.panY + dy;
  applyTransform();
});
function endDrag() { pointerStart = null; mapFrame.classList.remove("is-dragging"); setTimeout(() => { ignoreClick = false; }, 0); }
mapFrame.addEventListener("pointerup", endDrag);
mapFrame.addEventListener("pointercancel", endDrag);
window.addEventListener("resize", applyTransform);

renderPins();
renderSchedule();
renderFocus();
