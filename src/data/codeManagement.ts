export const runSqlCode = (code: string,
                           db: any,
                           setError: (error: string) => void,
                           setHeaderRow: (row: string[] | null) => void,
                           setRows: (rows: string[][] | null) => void) => {
  const commands = ['PRAGMA foreign_keys = ON;'].concat(...code.split(';')
                                                .filter(command => command.trim()))
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
      setHeaderRow(null)
      setRows(null)
      break
    }
  }
}
