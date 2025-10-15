import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";
import { useLocation } from "wouter";

function useGaPageViews() {
  const [location] = useLocation();
  useEffect(() => {
    // wait a tick so title updates, etc.
    const timer = setTimeout(() => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: location,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);
}

createRoot(document.getElementById("root")!).render(<App />);
