import React from 'react'

interface PythonOutputWindowProps {
  outputArray: string[],
}

const PythonOutputWindow = ({outputArray}: PythonOutputWindowProps) => {
  return (
    <div className="output-spacer mb-3">
      <div className="python-output-window card border-secondary text-start">
        <div className="card-body">
          {outputArray.length === 0
            ? "Code ran successfully, no output"
            : outputArray.join('\n')}
        </div>
      </div>
    </div>
  )
}

export default PythonOutputWindow
