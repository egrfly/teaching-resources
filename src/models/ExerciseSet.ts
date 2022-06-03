import Exercise from "./Exercise";

interface ExerciseSet {
  title: string,
  ordinal: string | number,
  exercises: Exercise[],
}

export default ExerciseSet
