"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Trash2, Mail, Phone, Briefcase, User, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const key = localStorage.getItem("DASHBOARD_KEY");
    if (key === process.env.NEXT_PUBLIC_DASHBOARD_KEY) {
      setAllowed(true);
    } else {
      router.replace("/404");
    }
  }, [router]);

  useEffect(() => {
    if (!allowed) return;
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    fetchContacts();
  }, [allowed]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        toast.success("Message Purged Successfully!");
      }
    } catch (err) {
      toast.error("Operation failed.");
    }
  };

  if (!allowed) return null;

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-6 md:px-16 pb-20">
      {/* --- HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <p className="text-[#725afe] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Internal Access Only</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
            Command Center<span className="text-[#725afe] not-italic">.</span>
          </h1>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
           <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Total Inquiries: </span>
           <span className="text-white font-bold font-mono ml-2">{contacts.length}</span>
        </div>
      </motion.div>

      {/* --- TABLE CONTAINER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative border border-white/5 bg-white/[0.02] rounded-[2rem] overflow-hidden backdrop-blur-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.03]">
                <th className="p-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Sender</th>
                <th className="p-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Contact Info</th>
                <th className="p-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 text-center">Inquiry Type</th>
                <th className="p-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Message Brief</th>
                <th className="p-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contacts.length > 0 ? (
                contacts.map((c, index) => (
                  <tr key={c._id} className="group hover:bg-white/[0.01] transition-colors">
                    {/* Name */}
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#725afe]/10 border border-[#725afe]/20 flex items-center justify-center text-[#725afe] font-bold text-xs">
                          {c.firstName[0]}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{c.firstName} {c.lastName}</p>
                          <p className="text-[10px] text-zinc-600 font-mono">ID: {c._id.slice(-6)}</p>
                        </div>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td className="p-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs hover:text-white transition-colors">
                          <Mail size={12} className="text-[#725afe]" />
                          <a href={`mailto:${c.email}`}>{c.email}</a>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs">
                          <Phone size={12} />
                          <span>{c.phone || "No Phone"}</span>
                        </div>
                      </div>
                    </td>

                    {/* Service Type */}
                    <td className="p-6 text-center">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-300 uppercase tracking-widest">
                        {c.service}
                      </span>
                    </td>

                    {/* Message Preview */}
                    <td className="p-6">
                      <div className="flex items-start gap-2 max-w-xs">
                        <MessageSquare size={14} className="text-zinc-600 mt-1 shrink-0" />
                        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 italic">
                          "{c.message}"
                        </p>
                      </div>
                    </td>

                    {/* Delete Action */}
                    <td className="p-6 text-right">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-600 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <Briefcase size={40} className="text-zinc-800 animate-pulse" />
                      <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.2em]">Silence is golden. No inquiries yet.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;