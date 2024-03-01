// Define the database and collection names
const database = 'student_data';
const academicCollection = 'academic_records';
const coCurricularCollection = 'co_curricular_activities';

// Switch to the specified database
use(database);

// Create the academic_records collection
db.createCollection(academicCollection);

// Create the co_curricular_activities collection
db.createCollection(coCurricularCollection);