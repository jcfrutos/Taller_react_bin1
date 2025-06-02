import React from 'react';

interface Result {
  fileName: string;
  rows: any[];
  description: string;
  value: number;
}
const Dashboard = () => {
    // Placeholder for the results data
    const results: Result[]=[]; // This will hold the sum results from the uploaded Excel files

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Resultados de las sumatorias:</p>
            {results.length > 0 ? (
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