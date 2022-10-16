import mongoose from "mongoose";

const connectDatabase = async (mongoUrl: string): Promise<any> => {
  try {
    await mongoose.connect(mongoUrl);
  } catch (error) {
    throw error;
  }
};

export default connectDatabase;
