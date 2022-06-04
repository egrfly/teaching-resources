import React, { ReactNode } from 'react'

interface PresentationProps {
  title: string,
  children?: ReactNode,
}

const SlideCollection = ({title, children}: PresentationProps) => {
  return (
    <section>
      <h4>{title}</h4>
      {children}
    </section>
  )
}

export default SlideCollection
