
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const MessageInput = ({ input, setInput, handleSubmit, language }) => {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={language === "tr" ? "Bir mesaj yazın..." : "Type a message..."}
        className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        <Send className="w-4 h-4 mr-2" />
        {language === "tr" ? "Gönder" : "Send"}
      </Button>
    </form>
  );
};
