// Run this file in cmd
// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to perform CRUD operations
async function main() {
    try {
        await client.connect();
        const database = client.db("student_data");
        
        // Define collections
        const academicRecordsCollection = database.collection("academic_records");
        const coCurricularActivitiesCollection = database.collection("co_curricular_activities");
        
        // Insert sample data
        await academicRecordsCollection.insertOne({
            student_id: 1,
            name: "John Doe",
            grades: ["A", "B", "C"],
            subjects: ["Math", "Science", "History"],
            // Add other academic information
        });

        await coCurricularActivitiesCollection.insertOne({
            student_id: 1,
            name: "John Doe",
            activity_type: "Sports",
            duration: "2 years",
            achievements: ["1st Place in Football Tournament", "2nd Place in Basketball League"]
        });

        // Read data
        const academicRecords = await academicRecordsCollection.find({}).toArray();
        console.log("Academic Records:", academicRecords);

        const coCurricularActivities = await coCurricularActivitiesCollection.find({}).toArray();
        console.log("Co-curricular Activities:", coCurricularActivities);

        // Update data
        await academicRecordsCollection.updateOne(
            { student_id: 1 },
            { $set: { grades: ["A", "A", "B"] } }
        );

        // Delete data
        await coCurricularActivitiesCollection.deleteOne({ student_id: 1 });

    } finally {
        await client.close();
    }
}

main().catch(console.error);
