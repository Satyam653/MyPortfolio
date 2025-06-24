import { useEffect, useRef, useState } from "react";
import "./Card.css";

export default function Card({ children,src }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  // Detect on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);  // Animate in
        } else {
          setVisible(false); // Animate out
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Delay mount with timeout (optional)
  const [delayDone, setDelayDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDelayDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a href = {src}>
    <div className ="card-container">
    <div
      ref={ref}
      className={`card ${delayDone && visible ? "show" : "hide"}`}
    >
      {children} 
    </div>
   
    </div>
    </a>
  );
}
