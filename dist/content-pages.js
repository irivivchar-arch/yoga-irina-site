function escapeContentText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

const flowCardsEl = document.getElementById("flowCards");
if (flowCardsEl && window.INSIDE_FLOW_RECORDINGS) {
  flowCardsEl.innerHTML = window.INSIDE_FLOW_RECORDINGS.map((flow, index) => `
    <a class="flow-card" href="${flow.url}" target="_blank" rel="noopener noreferrer" aria-label="Открыть флоу: ${escapeContentText(flow.title)}">
      <span class="flow-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="flow-cover">
        <img src="${flow.thumbnail}" alt="" loading="lazy" />
        <span class="play-mark" aria-hidden="true"><i></i></span>
        <span class="class-duration">${flow.duration}</span>
      </span>
      <span class="flow-copy">
        <small>Полная версия</small>
        <strong>${escapeContentText(flow.title)}</strong>
        <span>Смотреть флоу <b aria-hidden="true">↗</b></span>
      </span>
    </a>
  `).join("");
}

const classCardsEl = document.getElementById("classCards");
const classFiltersEl = document.getElementById("classFilters");
const recordingLabels = { all: "Все записи", yoga: "Хатха-йога", hammock: "Йога в гамаках · архив" };
let activeRecordingStyle = "all";

function renderClassFilters() {
  if (!classFiltersEl) return;
  classFiltersEl.innerHTML = Object.entries(recordingLabels).map(([key, label]) => {
    const count = key === "all" ? window.CLASS_RECORDINGS.length : window.CLASS_RECORDINGS.filter((item) => item.style === key).length;
    return `<button class="class-filter${activeRecordingStyle === key ? " active" : ""}" type="button" data-class-filter="${key}">${label} <span>${count}</span></button>`;
  }).join("");
}

function renderClassCards() {
  if (!classCardsEl) return;
  const fixedStyle = classCardsEl.dataset.style;
  const limit = Number(classCardsEl.dataset.limit || 0);
  const selectedStyle = fixedStyle || activeRecordingStyle;
  const filteredRecordings = selectedStyle === "all"
    ? window.CLASS_RECORDINGS
    : window.CLASS_RECORDINGS.filter((item) => item.style === selectedStyle);
  const recordings = limit > 0 ? filteredRecordings.slice(0, limit) : filteredRecordings;
  classCardsEl.innerHTML = recordings.map((recording) => `
    <a${recording.id === "vTHiEe4Fhm4" ? ' id="stretching"' : recording.id === "bU_SpIOyrzY" ? ' id="core"' : ""} class="class-card" href="${recording.url}" target="_blank" rel="noopener noreferrer" aria-label="Открыть занятие: ${escapeContentText(recording.title)}">
      <span class="class-cover">
        <img src="${recording.thumbnail}" alt="" loading="lazy" />
        <span class="play-mark" aria-hidden="true"><i></i></span>
        <span class="class-duration">${recording.duration}</span>
      </span>
      <span class="class-copy">
        <small>${recordingLabels[recording.style]}</small>
        <strong>${escapeContentText(recording.title)}</strong>
        <span>Смотреть на YouTube <b aria-hidden="true">↗</b></span>
      </span>
    </a>
  `).join("");
}

if (classCardsEl && window.CLASS_RECORDINGS) {
  if (classFiltersEl) {
    classFiltersEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-class-filter]");
      if (!button) return;
      activeRecordingStyle = button.dataset.classFilter;
      renderClassFilters();
      renderClassCards();
    });
    renderClassFilters();
  }
  renderClassCards();
  if (["#stretching", "#core"].includes(window.location.hash)) {
    requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView({ block: "center" }));
  }
}
