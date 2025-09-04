const About = () => {
  return (
    <section className="p-15">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[18rem] mt-12">
        
        {/* Big left block */}
        <div className="bg-slate-800 rounded-xl md:col-span-3 md:row-span-2"></div>

        {/* Top right small block */}
        <div className="bg-slate-800 rounded-xl md:col-span-3"></div>

        {/* Middle right block (dark/black) */}
        <div className="bg-neutral-800 rounded-xl md:col-span-3"></div>

        {/* Bottom left purple block */}
        <div className="bg-purple-600 rounded-xl md:col-span-2"></div>

        {/* Bottom right block */}
        <div className="bg-slate-800 rounded-xl md:col-span-4"></div>

      </div>
    </section>
  );
};

export default About;
