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

    const Rect = DOM.getBoundingClientRect();
    startWidth = Rect.width;
    startHeight = Rect.height;

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  }

  function doDrag(e: MouseEvent) {
    e.stopPropagation();
    const CANVAS = _CANVAS.getBoundingClientRect();

    let width = startWidth + e.clientX - startX;
    if (width > CANVAS.width) width = CANVAS.width;

    let height = startHeight + e.clientY - startY;
    if (height > CANVAS.height) height = CANVAS.height;

    DOM.style.width = width + "px";
    DOM.style.height = height + "px";
  }

  function stopDrag(e: MouseEvent) {
    e.stopPropagation();
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener("mouseup", stopDrag, false);
  }
};
