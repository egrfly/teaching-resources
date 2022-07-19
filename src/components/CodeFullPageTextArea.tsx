import React, { useEffect, useRef, useContext } from 'react'
import CodeMirror from 'codemirror'
import { LanguageContext } from './Presentation'

interface CodeFullPageTextAreaProps {
  code: string,
  language?: string,
}

const CodeFullPageTextArea = ({code, language}: CodeFullPageTextAreaProps) => {
  const snippet = useRef<HTMLTextAreaElement>(null)

  const languageFromContext = useContext(LanguageContext)
  const editorLanguage = language || languageFromContext

  useEffect(() => {
    CodeMirror.fromTextArea(snippet.current!, {
      mode: editorLanguage,
      theme: "vscode-dark",
      autoRefresh: true,
    })
  }, [editorLanguage])

  return (
    <div className="w-100 py-3 code-mirror-block">
      <textarea className="bg-dark" ref={snippet} defaultValue={code} />
    </div>
  )
}

export default CodeFullPageTextArea
