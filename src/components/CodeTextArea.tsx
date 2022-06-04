import React, { useState, useEffect, useRef, useContext } from 'react'
import CodeMirror from 'codemirror'
import { runSqlCode } from '../data/codeManagement'
import { LanguageContext, DbContext } from './Presentation'

interface CodeTextAreaProps {
  mode: "syntax" | "demo" | "exercise",
  exampleCode: string,
  language?: string,
}

const CodeTextArea = ({mode, exampleCode, language}: CodeTextAreaProps) => {
  const snippet = useRef<HTMLTextAreaElement | null>(null)

  const languageFromContext = useContext(LanguageContext)
  const editorLanguage = language || languageFromContext
  const db = useContext(DbContext)

  const [editor, setEditor] = useState<CodeMirror.EditorFromTextArea | null>(null)
  const [headerRow, setHeaderRow] = useState<string[] | null>(null)
  const [rows, setRows] = useState<string[][] | null>(null)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const editorFromTextArea = CodeMirror.fromTextArea(snippet.current!, {
      mode: editorLanguage,
      theme: "vscode-dark",
    })
    setImmediate(() => {
      editorFromTextArea.refresh()
    })
    document.addEventListener("click", () => {
      editorFromTextArea.refresh()
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
    setHeaderRow(null)
    setRows(null)
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
          <button className="btn btn-dark btn-lg border-secondary w-100" onClick={runCode}>Run</button>
          <button className="btn btn-dark btn-lg border-secondary w-100" onClick={clearOutput}>Clear</button>
          <button className="btn btn-dark btn-lg border-secondary w-100" onClick={showExampleCode}>{mode === "exercise" ? "Answer" : "Reset"}</button>
        </div>
        <div className="table-spacer">
          <div className={`table-wrapper rounded ${(rows || error) && 'border'} border-secondary`}>
            <table className="table table-dark">
              <thead>
                <tr>{headerRow?.map(columnHeader => <th>{columnHeader}</th>)}</tr>
                {rows && rows.length === 0 && <tr><th>Query successful, no data returned</th></tr>}
                {error && <tr><th>{error}</th></tr>}
              </thead>
              <tbody className="border-0">
                {rows?.map(row => 
                  <tr>{row.map(columnValue => <td>{columnValue}</td>)}</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>}
    </div>
  )
}

export default CodeTextArea
