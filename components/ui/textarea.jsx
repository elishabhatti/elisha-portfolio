import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-white/30 bg-black px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a238ff] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
