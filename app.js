const stops = [
  { id: "tron", n: 1, time: "07:30", until: "08:05", title: "创极速光轮", area: "明日世界", type: "ride", priority: "must", x: 18.5, y: 34, summary: "早享第一站 · 必刷", detail: "从早享入口直奔明日世界，先玩创极速光轮。若首刷结束早、二刷排队仅约 10–15 分钟，可就地二刷；最迟 08:05 离开，赶往动物城。", fallback: "未开放或二刷排队长，就向动物城移动，不为二刷横穿园区。" },
  { id: "zootopia", n: 2, time: "08:35", until: "09:50", title: "疯狂动物城：热力追踪", area: "疯狂动物城", type: "ride", priority: "must", x: 72, y: 12, summary: "正式开园后入区 · 必刷", detail: "沿园区北侧向东到动物城。早享不包含提前进入动物城；正式开放后先排热力追踪，再视时间拍照。", fallback: "若排队耗时过长，矿山车直接跳过；中午巡游前留在梦幻世界东侧。" },
  { id: "mine", n: 3, time: "10:00", until: "11:20", title: "七个小矮人矿山车", area: "梦幻世界", type: "ride", priority: "optional", x: 69, y: 24, summary: "看实时等候 · 可一键跳过", detail: "离开动物城后到相邻的矿山车。仅在预计 11:20 前能结束时排队；若跳过，可在梦幻世界东侧拍照、吃自带小食或玩附近短队项目。", fallback: "排队长就跳过，直接去梦幻世界东侧巡游沿线，避免为可选项目误了中午场。" },
  { id: "parade", n: 4, time: "11:45", until: "12:50", title: "12:15 花车巡游", area: "梦幻世界东侧", type: "show", x: 62, y: 36, summary: "宝藏湾入口附近的巡游沿线 · 中午场", detail: "从矿山车向南到梦幻世界东侧、宝藏湾入口附近的官方巡游沿线。11:45 前后按演职人员指引找允许的站位；12:15 是开场时间，花车到此可能更晚。", fallback: "以当天官方 App、巡游路线和现场指引为准；若此段不开放，选同一侧最近的观演位置。" },
  { id: "lunch", n: 5, time: "13:00", until: "13:40", title: "巴波萨烧烤午餐", area: "宝藏湾", type: "food", x: 87, y: 34.5, summary: "两人主餐参考约 198 元", detail: "看完花车向东进入宝藏湾，先在巴波萨烧烤用餐，再向南前往加勒比海盗。早餐与午餐间较久，上午可带合规小食补给。近期官方菜单：卤豆腐脆葱菌菇面 89 元、香烤鸡腿菌菇黑米饭 109 元。", fallback: "若花车经过较晚或餐厅等候较长，选宝藏湾附近营业中的简餐；菜单和价格以现场为准。" },
  { id: "pirates", n: 6, time: "13:45", until: "14:45", title: "加勒比海盗：沉落宝藏之战", area: "宝藏湾", type: "ride", priority: "must", x: 85, y: 44, summary: "午餐后向南 · 必刷", detail: "从巴波萨烧烤继续向南走到加勒比海盗，不再回到梦幻世界。排队耗时按当天实时等候调整。", fallback: "若等候过长，优先保证加勒比海盗和飞越地平线两个必刷，取消附近机动项目。" },
  { id: "soaring", n: 7, time: "15:00", until: "16:45", title: "翱翔·飞越地平线", area: "探险岛", type: "ride", priority: "must", x: 78.5, y: 68, summary: "从宝藏湾向南到探险岛 · 必刷", detail: "离开加勒比海盗后沿园区东侧向南去探险岛。先看实时等候，下午时间窗留作排队缓冲。", fallback: "若队列异常长，晚餐顺延并留在探险岛附近稍晚复查，不为其他项目横穿园区。" },
  { id: "dinner", n: 8, time: "17:00", until: "17:45", title: "部落丰盛堂晚餐", area: "探险岛", type: "food", x: 66, y: 58, summary: "飞越地平线后就近吃", detail: "飞越地平线后往探险岛西侧走，晚餐选择部落丰盛堂；营业与价格以当天官方 App 或现场为准。", fallback: "若部落丰盛堂未营业，沿返回城堡方向选择营业中的餐厅。" },
  { id: "night", n: 9, time: "19:10", until: "20:40", title: "20:00 城堡夜间演出", area: "奇想花园", type: "show", x: 46, y: 43, summary: "17:45–19:10 合照与休息 · 19:10 就位", detail: "晚餐后沿奇想花园方向回到城堡南侧的现场开放观演区。19:10 前后找观看位置，演出结束后预留疏散时间。", fallback: "可改看 21:15 场，但离园和取行李会更晚；演出可能因天气调整。" }
];

