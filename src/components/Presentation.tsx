import React, { ReactNode, createContext, useEffect } from 'react'
import Reveal from 'reveal.js'

export const LanguageContext = createContext<string>("")

interface PresentationProps {
  language: string,
  children?: ReactNode,
}

const Presentation = ({language, children}: PresentationProps) => {
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
  }, [])

  return (
    <LanguageContext.Provider value={language}>
      <div className="reveal">
        <div className="slides">
          {children}
        </div>
      </div>
    </LanguageContext.Provider>
  )
}

export default Presentation
