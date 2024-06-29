import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const resumesDir = path.join(__dirname, 'resumes');
if (!fs.existsSync(resumesDir)) {
    fs.mkdirSync(resumesDir);
}

const saveFormDataToExcel = (filePath, formData, resumeBuffer = null) => {
    let workbook;

    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
        workbook.SheetNames.push('Sheet1');
        workbook.Sheets['Sheet1'] = xlsx.utils.json_to_sheet([]);
    }

    const worksheet = workbook.Sheets['Sheet1'];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    const formDataValues = Object.values(formData);

    if (resumeBuffer) {
        const resumeFileName = `resume_${Date.now()}.pdf`;
        fs.writeFileSync(path.join(resumesDir, resumeFileName), resumeBuffer);
        formDataValues.push(resumeFileName);
    }

    jsonData.push(formDataValues);
    workbook.Sheets['Sheet1'] = xlsx.utils.json_to_sheet(jsonData);
    xlsx.writeFile(workbook, filePath);
};

app.post('/api/save-form-data/:formType', upload.single('resume'), (req, res) => {
    const formData = req.body;
    const formType = req.params.formType;
    const resumeBuffer = req.file ? req.file.buffer : null;

    if (!formType) {
        return res.status(400).json({ message: 'Invalid form type' });
    }

    if (Object.keys(formData).length === 0) {
        return res.status(400).json({ message: 'No form data received' });
    }

    const filePaths = {
        brandEnquiry: './brandEnquiry.xlsx',
        investorRelations: './investorRelations.xlsx',
        earlyAccess: './earlyAccess.xlsx',
        joinUs: './joinUs.xlsx',
    };

    if (!filePaths[formType]) {
        return res.status(400).json({ message: 'Invalid form type' });
    }

    try {
        saveFormDataToExcel(filePaths[formType], formData, resumeBuffer);
        res.json({
            message: `${formType} form data saved successfully!`,
            formData: formData
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Error saving form data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
