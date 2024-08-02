import { ReactNode } from "react";

export function NotificationRoot({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-zinc-200 dark:bg-zinc-900 px-8 py-4 items-start gap-6">
      {children}
    </div>
  );
}
