import { mongoose } from 'mongoose';

const runConnect = async () => {
  try {

    const conn = await mongoose.connect(`${process.env.DB_BASE_URL}:${ process.env.DB_CRED + process.env.DB_CLUSTER + process.env.COLLECTION }?retryWrites=true&w=majority&appName=Cluster0`, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}


export default runConnect;





  