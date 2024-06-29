import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import xlsx from 'xlsx';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/save-form-data', (req, res) => {
    const formData = req.body;

    // Check if formData is empty
    if (Object.keys(formData).length === 0) {
        return res.status(400).json({ message: 'No form data received' });
    }

    // Load existing workbook or create a new one
    let workbook;
    const filePath = './form-data.xlsx';

    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
        workbook.SheetNames.push('Sheet1');
        workbook.Sheets['Sheet1'] = xlsx.utils.json_to_sheet([]);
    }

    // Convert form data to a row and append to the existing sheet
    const worksheet = workbook.Sheets['Sheet1'];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    jsonData.push(Object.values(formData));

    // Convert JSON data back to sheet
    workbook.Sheets['Sheet1'] = xlsx.utils.json_to_sheet(jsonData);

    // Save the workbook
    xlsx.writeFile(workbook, filePath);

    res.json({
        message: 'Form data saved successfully!',
        formData: formData
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
