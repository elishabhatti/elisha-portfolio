"use client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="pt-30 px-20 pb-20 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard - Contacts</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-gray-900">
          <thead>
            <tr className="bg-gray-800 text-gray-300 uppercase text-sm">
              <th className="p-3 text-left">First Name</th>
              <th className="p-3 text-left">Last Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c, idx) => (
                <tr
                  key={c._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-950" : "bg-gray-900"
                  } hover:bg-gray-800 transition`}
                >
                  <td className="p-3">{c.firstName}</td>
                  <td className="p-3">{c.lastName}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.phone}</td>
                  <td className="p-3 capitalize">{c.service}</td>
                  <td className="p-3">{c.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
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
