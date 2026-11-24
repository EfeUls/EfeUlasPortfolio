import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 30);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      id="topButton"
      aria-label="Sayfanın başına dön"
      onClick={() => window.scrollTo(0, 0)}
      style={{
        visibility: visible ? "visible" : "hidden",
        color: theme.body,
        backgroundColor: theme.text,
        border: "1px solid " + theme.text,
      }}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
