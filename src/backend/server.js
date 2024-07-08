import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import { MongoClient, GridFSBucket, ObjectId } from 'mongodb';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
const url = 'mongodb+srv://mayankpmahajan:YVgYqQOMsDAEvaKM@cluster0.n7zwbwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectToMongoDB();

const db = client.db('nivadDb'); // Replace with your database name
const resumesBucket = new GridFSBucket(db);

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route handlers for each form type

// Brand Enquiry Form
app.post('/api/save-form-data/brandEnquiry', async (req, res) => {
    const { name, subject, email, enquiry } = req.body;

    try {
        const collection = db.collection('brand_enquiry');

        // Prepare document to insert into MongoDB
        const document = {
            name,
            subject,
            email,
            enquiry
        };

        // Insert document into MongoDB
        const result = await collection.insertOne(document);

        res.json({
            message: 'Brand Enquiry form data saved successfully!',
            formData: document
        });
    } catch (error) {
        console.error('Error saving Brand Enquiry form data:', error);
        res.status(500).json({ message: 'Error saving Brand Enquiry form data' });
    }
});

// Investor Relations Form
app.post('/api/save-form-data/investorRelations', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const collection = db.collection('investor_relations');

        // Prepare document to insert into MongoDB
        const document = {
            name,
            email,
            message
        };

        // Insert document into MongoDB
        const result = await collection.insertOne(document);

        res.json({
            message: 'Investor Relations form data saved successfully!',
            formData: document
        });
    } catch (error) {
        console.error('Error saving Investor Relations form data:', error);
        res.status(500).json({ message: 'Error saving Investor Relations form data' });
    }
});

// Early Access Form
app.post('/api/save-form-data/earlyAccess', async (req, res) => {
    const { name, email } = req.body;

    try {
        const collection = db.collection('early_access');

        // Prepare document to insert into MongoDB
        const document = {
            name,
            email
        };

        // Insert document into MongoDB
        const result = await collection.insertOne(document);

        res.json({
            message: 'Early Access form data saved successfully!',
            formData: document
        });
    } catch (error) {
        console.error('Error saving Early Access form data:', error);
        res.status(500).json({ message: 'Error saving Early Access form data' });
    }
});

// Join Us Form
app.post('/api/save-form-data/joinUs', upload.single('resume'), async (req, res) => {
    const { name, role, why } = req.body;
    const resumeBuffer = req.file ? req.file.buffer : null;

    try {
        const collection = db.collection('join_us');

        // Prepare document to insert into MongoDB
        const document = {
            name,
            role,
            why,
            resume: null // Placeholder for resume file id
        };

        // Insert document into MongoDB
        const result = await collection.insertOne(document);

        // Handle resume file if uploaded
        if (resumeBuffer) {
            const uploadStream = resumesBucket.openUploadStreamWithId(new ObjectId(), 'resume');
            uploadStream.end(resumeBuffer);

            document.resume = uploadStream.id; // Store resume file id in document
            await collection.updateOne({ _id: result.insertedId }, { $set: { resume: uploadStream.id } });
        }

        res.json({
            message: 'Join Us form data saved successfully!',
            formData: document
        });
    } catch (error) {
        console.error('Error saving Join Us form data:', error);
        res.status(500).json({ message: 'Error saving Join Us form data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
