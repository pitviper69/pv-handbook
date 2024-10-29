import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<"pvLight" | "dark">("pvLight");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "pvLight" ? "dark" : "pvLight");
    setTheme(theme === 'dark' ? 'pvLight' : 'dark');
  };

  React.useEffect(()=> {
    const localTheme= window.localStorage.getItem("theme") || "pvLight";
    if(localTheme !== theme) {
      setTheme(localTheme);
    }
  },[]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"} />
      <Sun className="swap-off" />
      <Moon className="swap-on" />
    </label>
  );
}
//
//
// const [theme, setTheme] = React.useState(themeFromLocalStorage);
//
// setTheme(theme === "light" ? "dark" : "light");