import React from "react";

function Image({ src, cls }) {
  return (
    <div>
      <img className={cls} src={src} alt="" />
    </div>
  );
}
export { Image };
