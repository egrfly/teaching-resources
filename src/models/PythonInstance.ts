interface PythonInstance {
  pyodide: any,
  outputArray: string[],
  clearOutput: () => void,
}

export default PythonInstance
