import React, { useState } from 'react';

interface ExcelUploaderProps {
  onUpload: (files: File[]) => void;
}
const ExcelUploader:React.FC<ExcelUploaderProps> = ({ onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setFiles(selectedFiles);
            onUpload(selectedFiles);
        }
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            alert('Please select files to upload.');
            return;
        }

        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });
        formData.append('month', month);
        formData.append('year', year);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('File upload failed');
            }

            const result = await response.json();
            console.log('Upload successful:', result);
            // Handle success (e.g., redirect to results page or show success message)
        } catch (error) {
            console.error('Error uploading files:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h2>Upload Excel Files</h2>
            <input type="file" multiple accept=".xlsx, .xls, .xlsm" onChange={handleFileChange} />
            <div>
                <label>
                    Month:
                    <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
                </label>
                <label>
                    Year:
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ExcelUploader;