const morning = [
  { time: "05:30", title: "起床与早餐", summary: "吃前一晚准备好的早餐，检查身份证和手机电量。" },
  { time: "06:10", title: "退房寄存行李", summary: "若 4 日晚续住原酒店，可省去退房；班车时刻不合适就打车。" },
  { time: "07:00", title: "到乐园主入口", summary: "预留步行、安检和早享排队；两人一起入园。" }
];
const evening = [
  { time: "20:40", title: "离园，回酒店取行李", summary: "按人流预留出园和叫车时间；第二天下午去机场，今晚仍需安排住宿。" }
];

const legGuidance = [
  "从明日世界沿北侧主路向东，经过玩具总动员、梦幻世界外围前往疯狂动物城。",
  "离开动物城向南到相邻的矿山车；若等候过长，沿梦幻世界东侧直接去看巡游。",
  "从矿山车向南到梦幻世界东侧、宝藏湾入口附近的官方巡游沿线。",
  "巡游结束后向东进入宝藏湾，按巴波萨烧烤现场标识用餐。",
  "午餐后继续向南，前往同在宝藏湾的加勒比海盗入口。",
  "加勒比海盗结束后沿东侧向南进入探险岛，寻找飞越地平线。",
  "飞越地平线后往探险岛西侧走，按部落丰盛堂现场标识前往晚餐。",
  "晚餐后从探险岛向西北返回奇想花园，在城堡前按现场动线就位。"
];

const pinContainer = document.getElementById("map-pins");
const list = document.getElementById("schedule-list");
const panel = document.getElementById("focus-panel");
const mapArt = document.getElementById("map-art");
const mapFrame = document.getElementById("map-frame");
const parkFromSelect = document.getElementById("park-from");
const parkToSelect = document.getElementById("park-to");
const routeOverlay = document.getElementById("map-route");
const doneKey = "disney-2026-10-04-done";
let completed = new Set();
try { completed = new Set(JSON.parse(localStorage.getItem(doneKey) || "[]")); } catch { completed = new Set(); }
completed = new Set([...completed].filter(id => stops.some(stop => stop.id === id)));
const skippedOptional = new Set();
let selected = stops[0].id;
let parkFromId = stops[0].id;
let parkToId = stops[1].id;
let zoom = 1;
let panX = 0;
let panY = 0;
let pointerStart = null;
let ignoreClick = false;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function tagName(type) { return type === "food" ? "用餐" : type === "show" ? "演出" : "项目"; }

function nextStopAfter(id) {
  const index = stops.findIndex(stop => stop.id === id);
  return stops.slice(index + 1).find(stop => !skippedOptional.has(stop.id));
}

function previousStopBefore(id) {
  const index = stops.findIndex(stop => stop.id === id);
  return stops.slice(0, index).reverse().find(stop => !skippedOptional.has(stop.id));
}

function renderNextStop() {
  const next = nextStopAfter(selected);
  const name = document.getElementById("next-stop-name");
  const button = document.getElementById("go-next-stop");
  const skip = document.getElementById("skip-optional");
  name.textContent = next ? `${next.time} · ${next.title}` : "行程结束 · 离园取行李";
  name.title = next ? next.title : "";
  button.disabled = !next;
  skip.hidden = !next || next.priority !== "optional";
}

