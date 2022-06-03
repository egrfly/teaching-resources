import React from 'react'
import ExerciseSet from '../models/ExerciseSet'
import CodeTextArea from './CodeTextArea'
import Slide from './Slide'

const ExerciseSlides = ({title, ordinal, exercises}: ExerciseSet) => {
  return (
    <>
      <Slide title={`Exercise ${ordinal}: ${title}`}>
        <ol>
          {exercises.map(exercise => <li>{exercise.question}</li>)}
        </ol>
      </Slide>
      {exercises.map((exercise, index) =>
        <Slide title={`Try exercise ${ordinal}.${index + 1} here`}>
          <p>{exercise.question}</p>
          {exercise.secondaryCode
            ? <div className="d-flex dual-code-text-area">
                <CodeTextArea exampleCode={exercise.solution} mode="exercise" />
                <CodeTextArea exampleCode={exercise.secondaryCode} mode="demo" />
              </div>
            : <CodeTextArea exampleCode={exercise.solution} mode="exercise" />}
        </Slide>
      )}
    </>
  )
}

export default ExerciseSlides
