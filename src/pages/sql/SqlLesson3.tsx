import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  stringFunctionExercises,
  numericFunctionExercises,
  setFunctionExercises,
  groupByExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

const SqlLesson3 = () => {
  return (
    <Presentation language="sql">

      <SlideCollection title="Introduction">
        <Slide title="SQL Basics">
          <h4>Lesson 3</h4>
        </Slide>
        <Slide title="Lesson plan">
          <ol>
            <li>Built-in functions</li>
            <li>Grouping data</li>
            <li>Filtering grouped data</li>
            <li>Ordering data</li>
          </ol>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Built-in functions">
        <Slide title="What is a function?">
          <p>Most versions of SQL have a lot of built-in functions which help us carry out common tasks.</p>
          <ul>
            <li>Think of a function as a recipe or set of instructions for how to <strong>make</strong> something (you should end up with something at the end)</li>
            <li>A procedure, which we will study in due course, is similar, but is rather intended to <strong>do</strong> something (you shouldn't end up with something at the end)</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT FUNCTION_NAME(column_name)\n  FROM table_name;`} />
        </Slide>
        <Slide title="String functions">
          <p>One prominent category of functions is those that operate on strings (pieces of text). Examples include:</p>
          <ul>
            <li><code>LENGTH</code> - gets the length of a string</li>
            <li><code>CONCAT</code> in MySQL (equivalent to the <code>||</code> operator in SQLite) - joins strings together end-to-end</li>
            <li><code>LOWER</code> - gets a lowercase version of a string</li>
            <li><code>UPPER</code> - gets an uppercase version of a string</li>
            <li><code>SUBSTR</code> - gets a portion of a string</li>
            <li><code>TRIM</code> - gets a trimmed version of a string (with leading and trailing spaces removed)</li>
            <li><code>REVERSE</code> - gets a back-to-front version of a string</li>
          </ul>
        </Slide>
        <Slide title="Example">
          <p>Get the length of the string <code>'CFG'</code></p>
          <CodeTextArea mode="demo" exampleCode={`SELECT LENGTH('CFG');`} />
        </Slide>
        <Slide title="Example">
          <p>Select each name and its length from the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.name, LENGTH(s.name)\n  FROM students AS s;`} />
        </Slide>
        <Slide title="Example">
          <p>My users keep entering their names into my form in different ways, like <code>'Leslie'</code>, <code>'leslie'</code>, <code>'   LESLIE'</code> and <code>' leslie '</code>. Find some functions that will ensure these all get stored as the same name in my database</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT LOWER(TRIM('   lEsLiE  ')) AS 'Username';`} />
        </Slide>
        <ExerciseSlides title="String functions" ordinal="A" exercises={stringFunctionExercises} />
        <Slide title="Numeric functions">
          <p>Another prominent category of functions is those that operate on numbers. Examples include:</p>
          <ul>
            <li><code>ROUND</code> - rounds a number to a certain amount of decimal places, or to the nearest whole number</li>
            <li><code>SQRT</code> - gets the square root of a number</li>
            <li><code>ABS</code> - gets the absolute value of a number (the same number without a negative sign if originally present)</li>
            <li><code>PI</code> - gets the number &pi;</li>
          </ul>
        </Slide>
        <Slide title="Example">
          <p>Get 1234.567 rounded to the nearest whole number and to two decimal places</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`SELECT ROUND(1234.567);`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT ROUND(1234.567, 2);`} />
          </div>
        </Slide>
        <Slide title="Example">
          <p>Select each item and its price rounded to the nearest pound from the products table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT p.name, ROUND(p.price)\n  FROM products AS p;`} />
        </Slide>
        <Slide title="Example">
          <p>My sheep live in a square field whose area is 841 metres squared. Find a function that could tell me the side length of the field</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT SQRT(841) AS 'Side Length';`} />
        </Slide>
        <Slide title="Example">
          <p>My cows live in a circular field whose radius is 10 metres. Use functions to find the area of the field</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`-- SQLite code - won't work in MySQL\nSELECT PI() * SQUARE(10) AS 'Area';`} />
            <CodeTextArea mode="demo" exampleCode={`-- MySQL code - won't work in SQLite\nSELECT PI() * POW(10, 2) AS 'Area';`} />
          </div>
        </Slide>
        <ExerciseSlides title="Numeric functions" ordinal="B" exercises={numericFunctionExercises} />
        <Slide title="Set functions">
          <p>Another prominent category of functions is those that operate on whole columns at once. These include:</p>
          <ul>
            <li><code>COUNT</code> - gets the number of non-<code>NULL</code> items in a list</li>
            <li><code>SUM</code> - gets the total of all the numbers in a list</li>
            <li><code>MIN</code> - gets the minimum value in a list</li>
            <li><code>MAX</code> - gets the maximum value in a list</li>
            <li><code>AVG</code> - gets the average of all the numbers in a list</li>
            <li><code>GROUP_CONCAT</code> - gets all the strings in a list added together into one big string separated by commas</li>
          </ul>
        </Slide>
        <Slide title="Example">
          <p>Find out how many rows there are in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT COUNT(*)\n  FROM students;`} />
        </Slide>
        <Slide title="Example">
          <p>Find out how many students followed the Software stream</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT COUNT(*)\n  FROM students AS s\n WHERE s.stream = 'Software';`} />
        </Slide>
        <Slide title="Example">
          <p>Select the smallest length of a name in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT MIN(LENGTH(s.name))\n  FROM students AS s;`} />
        </Slide>
        <ExerciseSlides title="Set functions" ordinal="C" exercises={setFunctionExercises} />
      </SlideCollection>

      <SlideCollection title="Recap and pause">
        <Slide title="Material covered so far">
          <ul>
            <li>Built-in string functions</li>
            <li>Built-in numeric functions</li>
            <li>Built-in set functions</li>
          </ul>
        </Slide>
        <Slide title="While you wait">
          <p>Find all distinct sponsor-stream combinations for 2022.</p>
          <CodeTextArea mode="exercise" exampleCode={`;`} />
        </Slide>
      </SlideCollection>

      <SlideCollection title="Grouping data">
        <Slide title="The GROUP BY keywords">
          <p>If you want to group rows according to certain properties and consider them all at once, you can use a GROUP BY clause.</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT *\n    FROM table_name AS t\nGROUP BY t.column_name;`} />
        </Slide>
        <Slide title="Example using DISTINCT instead">
          <p>Find all the unique streams in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT DISTINCT s.stream\n           FROM students AS s;`} />
        </Slide>
        <Slide title="Example using GROUP BY">
          <p>Find all the unique streams in the students table and how many times they each occur</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.stream, COUNT(*)\n    FROM students AS s\nGROUP BY s.stream;`} />
        </Slide>
        <Slide title="Another example">
          <p>Find the number of people in the students table who took a course in each year</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.year, COUNT(*)\n    FROM students AS s\nGROUP BY s.year;`} />
        </Slide>
        <Slide title="Grouping by more that one column - first, using DISTINCT">
          <p>Find out all distinct cohorts (season-year combinations)</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT DISTINCT s.season, s.year\n           FROM students AS s;`} />
        </Slide>
        <Slide title="Grouping by more that one column - then, using GROUP BY">
          <p>Find out all distinct cohorts (season-year combinations)</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.season, s.year, COUNT(*)\n    FROM students AS s\nGROUP BY s.season, s.year;`} />
        </Slide>
        <Slide title="Another example">
          <p>Find the average length of the names of the students in each stream</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.stream, AVG(LENGTH(s.name)) AS 'Average Name Length'\n    FROM students AS s\nGROUP BY s.stream;`} />
        </Slide>
        <ExerciseSlides title="Grouping data" ordinal="D" exercises={groupByExercises} />
      </SlideCollection>

      <SlideCollection title="Filtering grouped data">
        <Slide title="The HAVING keyword">
          <p>The <code>HAVING</code> keyword can be used to select which groups of data to display.</p>
          <p>It plays a similar role to the <code>WHERE</code> keyword, but a <code>HAVING</code> clause always comes after a <code>GROUP BY</code> (filtering aggregated data) whereas a <code>WHERE</code> clause always comes before (filtering non-aggregated data).</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT t.column_name, COUNT(t.column_name)\n    FROM table_name AS t\nGROUP BY t.column_name\n  HAVING COUNT(t.column_name) > VALUE;`} />
        </Slide>
        <Slide title="Example">
          <p>Find out all the streams with at least 8 students</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.stream, COUNT(*)\n    FROM students AS s\nGROUP BY s.stream\n  HAVING COUNT(*) >= 8;`} />
        </Slide>
        <Slide title="Example">
          <p>Find out the average stock of each department in the products table where this average is at least 30</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT p.department, AVG(p.stock)\n    FROM products AS p\nGROUP BY p.department\n  HAVING AVG(p.stock) > 30;`} />
        </Slide>
        <Slide title="Example">
          <p>Find all departments where I would spend under £5 if I bought 1 of each item</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT p.department\n    FROM products AS p\nGROUP BY p.department\n  HAVING SUM(p.price) < 5;`} />
        </Slide>
        <ExerciseSlides title="Filtering grouped data" ordinal="E" exercises={[]} />
      </SlideCollection>

      <SlideCollection title="Ordering data">
        <Slide title="The ORDER BY keywords">
          <p>If you want to order data by a particular column, you can use an <code>ORDER BY</code> clause.</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT *\n    FROM table_name AS t\nORDER BY t.column_name;`} />
        </Slide>
        <ExerciseSlides title="Ordering data" ordinal="F" exercises={[]} />
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson3
