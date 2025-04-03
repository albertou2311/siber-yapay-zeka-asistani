
import React from "react";
import { Button } from "@/components/ui/button";
import { Bot, Wifi, WifiOff, Globe } from "lucide-react";

export const Header = ({ isConnected, language, setLanguage }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6" />
        <h1 className="text-xl font-bold">Kali Linux AI Asistan</h1>
      </div>
      <div className="flex items-center gap-2">
        {isConnected ? (
          <Wifi className="w-5 h-5 text-green-500" />
        ) : (
          <WifiOff className="w-5 h-5 text-red-500" />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLanguage(prev => prev === "tr" ? "en" : "tr")}
        >
          <Globe className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
