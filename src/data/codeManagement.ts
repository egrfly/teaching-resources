export const runSqlCode = (code: string,
                           db: any,
                           setError: (error: string) => void,
                           setHeaderRow: (row: string[] | null) => void,
                           setRows: (rows: string[][] | null) => void) => {
  const resultHeaderRow: string[] = []
  const resultRows: string[][] = []
  try {
    const statement = db.prepare(code);
    while (statement.step()) {
      if (resultHeaderRow.length === 0) {
        resultHeaderRow.push(...statement.getColumnNames())
      }
      const row = statement.get()
      resultRows.push(row)
    }
    setError("")
    setHeaderRow(resultHeaderRow)
    setRows(resultRows)
  } catch (e) {
    setError(String(e))
    setHeaderRow(null)
    setRows(null)
  }
}
