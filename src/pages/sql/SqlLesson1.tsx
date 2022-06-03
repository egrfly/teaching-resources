import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import {
  simpleSelectionExercises,
  distinctSelectionExercises,
  conditionalSelectionExercises,
  comparisonOperatorExercises,
  logicalOperatorExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

const SqlLesson1 = () => {
  return (
    <Presentation language="sql">

      {/* Introduction */}
      <Slide title="SQL Basics">
        <h4>Lesson 1</h4>
      </Slide>
      <Slide title="Lesson Plan">
        <ol>
          <li>Simple selection (including wildcards and aliasing)</li>
          <li>Distinct selection</li>
          <li>Conditional selection</li>
          <li>Comparison operators</li>
          <li>Logical operators</li>
        </ol>
      </Slide>

      {/* Theory - SQL and RDBM/RDBMS */}
      <Slide title="But first, what is SQL?">
        <ul>
          <li>Structured Query Language</li>
          <li>It can be used to insert, edit, select and delete data from relational databases</li>
          <li>For many databases, it can also be used to control user access</li>
        </ul>
      </Slide>
      <Slide title="What is an RDBM and RDBMS?">
        <ul>
          <li>Relational database model, relational database management system</li>
          <li>In a relational database, data is generally stored inside tables</li>
          <li>These tables can be <strong>linked</strong> or <strong>related</strong> to each other, so it is possible to extract information across multiple tables at once</li>
        </ul>
      </Slide>

      {/* Simple selection */}
      <Slide title="Selecting Data">
        <p>The <code>*</code> wildcard selects all columns.</p>
        <ul>
          <li>Very suitable for exploratory work - you can see all the available data and work out what you need</li>
          <li>Not well-suited for inclusion in production code - you are dependent on the table structure not changing to avoid including data unintentionally</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT *\n  FROM table_name;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all data for everyone in the students table</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students;`} mode="demo" />
      </Slide>
      <Slide title="Selecting Data">
        <p>You can specify which exact columns to include.</p>
        <ul>
          <li>Not well-suited for exploratory work - you might not know what columns are available, you can only see a subset of the available information</li>
          <li>Suitable for inclusion in production code - you know exactly what you're going to get, no chance of including extra data unintentionally</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT column_name,\n       another_column_name\n  FROM table_name;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all data for everyone in the students table</p>
        <CodeTextArea exampleCode={`SELECT name,\n       sponsor,\n       stream,\n       season,\n       year\n  FROM students;`} mode="demo" />
      </Slide>
      <Slide title="Selecting Data">
        <p>You can prefix the column names by the table they belong to.</p>
        <ul>
          <li>Good practice, especially if you are including several tables - improves clarity</li>
          <li>Can cause queries to become quite lengthy</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT table_name.column_name,\n       table_name.another_column_name\n  FROM table_name;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select the name and sponsor of everyone in the students table</p>
        <CodeTextArea exampleCode={`SELECT students.name,\n       students.sponsor\n  FROM students;`} mode="demo" />
      </Slide>
      <Slide title="Selecting Data">
        <p>You can give the table a shortened alias and prefix the column names by that instead.</p>
        <ul>
          <li>Best practice, especially if you are including several tables</li>
          <li>Strikes a balance between clarity and conciseness</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select the name and sponsor of everyone in the students table</p>
        <CodeTextArea exampleCode={`SELECT s.name,\n       s.sponsor\n  FROM students AS s;`} mode="demo" />
      </Slide>
      <Slide title="Selecting Data">
        <p>You can give the columns aliases as well to create a clearer results set.</p>
        <CodeTextArea exampleCode={`SELECT t.column_name AS 'Column Name',\n       t.another_column_name AS 'Another Column Name'\n  FROM table_name AS t;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select the name and sponsor of everyone in the students table</p>
        <CodeTextArea exampleCode={`SELECT s.name AS 'Name',\n       s.sponsor AS 'Sponsor'\n  FROM students AS s;`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Simple Selection" ordinal="A" exercises={simpleSelectionExercises} />

      {/* Distinct selection */}
      <Slide title="Distinct Selection">
        <p>If you want to avoid duplication, you can use the <code>DISTINCT</code> keyword.</p>
        <ul>
          <li>If you use it across several columns, whole combinations of column values have to match for distinct to collapse them into one row</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT DISTINCT t.column_name,\n                t.another_column_name\n           FROM table_name AS t;`} mode="syntax" />
      </Slide>
      <Slide title="Example without DISTINCT">
        <p>Select all the seasons from the students table</p>
        <CodeTextArea exampleCode={`SELECT s.season\n  FROM students AS s;`} mode="demo" />
      </Slide>
      <Slide title="Example with DISTINCT">
        <p>Select all the seasons from the students table</p>
        <CodeTextArea exampleCode={`SELECT DISTINCT s.season\n           FROM students AS s;`} mode="demo" />
      </Slide>
      <Slide title="Exercise A5 without DISTINCT">
        <p>Select the sponsors, seasons and years of all the students (note: do not include the names here)</p>
        <CodeTextArea exampleCode={`SELECT s.sponsor,\n       s.season,\n       s.year\n  FROM students AS s;`} mode="demo" />
      </Slide>
      <Slide title="Exercise A5 with DISTINCT">
        <p>Select the sponsors, seasons and years of all the students (note: do not include the names here)</p>
        <CodeTextArea exampleCode={`SELECT DISTINCT s.sponsor,\n                s.season,\n                s.year\n           FROM students AS s;`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Distinct Selection" ordinal="B" exercises={distinctSelectionExercises} />

      {/* Conditional selection */}
      <Slide title="Conditional Selection">
        <p>If you want to filter results, you can use the <code>WHERE</code> keyword.</p>
        <ul>
          <li>You can use the <code>=</code> operator to find rows with a certain column equal to a certain value</li>
          <li>We use a single <code>=</code> to check for equality, unlike in many languages where it is doubled</li>
        </ul>
        <CodeTextArea exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t\n WHERE t.column_1 = value;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all the data for the student called Magda</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name = 'Magda';`} mode="demo" />
      </Slide>
      <Slide title="Example">
        <p>Select all students who have followed the Software stream</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.stream = 'Software';`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Conditional Selection" ordinal="C" exercises={conditionalSelectionExercises} />

      {/* Comparison operators */}
      <Slide title="Comparison Operators">
        <p>
          As well as <code>=</code>, the <code>!=</code> and <code>&lt;&gt;</code> operators can be used for like-for-like comparisons.
          These two operators do the same thing - both check for inequality. <code>!=</code> is more common in other programming languages, whereas <code>&lt;&gt;</code> is more common in spreadsheets.
        </p>
        <p>The <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> operators can also be used for ordered comparisons.</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name >= value;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select everyone from the students table except for Leslie</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name != 'Leslie';`} mode="demo" />
      </Slide>
      <Slide title="Example">
        <p>Select all items in the products table with a stock of at least 20</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM products AS p\n WHERE p.stock >= 20;`} mode="demo" />
      </Slide>
      <Slide title="Another Comparison Operator">
        <p>You can use the <code>BETWEEN</code> operator to check if a value belongs in a range.</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name BETWEEN value_1 AND value_2;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all items in the products table that cost between £1.00 and £2.00</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM products AS p\n WHERE p.price BETWEEN 1.00 AND 2.00;`} mode="demo" />
      </Slide>
      <Slide title="Another Comparison Operator">
        <p>You can use the <code>IN</code> operator to check if a value belongs in a list.</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name IN (value_1, value_2);`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select everyone in the students table whose name is Ali, Chloe, Lana or Ellie</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name IN ('Ali', 'Chloe', 'Lana', 'Ellie');`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Comparison Operators" ordinal="D" exercises={comparisonOperatorExercises} />

      {/* Logical operators */}
      <Slide title="Logical operators">
        <p>If you want to filter results by multiple criteria, you can use the <code>AND</code> and <code>OR</code> keywords.</p>
        <ul>
          <li>Both of these keywords are used as part of the <code>WHERE</code> clause of a query</li>
          <li>They are often referred to as <strong>logical operators</strong></li>
        </ul>
        <CodeTextArea exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t\n WHERE t.column_1 = value_1\n   AND t.column_2 = value_2;`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all students who completed a course in summer 2021</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.season = 'Summer'\n   AND s.year = 2021;`} mode="demo" />
      </Slide>
      <Slide title="Example">
        <p>Select all students who were sponsored by either NatWest or Bank of America</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.sponsor = 'NatWest'\n    OR s.sponsor = 'Bank of America';`} mode="demo" />
      </Slide>
      <Slide title="Another logical operator">
        <p>The <code>NOT</code> keyword can be used to negate a condition (i.e. check whether the opposite is true).</p>
        <ul>
          <li>Works in combination with other keywords like <code>BETWEEN</code>, <code>IN</code>, <code>LIKE</code> and <code>IS</code></li>
        </ul>
        <CodeTextArea exampleCode={`SELECT t.column_name\n  FROM table_name AS t\n WHERE t.column_name NOT IN (value_1, value_2);`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Select all students who were NOT sponsored by NatWest or Bank of America</p>
        <CodeTextArea exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.sponsor NOT IN ('NatWest', 'Bank of America');`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Compound Conditional Selection" ordinal="E" exercises={logicalOperatorExercises} />

      {/* Theory - MySQL vs SQLite */}
      <Slide title="A quick bit of theory" />
      <Slide title="What is MySQL?">
        <ul>
          <li>Scalable database server</li>
          <li>Suitable for use as a central database for a large application</li>
          <li>Free and open-source, proprietary implementations also available</li>
          <li>Now owned and maintained by Oracle</li>
          <li>Able to manage lots of database users</li>
          <li>Able to sustain multiple connections at once</li>
        </ul>
      </Slide>
      <Slide title="What is SQLite?">
        <ul>
          <li>Small, file-based database system</li>
          <li>Suitable for use as a local data store for small client-side applications</li>
          <li>Free and open-source</li>
          <li>Community maintained</li>
          <li>Doesn't heavily feature user management</li>
          <li>Only able to reliably sustain one connection at a time</li>
        </ul>
      </Slide>

      {/* Conclusion */}
      <Slide title="Keywords from this lesson (part 1)">
        <table className="table table-dark fs-2">
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>SELECT</code></td>
              <td>Used to extract and view data from a table</td>
            </tr>
            <tr>
              <td><code>DISTINCT</code></td>
              <td>Used to ignore duplicates in our result set</td>
            </tr>
            <tr>
              <td><code>FROM</code></td>
              <td>Used to specify which table we want to work with</td>
            </tr>
            <tr>
              <td><code>WHERE</code></td>
              <td>Used to determine which rows to select</td>
            </tr>
            <tr>
              <td><code>AND</code></td>
              <td>Used to chain conditions; also used to specify the bounds of a <code>BETWEEN</code> clause</td>
            </tr>
            <tr>
              <td><code>OR</code></td>
              <td>Used to chain conditions</td>
            </tr>
          </tbody>
        </table>
      </Slide>
      <Slide title="Keywords from this lesson (part 2)">
        <table className="table table-dark fs-2">
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>NOT</code></td>
              <td>Used to negate a condition</td>
            </tr>
            <tr>
              <td><code>BETWEEN</code></td>
              <td>Used to check if values are within specified bounds</td>
            </tr>
            <tr>
              <td><code>IN</code></td>
              <td>Used to check if values are in a specified list</td>
            </tr>
            <tr>
              <td><code>LIKE</code></td>
              <td>Used to check values match a specified pattern</td>
            </tr>
            <tr>
              <td><code>IS</code></td>
              <td>Used to check if values are missing (<code>NULL</code>)</td>
            </tr>
            <tr>
              <td><code>NULL</code></td>
              <td>Used to represent a missing value</td>
            </tr>
          </tbody>
        </table>
      </Slide>

    </Presentation>
  )
}

export default SqlLesson1
