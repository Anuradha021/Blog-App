import React from "react";

function Logo({ width = "80px", imageUrl }) {
  return (
    <div>
      <img
        src={
          "https://image.similarpng.com/very-thumbnail/2020/07/Flat-logo-Blogger-icon-Clipart-PNG.png"
        }
        alt="Logo"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;
