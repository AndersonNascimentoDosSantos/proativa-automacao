"use client";
import { Check, X } from "lucide-react";
interface NotificationActionProps {
  onSubmitAction?: () => void;
  onCancelAction?: () => void;
}
export function NotificationActions({
  onCancelAction,
  onSubmitAction,
}: NotificationActionProps) {
  return (
    <div className="flex gap-2 self-center">
      <button
        // onClick={onCancelAction}
        className="w8 h8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-400"
      >
        <X className="w-3 h-3 text-zinc-50" />
      </button>
      <button
        // onClick={onSubmitAction}
        className="w8 h8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600 "
      >
        <Check className="w-3 h-3 text-zinc-50" />
      </button>
    </div>
  );
}
