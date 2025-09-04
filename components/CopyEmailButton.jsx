import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "elishajameel270@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extrabold bg-primary w-[14rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2">
        {copied ? (
          <>
            <img src="/assets/copy-done.svg" className="w-5" alt="copied" />
          </>
        ) : (
          <>
            <img src="/assets/copy.svg" className="w-5" alt="copy" />
          </>
        )}
        Copy Email Address
      </p>
    </button>
  );
};

export default CopyEmailButton;
