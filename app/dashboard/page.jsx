"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [allowed, setAllowed] = useState(false); // access control
  const router = useRouter();

  // Check localStorage key for access
  useEffect(() => {
    const key = localStorage.getItem("DASHBOARD_KEY");
    console.log(key);
    
    if (key === process.env.NEXT_PUBLIC_DASHBOARD_KEY) {
      setAllowed(true);
    } else {
      router.replace("/404"); // redirect if not allowed
    }
  }, [router]);

  // Fetch contacts
  useEffect(() => {
    if (!allowed) return; // only fetch if allowed
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

  // Delete contact
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        toast.success("Deleted Successfully!");
      } else {
        console.error("Failed to delete contact");
      }
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  // Show nothing until access is confirmed
  if (!allowed) return null;

  return (
    <div className="pt-30 px-10 pb-20 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard - Contacts</h1>

      <div className="overflow-x-auto rounded-md border border-gray-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-800 text-gray-300 uppercase text-xs">
              <th className="p-3 text-left">First Name</th>
              <th className="p-3 text-left">Last Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <tr
                  key={c._id}
                  className="border-t border-gray-700 hover:bg-gray-800"
                >
                  <td className="p-3">{c.firstName}</td>
                  <td className="p-3">{c.lastName}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.phone}</td>
                  <td className="p-3 capitalize">{c.service}</td>
                  <td className="p-3">{c.message}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-400 italic"
                >
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
