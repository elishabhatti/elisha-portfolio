import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    service: { type: String, enum: ["web", "uiux", "logo", "seo"] },
    message: { type: String },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