function renderParkRoute() {
  const from = stops.find(stop => stop.id === parkFromId);
  const to = stops.find(stop => stop.id === parkToId);
  const fromIndex = stops.indexOf(from);
  const toIndex = stops.indexOf(to);
  parkFromSelect.value = parkFromId;
  parkToSelect.value = parkToId;
  document.getElementById("park-leg-count").textContent = toIndex === fromIndex + 1 ? `第 ${toIndex} / ${stops.length - 1} 段` : "自选站点";
  document.getElementById("park-previous").disabled = !previousStopBefore(from.id);
  document.getElementById("park-next").disabled = !nextStopAfter(to.id);

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const vertical = dy < -8 ? "北" : dy > 8 ? "南" : "";
  const horizontal = dx < -8 ? "西" : dx > 8 ? "东" : "";
  const direction = vertical || horizontal ? `大致向${horizontal}${vertical}移动。` : "两站距离较近。";
  const guidance = from.id === to.id ? "起点与终点相同，请选择另一站。" : from.id === "zootopia" && to.id === "parade" ? "跳过矿山车后，从动物城向南到梦幻世界东侧的官方巡游沿线。" : toIndex === fromIndex + 1 ? legGuidance[fromIndex] : `${from.area} → ${to.area}，${direction}请按沿途指示寻找可通行步道。`;
  document.getElementById("park-direction").textContent = guidance;

  if (from.x === to.x && from.y === to.y) {
    routeOverlay.innerHTML = "";
    return;
  }
  const x1 = from.x * 10, y1 = from.y * 10, x2 = to.x * 10, y2 = to.y * 10;
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const arrowX = x1 + (x2 - x1) * .72;
  const arrowY = y1 + (y2 - y1) * .72;
  const path = `M ${x1} ${y1} L ${x2} ${y2}`;
  routeOverlay.innerHTML = `<path class="route-halo" d="${path}"/><path class="route-line" d="${path}"/><path class="route-arrow" d="M -14 -9 L 14 0 L -14 9 Z" transform="translate(${arrowX} ${arrowY}) rotate(${angle})"/><circle class="route-end" cx="${x2}" cy="${y2}" r="12"/>`;
}

function setParkRoute(fromId, toId, updateSelected = true) {
  if (!stops.some(stop => stop.id === fromId) || !stops.some(stop => stop.id === toId)) return;
  parkFromId = fromId;
  parkToId = toId;
  if (updateSelected) {
    selected = fromId;
    skippedOptional.delete(fromId);
  }
  zoom = 1;
  panX = panY = 0;
  applyTransform();
  renderParkRoute();
  renderPins();
  renderSchedule();
  renderFocus();
}

function syncRouteToStop(id) {
  const index = stops.findIndex(stop => stop.id === id);
  if (index === stops.length - 1) {
    parkFromId = stops[index - 1].id;
    parkToId = id;
  } else {
    parkFromId = id;
    parkToId = nextStopAfter(id).id;
  }
  renderParkRoute();
}

function renderPins() {
  pinContainer.innerHTML = stops.map(stop => {
    const accessible = `第${stop.n}站 ${stop.title}，${stop.time}`;
    return `<button type="button" class="map-pin ${selected === stop.id ? "is-active" : ""} ${completed.has(stop.id) ? "is-complete" : ""} ${stop.id === parkFromId ? "is-route-start" : ""} ${stop.id === parkToId ? "is-route-end" : ""}" style="left:${stop.x}%;top:${stop.y}%" data-stop="${stop.id}" data-type="${stop.type}" aria-label="${escapeHtml(accessible)}" title="${escapeHtml(accessible)}">${stop.n}</button>`;
  }).join("");
}

function renderSchedule() {
  const prep = morning.map(step => `<div class="schedule-item prep"><span class="time">${step.time}</span><div class="item-main"><div class="item-select static"><span class="item-title">${step.title}<span class="item-area">出发</span></span><span class="item-summary">${step.summary}</span></div></div></div>`).join("");
  const itinerary = stops.map(stop => `<div class="schedule-item ${selected === stop.id ? "is-active" : ""} ${completed.has(stop.id) ? "is-complete" : ""} ${skippedOptional.has(stop.id) ? "is-skipped" : ""}" data-row="${stop.id}"><span class="time">${stop.time}</span><div class="item-main"><button type="button" class="item-select" data-select="${stop.id}" aria-label="查看${escapeHtml(stop.title)}的地图位置"><span class="item-title">${escapeHtml(stop.title)}<span class="item-area">${escapeHtml(stop.area)}</span></span><span class="item-summary">${skippedOptional.has(stop.id) ? "已跳过 · " : ""}${escapeHtml(stop.summary)}</span></button><button type="button" class="complete-button" data-complete="${stop.id}" aria-label="${completed.has(stop.id) ? "标记未完成" : "标记已完成"}：${escapeHtml(stop.title)}" aria-pressed="${completed.has(stop.id)}" title="${completed.has(stop.id) ? "标记未完成" : "标记已完成"}">${completed.has(stop.id) ? "✓" : "○"}</button></div></div>`).join("");
  const finish = evening.map(step => `<div class="schedule-item prep"><span class="time">${step.time}</span><div class="item-main"><div class="item-select static"><span class="item-title">${step.title}<span class="item-area">收尾</span></span><span class="item-summary">${step.summary}</span></div></div></div>`).join("");
  list.innerHTML = prep + itinerary + finish;
  document.getElementById("progress-text").textContent = `${completed.size} / ${stops.length} 站`;
}

