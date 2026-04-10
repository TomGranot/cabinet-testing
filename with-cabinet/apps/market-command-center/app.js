const watchlist = [
  {
    competitor: "Linear",
    trigger: "Linear Asks launch",
    impact: "High",
    nextAction: "Publish async comparison without reusing the March angle.",
  },
  {
    competitor: "Jira",
    trigger: "AI Assist messaging refresh",
    impact: "Medium",
    nextAction: "Keep migration positioning current and practical.",
  },
  {
    competitor: "Height",
    trigger: "AI beta rollout",
    impact: "Medium-Low",
    nextAction: "Use fair comparison content to build credibility.",
  },
];

const pipeline = [
  {
    status: "Queued",
    title: "Linear Asks versus DevFlow async workflows",
    channel: "Tweet Thread",
    date: "Apr 11",
  },
  {
    status: "Queued",
    title: "Weekly market brief for leadership",
    channel: "Brief",
    date: "Apr 13",
  },
  {
    status: "Queued",
    title: "From Jira to DevFlow in one afternoon",
    channel: "Case Study",
    date: "Apr 20",
  },
];

const metrics = [
  { label: "Tracked competitors", value: "3" },
  { label: "Published pieces", value: "5" },
  { label: "Queued outputs", value: "3" },
  { label: "Shared source files", value: "6" },
];

function badgeClass(impact) {
  if (impact === "High") return "high";
  if (impact === "Medium") return "medium";
  return "low";
}

function renderMetrics() {
  document.getElementById("metrics").innerHTML = metrics
    .map(
      (metric) => `
        <div class="metric">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </div>
      `
    )
    .join("");
}

function renderWatchlist(items) {
  document.getElementById("watchlist").innerHTML = items
    .map(
      (item) => `
        <div class="watch-item">
          <div class="topline">
            <strong>${item.competitor}</strong>
            <span class="badge ${badgeClass(item.impact)}">${item.impact}</span>
          </div>
          <div class="meta">
            <div><strong>Trigger:</strong> ${item.trigger}</div>
            <div><strong>Next action:</strong> ${item.nextAction}</div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderPipeline(items) {
  document.getElementById("pipeline").innerHTML = items
    .map(
      (item) => `
        <div class="pipeline-item">
          <div class="topline">
            <strong>${item.title}</strong>
            <span class="badge low">${item.date}</span>
          </div>
          <div class="meta">
            <div><strong>Status:</strong> ${item.status}</div>
            <div><strong>Channel:</strong> ${item.channel}</div>
          </div>
        </div>
      `
    )
    .join("");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.getAttribute("data-filter");
    if (mode === "queued") {
      renderPipeline(pipeline.filter((item) => item.status === "Queued"));
      return;
    }
    renderWatchlist(watchlist);
    renderPipeline(pipeline);
  });
});

renderMetrics();
renderWatchlist(watchlist);
renderPipeline(pipeline);
