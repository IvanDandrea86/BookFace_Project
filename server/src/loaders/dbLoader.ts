import  mongoose  from "mongoose";

export const runConnection=async():Promise<void>=>{ 
    await mongoose.connect(process.env.ATLAS_CONNETCION,{})
    console.log("📦 Database Connected")        
}
