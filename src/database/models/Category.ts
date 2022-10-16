import { Schema, model, InferSchemaType } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  icon: String,
});

export type CategoryStructure = InferSchemaType<typeof CategorySchema>;

const Category = model("Category", CategorySchema, "categories");

export default Category;
