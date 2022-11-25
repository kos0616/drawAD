export default (query = ".AD-item") => {
  const DOM = document.querySelector(query) as HTMLDivElement;
  const _CANVAS = document.querySelector("#canvas") as HTMLDivElement;
  const RESIZER = DOM.querySelector(".resizer") as HTMLDivElement;
  if (!DOM || !_CANVAS || !RESIZER) throw new Error("RESIZER INIT ERROR!");

  RESIZER.addEventListener("mousedown", initDrag);

  let startX: number, startY: number, startWidth: number, startHeight: number;

  function initDrag(e: MouseEvent) {
    e.stopPropagation();
    startX = e.clientX;
    startY = e.clientY;

    const rect = DOM.getBoundingClientRect();
    startWidth = rect.width;
    startHeight = rect.height;

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  }

  function doDrag(e: MouseEvent) {
    e.stopPropagation();
    const CANVAS = _CANVAS.getBoundingClientRect();

    let width = startWidth + e.clientX - startX;
    if (width <= 100) width = 100;
    if (width > CANVAS.width - DOM.offsetLeft)
      width = CANVAS.width - DOM.offsetLeft;

    let height = startHeight + e.clientY - startY;
    if (height <= 100) height = 100;
    if (height > CANVAS.height - DOM.offsetTop)
      height = CANVAS.height - DOM.offsetTop;

    DOM.style.width = width + "px";
    DOM.style.height = height + "px";
  }

  function stopDrag(e: MouseEvent) {
    e.stopPropagation();
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener("mouseup", stopDrag, false);
  }
};
