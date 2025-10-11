import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TooltipButtonProps {
  content: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: "ghost" | "link" | "default" | "destructive" | "outline" | "secondary";
  className?: string;
  disabled?: boolean;
}

export const TooltipButton = ({
  content,
  icon,
  onClick,
  variant = "ghost",
  className,
  disabled = false,
}: TooltipButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size="icon"
            onClick={onClick}
            disabled={disabled}
            className={cn(
              "transition-all duration-200",
              !disabled && "hover:scale-105",
              className
            )}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="bg-secondary text-secondary-foreground px-3 py-1.5"
        >
          <p className="text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
