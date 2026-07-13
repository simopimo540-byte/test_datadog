(() => {
  const message = "1";
  const notification = document.createElement("div");
  notification.setAttribute("role", "status");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.bottom = "1rem";
  notification.style.right = "1rem";
  notification.style.zIndex = "1000";
  document.body.appendChild(notification);
})();
