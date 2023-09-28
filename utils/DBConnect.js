import mongoose from 'mongoose';

const DBConnect = async () => await mongoose.connect(process.env.MONGO_URI);

export default DBConnect;