import React from "react";
import empty from "../assest/empty.png";

const Empty = () => {
  return (
    <div className="empty">
      <img src={empty} alt="sorryImage" />
      <h1>Sorry , You Did Not Add Any Place To Your Wish-List.</h1>
    </div>
  );
};

export default Empty;
