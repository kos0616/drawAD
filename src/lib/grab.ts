/* eslint-disable */

/** query: DOM */
export default (query: string = ".AD-item") => {
  const MAP = document.querySelector(query) as HTMLDivElement;
  const _CANVAS = document.querySelector("#canvas");
  if (!MAP || !_CANVAS) throw new Error("NO AD!.");

  const CANVAS = _CANVAS.getBoundingClientRect();

  let offset = [0, 0];
  let isDown = false;

  MAP.addEventListener("mousedown", handleMouseStart, true);
  document.addEventListener("mousemove", handleMouseMove, true);
  document.addEventListener("mouseup", handleEnd, true);

  // onBeforeUnmount(() => {
  //   MAP.removeEventListener("mousedown", handleMouseStart, true);
  //   document.removeEventListener("mousemove", handleMouseMove);
  //   document.removeEventListener("mouseup", handleEnd);
  // });

  function handleEnd() {
    isDown = false;
  }

  /** 點擊開始的觸發 */
  function handleMouseStart(event: MouseEvent) {
    if (event.which !== 1) return;
    isDown = true;
    offset = [MAP.offsetLeft, MAP.offsetTop];
  }

  /** 滑鼠移動的觸發 */
  function handleMouseMove(event: MouseEvent) {
    if (event.which !== 1) return;
    if (isDown) {
      const [x, y] = [event.clientX, event.clientY];
      const position = computedPosition({ x, y });

      MAP.style.left = `${position.left.toFixed(3)}px`;
      MAP.style.top = `${position.top.toFixed(3)}px`;
    }
  }

  /** 計算圖片位置的同時，也把圖片邊界考慮在內 */
  function computedPosition(mousePosition: { x: number; y: number }) {
    /** 取得物件的資訊 */
    const RECT = MAP.getBoundingClientRect();

    let position_x = 0;
    const left = offset[0];
    /** 相對移動位置: 滑鼠於全螢幕的位置 - 畫布左側與螢幕距離 - 物件的一半(置中) */
    const X = mousePosition.x - CANVAS.left - RECT.width / 2;
    if (left + X > 0) position_x = X;
    if (X <= 0) position_x = 0;
    if (X >= CANVAS.width - RECT.width) {
      position_x = CANVAS.width - RECT.width;
    }

    let position_y = 0;
    const top = offset[1];
    const Y = mousePosition.y - CANVAS.top - RECT.height / 2;
    if (top + Y > 0) position_y = Y;
    if (Y <= 0) position_y = 0;
    if (Y >= CANVAS.height - RECT.height) {
      position_y = CANVAS.height - RECT.height;
    }

    return {
      left: position_x,
      top: position_y,
    };
  }
};
