import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex  text-white rounded-md border-2 border-white/30 focus:border-[#a238ff] font-light bg-black xl:px-4 xl:py-3 px-3 py-2 text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
