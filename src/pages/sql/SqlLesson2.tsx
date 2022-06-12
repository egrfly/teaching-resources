import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  singleInsertionExercises,
  bulkInsertionExercises,
  updateExercises,
  deletionExercises,
  tableCreationExercises,
  tableAlterationExercises,
  tableDeletionExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

const SqlLesson2 = () => {
  return (
    <Presentation language="sql">

      <SlideCollection title="Introduction">
        <Slide title="SQL Basics">
          <h4>Lesson 2</h4>
        </Slide>
        <Slide title="Lesson plan">
          <ol>
            <li>Data insertion, update and deletion</li>
            <li>Data update</li>
            <li>Data deletion</li>
            <li>Table creation</li>
            <li>Table alteration</li>
            <li>Table deletion</li>
          </ol>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Definitions">
        <Slide title="There's more!">
          <p>So far, we have covered retrieving data using the <code>SELECT</code> command. This is just one side of the story. We need to be able to add, edit and remove data as well.</p>
          <p>Adding, editing and removing data each have their own commands. These commands are classified according to the level on which they operate &ndash; rows of data, or whole tables of data.</p>
        </Slide>
        <Slide title="DQL, DML and DDL">
          <p>We have special terms for different types of commands.</p>
          <ul>
            <li><strong>DQL</strong> stands for Data Query Language. This covers commands like <code>SELECT</code> which are used to query data</li>
            <li><strong>DML</strong> stands for Data Manipulation Language. This covers commands like <code>INSERT</code>, <code>UPDATE</code> and <code>DELETE</code> which act on individual rows of data</li>
            <li><strong>DDL</strong> stands for Data Definition Language. This covers commands like <code>CREATE</code>, <code>ALTER</code> and <code>DROP</code> which act on whole structures of data (e.g. tables)</li>
            <li><em><strong>Note:</strong> sometimes, the DQL commands are grouped under DML rather than having their own category</em></li>
          </ul>
        </Slide>
        <Slide title="DML and DDL">
          <p>Here is a quick summary of the DML and DDL commands we will cover this lesson:</p>
          <table className="table table-dark">
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
      </SlideCollection>

      <SlideCollection title="Single data insertion">
        <Slide title="The INSERT keyword">
          <p>If you want to add a new row of data into a table, you can use an <code>INSERT INTO</code> statement.</p>
          <p>You should specify which columns you want to insert each matching piece of data into.</p>
          <CodeTextArea mode="syntax" exampleCode={`INSERT\n  INTO table_name\n       (column_name, another_column_name)\nVALUES (value_1, value_2);`} />
        </Slide>
        <Slide title="Example">
          <p>Insert yourself into the students table! Try a <code>SELECT</code> statement afterwards to see if it worked</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Emily', 'CFG', 'Software', 'Summer', 2022);`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students`} />
          </div>
        </Slide>
        <ExerciseSlides title="Single data insertion" ordinal="A" exercises={singleInsertionExercises} />
      </SlideCollection>

      <SlideCollection title="Bulk data insertion">
        <Slide title="The INSERT keyword">
          <p>If you want to add multiple new rows of data into a table, you can use an <code>INSERT INTO</code> statement with multiple comma-separated lines after the <code>VALUES</code> keyword.</p>
          <CodeTextArea mode="syntax" exampleCode={`INSERT\n  INTO table_name\n       (column_name, another_column_name)\nVALUES (value_1, value_2),\n       (value_A, value_B);`} />
        </Slide>
        <Slide title="Example">
          <p>Insert at least two fellow students into the students table at once. Try a <code>SELECT</code> statement afterwards to see if it worked</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Katie', 'Experian', 'Software', 'Summer', 2022),\n       ('Amina', 'CFG', 'Software', 'Summer', 2022);`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students`} />
          </div>
        </Slide>
        <ExerciseSlides title="Bulk data insertion" ordinal="B" exercises={bulkInsertionExercises} />
      </SlideCollection>

      <SlideCollection title="Data update">
        <Slide title="The UPDATE keyword">
          <p>If you want to edit existing rows of data in a table, you can use an <code>UPDATE</code> statement.</p>
          <p>If you don't include a <code>WHERE</code> clause, every row in the table will be updated.</p>
          <CodeTextArea mode="syntax" exampleCode={`UPDATE table_name\n   SET column_name = 'VALUE 1',\n       another_column_name = 'VALUE 2'\n WHERE yet_another_column_name = 'VALUE 3';`} />
        </Slide>
        <Slide title="Example">
          <p>Change your stream and make your sponsor The Donkey Sanctuary. Try a <code>SELECT</code> statement afterwards to see if it worked</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`UPDATE students\n   SET stream = 'Full Stack',\n       sponsor = 'The Donkey Sanctuary'\n WHERE name = 'Emily';`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students`} />
          </div>
        </Slide>
        <ExerciseSlides title="Data update" ordinal="C" exercises={updateExercises} />
      </SlideCollection>

      <SlideCollection title="Data deletion">
        <Slide title="The DELETE keyword">
          <p>If you want to delete rows of data from a table, you can use a <code>DELETE FROM</code> statement.</p>
          <p>If you don't include a <code>WHERE</code> clause, every row in the table will be deleted.</p>
          <CodeTextArea mode="syntax" exampleCode={`DELETE\n  FROM table_name\n WHERE column_name = 'VALUE';`} />
        </Slide>
        <Slide title="A note about use of the DELETE keyword without a WHERE clause">
          <p>Some SQL dialects like MySQL prevent you from deleting all rows using <code>DELETE FROM</code> by default, on the basis that it often happens by mistake and is irreversible. If you really want to delete all rows from a table, you can use a <code>TRUNCATE TABLE</code> statement.</p>
          <p>SQLite doesn't support <code>TRUNCATE TABLE</code> &ndash; you would just use a regular <code>DELETE FROM</code> statement, and it would assume you knew what you were doing.</p>
          <CodeTextArea mode="syntax" exampleCode={`TRUNCATE TABLE table_name;`} />
        </Slide>
        <Slide title="Example">
          <p>Remove yourself from the students table. Try a <code>SELECT</code> statement afterwards to see if it worked</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`DELETE\n  FROM students\n WHERE name = 'Emily';`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM students`} />
          </div>
        </Slide>
        <ExerciseSlides title="Data deletion" ordinal="D" exercises={deletionExercises} />
      </SlideCollection>

      <SlideCollection title="Recap and pause">
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
                <td><code>INSERT</code></td>
                <td>Used to add data to a table</td>
              </tr>
              <tr>
                <td><code>INTO</code></td>
                <td>Used with <code>INSERT</code> to specify which table we want to work with</td>
              </tr>
              <tr>
                <td><code>VALUES</code></td>
                <td>Used to specify the rows to insert into a table</td>
              </tr>
              <tr>
                <td><code>UPDATE</code></td>
                <td>Used to edit data in a table</td>
              </tr>
              <tr>
                <td><code>SET</code></td>
                <td>Used to specify the new values to include in a table</td>
              </tr>
              <tr>
                <td><code>DELETE</code></td>
                <td>Used to remove data from a table</td>
              </tr>
              <tr>
                <td><code>FROM</code></td>
                <td>Used with <code>DELETE</code> to specify which table we want to work with</td>
              </tr>
              <tr>
                <td><code>WHERE</code></td>
                <td>Used to determine which rows to update/delete</td>
              </tr>
            </tbody>
          </table>
        </Slide>
        <Slide title="While you wait: a quick note about DML and Aliasing">
          <p>You may have noticed that the examples with <code>INSERT</code>, <code>UPDATE</code> and <code>DELETE</code> have not used aliases.</p>
          <p>This is because these commands can only ever act on one table at a time, so aliasing serves no purpose.</p>
          <p>Some versions of SQL don't actually support aliasing with these keywords for this reason. It is recommended to use the table names and column names directly.</p>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Table creation">
        <Slide title="The CREATE keyword">
          <p>If you want to make a new table, you can use a <code>CREATE TABLE</code> statement.</p>
          <p>You should specify what type of data you are expecting to be included in each column.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n  another_column_name TYPE\n);`} />
        </Slide>
        <Slide title="Data Types">
          <p>Some common data types:</p>
          <ul>
            <li><code>CHAR(n)</code> &ndash; fixed-length character strings (exactly <code>n</code> characters long)</li>
            <li><code>VARCHAR(n)</code> &ndash; variable-length character strings (up to <code>n</code> characters long)</li>
            <li><code>TEXT</code> &ndash; longer passages of text</li>
            <li><code>INT</code> or <code>INTEGER</code> &ndash; whole numbers</li>
            <li><code>FLOAT</code> &ndash; any numbers (not necessarily whole)</li>
            <li><code>DECIMAL(n, d)</code> &ndash; any numbers (not necessarily whole) up to <code>n</code> digits long, of which up to <code>d</code> after the decimal place</li>
            <li><code>BOOLEAN</code> &ndash; one of two values, <code>TRUE</code> (1) or <code>FALSE</code> (0)</li>
            <li><code>DATE</code> &ndash; dates without time information</li>
            <li><code>DATETIME</code> &ndash; dates with time information</li>
          </ul>
          <p>In fact, SQLite actually treats a lot of these data types the same internally, so the differences between <code>CHAR</code>/<wbr /><code>VARCHAR</code>/<wbr /><code>TEXT</code> and <code>FLOAT</code>/<wbr /><code>DECIMAL</code>/<wbr /><code>BOOLEAN</code>/<wbr /><code>DATE</code>/<wbr /><code>DATETIME</code> are purely cosmetic. In database engines like MySQL, these differences have real meaning.</p>
        </Slide>
        <Slide title="Example">
          <p>Create a table for instructors (with a name, stream, season and year)</p>
          <CodeTextArea mode="demo" exampleCode={`CREATE TABLE instructors (\n  name    VARCHAR(255),\n  stream  VARCHAR(20),\n  season  CHAR(6),\n  year    INTEGER,\n  is_lead BOOLEAN\n);`} />
        </Slide>
        <Slide title="Example">
          <p>Insert your instructors into the new instructors table so you can see it in action!</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO instructors\nVALUES ('Emily', 'Software', 'Summer', 2022, TRUE),\n       ('Ali', 'Software', 'Summer', 2022, TRUE),\n       ('Shepstone', 'Software', 'Summer', 2022, FALSE);`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\n  FROM instructors;`} />
          </div>
        </Slide>
        <ExerciseSlides title="Table creation" ordinal="E" exercises={tableCreationExercises} />
      </SlideCollection>

      <SlideCollection title="Table alteration">
        <Slide title="The ALTER keyword">
          <p>If you want to alter an existing table, you can use an <code>ALTER TABLE</code> statement.</p>
          <p>There are lots of different types of alterations you can make.</p>
          <ul>
            <li>You can rename the table</li>
            <li>You can add a column</li>
            <li>You can rename a column</li>
            <li>You can drop (remove) a column</li>
          </ul>
        </Slide>
        <Slide title="Renaming tables">
          <p>Rename the instructors table to teachers, and then back to instructors again</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`ALTER TABLE instructors\n  RENAME TO teachers;`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\nFROM teachers;`} />
          </div>
        </Slide>
        <Slide title="Renaming tables">
          <p>Rename the teachers table back to instructors again</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`ALTER TABLE teachers\n  RENAME TO instructors;`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\nFROM instructors;`} />
          </div>
        </Slide>
        <Slide title="Adding columns">
          <p>Add a column previous_course_count (INTEGER) to the instructors table</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`ALTER TABLE instructors\n ADD COLUMN previous_course_count INTEGER;`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\nFROM instructors;`} />
          </div>
        </Slide>
        <Slide title="Renaming columns">
          <p>Rename the stream column in the instructors table to subject</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`  ALTER TABLE instructors\nRENAME COLUMN stream TO subject;`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\nFROM instructors;`} />
          </div>
        </Slide>
        <Slide title="Dropping columns">
          <p>Drop the previous_course_count column in the instructors table</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`ALTER TABLE instructors\nDROP COLUMN previous_course_count;`} />
            <CodeTextArea mode="demo" exampleCode={`SELECT *\nFROM instructors;`} />
          </div>
        </Slide>
        <ExerciseSlides title="Table alteration" ordinal="F" exercises={tableAlterationExercises} />
      </SlideCollection>

      <SlideCollection title="Table removal">
        <Slide title="The DROP keyword">
          <p>If you want to delete a table, you can use a <code>DROP</code> statement.</p>
          <p>Be careful when using <code>DROP</code> &ndash; you can't undo the deletion unless you have a backup of the table.</p>
          <CodeTextArea mode="syntax" exampleCode={`DROP TABLE table_name;`} />
        </Slide>
        <Slide title="Example">
          <p>Drop the instructors table</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`DROP TABLE instructors;`} />
            <CodeTextArea mode="demo" exampleCode={`-- This should now cause an error\nSELECT *\n  FROM instructors;`} />
          </div>
        </Slide>
        <ExerciseSlides title="Table removal" ordinal="G" exercises={tableDeletionExercises} />
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
                <td><code>INSERT</code></td>
                <td>Used to add data to a table</td>
              </tr>
              <tr>
                <td><code>INTO</code></td>
                <td>Used with <code>INSERT</code> to specify which table we want to work with</td>
              </tr>
              <tr>
                <td><code>VALUES</code></td>
                <td>Used to specify the rows to insert into a table</td>
              </tr>
              <tr>
                <td><code>UPDATE</code></td>
                <td>Used to edit data in a table</td>
              </tr>
              <tr>
                <td><code>SET</code></td>
                <td>Used to specify the new values to include in a table</td>
              </tr>
              <tr>
                <td><code>DELETE</code></td>
                <td>Used to remove data from a table</td>
              </tr>
              <tr>
                <td><code>FROM</code></td>
                <td>Used with <code>DELETE</code> to specify which table we want to work with</td>
              </tr>
              <tr>
                <td><code>WHERE</code></td>
                <td>Used to determine which rows to update/delete</td>
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
                <td><code>TABLE</code></td>
                <td>Indicates that we are working on the table level</td>
              </tr>
              <tr>
                <td><code>COLUMN</code></td>
                <td>Indicates that we are working on the column level</td>
              </tr>
              <tr>
                <td><code>CREATE</code></td>
                <td>Used to make a new table</td>
              </tr>
              <tr>
                <td><code>ALTER</code></td>
                <td>Used to make changes to an existing table</td>
              </tr>
              <tr>
                <td><code>DROP</code></td>
                <td>Used to delete a table or column</td>
              </tr>
              <tr>
                <td><code>ADD</code></td>
                <td>Used to make a new column in an existing table</td>
              </tr>
              <tr>
                <td><code>RENAME</code></td>
                <td>Used to rename a table or column</td>
              </tr>
              <tr>
                <td><code>TO</code></td>
                <td>Used to indicate the new name for a table or column</td>
              </tr>
            </tbody>
          </table>
        </Slide>
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson2
