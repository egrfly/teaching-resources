import React from 'react'
import { Link } from 'react-router-dom'
import Resource from '../models/Resource'

const ResourceCard = ({title, description, url}: Resource) => {
  return (
    <div className="card bg-secondary border-light my-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={url} role="button" className="btn btn-outline-primary">Open &raquo;</Link>
      </div>
    </div>
  )
}

export default ResourceCard
