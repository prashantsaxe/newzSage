// models/News.ts

import mongoose, { Document, Schema } from 'mongoose';

interface INews extends Document {
  title: string;
  content: string;
  genres: string[];
  imageUrls?: string[];
  videoUrls?: string[];
  real_probability?: number;
  // publisher_id: mongoose.Schema.Types.ObjectId;
  comments: mongoose.Schema.Types.ObjectId[];
  votes: mongoose.Schema.Types.ObjectId[];
  upvote_count: number;
  downvote_count: number;
}



const NewsSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    genres: [{ type: String}], 
    imageUrls: [{ type: String , required:false}], // Optional, defaults to an empty array
    videoUrls: [{ type: String , required:false}], // Optional, defaults to an empty array
    real_probability: { type: Number },
    // publisher_id: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
    upvote_count: { type: Number, default: 0 },
    downvote_count: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<INews>('News', NewsSchema, 'news');