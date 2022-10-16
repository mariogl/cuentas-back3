import { Schema, model, InferSchemaType } from "mongoose";

const TagSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

export type TagStructure = InferSchemaType<typeof TagSchema>;

const Tag = model("Tag", TagSchema, "tags");

export default Tag;
