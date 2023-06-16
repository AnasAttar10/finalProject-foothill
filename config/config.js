const mongoose =require("mongoose")
require("colors")

const connectDB = async ()=>{
    try{
        const conct = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected ${conct.connection.host}`.yellow);
    }
    catch(err){
        console.log(`${err.message}`.bgRed);
        process.exit(1)
    }
}
module.exports = connectDB