import React from 'react'
import CodeTextArea from '../../components/CodeTextArea/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'

const PythonLesson1 = () => {
  return (
    <Presentation language="python">

      <SlideCollection title="Introduction">
        <Slide title="Python Basics">
          <h4>Lesson 1</h4>
        </Slide>
        <Slide title="Lesson plan">
          <ol>
            <li>The <code>print()</code> function</li>
            <li>Variables</li>
            <li>The <code>input()</code> function</li>
            <li>Data types</li>
          </ol>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Definitions">
        <Slide title="But first, what is Python?">
          <ul>
            <li>Easy to learn, read and write &ndash; looks a lot like English, suitable for new and experienced developers alike</li>
            <li>Interpreted &ndash; can be read and executed one line at a time by a special interpreter, rather than having to be compiled (translated) fully beforehand</li>
            <li>Multi-paradigm &ndash; supports functional, procedural and object-oriented programming, making it suitable for different types and scales of project</li>
            <li>High-level, portable and platform-independent &ndash; Python programmers don't have to consider low-level concerns like system architecture and memory management</li>
            <li>General-purpose &ndash; used in domains like data analysis and visualisation, machine learning, server-side web development, game development, DevOps and scripting</li>
            <li>Dynamically-typed (as opposed to statically typed) &ndash; the types of pieces of data are worked out while the code is running rather than needing to be specified in advance</li>
            <li>Free and open-source &ndash; the language specifications and source code of common implementations are freely available for the public to inspect</li>
          </ul>
        </Slide>
        <Slide title="What is Python 3?">
          <ul>
            <li>Most recent version of Python, first released in 2008, under active development</li>
            <li>Supersedes Python 2, first released in 2000 and no longer supported as of 2020</li>
            <li>Has various syntax (word/symbol grammar) differences to Python 2 which make them mutually incompatible</li>
            <li>More widely used in different domains of technology than Python 2 &ndash; various examples of Python 3 use cases feature on the previous slide</li>
          </ul>
          <p>For this course, we will be studying Python 3.</p>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Outputting data">
        <Slide title="Printing text">
          <p><code>print()</code> is a Python function that allows us to output data to the user.</p>
          <ul>
            <li>A function is just a reusable piece of code designed to complete a specific task and/or produce some kind of output</li>
            <li>Think of it like a recipe or set of instructions, waiting to be used</li>
            <li>You can spot a function being used because it will have a set of round brackets <code>()</code> after its name, potentially with some kind of input data inside</li>
            <li>If we want to print some text, we need to ensure that we put the text in quotes (either single or double)</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`print("text in quotes")`} />
        </Slide>
        <Slide title="Example">
          <p>Print out some simple greetings. Try using double quotes and then single quotes - the output should be no different so long as the text is the same</p>
          <CodeTextArea mode="demo" exampleCode={`print("Hello world")\nprint('Hello there')`} />
        </Slide>
        <ExerciseSlides title="Printing text" ordinal="A" exercises={[]} />
      </SlideCollection>

      <SlideCollection title="Storing data">
        <Slide title="Declaring variables">
          <p>A variable is reusable label for a piece of data</p>
          <ul>
            <li>We create one by writing the variable's name, followed by an equals sign and then the piece of data we want to assign to it</li>
            <li>Think of the process of creating a variable like picking out a small box of space in the computer's memory, sticking a label on it and putting some data inside</li>
            <li>Variable names can't contain spaces &ndash; the convention in Python is to use underscores wherever we might want to use a space in a variable name (this convention is called snake case)</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`variable_name = "variable value"`} />
        </Slide>
        <Slide title="Accessing variables">
          <p>You can retrieve the information in the variable by specifying the variable name (the name on the label) in our code</p>
          <ul>
            <li>Anywhere we can use the data directly in our code, we can use the name on the label instead to represent the data</li>
            <li>We can access the information in the variable as many times as we like</li>
          </ul>
          <CodeTextArea mode="demo" exampleCode={`repeated_lyric = "Whoa, the hokey cokey"\nprint(repeated_lyric)\nprint(repeated_lyric)\nprint(repeated_lyric)\nprint("Knees bent, arms stretched, rah rah rah")`} />
        </Slide>
        <Slide title="Reassigning variables">
          <p>You can swap out the data in the variable for a different piece of data in future</p>
          <ul>
            <li>Using the box analogy, think of the process of reassigning a variable like throwing away the original box contents and replacing them with some new data</li>
            <li>If it isn't saved elsewhere, the original data in the variable will be lost</li>
          </ul>
          <CodeTextArea mode="demo" exampleCode={`student_name = "Magda"\nprint(student_name)\nstudent_name = "Leslie"\nprint(student_name)`} />
        </Slide>
        <ExerciseSlides title="Using variables" ordinal="B" exercises={[]} />
      </SlideCollection>

    </Presentation>
  )
}

export default PythonLesson1
