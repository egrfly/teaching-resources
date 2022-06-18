export const runSqlCode = (code: string,
                           db: any,
                           setError: (error: string | undefined) => void,
                           setHeaderRow: (row: string[] | undefined) => void,
                           setRows: (rows: string[][] | undefined) => void) => {
  db.run('PRAGMA foreign_keys = ON;')
  const commands = code.split(';').filter(command => command.trim())
  for (const command of commands) {
    const resultHeaderRow: string[] = []
    const resultRows: string[][] = []
    try {
      const statement = db.prepare(command);
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
      setHeaderRow(undefined)
      setRows(undefined)
      break
    }
  }
}
