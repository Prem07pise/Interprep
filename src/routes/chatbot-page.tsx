import { Chatbot } from "@/components/chatbot";

export const ChatbotPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">AI Assistant</h1>
      <Chatbot />
    </div>
  );
};
