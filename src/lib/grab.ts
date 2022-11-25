export default (query = ".AD-item") => {
  const elmnt = document.querySelector(query) as HTMLDivElement;
  const _CANVAS = document.querySelector("#canvas");
  if (!elmnt || !_CANVAS) throw new Error("MOVE ITEM ERROR");
  const CANVAS = _CANVAS.getBoundingClientRect();

  /** 滑鼠拖曳後的相對移動x */
  let pos1 = 0;
  /** 滑鼠拖曳後的相對移動y */
  let pos2 = 0;
  /** 滑鼠起始位置x */
  let pos3 = 0;
  /** 滑鼠起始位置y */
  let pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    elmnt.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    const rect = elmnt.getBoundingClientRect();

    // set the element's new position:
    moveX();
    moveY();

    // calculate the new cursor position:
    function moveY() {
      pos2 = pos4 - e.clientY;
      const top_limit = elmnt.offsetTop - pos2 <= 0;
      const bottom_limit = rect.height + rect.y >= CANVAS.y + CANVAS.height;

      if (top_limit) {
        elmnt.style.top = "0px";
        return;
      }
      if (bottom_limit && pos2 < 0) {
        elmnt.style.top = CANVAS.height - rect.height + "px";
        return;
      }

      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      pos4 = e.clientY;
    }

    function moveX() {
      pos1 = pos3 - e.clientX;
      const left_limit = elmnt.offsetLeft - pos1 <= 0;
      const right_limit = rect.width + rect.x >= CANVAS.x + CANVAS.width;

      if (left_limit) {
        elmnt.style.left = "0px";
        return;
      }
      if (right_limit && pos1 < 0) {
        elmnt.style.left = CANVAS.width - rect.width + "px";
        return;
      }
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      pos3 = e.clientX;
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    elmnt.onmouseup = null;
    elmnt.onmousemove = null;
  }
};
