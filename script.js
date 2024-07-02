document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  function updateTime() {
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4];
    currentDay.textContent = now.toLocaleString("en-US", { weekday: "long" });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
