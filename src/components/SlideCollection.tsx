import React, { ReactNode } from 'react'

interface SlideCollectionProps {
  title: string,
  children?: ReactNode,
}

const SlideCollection = ({title, children}: SlideCollectionProps) => {
  return (
    <section>
      <h4>{title}</h4>
      {children}
    </section>
  )
}

export default SlideCollection
