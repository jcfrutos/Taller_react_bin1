import * as XLSX from 'xlsx';

export async function processExcelFiles(files: File[]): Promise<any[]> {
  const results: any[] = [];

  for (const file of files) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });

    // Busca la hoja "CUADRE GL"
    const sheet = workbook.Sheets['CUADRE GL'];
    if (!sheet) continue;

    // Convierte la hoja a JSON desde la fila 6 (índice 5) hasta la última, columnas A a AF
    const range = XLSX.utils.decode_range(sheet['!ref'] || '');
    range.s.r = 5; // Empieza en la fila 6 (índice base 0)
    range.e.c = 31; // Columna AF es la 31 (A=0, ..., AF=31)
    const newRef = XLSX.utils.encode_range(range);

    const rows = XLSX.utils.sheet_to_json(sheet, { range: newRef, header: 1 });
    results.push({ fileName: file.name, rows });
  }

  return results;
}