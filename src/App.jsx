
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { AIResponse } from "@/components/AIResponse";
import { MessageInput } from "@/components/MessageInput";
import { getDefaultResponses } from "@/lib/responses";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("tr");
  const [isConnected, setIsConnected] = useState(true);
  const [customCommands, setCustomCommands] = useState({});
  const { toast } = useToast();

  const isHelpMessage = (text) => {
    return text.toLowerCase().includes("kullanabileceğiniz komutlar") || 
           text.toLowerCase().includes("available commands") ||
           text.toLowerCase().includes("komut listesi");
  };

  const handleDownload = (text) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "komutlar.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: language === "tr" ? "Başarılı" : "Success",
      description: language === "tr" ? "Komutlar indirildi" : "Commands downloaded",
      duration: 3000,
    });
  };

  const getAIResponse = (question, lang) => {
    // Check for training command
    if (question.toLowerCase().startsWith("egit ")) {
      const parts = question.split(" ");
      if (parts.length >= 3) {
        const command = parts[1];
        const response = parts.slice(2).join(" ");
        setCustomCommands(prev => ({...prev, [command]: response}));
        return lang === "tr" 
          ? `Yeni komut öğrenildi: "${command}"`
          : `New command learned: "${command}"`;
      }
      return lang === "tr"
        ? "Kullanım: egit <komut> <yanıt>"
        : "Usage: train <command> <response>";
    }

    // Check for custom commands
    if (customCommands[question.toLowerCase()]) {
      return customCommands[question.toLowerCase()];
    }

    const responses = getDefaultResponses(customCommands);
    return responses[lang][question.toLowerCase()] || responses[lang].default;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      isCode: false
    };

    const aiResponse = {
      id: Date.now() + 1,
      text: getAIResponse(input.toLowerCase(), language),
      sender: "ai",
      isCode: false
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <Header 
          isConnected={isConnected}
          language={language}
          setLanguage={setLanguage}
        />
        
        <div className="bg-gray-800 rounded-lg p-4 mb-4 h-[60vh] overflow-y-auto">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ x: message.sender === "user" ? 20 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`flex items-start gap-2 mb-4 ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              {message.sender === "user" ? (
                <div className="p-3 rounded-lg max-w-[80%] bg-blue-600 text-white">
                  <pre className="whitespace-pre-wrap">{message.text}</pre>
                </div>
              ) : (
                <AIResponse
                  message={message}
                  language={language}
                  isHelpMessage={isHelpMessage}
                  handleDownload={handleDownload}
                />
              )}
            </motion.div>
          ))}
        </div>

        <MessageInput
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          language={language}
        />
      </div>
    </div>
  );
}

export default App;
