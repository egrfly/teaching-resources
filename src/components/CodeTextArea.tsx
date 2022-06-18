import React, { useState, useEffect, useRef, useContext } from 'react'
import CodeMirror from 'codemirror'
import { runSqlCode } from '../data/codeManagement'
import { LanguageContext, DbContext } from './Presentation'
import ResultSetTable from './ResultSetTable'

interface CodeTextAreaProps {
  mode: "syntax" | "demo" | "exercise",
  exampleCode: string,
  language?: string,
}

const CodeTextArea = ({mode, exampleCode, language}: CodeTextAreaProps) => {
  const snippet = useRef<HTMLTextAreaElement>(null)

  const languageFromContext = useContext(LanguageContext)
  const editorLanguage = language || languageFromContext
  const db = useContext(DbContext)

  const [editor, setEditor] = useState<CodeMirror.EditorFromTextArea>()
  const [headerRow, setHeaderRow] = useState<string[]>()
  const [rows, setRows] = useState<string[][]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    const editorFromTextArea = CodeMirror.fromTextArea(snippet.current!, {
      mode: editorLanguage,
      theme: "vscode-dark",
      autoRefresh: true,
    })
    setEditor(editorFromTextArea)
  }, [editorLanguage])

  const runCode = () => {
    const code = editor?.getValue() ?? ""
    switch (editorLanguage) {
      case "sql":
        runSqlCode(code, db, setError, setHeaderRow, setRows)
    }
  }

  const clearOutput = () => {
    setError("")
    setHeaderRow(undefined)
    setRows(undefined)
  }

  const showExampleCode = () => {
    clearOutput()
    editor!.setValue(exampleCode)
  }

  return (
    <div className="w-75 mt-5 mx-auto code-mirror-block">
      <textarea className="bg-dark" ref={snippet} defaultValue={mode === "exercise" ? "" : exampleCode} />
      {mode !== "syntax" && <>
        <div className="btn-group w-100 my-3" role="group" aria-label="Basic example">
          <button className="btn btn-dark border-secondary w-100" onClick={runCode}>Run</button>
          <button className="btn btn-dark border-secondary w-100" onClick={clearOutput}>Clear Output</button>
          <button className="btn btn-dark border-secondary w-100" onClick={showExampleCode}>{mode === "exercise" ? "Show Answer" : "Reset"}</button>
        </div>
        <ResultSetTable headerRow={headerRow} rows={rows} error={error} />
      </>}
    </div>
  )
}

export default CodeTextArea
