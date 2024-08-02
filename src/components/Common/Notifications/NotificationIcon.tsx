import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}
export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon className="w-6 h-6 mt-3 text-violet-500" />;
}
