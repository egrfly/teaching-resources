import React from 'react'
import SqlOutput from '../../models/SqlOutput'

const SqlOutputTable = ({headerRow, dataRows}: SqlOutput) => {
  return (
    <div className="output-spacer mb-3">
      <div className={`sql-output-table-wrapper rounded ${dataRows && 'border'} border-secondary`}>
        <table className="table table-dark">
          <thead>
            <tr>{headerRow?.map(columnHeader => <th key={columnHeader}>{columnHeader}</th>)}</tr>
            {dataRows && dataRows.length === 0 && <tr><th>Query successful, no data returned</th></tr>}
          </thead>
          <tbody className="border-0">
            {dataRows?.map(row => 
              <tr>{row.map(columnValue => <td>{columnValue}</td>)}</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SqlOutputTable
