import React from 'react'
import md5 from 'crypto-js/md5'
import ResultSet from '../models/ResultSet'

const ResultSetTable = ({headerRow, rows, error}: ResultSet) => {
  return (
    <div className="table-spacer mb-3">
      <div className={`table-wrapper rounded ${(rows || error) && 'border'} border-secondary`}>
        <table className="table table-dark">
          <thead>
            <tr>{headerRow?.map(columnHeader => <th key={md5(columnHeader).toString()}>{columnHeader}</th>)}</tr>
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
  )
}

export default ResultSetTable
