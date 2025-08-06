// models/Waitlist.ts
import mongoose, { Schema, Document, models, model } from "mongoose";

interface IWaitlist extends Document {
  email: string;
  createdAt: Date;
}

const waitlistSchema = new Schema<IWaitlist>(
  {
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Kiểm tra xem model đã được khai báo hay chưa để tránh lỗi ở dev
export default models.Waitlist || model<IWaitlist>("Waitlist", waitlistSchema);
