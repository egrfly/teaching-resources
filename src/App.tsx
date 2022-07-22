import React, { createContext, useEffect, useState, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import initSqlJs from 'sql.js'
import { createTables } from './data/dbManagement'
import PythonInstance from './models/PythonInstance'
import SqlInstance from './models/SqlInstance'
import Home from './pages/Home'
import JsRoutes from './pages/js/JsRoutes'
import PythonRoutes from './pages/python/PythonRoutes'
import SqlRoutes from './pages/sql/SqlRoutes'

// Required to let webpack 4 know it needs to copy the wasm file to our assets
// eslint-disable-next-line import/no-webpack-loader-syntax
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm"

declare global {
  interface Window {
    loadPyodide: (options?: any) => Promise<any>,
  }
}

export const PythonContext = createContext<PythonInstance>({
  pyodide: null,
  outputArray: [],
  clearOutput: () => {},
})

export const SqlContext = createContext<SqlInstance>({
  db: null,
  headerRow: [],
  dataRows: [],
  clearOutput: () => {},
})

const App = () => {
  const [pyodide, setPyodide] = useState<any>(null)
  const pythonOutputArray: string[] = useMemo(() => [], [])

  const [db, setDb] = useState<any>(null)
  const [sqlHeaderRow, setSqlHeaderRow] = useState<string[]>()
  const [sqlDataRows, setSqlDataRows] = useState<string[][]>()

  useEffect(() => {
    window.loadPyodide({
      stdout: (newOutput: string) => pythonOutputArray.push(newOutput),
    }).then((pyodide) => {
      setPyodide(pyodide)
      pythonOutputArray.length = 0
    })
  }, [pythonOutputArray])

  useEffect(() => {
    initSqlJs({
      locateFile: () => sqlWasm,
    }).then((SQL: any) => {
      const newDb = new SQL.Database()
      createTables(newDb)
      setDb(newDb)
    })
  }, [])

  return (
    <PythonContext.Provider value={{
      pyodide: pyodide,
      outputArray: pythonOutputArray,
      clearOutput: () => pythonOutputArray.length = 0,
    }}>
      <SqlContext.Provider value={{
        db: db,
        headerRow: sqlHeaderRow,
        dataRows: sqlDataRows,
        clearOutput: () => {
          setSqlHeaderRow(undefined)
          setSqlDataRows(undefined)
        },
      }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/js/*" element={<JsRoutes />} />
            <Route path="/python/*" element={<PythonRoutes />} />
            <Route path="/sql/*" element={<SqlRoutes />} />
          </Routes>
        </Router>
      </SqlContext.Provider>
    </PythonContext.Provider>
  )
}

export default App
