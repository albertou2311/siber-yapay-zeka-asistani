
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const AIResponse = ({ message, language, isHelpMessage, handleDownload }) => {
  return (
    <div className="p-3 rounded-lg max-w-[80%] bg-gray-700 text-white">
      <pre className="whitespace-pre-wrap">
        {message.text}
      </pre>
      {isHelpMessage(message.text) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleDownload(message.text)}
          className="mt-2"
        >
          <Download className="w-4 h-4 mr-2" />
          {language === "tr" ? "İndir" : "Download"}
        </Button>
      )}
    </div>
  );
};
