import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen  text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Left Big Box */}
        <div className="bg-[#1c1c2b] rounded-2xl shadow-md col-span-2 lg:col-span-1 h-64"></div>
        
        {/* Top Right Box */}
        <div className="bg-[#1c1c2b] rounded-2xl shadow-md h-64"></div>
        
        {/* Right Middle Box */}
        <div className="bg-[#1c1c2b] rounded-2xl shadow-md h-64"></div>
        
        {/* Bottom Left Small Box */}
        <div className="bg-[#2d2d44] rounded-2xl shadow-md h-40"></div>
        
        {/* Bottom Right Wide Box */}
        <div className="bg-[#1c1c2b] rounded-2xl shadow-md col-span-2 h-40"></div>
      </div>
    </section>
  )
}

export default About