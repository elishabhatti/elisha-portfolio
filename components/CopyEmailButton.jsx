import { useState } from "react";
import { motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "elishajameel270@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extrabold bg-primary w-[14rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2">
        {copied ? (
          <>
            <img src="/assets/copy-done.svg" className="w-5" alt="copied" />
            <span className="text-white/90">Email Address Copied</span>
          </>
        ) : (
          <>
            <img src="/assets/copy.svg" className="w-5" alt="copy" />
            <span className="text-white/90">Copy Email Address</span>
          </>
        )}
      </p>
    </motion.button>
  );
};

export default CopyEmailButton;
