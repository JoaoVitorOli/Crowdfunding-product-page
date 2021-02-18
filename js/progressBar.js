function updataProgressBar(percent) {
  let progressBar = document.getElementById("progress-bar");

  progressBar.style.setProperty("width", `${percent}%`);
}
