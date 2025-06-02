"use client";
import React from 'react';
import { useState } from 'react';
import ExcelUploader from '../../components/ExcelUploader';
import { processExcelFiles } from '@/lib/excelUtils';

interface Result {
  fileName: string;
  rows: any[];
}

const UploadPage = () => {
    const [results, setResults] = useState<Result[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = async (files: File[]) => {
        setLoading(true);
        setError(null);
        try {
            const data = await processExcelFiles(files);
            setResults(data);
        } catch (err) {
            setError('Error processing files. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Upload Excel Files</h1>
            <ExcelUploader onUpload={handleFileUpload} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {results && (
                <div>
                    <h2>Results</h2>
                    {/* Render results here, e.g., in a table */}
                </div>
            )}
        </div>
    );
};

export default UploadPage;