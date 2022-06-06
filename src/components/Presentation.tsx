import React, { ReactNode, createContext, useState, useEffect } from 'react'
import Reveal from 'reveal.js'
import initSqlJs from 'sql.js'
import { createTables } from '../data/dbManagement'

// Required to let webpack 4 know it needs to copy the wasm file to our assets
// eslint-disable-next-line import/no-webpack-loader-syntax
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

export const LanguageContext = createContext<string>("")
export const DbContext = createContext<any>(null)

interface PresentationProps {
  language: string,
  children?: ReactNode,
}

const Presentation = ({language, children}: PresentationProps) => {
  const [db, setDb] = useState<any>(null)

  useEffect(() => {
    Reveal.initialize({
      progress: true,
      slideNumber: true,
      center: true,
      hash: true,
      hashOneBasedIndex: true,
      touch: false,
      minScale: 1,
      maxScale: 1,
    })
    initSqlJs({ locateFile: () => sqlWasm }).then((SQL: any) => {
      const newDb = new SQL.Database()
      createTables(newDb)
      setDb(newDb)
    })
  }, [])

  return (
    <LanguageContext.Provider value={language}>
      <DbContext.Provider value={db}>
        <div className="reveal">
          <div className="slides">
            {children}
          </div>
        </div>
      </DbContext.Provider>
    </LanguageContext.Provider>
  )
}

export default Presentation
