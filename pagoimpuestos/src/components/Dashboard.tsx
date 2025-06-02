import React, { useState } from 'react';

interface Result {
  fileName: string;
  rows: any[]; // Puedes reemplazar 'any' por un tipo más específico si lo conoces
  description: string;
  value: number;
}

const Dashboard = () => {
    const [results, setResults] = useState<Result[] | null>(null);
    // Placeholder for the results data
    
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Resultados de las sumatorias:</p>
            {results && results.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.description}</td>
                                <td>{result.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay resultados disponibles. Por favor, carga los archivos de Excel.</p>
            )}
        </div>
    );
};

export default Dashboard;