import React, { ReactNode, createContext, useState, useEffect } from 'react'
import Reveal from 'reveal.js'
import SQL from 'sql.js'
import { createTables } from '../data/dbManagement'

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
      minScale: 1,
      maxScale: 1,
    })
    const newDb = new SQL.Database()
    createTables(newDb)
    setDb(newDb)
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
