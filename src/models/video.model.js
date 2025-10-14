import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    videoFile: {
      // cloudinary url
      type: String,
      required: true,
    },
    thumbnail: {
      // cloudinary url
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
      maxLength: [500, "Description can not be more than 500 characters"],
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
export { Video };
