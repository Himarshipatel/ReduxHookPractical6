import React from "react";

function Icon() {
  const url = "/germany.png";

  return (
    <div className="img">
      <img src={url} alt="" width={50} height={50} className="img" />
    </div>
  );
}
export default Icon;
