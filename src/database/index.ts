import mongoose from "mongoose";

const connectDatabase = async (mongoUrl: string): Promise<any> => {
  try {
    await mongoose.connect(mongoUrl);

    mongoose.set("debug", false);
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret, options) => {
        const newRet = { ...ret };
        delete newRet._id;
        delete newRet.__v;
        return newRet;
      },
    });
  } catch (error) {
    throw error;
  }
};

export default connectDatabase;
