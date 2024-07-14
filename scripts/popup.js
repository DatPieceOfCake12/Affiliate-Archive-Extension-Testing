if (document.getElementById("overlay")) {
  console.log("Overlay already exists");
} else {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = 9999;
  overlay.style.backdropFilter = "blur(10px)";
  document.body.appendChild(overlay);
}
