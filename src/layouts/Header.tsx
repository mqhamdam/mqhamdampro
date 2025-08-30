import { NavBtn } from "@/components/NavBtn";
import { useEffect, useState } from "react";

export function Header() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set current path on mount
    setCurrentPath(window.location.pathname);
    
    // Listen for navigation changes (for client-side routing)
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleLocationChange);
    
    // Listen for pushstate/replacestate events
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const isActivePage = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(href);
  };

  return (
    <div className="h-[70px] w-full flex justify-center items-center gap-8 bg-white shadow-sm">
      <NavBtn text={"Home"} href={"/"} isActive={isActivePage("/")} />
      <NavBtn 
        text={"Blog"} 
        href={"https://blog.mqhamdam.pro/"} 
        isActive={false} // External link, always inactive
      />
      <NavBtn text={"Projects"} href={"/projects"} isActive={isActivePage("/projects")} />
      <NavBtn text={"Contact"} href={"/contact"} isActive={isActivePage("/contact")} />
    </div>
  );
}