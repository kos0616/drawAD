export default (query = ".AD-item") => {
  const elmnt = document.querySelector(query) as HTMLDivElement;
  /** 滑鼠拖曳後的相對移動x */
  let pos1 = 0;
  /** 滑鼠拖曳後的相對移動y */
  let pos2 = 0;
  /** 滑鼠起始位置x */
  let pos3 = 0;
  /** 滑鼠起始位置y */
  let pos4 = 0;

  if (!elmnt) throw new Error("MOVE ITEM ERROR");
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
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    elmnt.onmouseup = null;
    elmnt.onmousemove = null;
  }
};
