import DbConnector from '../config/dbConnector';
import axios from 'axios';


class CikController {
  constructor() {
    this.cikData = null;
    this.dbConnector = new DbConnector(); // Create an instance of DbConnector
  }

  async loadCikData() {
    try {
      const client = await this.dbConnector.connect(); // Use the instance to connect
      const database = client.db('myDatabase');
      const collection = database.collection('cik');
      this.cikData = await collection.find().toArray();
    } catch (error) {
      console.error('Error fetching CIK data from MongoDB:', error);
    } finally {
      // No need to close the connection here
    }
  }
}

export default CikController;
