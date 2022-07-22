import React, { useState, useEffect } from 'react'
import CodeFullPageTextArea from './CodeTextArea/CodeFullPageTextArea'
import Loader from './Loader'
import NavBar from './NavBar'

interface ResourcePageProps {
  title: string,
  filename: string,
  language: string,
}

const ResourcePage = ({title, filename, language}: ResourcePageProps) => {
  const [code, setCode] = useState("")

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/resources/${filename}`)
      .then(response => response.text())
      .then(content => setCode(content))
  }, [filename])

  return (
    <>
      <NavBar pageTitle={title} />
      <div className="container">
        {code ? <CodeFullPageTextArea code={code} language={language} /> : <Loader />}
      </div>
    </>
  )
}

export default ResourcePage
