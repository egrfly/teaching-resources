import React from 'react'
import CodeTextArea from '../../components/CodeTextArea/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  stringFunctionExercises,
  numericFunctionExercises,
  setFunctionExercises,
  flowControlExercises,
  groupByExercises,
  havingExercises,
  orderByExercises,
  limitExercises,
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
            <li>Flow control operators</li>
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
            <li><code>LENGTH</code> &ndash; gets the length of a string</li>
            <li><code>CONCAT</code> in MySQL (equivalent to the <code>||</code> operator in SQLite) &ndash; joins strings together end-to-end</li>
            <li><code>LOWER</code> &ndash; gets a lowercase version of a string</li>
            <li><code>UPPER</code> &ndash; gets an uppercase version of a string</li>
            <li><code>SUBSTR</code> &ndash; gets a portion of a string</li>
            <li><code>TRIM</code> &ndash; gets a trimmed version of a string (with leading and trailing spaces removed)</li>
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
            <li><code>ROUND</code> &ndash; rounds a number to a certain amount of decimal places, or to the nearest whole number</li>
            <li><code>SQRT</code> &ndash; gets the square root of a number</li>
            <li><code>ABS</code> &ndash; gets the absolute value of a number (the same number without a negative sign if originally present)</li>
            <li><code>PI</code> &ndash; gets the number &pi;</li>
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
            <li><code>COUNT</code> &ndash; gets the number of non-<code>NULL</code> items in a list</li>
            <li><code>SUM</code> &ndash; gets the total of all the numbers in a list</li>
            <li><code>MIN</code> &ndash; gets the minimum value in a list</li>
            <li><code>MAX</code> &ndash; gets the maximum value in a list</li>
            <li><code>AVG</code> &ndash; gets the average of all the numbers in a list</li>
            <li><code>GROUP_CONCAT</code> &ndash; gets all the strings in a list added together into one big string separated by commas</li>
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

      <SlideCollection title="Flow control operators">
        <Slide title="The CASE keyword">
          <p>If you want to generate a new column based on values in another column in a way that a built-in function doesn't cover, you can use a <code>CASE WHEN</code> expression.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT CASE t.column_name\n           WHEN value_1 THEN another_value_1\n           WHEN value_2 THEN another_value_2\n       END\n  FROM table_name AS t;`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone from the students table and which term they took their course in (spring: term 1, summer: term 2, autumn: term 3)</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.name,\n       CASE s.season\n           WHEN 'Spring' THEN 1\n           WHEN 'Summer' THEN 2\n           WHEN 'Autumn' THEN 3\n       END AS 'Term'\n  FROM students AS s;`} />
        </Slide>
        <Slide title="The CASE keyword">
          <p>If you want to generate a new column based on more complex conditions, that is also possible.</p>
          <p>Another optional addition is an <code>ELSE</code> clause, which matches everything not already covered by one of the preceding conditions. If you don't include it, anything not covered will default to <code>NULL</code>.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT CASE\n           WHEN t.column_name > value_1 THEN another_value_1\n           WHEN t.column_name < value_2 THEN another_value_2\n           ELSE another_value_3\n       END\n  FROM table_name AS t;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all items from the products table and whether or not they are currently in stock</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT p.name,\n       CASE\n           WHEN p.stock > 0 THEN TRUE\n           WHEN p.stock = 0 THEN FALSE\n           ELSE NULL\n       END AS 'Currently in stock'\n  FROM products AS p;`} />
        </Slide>
        <ExerciseSlides title="Flow control operators" ordinal="D" exercises={flowControlExercises} />
      </SlideCollection>

      <SlideCollection title="Recap and pause">
        <Slide title="Material covered so far">
          <ul>
            <li>Built-in string functions</li>
            <li>Built-in numeric functions</li>
            <li>Built-in set functions</li>
            <li>Flow control operators</li>
          </ul>
        </Slide>
        <Slide title="While you wait">
          <p>Find the minimum length, maximum length, average length and total length of the names in the students table. Use sensible rounding where appropriate. As a bonus, also find the standard deviation of the lengths (<code>STDEV</code> in extended SQLite, <code>STDDEV</code> in MySQL)</p>
          <CodeTextArea mode="exercise" exampleCode={`SELECT MIN(LENGTH(s.name)) AS 'Minimum length',\n       MAX(LENGTH(s.name)) AS 'Maximum length',\n       ROUND(AVG(LENGTH(s.name)), 1) AS 'Average length',\n       SUM(LENGTH(s.name)) AS 'Total length',\n       ROUND(STDEV(LENGTH(s.name)), 1) AS 'Standard deviation of length'\n  FROM students AS s;`} />
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
        <ExerciseSlides title="Grouping data" ordinal="E" exercises={groupByExercises} />
      </SlideCollection>

      <SlideCollection title="Filtering grouped data">
        <Slide title="The HAVING keyword">
          <p>The <code>HAVING</code> keyword can be used to select which groups of data to display.</p>
          <p>It plays a similar role to the <code>WHERE</code> keyword, but a <code>HAVING</code> clause always comes after a <code>GROUP BY</code> (filtering aggregated data) whereas a <code>WHERE</code> clause always comes before (filtering non-aggregated data).</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT t.column_name,\n         COUNT(t.column_name)\n    FROM table_name AS t\nGROUP BY t.column_name\n  HAVING COUNT(t.column_name) > VALUE;`} />
        </Slide>
        <Slide title="Example">
          <p>Find out all the streams with at least 8 students</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT s.stream,\n         COUNT(*)\n    FROM students AS s\nGROUP BY s.stream\n  HAVING COUNT(*) >= 8;`} />
        </Slide>
        <Slide title="Example">
          <p>Find out the average stock of each department in the products table where this average is at least 30</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT p.department,\n         AVG(p.stock)\n    FROM products AS p\nGROUP BY p.department\n  HAVING AVG(p.stock) > 30;`} />
        </Slide>
        <Slide title="Example">
          <p>Find all departments where I would spend under £5 if I bought 1 of each item</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT p.department\n    FROM products AS p\nGROUP BY p.department\n  HAVING SUM(p.price) < 5;`} />
        </Slide>
        <ExerciseSlides title="Filtering grouped data" ordinal="F" exercises={havingExercises} />
      </SlideCollection>

      <SlideCollection title="Ordering data">
        <Slide title="The ORDER BY keywords">
          <p>If you want to order data by a particular column, you can use an <code>ORDER BY</code> clause.</p>
          <p>Optionally, you can add an <code>ASC</code> or <code>DESC</code> keyword to specify whether you want the order to be ascending or descending.</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT *\n    FROM table_name AS t\nORDER BY t.column_name [ASC/DESC];`} />
        </Slide>
        <Slide title="Example">
          <p>Display the items in the products table in ascending alphabetical name order</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM products AS p\nORDER BY p.name ASC;`} />
        </Slide>
        <Slide title="Example">
          <p>Display the items in the products table in order of price, most expensive first</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM products AS p\nORDER BY p.price DESC;`} />
        </Slide>
        <Slide title="Example">
          <p>Display the departments in the products table in order of most expensive item price</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT p.department,\n         MAX(p.price) AS 'Most expensive item price'\n    FROM products AS p\nGROUP BY p.department\nORDER BY MAX(p.price) DESC;`} />
        </Slide>
        <Slide title="Ordering by multiple columns">
          <p>If you want to order data by a main column and a secondary column (to be used if entries have the same value for the main column), you can do all this inside one <code>ORDER BY</code> clause.</p>
          <p>Optionally, you can still add an <code>ASC</code> or <code>DESC</code> keyword for each column to specify whether you want the order to be ascending or descending.</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT *\n    FROM table_name AS t\nORDER BY t.column_name ASC,\n         t.another_column_name DESC;`} />
        </Slide>
        <Slide title="Example">
          <p>Display the items in the products table in ascending alphabetical department order. Where items have the same department, display the most expensive first</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM products AS p\nORDER BY p.department ASC,\n         p.price DESC;`} />
        </Slide>
        <Slide title="Custom ordering">
          <p>You may not always want to order in alphabetical or numerical order. To achieve a custom ordering, a common strategy would be to use <code>CASE WHEN</code> syntax from earlier in the lesson. This allows you to assign a value to each option and then order by that value.</p>
          <p>This comes in quite handy if you want to order by e.g. days of the week or months of the year, chronologically rather than alphabetically.</p>
          <CodeTextArea mode="syntax" exampleCode={`  SELECT *\n    FROM table_name AS t\nORDER BY CASE t.column_name\n             WHEN value_1 THEN another_value_1\n             WHEN value_2 THEN another_value_2\n         END;`} />
        </Slide>
        <Slide title="Example">
          <p>Display everyone in the students table in order of how recently they took their course</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM students AS s\nORDER BY s.year DESC,\n         CASE s.season\n             WHEN 'Spring' THEN 1\n             WHEN 'Summer' THEN 2\n             WHEN 'Autumn' THEN 3\n         END DESC;`} />
        </Slide>
        <ExerciseSlides title="Ordering data" ordinal="G" exercises={orderByExercises} />
      </SlideCollection>

      <SlideCollection title="Limiting the number of results">
        <Slide title="The LIMIT keyword">
          <p>If you want to return only a specific number of results, you can use the <code>LIMIT</code> keyword.</p>
          <p>It is particularly useful in conjunction with <code>ORDER BY</code> to find e.g. the top three items.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n LIMIT number;`} />
        </Slide>
        <Slide title="Example">
          <p>Select any 10 people from the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n LIMIT 10;`} />
        </Slide>
        <Slide title="Example">
          <p>Find the three most expensive items in the products table</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM products AS p\nORDER BY p.price DESC\n   LIMIT 3;`} />
        </Slide>
        <Slide title="Example">
          <p>Find the last person alphabetically in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`  SELECT *\n    FROM students AS s\nORDER BY s.name DESC\n   LIMIT 1;`} />
        </Slide>
        <ExerciseSlides title="Using the LIMIT keyword" ordinal="H" exercises={limitExercises} />
      </SlideCollection>

      <SlideCollection title="Conclusion">
        <Slide title="Set functions from this lesson">
          <p>The most important functions we learnt in this lesson were the set functions.</p>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>COUNT</code></td>
                <td>When used with <code>*</code>, counts the number of rows in a set. When used with a specific column, counts the number of non-<code>NULL</code> values in a set</td>
              </tr>
              <tr>
                <td><code>SUM</code></td>
                <td>Gets the total of all the values in a set</td>
              </tr>
              <tr>
                <td><code>AVG</code></td>
                <td>Gets the average of all the values in a set</td>
              </tr>
              <tr>
                <td><code>MIN</code></td>
                <td>Gets the smallest value in a set</td>
              </tr>
              <tr>
                <td><code>MAX</code></td>
                <td>Gets the largest value in a set</td>
              </tr>
              <tr>
                <td><code>GROUP_CONCAT</code></td>
                <td>Gets all the items in a set, separated by commas</td>
              </tr>
            </tbody>
          </table>
        </Slide>
        <Slide title="Keywords from this lesson (part 1)">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>CASE</code></td>
                <td>Indicates that we want to calculate a custom field based on a particular column</td>
              </tr>
              <tr>
                <td><code>WHEN</code></td>
                <td>Used to specify a value from the original column</td>
              </tr>
              <tr>
                <td><code>THEN</code></td>
                <td>Used to specify a custom value based on the original column value</td>
              </tr>
              <tr>
                <td><code>ELSE</code></td>
                <td>Used to specify a custom value to be used in the default case</td>
              </tr>
              <tr>
                <td><code>END</code></td>
                <td>Indicates the end of a <code>CASE WHEN</code> block</td>
              </tr>
            </tbody>
          </table>
        </Slide>
        <Slide title="Keywords from this lesson (part 2)">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>GROUP</code></td>
                <td>Indicates that we want to arrange data into groups</td>
              </tr>
              <tr>
                <td><code>ORDER</code></td>
                <td>Indicates that we want to arrange data in some order</td>
              </tr>
              <tr>
                <td><code>BY</code></td>
                <td>Used to specify the grouping or ordering criteria</td>
              </tr>
              <tr>
                <td><code>HAVING</code></td>
                <td>Used with <code>GROUP BY</code> to filter grouped data</td>
              </tr>
              <tr>
                <td><code>LIMIT</code></td>
                <td>Used to limit the number of results to a specified amount</td>
              </tr>
            </tbody>
          </table>
        </Slide>
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson3
