import { useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import './NewSlider.css';
import SliderCard from "./SliderCard";


const slidecards = [
<SliderCard text="Login into smart assistance and home screen" index={0} />,
<SliderCard text="Selection of text and samples" index={1} />,
<SliderCard text="Manage smart assistant section" index={2} />,
<SliderCard text="Manage smart assistant section" index={3} />,
<SliderCard text="Ata synchronization" index={4} />
];

export function NewSlider({active, setActive}) {
  const [coordX, setCoordX] = useState(0);

  const diameter = 1000;
  const degrees = 36;

  const slideWidth = diameter / slidecards.length;

  const onUpdate = (latest) => {
    setCoordX(latest.x);
  };

  console.log(active, coordX);

  const handleModifyTarget = (target) => {
    const snapTarget = Math.round(target / slideWidth) * slideWidth;

    const clampedActive = Math.min(
      Math.max(Number(-snapTarget / slideWidth)),
      slidecards.length - 1
    );

    setActive(clampedActive);

    return snapTarget;
  };

  return (
    <div className="root">
      <div className="carousel-container">
        <motion.div
          drag="x"
          onUpdate={onUpdate}
          dragElastic={0}
          dragConstraints={{
            right: 0,
            left: -(slideWidth * (slidecards.length - 1))
          }}
          dragTransition={{
            power: 0.1,
            timeConstant: 200,
            modifyTarget: handleModifyTarget
          }}
        >
          <div className="slides-container">
            {slidecards.map((slide, index) => {
              const rotate = index * degrees;
              const denominator = (slideWidth / degrees) * 1;

              return (
                <motion.div
                  key={index}
                  // className={cx("slide", {
                  //   active: active === index
                  // })}
                  animate={{
                    rotate: coordX / denominator + rotate,
                    transformOrigin: `50% ${diameter}px`
                  }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.2
                  }}
                >
                  {slide}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
