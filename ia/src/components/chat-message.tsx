import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Bot, User } from "lucide-react";
import { cn } from "./ui/utils";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <div className={cn(
      "flex gap-3 mb-6",
      !isAI && "flex-row-reverse"
    )}>
     <img src={isAI ? "/images/blue-fade-logo.svg" : "/images/blue-simple-logo.svg"} alt="Avatar" className="h-12 w-12 rounded-full flex-shrink-0" />

      <div className={cn(
        "flex flex-col max-w-[80%]",
        !isAI && "items-end"
      )}>
        <div className={cn(
          "mb-1 text-xs text-muted-foreground",
          !isAI && "text-right"
        )}>
          {isAI ? "InflyIA" : "Você"} • {message.timestamp}
        </div>
        
        <Card className={cn(
          "p-4",
          isAI 
            ? "bg-muted/50 border-muted" 
            : "bg-primary text-primary-foreground border-primary"
        )}>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
        </Card>
      </div>
    </div>
  );
}