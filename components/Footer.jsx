import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  const year = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="w-full flex justify-center py-2 border-t border-zinc-700">
      <div className="w-full rounded-xl md:px-32 py-4 flex items-center justify-between text-sm text-zinc-300">
        {/* Left */}
        <div className="flex items-center gap-3">
          <h1 className="text-lg text-white">Elisha.</h1>
        </div>

        {/* Center */}
        <div className="text-center text-zinc-400">
          ©{year} Usergency All <br />
          rights reserved.
        </div>

        {/* Right */}
        <div className="text-right text-zinc-200">
          <div>{time}</div>
          <div>Karachi</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
