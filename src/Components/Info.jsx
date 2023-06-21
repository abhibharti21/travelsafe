import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Info = () => {
  const [trigger, setTrigger] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setTrigger(true)}
      onExit={() => setTrigger(false)}
    >
      <div className="info">
        <section>
          <p>
            <span>
              {trigger && (
                <CountUp
                  start={0}
                  end={100}
                  duration={1}
                  className="reactCount"
                />
              )}
            </span>
            <span>+</span>
          </p>
          <p>Visitable Places</p>
        </section>
        <section>
          <p>
            #1<sup>st</sup>
          </p>
          <p>Rank in Indian Tourism Section</p>
        </section>
        <section>
          <p>Save money</p>
          <p>Affordable Pricing</p>
        </section>
      </div>
    </ScrollTrigger>
  );
};

export default Info;
