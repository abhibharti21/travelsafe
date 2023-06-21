import React from "react";
import TypeWritter from "typewriter-effect";

const Bg = () => {
  return (
    <div className="Bg">
      <h1>
        Welcome to Travel&Safe , <br />
        <TypeWritter
          options={{
            strings: [
              "Indian Top Tourism Compony",
              "Thanks For Choosing Us",
              "Have A Memorable & Safe Journey",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "animatedText",
          }}
        />
      </h1>
    </div>
  );
};

export default Bg;
