import React from "react";

function Icon() {
  const url =
    "https://storage.googleapis.com/proudcity/alpha/uploads/2016/10/techcrunch.jpg";

  return (
    <div className="img">
      <img src={url} alt="" width={50} height={50} className="img" />
    </div>
  );
}
export default Icon;
