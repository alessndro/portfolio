import { useState, useRef, useEffect } from "react";
import "../App.css";
import { Data } from "./Data.js";

function Test() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const wheelListener = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", wheelListener);
      return () => el.removeEventListener("wheel", wheelListener);
    }
  }, []);

  const [active, setActive] = useState(-1);
  const [active2, setActive2] = useState(false);

  return (
    <div className="test">
      <div ref={scrollRef} className="grid_container">
        {Data.map((prev, i) => {
          return (
            <div
              onClick={() => {
                setActive(i);
                setActive2(true);
                console.log(prev.Team);
              }}
              className={`${
                (active === i && "scale") || (active2 && "notScale")
              } card`}
              key={i}
            >
              <img src={prev.TeamBadge} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
