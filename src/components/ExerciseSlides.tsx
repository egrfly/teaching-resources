import React from 'react'
import md5 from 'crypto-js/md5'
import ExerciseSet from '../models/ExerciseSet'
import CodeTextArea from './CodeTextArea'
import Slide from './Slide'

const ExerciseSlides = ({title, ordinal, exercises}: ExerciseSet) => {
  return (
    <>
      <Slide title={`Exercise ${ordinal}: ${title}`}>
        <ol>
          {exercises.map(exercise => <li key={md5(exercise.question).toString()}>{exercise.question}</li>)}
        </ol>
      </Slide>
      {exercises.map((exercise, index) =>
        <Slide title={`Try exercise ${ordinal}.${index + 1} here`} key={md5(exercise.question).toString()}>
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
