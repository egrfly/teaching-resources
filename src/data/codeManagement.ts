import PythonInstance from '../models/PythonInstance'
import SqlInstance from '../models/SqlInstance'

export const runSqlCode = (code: string,
                           sql: SqlInstance,
                           setError: (error: string | undefined) => void) => {
  setError("")
  sql.clearOutput()
  sql.db.run("PRAGMA foreign_keys = ON;")
  const commands = code.split(';').filter((command) => command.trim())
  if (commands.length === 0) {
    commands.push("")
  }
  for (const command of commands) {
    sql.headerRow = []
    sql.dataRows = []
    try {
      const statement = sql.db.prepare(command);
      while (statement.step()) {
        if (sql.headerRow.length === 0) {
          sql.headerRow.push(...statement.getColumnNames())
        }
        sql.dataRows.push(statement.get())
      }
    } catch (error) {
      setError(String(error))
      sql.clearOutput()
      break
    }
  }
}

export const runPythonCode = (code: string,
                              python: PythonInstance,
                              setError: (error: string | undefined) => void) => {
  setError("")
  python.clearOutput()
  try {
    python.pyodide?.runPython(code)
  } catch (error) {
    setError(String(error))
    python.clearOutput()
  }
}
