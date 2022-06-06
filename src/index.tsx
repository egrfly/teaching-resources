import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror.js'
import 'codemirror/addon/display/autorefresh.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/python/python.js'
import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/reveal.js'
import 'reveal.js/dist/theme/black.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
