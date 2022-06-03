import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import {
  singleInsertionExercises,
  bulkInsertionExercises,
  updateExercises,
  deletionExercises,
  creationExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

const SqlLesson2 = () => {
  return (
    <Presentation language="sql">
      <Slide title="SQL Basics">
        <h4>Lesson 2</h4>
      </Slide>
      <Slide title="There's more!">
        <p>So far, we have covered querying data from a database using the <code>SELECT</code> command. This is just one side of the story. We need to be able to add, edit and remove data as well.</p>
        <p>Adding, editing and removing data each have their own commands. These commands are classified according to the level on which they operate &ndash; rows of data, or whole tables of data.</p>
      </Slide>
      <Slide title="DQL, DML and DDL">
        <ul>
          <li><strong>DQL</strong> stands for Data Query Language. This covers commands like <code>SELECT</code> which are used to query data</li>
          <li><strong>DML</strong> stands for Data Manipulation Language. This covers commands like <code>INSERT</code>, <code>UPDATE</code> and <code>DELETE</code> which act on individual rows of data</li>
          <li><strong>DDL</strong> stands for Data Definition Language. This covers commands like <code>CREATE</code>, <code>ALTER</code> and <code>DROP</code> which act on whole structures of data (e.g. tables)</li>
          <li><em><strong>Note:</strong> sometimes, the DQL commands are grouped under DML rather than having their own category</em></li>
        </ul>
      </Slide>
      <Slide title="DML and DDL">
        <p>Here is a quick summary of the DML and DDL commands we will cover this lesson:</p>
        <table className="table table-dark fs-2">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Adding</th>
              <th scope="col">Editing</th>
              <th scope="col">Removing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">DML (rows)</th>
              <td><code>INSERT</code></td>
              <td><code>UPDATE</code></td>
              <td><code>DELETE</code></td>
            </tr>
            <tr>
              <th scope="row">DDL (tables)</th>
              <td><code>CREATE</code></td>
              <td><code>ALTER</code></td>
              <td><code>DROP</code></td>
            </tr>
          </tbody>
        </table>
      </Slide>
      <Slide title="Inserting Data">
        <p>If you want to add new rows of data into a table, you can use an <code>INSERT</code> statement.</p>
        <ul>
          <li>You should specify which columns you want to insert each matching piece of data into</li>
        </ul>
        <CodeTextArea exampleCode={`INSERT INTO table_name\n(column_1, column_2)\nVALUES\n('VALUE 1', 'VALUE 2'),\n('VALUE A', 'VALUE B');`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Insert yourself into the students table! Try a <code>SELECT</code> statement afterwards to see if it worked.</p>
        <div className="d-flex dual-code-text-area">
          <CodeTextArea exampleCode={`INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Emily', 'CFG', 'Software', 'Summer', 2022);`} mode="demo" />
          <CodeTextArea exampleCode={`SELECT * FROM students`} mode="demo" />
        </div>
      </Slide>
      <ExerciseSlides title="Data Insertion" ordinal="A" exercises={singleInsertionExercises} />
      <Slide title="Example">
        <p>Insert at least two fellow students into the students table at once. Try a <code>SELECT</code> statement afterwards to see if it worked.</p>
        <div className="d-flex dual-code-text-area">
          <CodeTextArea exampleCode={`INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Katie', 'Experian', 'Software', 'Summer', 2022),\n('Amina', 'CFG', 'Software', 'Summer', 2022);`} mode="demo" />
          <CodeTextArea exampleCode={`SELECT * FROM students`} mode="demo" />
        </div>
      </Slide>
      <ExerciseSlides title="Bulk Insertion" ordinal="B" exercises={bulkInsertionExercises} />
      <Slide title="Updating Data">
        <p>If you want to edit existing rows of data in a table, you can use an <code>UPDATE</code> statement.</p>
        <ul>
          <li>If you don't include a <code>WHERE</code> clause, every row in the table will be updated</li>
        </ul>
        <CodeTextArea exampleCode={`UPDATE table_name\n   SET column_1 = 'VALUE 1',\n       column_2 = 'VALUE 2'\n WHERE column_3 = 'VALUE 3';`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Change your stream and make your sponsor The Donkey Sanctuary. Try a <code>SELECT</code> statement afterwards to see if it worked.</p>
        <div className="d-flex dual-code-text-area">
          <CodeTextArea exampleCode={`UPDATE students\n   SET stream = 'Full Stack',\n       sponsor = 'The Donkey Sanctuary'\n WHERE name = 'Emily';`} mode="demo" />
          <CodeTextArea exampleCode={`SELECT * FROM students`} mode="demo" />
        </div>
      </Slide>
      <ExerciseSlides title="Data Update" ordinal="C" exercises={updateExercises} />
      <Slide title="Deleting Data">
        <p>If you want to delete rows of data from a table, you can use a <code>DELETE</code> statement.</p>
        <ul>
          <li>If you don't include a <code>WHERE</code> clause, every row in the table will be deleted</li>
        </ul>
        <CodeTextArea exampleCode={`DELETE\n  FROM table_name\n WHERE column_name = 'VALUE';`} mode="syntax" />
      </Slide>
      <Slide title="Example">
        <p>Remove yourself from the students table. Try a <code>SELECT</code> statement afterwards to see if it worked.</p>
        <div className="d-flex dual-code-text-area">
          <CodeTextArea exampleCode={`DELETE\n  FROM students\n WHERE name = 'Emily';`} mode="demo" />
          <CodeTextArea exampleCode={`SELECT * FROM students`} mode="demo" />
        </div>
      </Slide>
      <ExerciseSlides title="Data Deletion" ordinal="D" exercises={deletionExercises} />
      <Slide title="DML and Aliasing">
        <p>You may have noticed that the examples with <code>INSERT</code>, <code>UPDATE</code> and <code>DELETE</code> have not used aliases.</p>
        <p>This is because these commands can only ever act on one table at a time, so aliasing serves no purpose.</p>
        <p>Some versions of SQL don't actually support aliasing with these keywords for this reason. It is recommended to just use the table names and column names without qualification.</p>
      </Slide>
      <Slide title="Creating Tables">
        <p>If you want to make a new table, you can use a <code>CREATE</code> statement.</p>
        <ul>
          <li>You should specify what type of data you are expecting to be included in each column</li>
        </ul>
        <CodeTextArea exampleCode={`CREATE TABLE table_name (\n  column_1 TYPE,\n  column_2 TYPE\n);`} mode="syntax" />
      </Slide>
      <Slide title="Data Types">
        <p>Some common data types:</p>
        <ul>
          <li><code>CHAR(n)</code> &ndash; fixed-length character strings (exactly <code>n</code> characters long)</li>
          <li><code>VARCHAR(n)</code> &ndash; variable-length character strings (up to <code>n</code> characters long)</li>
          <li><code>INT</code> or <code>INTEGER</code> &ndash; whole numbers</li>
          <li><code>FLOAT</code> &ndash; any numbers (not necessarily whole)</li>
        </ul>
        <p>Many SQL dialects also have specialised types like <code>DATE</code>, <code>TIME</code> and <code>DATETIME</code> (MySQL would be an example, whereas SQLite doesn't have these).</p>
      </Slide>
      <Slide title="Example">
        <p>Create a table for instructors (with a name, stream, season and year).</p>
        <CodeTextArea exampleCode={`CREATE TABLE instructors (\n  name   VARCHAR(255),\n  stream VARCHAR(20),\n  season CHAR(6),\n  year   INTEGER\n);`} mode="demo" />
      </Slide>
      <ExerciseSlides title="Table Creation" ordinal="E" exercises={creationExercises} />
    </Presentation>
  )
}

export default SqlLesson2
