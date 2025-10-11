import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { chatSession } from "@/scripts/index";
import { Send, Bot, User, Volume2, VolumeX } from "lucide-react";

export const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  // Add ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize speech synthesis
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.rate = 1.0;
    speechUtterance.pitch = 1.0;
    speechUtterance.volume = 1.0;
    setSpeech(speechUtterance);

    return () => {
      if (speech) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const formatTextForSpeech = (text: string) => {
    // Remove numbers at the start of each line and clean up
    return text
      .split('\n')
      .map(line => line.replace(/^\d+\.\s*/, ''))
      .join('. ');
  };

  const speakMessage = (text: string) => {
    if (speech && !isSpeaking) {
      // Format text to remove numbers before speaking
      speech.text = formatTextForSpeech(text);
      speech.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(speech);
    }
  };

  const stopSpeaking = () => {
    if (speech && isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const formatInterviewResponse = (text: string) => {
    // Clean the text first
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/`/g, '')
      .trim();

    // Split into points and format them
    const points = cleanText
      .split(/\n/)
      .map(line => line.trim())
      .filter(Boolean)
      .map((point, index) => {
        // Remove existing numbers or bullets if present
        const cleanPoint = point.replace(/^\d+\.\s*|-\s*|•\s*/, '');
        // Add new numbered format
        return `${index + 1}. ${cleanPoint}`;
      });

    return points;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" as const }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const prompt = `Act as an experienced interviewer. Provide a clear and concise response to the following interview question or topic. Format your response as numbered points. Keep each point brief and focused. Include only the most relevant information an interviewee should mention: ${input}`;

      const result = await chatSession.sendMessage(prompt);
      const response = await result.response;
      const botResponse = response.text();
      const formattedResponse = formatInterviewResponse(botResponse);
      const responseText = formattedResponse.join('\n');

      setMessages([
        ...newMessages,
        { text: responseText, sender: "bot" as const },
      ]);

      // Automatically speak the bot's response
      speakMessage(responseText);
    } catch (error) {
      console.error("Error with Gemini API:", error);
      setMessages([
        ...newMessages,
        {
          text: "Sorry, I couldn't process your interview question. Please try again.",
          sender: "bot" as const,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (msg: { text: string; sender: "user" | "bot" }, index: number) => {
    const isBot = msg.sender === "bot";
    return (
      <div
        key={index}
        className={`flex items-start gap-3 mb-6 ${
          !isBot ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
            ${!isBot ? "bg-blue-100" : "bg-emerald-100"} shadow-sm`}
        >
          {!isBot ? 
            <User className="w-6 h-6 text-blue-600" /> : 
            <Bot className="w-6 h-6 text-emerald-600" />
          }
        </div>
        <div className="flex flex-col gap-2 max-w-[80%]">
          <div
            className={`p-4 rounded-2xl shadow-sm ${
              !isBot
                ? "bg-blue-500 text-white rounded-tr-none"
                : "bg-gray-100 text-gray-800 rounded-tl-none"
            }`}
          >
            {msg.text.split('\n').map((line, i) => (
              <p key={i} className="mb-2 last:mb-0 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          {isBot && (
            <div 
              className="flex items-center gap-2 text-sm text-gray-500"
              onClick={() => isSpeaking ? stopSpeaking() : speakMessage(msg.text)}
            >
              {isSpeaking ? 
                <VolumeX className="w-4 h-4 cursor-pointer hover:text-gray-700" /> : 
                <Volume2 className="w-4 h-4 cursor-pointer hover:text-gray-700" />
              }
              <span className="text-xs">
                {isSpeaking ? "Stop speaking" : "Listen"}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="h-[600px] overflow-y-auto border border-gray-200 p-6 rounded-lg bg-white shadow-inner">
          <div className="flex flex-col">
            {messages.map(renderMessage)}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-emerald-600 animate-pulse" />
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex gap-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
            placeholder="Type your message..."
            disabled={isLoading}
            className="shadow-sm focus:ring-2 focus:ring-blue-500 text-lg py-6 rounded-full px-6"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading}
            className="px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-w-[60px]"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
