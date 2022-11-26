import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/vakifkatilim_security"
const option = {
    useNewUrlParser: true,
    dbName: "vakifkatilim_security",
}
export const db = mongoose.connect(url,option)