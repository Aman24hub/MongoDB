// MongoDB Playground
ompletions.

// The current database to use.
use('student_data');

db.getCollection('academic_records').insertOne({
    "student_id": ObjectId("608e32adfa4a21b4dc3876ae"),
    "name": "John Doe",
    "grades": ["A", "B", "C"],
    "subjects": ["Math", "Science", "History"],
    "academic_info": {
        "field_of_study": "Computer Science",
        "GPA": 3.5
    }
});
