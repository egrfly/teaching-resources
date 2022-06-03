import React, { ReactNode } from 'react'

interface PresentationProps {
  title: string,
  children?: ReactNode,
}

const Slide = ({title, children}: PresentationProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Slide
