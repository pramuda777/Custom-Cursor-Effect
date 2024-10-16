const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = posX + "px"; // Add 'px' unit
  cursorDot.style.top = posY + "px"; // Corrected to 'top'

  cursorOutline.animate(
    {
      left: posX + "px",
      top: posY + "px",
    },
    { duration: 500, fill: "forwards" }
  );
});
