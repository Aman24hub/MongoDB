// The current database to use.
use('student_data');

db.getCollection('co_curricular_activities').insertOne({
        "student_id": ObjectId("608e32adfa4a21b4dc3876ae"),
        "name": "John Doe",
        "activity_type": "Sports",
        "duration": "2 years",
        "achievements": ["1st Place in Football Tournament", "2nd Place in Basketball League"]
});