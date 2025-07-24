"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/app/utils/gsapInit";


const FadeInOnScroll = ({
  children,
  y = 30,
  duration = 1,
  triggerClass = "", // optional
  animation = true, // whether to apply animation
  fadeAffect = true,
}) => {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    if (!animation) return null;
    const triggerElement = triggerClass
      ? wrapperRef.current.querySelector(triggerClass)
      : wrapperRef.current;

    if (!triggerElement) return;

    gsap.fromTo(
      triggerElement,
      { opacity: fadeAffect ? 0 : 1, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, { scope: wrapperRef });



  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
