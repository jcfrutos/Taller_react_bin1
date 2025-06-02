// This file defines the types and interfaces used in the application, ensuring proper typing in TypeScript.

export interface ExcelData {
    month: number;
    year: number;
    values: Array<Array<number>>;
}

export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
}

export interface DashboardData {
    totalSum: number;
    details: Array<{ label: string; value: number }>;
}

export interface UploadResponse {
    success: boolean;
    message: string;
    data?: ExcelData;
}