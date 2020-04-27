import React from "react";

function Images() {
  const url = "https://cdn.dribbble.com/users/337705/screenshots/6125087/6.jpg";

  return (
    <div className="img">
      <img src={url} alt="" width={90} height={60} className="img" />
    </div>
  );
}
export default Images;
