import type { AnchorHTMLAttributes, ReactNode } from "react";
import { WHATSAPP_URL } from "../../lib/whatsapp";
import { Button } from "./Button";
import { WhatsappIcon } from "./SocialIcons";

interface WhatsappButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
}

/** Same CTA every "hablar por WhatsApp" button uses — link, target and icon are baked in. */
export function WhatsappButton({ variant, size, className, children, onClick }: WhatsappButtonProps) {
  return (
    <Button
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
    >
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      {children}
    </Button>
  );
}
