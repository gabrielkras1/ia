import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Bot, Menu, MoreHorizontal } from "lucide-react";

interface ChatHeaderProps {
  onToggleSidebar?: () => void;
}

export function ChatHeader({ onToggleSidebar }: ChatHeaderProps) {
  return (
  <header className="chat-header border-b backdrop-blur text-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/images/white-logo.png" alt="Avatar" className="h-10 w-10 rounded-full" />
              <div>
                <h1 className="text-lg font-medium">InflyIA</h1>
                <p className="text-sm text-muted-foreground">
                  Seu assistente inteligente para negócios
                </p>
              </div>
            </div>
          </div>
        </div>

   
      </div>
    </header>
  );
}