function renderFocus() {
  const stop = stops.find(s => s.id === selected);
  panel.innerHTML = `<div class="focus-top"><span class="focus-time">第 ${stop.n} 站 · ${stop.time}–${stop.until}</span><span class="tag ${stop.type}">${tagName(stop.type)}</span>${stop.priority ? `<span class="tag ${stop.priority}">${stop.priority === "must" ? "必刷" : "机动"}</span>` : ""}<span class="tag">${escapeHtml(stop.area)}</span></div><h3>${escapeHtml(stop.title)}</h3><p>${escapeHtml(stop.detail)}</p><div class="focus-fallback"><strong>现场调整：</strong>${escapeHtml(stop.fallback)}</div>`;
  renderNextStop();
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
  skippedOptional.delete(id);
  syncRouteToStop(id);
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
  if (button && !ignoreClick) selectStop(button.dataset.stop);
});

document.getElementById("go-next-stop").addEventListener("click", () => {
  const next = nextStopAfter(selected);
  if (!next) return;
  parkFromId = selected;
  parkToId = next.id;
  selected = next.id;
  zoom = 1;
  panX = panY = 0;
  applyTransform();
  renderParkRoute();
  renderPins();
  renderSchedule();
  renderFocus();
  if (matchMedia("(max-width: 760px)").matches) setView("map");
  mapFrame.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("skip-optional").addEventListener("click", () => {
  const next = nextStopAfter(selected);
  if (!next || next.priority !== "optional") return;
  skippedOptional.add(next.id);
  syncRouteToStop(selected);
  renderPins();
  renderSchedule();
  renderNextStop();
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

const parkOptions = stops.map(stop => `<option value="${stop.id}">${stop.n}. ${escapeHtml(stop.title)}</option>`).join("");
parkFromSelect.innerHTML = parkOptions;
parkToSelect.innerHTML = parkOptions;
parkFromSelect.addEventListener("change", () => setParkRoute(parkFromSelect.value, parkToSelect.value));
parkToSelect.addEventListener("change", () => setParkRoute(parkFromSelect.value, parkToSelect.value));
document.getElementById("park-previous").addEventListener("click", () => {
  const previous = previousStopBefore(parkFromId);
  if (previous) setParkRoute(previous.id, parkFromId);
});
document.getElementById("park-next").addEventListener("click", () => {
  const next = nextStopAfter(parkToId);
  if (next) setParkRoute(parkToId, next.id);
});
document.getElementById("park-navigation").addEventListener("submit", event => {
  event.preventDefault();
  setParkRoute(parkFromSelect.value, parkToSelect.value);
  mapFrame.scrollIntoView({ behavior: "smooth", block: "center" });
});

const navigationOrigin = document.getElementById("navigation-origin");
const navigationReturn = document.getElementById("navigation-return");
navigationOrigin.addEventListener("input", () => { navigationReturn.disabled = !navigationOrigin.value.trim(); });
document.getElementById("navigation-form").addEventListener("submit", event => {
  event.preventDefault();
  const hotel = navigationOrigin.value.trim();
  const returning = event.submitter?.dataset.direction === "to-hotel";
  if (returning && !hotel) return;
  const origin = returning ? "上海迪士尼乐园" : (hotel || "我的位置");
  const destination = returning ? hotel : "上海迪士尼乐园";
  const mode = document.getElementById("navigation-mode").value;
  const baiduMode = { driving: "nav", transit: "bt", walking: "walk" }[mode];
  const route = `${baiduMode}&sn=2$$$$$$${origin}$$$$$$&en=2$$$$$$${destination}$$$$$$&sc=289&ec=289${mode === "transit" ? "&c=289" : ""}`;
  const url = `https://map.baidu.com/?l=&s=${encodeURIComponent(route)}`;
  document.getElementById("baidu-map").src = url;
  document.getElementById("map-fullscreen").href = url;
  document.querySelector(".embedded-map").scrollIntoView({ behavior: "smooth", block: "start" });
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

renderParkRoute();
renderPins();
renderSchedule();
renderFocus();
