import Contact from "@/models/Contact";
import connectToDatabase from "@/lib/db";

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    await Contact.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to delete" }), {
      status: 500,
    });
  }
}
