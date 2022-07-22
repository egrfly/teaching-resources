interface SqlInstance {
  db: any,
  headerRow?: string[],
  dataRows?: string[][],
  clearOutput: () => void,
}

export default SqlInstance
