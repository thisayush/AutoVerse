import React from "react";

function P({ val, cls }) {
  return (
    <div>
      <p className={cls}>{val}</p>
    </div>
  );
}
export { P };
