import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {

    console.log("connecting to database")
    const db = await mongoose.connect(process.env.MONGODB_URI ||'');

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.log('database is not connected yet');
    
    console.error('Database connection failed:', error);

    process.exit(1);
  }
}

export default dbConnect;