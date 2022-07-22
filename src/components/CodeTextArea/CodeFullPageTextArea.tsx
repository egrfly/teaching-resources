import React, { useState, useEffect, useRef, useContext } from 'react'
import CodeMirror from 'codemirror'
import { Tooltip } from 'bootstrap'
import { LanguageContext } from '../Presentation'

interface CodeFullPageTextAreaProps {
  code: string,
  language?: string,
}

const CodeFullPageTextArea = ({code, language}: CodeFullPageTextAreaProps) => {
  const copyButton = useRef<HTMLButtonElement>(null)
  const snippet = useRef<HTMLTextAreaElement>(null)

  const languageFromContext = useContext(LanguageContext)
  const editorLanguage = language || languageFromContext

  const [copyButtonTooltip, setCopyButtonTooltip] = useState<Tooltip>()

  useEffect(() => {
    CodeMirror.fromTextArea(snippet.current!, {
      mode: editorLanguage,
      theme: "vscode-dark",
      autoRefresh: true,
    })
  }, [editorLanguage])

  useEffect(() => {
    setCopyButtonTooltip(new Tooltip(copyButton.current as Element, {
      title: "Copy code",
      placement: "left",
      trigger: "hover",
      customClass: "tooltip-primary"
    }))
  }, [])

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    copyButton.current?.setAttribute('data-bs-original-title', "Copied!");
    copyButtonTooltip?.show()
    copyButton.current?.setAttribute('data-bs-original-title', "Copy code");
  }

  return (
    <div className="w-100 mt-3 pb-3 code-mirror-block">
      <button className="btn btn-primary code-mirror-action" ref={copyButton} onClick={copyCode}><i className="bi bi-clipboard2-fill"></i></button>
      <textarea className="bg-dark" ref={snippet} defaultValue={code} />
    </div>
  )
}

export default CodeFullPageTextArea
