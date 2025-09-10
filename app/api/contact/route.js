import Contact from "@/models/Contact";
import connectToDatabase from "@/lib/db";

export async function GET() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch contacts" }), {
      status: 500,
    });
  }
}
