import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  simpleSelectionExercises,
  distinctSelectionExercises,
  conditionalSelectionExercises,
  comparisonOperatorExercises,
  furtherComparisonOperatorExercises,
  logicalOperatorExercises,
  patternMatchingExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

const SqlLesson1 = () => {
  return (
    <Presentation language="sql">

      <SlideCollection title="Introduction">
        <Slide title="SQL Basics">
          <h4>Lesson 1</h4>
        </Slide>
        <Slide title="Lesson plan">
          <ol>
            <li>Simple selection (including wildcards and aliasing)</li>
            <li>Distinct selection</li>
            <li>Conditional selection</li>
            <li>Comparison operators</li>
            <li>Logical operators</li>
          </ol>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Definitions">
        <Slide title="But first, what is SQL?">
          <ul>
            <li>Structured query language</li>
            <li>It can be used to insert, edit, select and delete data from relational databases</li>
            <li>For many databases, it can also be used to control user access</li>
          </ul>
        </Slide>
        <Slide title="What is an RDBM and an RDBMS?">
          <ul>
            <li>Relational database model, relational database management system</li>
            <li>In a relational database, data is generally stored inside tables</li>
            <li>These tables can be <strong>linked</strong> or <strong>related</strong> to each other, so it is possible to extract information across multiple tables at once</li>
          </ul>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Simple selection">
        <Slide title="Selection with wildcards">
          <p>The <code>*</code> wildcard selects all columns.</p>
          <ul>
            <li>Very suitable for exploratory work &ndash; you can see all the available data and work out what you need</li>
            <li>Not well-suited for inclusion in production code &ndash; you are dependent on the table structure not changing to avoid including data unintentionally</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all data for everyone in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students;`} />
        </Slide>
        <Slide title="Selection with column names">
          <p>You can specify which exact columns to include.</p>
          <ul>
            <li>Not well-suited for exploratory work &ndash; you might not know what columns are available, you can only see a subset of the available information</li>
            <li>Suitable for inclusion in production code &ndash; you know exactly what you're going to get, no chance of including extra data unintentionally</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT column_name,\n       another_column_name\n  FROM table_name;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all data for everyone in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT name,\n       sponsor,\n       stream,\n       season,\n       year\n  FROM students;`} />
        </Slide>
        <Slide title="Table name prefixing">
          <p>You can prefix the column names by the table they belong to.</p>
          <ul>
            <li>Good practice, especially if you are including several tables &ndash; improves clarity</li>
            <li>Can cause queries to become quite lengthy</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT table_name.column_name,\n       table_name.another_column_name\n  FROM table_name;`} />
        </Slide>
        <Slide title="Example">
          <p>Select the name and sponsor of everyone in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT students.name,\n       students.sponsor\n  FROM students;`} />
        </Slide>
        <Slide title="Table name aliasing">
          <p>You can give the table a shortened alias and prefix the column names by that instead.</p>
          <ul>
            <li>Best practice, especially if you are including several tables</li>
            <li>Strikes a balance between clarity and conciseness</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t;`} />
        </Slide>
        <Slide title="Example">
          <p>Select the name and sponsor of everyone in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.name,\n       s.sponsor\n  FROM students AS s;`} />
        </Slide>
        <Slide title="Column name aliasing">
          <p>You can give the columns aliases as well to create a clearer results set</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT t.column_name AS 'Column Name',\n       t.another_column_name AS 'Another Column Name'\n  FROM table_name AS t;`} />
        </Slide>
        <Slide title="Example">
          <p>Select the name and sponsor of everyone in the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.name AS 'Name',\n       s.sponsor AS 'Sponsor'\n  FROM students AS s;`} />
        </Slide>
        <ExerciseSlides title="Simple selection" ordinal="A" exercises={simpleSelectionExercises} />
      </SlideCollection>

      <SlideCollection title="Distinct selection">
        <Slide title="The DISTINCT keyword">
          <p>If you want to avoid duplication, you can use the <code>DISTINCT</code> keyword.</p>
          <p>If you use it across several columns, whole combinations of column values have to match for distinct to collapse them into one row.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT DISTINCT t.column_name,\n                t.another_column_name\n           FROM table_name AS t;`} />
        </Slide>
        <Slide title="Example without DISTINCT">
          <p>Select all the seasons from the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.season\n  FROM students AS s;`} />
        </Slide>
        <Slide title="Example with DISTINCT">
          <p>Select all the seasons from the students table</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT DISTINCT s.season\n           FROM students AS s;`} />
        </Slide>
        <Slide title="Exercise A5 without DISTINCT">
          <p>Select the sponsors, seasons and years of all the students (note: do not include the names here)</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT s.sponsor,\n       s.season,\n       s.year\n  FROM students AS s;`} />
        </Slide>
        <Slide title="Exercise A5 with DISTINCT">
          <p>Select the sponsors, seasons and years of all the students (note: do not include the names here)</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT DISTINCT s.sponsor,\n                s.season,\n                s.year\n           FROM students AS s;`} />
        </Slide>
        <ExerciseSlides title="Distinct selection" ordinal="B" exercises={distinctSelectionExercises} />
      </SlideCollection>

      <SlideCollection title="Conditional selection">
        <Slide title="The WHERE keyword">
          <p>If you want to filter results, you can use the <code>WHERE</code> keyword.</p>
          <ul>
            <li>You can use the <code>=</code> operator to find rows with a certain column equal to a certain value</li>
            <li>We use a single <code>=</code> to check for equality, unlike in many languages where it is doubled</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t\n WHERE t.column_1 = value;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all the data for the student called Magda</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name = 'Magda';`} />
        </Slide>
        <Slide title="Example">
          <p>Select all students who have followed the Software stream</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.stream = 'Software';`} />
        </Slide>
        <ExerciseSlides title="Conditional selection" ordinal="C" exercises={conditionalSelectionExercises} />
      </SlideCollection>

      <SlideCollection title="Comparison operators">
        <Slide title="Comparison operator symbols">
          <p>
            As well as <code>=</code>, the <code>!=</code> and <code>&lt;&gt;</code> operators can be used for like-for-like comparisons.
            These two operators do the same thing &ndash; both check for inequality. <code>!=</code> is more common in other programming languages, whereas <code>&lt;&gt;</code> is more common in spreadsheets.
          </p>
          <p>The <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> operators can also be used for ordered comparisons.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name >= value;`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone from the students table except for Leslie</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name != 'Leslie';`} />
        </Slide>
        <Slide title="Example">
          <p>Select all items in the products table with a stock of at least 20</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM products AS p\n WHERE p.stock >= 20;`} />
        </Slide>
        <ExerciseSlides title="Comparison operators" ordinal="D" exercises={comparisonOperatorExercises} />
      </SlideCollection>

      <SlideCollection title="Pause and recap">
        <Slide title="Keywords covered so far">
          <table className="table table-dark">
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
                <td><code>AS</code></td>
                <td>Used to specify an alias for a table or column</td>
              </tr>
              <tr>
                <td><code>WHERE</code></td>
                <td>Used to determine which rows to select</td>
              </tr>
            </tbody>
          </table>
        </Slide>
        <Slide title="While you wait">
          <p>Find all distinct sponsor-stream combinations for 2022.</p>
          <CodeTextArea mode="exercise" exampleCode={`SELECT DISTINCT s.sponsor,\n                s.stream\n           FROM students AS s\n          WHERE s.year = 2022;`} />
        </Slide>
      </SlideCollection>

      <SlideCollection title="Special values">
        <Slide title="The NULL keyword">
          <p>You may have noticed that in the students table, some of the sponsors are blank. This is because they have been filled in with a special keyword called <code>NULL</code>.</p>
          <ul>
            <li>A student having <code>NULL</code> in their sponsor column doesn't necessarily mean they have no sponsor &ndash; rather, it means that we are missing that piece of information for them</li>
            <li>In some ways, <code>NULL</code> is more like a property than a value &ndash; it represents the state of being missing or unknown</li>
            <li>The <code>=</code> and other symbolic comparison operators are useless when coming up against <code>NULL</code> &ndash; if we don't know a particular value, we can't possibly say whether it is equal to or not equal to something</li>
          </ul>
        </Slide>
        <Slide title="The TRUE keyword">
          <p>You may have noticed that in the products table, the <code>on_offer</code> column is filled with 1s and 0s. These are values that have been filled in with <code>TRUE</code> and <code>FALSE</code>.</p>
          <ul>
            <li>The special value <code>TRUE</code> represents a fulfilled condition or accurate statement, and results from true statements like <code>4 &lt; 5</code> and <code>'Hello' != 'Goodbye'</code></li>
            <li>When evaluated, it is actually just equal to 1, meaning that the 1s in the <code>on_offer</code> column were filled in with <code>TRUE</code></li>
          </ul>
        </Slide>
        <Slide title="The FALSE keyword">
          <ul>
            <li>The special value <code>FALSE</code> represents an unfulfilled condition or inaccurate statement, and results from true statements like <code>4 &gt; 5</code> and <code>'Hello' = 'Goodbye'</code></li>
            <li>When evaluated, it is actually just equal to 0, meaning that the 0s in the <code>on_offer</code> column were filled in with <code>FALSE</code></li>
          </ul>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Further comparison operators">
        <Slide title="The IS keyword">
          <p>You can use the <code>IS</code> operator to check for a special value. For example, it is used to check if a value is or isn't <code>NULL</code> (missing).</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name IS NULL;`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose sponsor is not known</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.sponsor IS NULL;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all items in the products table which are on offer</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM products AS p\n WHERE p.on_offer IS TRUE;`} />
            <CodeTextArea mode="demo" exampleCode={`-- Because p.on_offer is already TRUE or FALSE, we can just use it in a WHERE clause directly\nSELECT *\n  FROM products AS p\n WHERE p.on_offer;`} />
          </div>
        </Slide>
        <Slide title="The BETWEEN keyword">
          <p>You can use the <code>BETWEEN</code> operator to check if a value belongs in a range.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name BETWEEN value_1 AND value_2;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all items in the products table that cost between £1.00 and £2.00</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM products AS p\n WHERE p.price BETWEEN 1.00 AND 2.00;`} />
        </Slide>
        <Slide title="The IN keyword">
          <p>You can use the <code>IN</code> operator to check if a value belongs in a list.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name IN (value_1, value_2);`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose name is Ali, Chloe, Lana or Ellie</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name IN ('Ali', 'Chloe', 'Lana', 'Ellie');`} />
        </Slide>
        <ExerciseSlides title="Comparison operators" ordinal="E" exercises={furtherComparisonOperatorExercises} />
      </SlideCollection>

      <SlideCollection title="Another comparison operator">
        <Slide title="The LIKE keyword">
          <p>You can use the <code>LIKE</code> keyword to check if some text matches a particular pattern.</p>
          <p>These patterns are defined using regular characters and special wildcard characters.</p>
          <ul>
            <li>The <code>%</code> wildcard character is used to match any number of unspecified letters (0, 1 or more)</li>
            <li>The <code>_</code> wildcard character is used to match exactly one unspecified letter</li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT *\n  FROM table_name AS t\n WHERE t.column_name LIKE pattern;`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose name starts with R</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name LIKE 'R%';`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose name ends with T</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name LIKE '%n';`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose name starts with E and ends with A</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name LIKE 'E%a';`} />
        </Slide>
        <Slide title="Example">
          <p>Select everyone in the students table whose name has N as its third letter</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.name LIKE '__n%';`} />
        </Slide>
        <ExerciseSlides title="Pattern matching" ordinal="F" exercises={patternMatchingExercises} />
      </SlideCollection>

      <SlideCollection title="Logical operators">
        <Slide title="The AND, OR keywords">
          <p>If you want to filter results by multiple criteria, you can use the <code>AND</code> and <code>OR</code> keywords.</p>
          <ul>
            <li>Both of these keywords are used as part of the <code>WHERE</code> clause of a query</li>
            <li>They are often referred to as <strong>logical operators</strong></li>
          </ul>
          <CodeTextArea mode="syntax" exampleCode={`SELECT t.column_name,\n       t.another_column_name\n  FROM table_name AS t\n WHERE t.column_1 = value_1\n   AND t.column_2 = value_2;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all students who completed a course in summer 2021</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.season = 'Summer'\n   AND s.year = 2021;`} />
        </Slide>
        <Slide title="Example">
          <p>Select all students who were sponsored by either NatWest or Bank of America</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.sponsor = 'NatWest'\n    OR s.sponsor = 'Bank of America';`} />
        </Slide>
        <Slide title="A note about OR vs IN">
          <p>The example on the last slide could have been written more concisely using the <code>IN</code> operator.</p>
          <p>The <code>OR</code> operator is mostly useful when you want to check multiple conditions across different columns, i.e. where an <code>IN</code> is not suitable.</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`-- Using OR\nSELECT *\n  FROM students AS s\n WHERE s.sponsor = 'NatWest'\n    OR s.sponsor = 'Bank of America';`} />
            <CodeTextArea mode="demo" exampleCode={`-- Using IN\nSELECT *\n  FROM students AS s\n WHERE s.sponsor IN ('NatWest', 'Bank of America');`} />
          </div>
        </Slide>
        <Slide title="The NOT keyword">
          <p>The <code>NOT</code> keyword can be used to negate a condition (i.e. check whether the opposite is true).</p>
          <p>It works in combination with keyword comparison operators: <code>NOT BETWEEN</code>, <code>NOT IN</code>, <code>NOT LIKE</code> and <code>IS NOT</code>.</p>
          <CodeTextArea mode="syntax" exampleCode={`SELECT t.column_name\n  FROM table_name AS t\n WHERE t.column_name NOT IN (value_1, value_2);`} />
        </Slide>
        <Slide title="Example">
          <p>Select all students who were NOT sponsored by NatWest or Bank of America</p>
          <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students AS s\n WHERE s.sponsor NOT IN ('NatWest', 'Bank of America');`} />
        </Slide>
        <ExerciseSlides title="Logical operators" ordinal="G" exercises={logicalOperatorExercises} />
      </SlideCollection>

      <SlideCollection title="Some brief theory">
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
      </SlideCollection>

      <SlideCollection title="Conclusion">
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
                <td><code>AS</code></td>
                <td>Used to specify an alias for a table or column</td>
              </tr>
              <tr>
                <td><code>WHERE</code></td>
                <td>Used to determine which rows to select</td>
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
                <td><code>IS</code></td>
                <td>Used to check if values are missing (<code>NULL</code>)</td>
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
            </tbody>
          </table>
        </Slide>
        <Slide title="Keywords from this lesson (part 3)">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>NULL</code></td>
                <td>Used to represent a missing value</td>
              </tr>
              <tr>
                <td><code>TRUE</code></td>
                <td>Used to represent a fulfilled condition, accurate statement or true value (equal to 1)</td>
              </tr>
              <tr>
                <td><code>FALSE</code></td>
                <td>Used to represent an unfulfilled condition, inaccurate statement or false value (equal to 0)</td>
              </tr>
            </tbody>
          </table>
        </Slide>
        <Slide title="Keywords from this lesson (part 4)">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>AND</code></td>
                <td>Used to chain conditions; also used to specify the bounds of a <code>BETWEEN</code> clause</td>
              </tr>
              <tr>
                <td><code>OR</code></td>
                <td>Used to chain conditions</td>
              </tr>
              <tr>
                <td><code>NOT</code></td>
                <td>Used to negate a condition</td>
              </tr>
            </tbody>
          </table>
        </Slide>
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson1
