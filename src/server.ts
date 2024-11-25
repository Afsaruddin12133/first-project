import mongoose from 'mongoose';
import app from './app';
//import config from './app/config';

const PORT = 5000;
async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:afsar12133@cluster0.lalj4.mongodb.net/first-project?retryWrites=true&w=majority&appName=Cluster0',
    );
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log('Afsar :', error);
  }
}
main();
