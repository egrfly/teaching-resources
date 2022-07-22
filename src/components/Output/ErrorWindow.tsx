import React from 'react'

interface ErrorWindowProps {
  error: string,
}

const ErrorWindow = ({error}: ErrorWindowProps) => {
  return (
    <div className="output-spacer mb-3">
      <div className="error-window card border-secondary text-start">
        <div className="card-body">
          {error}
        </div>
      </div>
    </div>
  )
}

export default ErrorWindow
