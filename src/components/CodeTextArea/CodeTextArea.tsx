import React, { useState, useEffect, useRef, useContext } from 'react'
import CodeMirror from 'codemirror'
import { runPythonCode, runSqlCode } from '../../data/codeManagement'
import { LanguageContext } from '../Presentation'
import SqlOutputTable from '../Output/SqlOutputTable'
import { PythonContext, SqlContext } from '../../App'
import PythonOutputWindow from '../Output/PythonOutputWindow'
import ErrorWindow from '../Output/ErrorWindow'

interface CodeTextAreaProps {
  mode: "syntax" | "demo" | "exercise",
  exampleCode: string,
  language?: string,
}

const CodeTextArea = ({mode, exampleCode, language}: CodeTextAreaProps) => {
  const languageFromContext = useContext(LanguageContext)
  const editorLanguage = language || languageFromContext

  const textArea = useRef<HTMLTextAreaElement>(null)
  const [editor, setEditor] = useState<CodeMirror.EditorFromTextArea>()

  const python = useContext(PythonContext)
  const sql = useContext(SqlContext)

  const [pythonOutputArray, setPythonOutputArray] = useState<string[]>([])
  const [sqlHeaderRow, setSqlHeaderRow] = useState<string[]>()
  const [sqlDataRows, setSqlDataRows] = useState<string[][]>()

  const [showOutput, setShowOutput] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const editorFromTextArea = CodeMirror.fromTextArea(textArea.current!, {
      mode: editorLanguage,
      theme: "vscode-dark",
      autoRefresh: true,
    })
    setEditor(editorFromTextArea)
    setShowOutput(false)
  }, [editorLanguage])

  const runCode = () => {
    const code = editor?.getValue() ?? ""
    switch (editorLanguage) {
      case "python":
        python.outputArray.push("What")
        runPythonCode(code, python, setError)
        setPythonOutputArray(python.outputArray.slice())
        break
      case "sql":
        runSqlCode(code, sql, setError)
        setSqlHeaderRow(sql.headerRow?.slice())
        setSqlDataRows(sql.dataRows?.slice())
        break
    }
    setShowOutput(true)
  }

  const clearOutput = () => {
    setShowOutput(false)
    python.clearOutput()
    sql.clearOutput()
  }

  const showExampleCode = () => {
    clearOutput()
    editor!.setValue(exampleCode)
  }

  return (
    <div className="w-75 mt-5 mx-auto code-mirror-block">
      <textarea className="bg-dark" ref={textArea} defaultValue={mode === "exercise" ? "" : exampleCode} />
      {mode !== "syntax" &&
        <>
          <div className="btn-group w-100 my-3" role="group" aria-label="Basic example">
            <button className="btn btn-dark border-secondary w-100" onClick={runCode}>Run</button>
            <button className="btn btn-dark border-secondary w-100" onClick={clearOutput}>Clear Output</button>
            <button className="btn btn-dark border-secondary w-100" onClick={showExampleCode}>{mode === "exercise" ? "Show Answer" : "Reset"}</button>
          </div>
          {showOutput && (
            (error && <ErrorWindow error={error} />) ||
            (editorLanguage === "sql" && <SqlOutputTable headerRow={sqlHeaderRow} dataRows={sqlDataRows} />) ||
            (editorLanguage === "python" && <PythonOutputWindow outputArray={pythonOutputArray} />))}
        </>}
    </div>
  )
}

export default CodeTextArea
