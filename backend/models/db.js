import mongoose from 'mongoose';

const database = process.env.MONGODB_URI

const options = {
    dbName: "dbBlog"
}

let connection;

const connectToDb = async () => {
    if (!connection) {
        try {
            connection = await mongoose.connect(database, options);
            
            connection.connection.on("error", (err) => {
                console.error(err);
              });
        
              connection.connection.on("disconnected", () => {
                console.log("MONGODB BAĞLANTISI KAPATILDI");
                connection = null; // Bağlantıyı null olarak ayarla
              });

            console.log("MongoDB bağlantısı başarılı.");
        } catch (error) {
            console.error("MongoDB bağlantısı başarısız:", error.message);
            process.exit(1); // Uygulamanın durmasını isteyebilirsin
        }
    }
    return connection;
};

export default connectToDb