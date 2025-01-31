import MongoClient from 'mongodb';
//const { MongoClient } = require('mongodb');

class DbConnector {
    constructor(uri = "mongodb://localhost:27017/") { // Add uri as a constructor parameter
        this.uri = uri; // Assign uri to an instance variable
        this.client = new MongoClient(this.uri);
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');
            return this.client;
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    // Test function (keep for testing)
    async testDbConnection() {
        try {
            const client = await this.client.connect(); // Use the instance to connect
            console.log('Successfully connected to MongoDB:', client);
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
}

module.exports = DbConnector; // Export the class directly


// test your connection then keep this commented
// new DbConnector("mongodb://localhost:27017/").testDbConnection(); 