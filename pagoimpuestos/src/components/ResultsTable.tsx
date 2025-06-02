import React from 'react';

interface Result {
  columnA: string;
  columnB: number;
  // Add more columns as needed
}

interface ResultsTableProps {
  results: Result[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div>
      <h2>Resultados de las Sumatorias</h2>
      <table>
        <thead>
          <tr>
            <th>Columna A</th>
            <th>Columna B</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.columnA}</td>
              <td>{result.columnB}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;