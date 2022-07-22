import React from 'react'
import ExerciseSet from '../models/ExerciseSet'
import CodeTextArea from './CodeTextArea/CodeTextArea'
import Slide from './Slide'

const ExerciseSlides = ({title, ordinal, exercises}: ExerciseSet) => {
  return (
    <>
      <Slide title={`Exercise ${ordinal}: ${title}`}>
        <ol>
          {exercises.map(exercise => <li key={exercise.question}>{exercise.question}</li>)}
        </ol>
      </Slide>
      {exercises.map((exercise, index) =>
        <Slide title={`Try exercise ${ordinal}.${index + 1} here`} key={exercise.question}>
          <p>{exercise.question}</p>
          {exercise.secondaryCode
            ? <div className="d-flex dual-code-text-area">
                <CodeTextArea mode="exercise" exampleCode={exercise.solution} />
                <CodeTextArea mode="demo" exampleCode={exercise.secondaryCode} />
              </div>
            : <CodeTextArea mode="exercise" exampleCode={exercise.solution} />}
        </Slide>
      )}
    </>
  )
}

export default ExerciseSlides
