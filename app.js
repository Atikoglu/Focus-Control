let distractionCount = 0;

document.getElementById("increase-button").addEventListener("click", () => {
    distractionCount++;
    document.getElementById("distraction-count").textContent = distractionCount;
});