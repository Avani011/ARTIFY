import { cn } from "@/lib/utils";

export default function Wrapper({ children, className }: IWrapper) {
  return (
    <div className={cn("w-full mx-auto max-w-screen-2xl px-8", className)}>
      {children}
    </div>
  );
}
