import React from 'react'
import CodeTextArea from '../../components/CodeTextArea/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from "../../components/Presentation"
import SqlOutputTable from '../../components/Output/SqlOutputTable'
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  nonKeyConstraintExercises,
  keyConstraintExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'
import {
  nonNormalisedStudentMarksData,
  technicalFirstNormalFormStudentMarksData,
  trueFirstNormalFormStudentMarksData,
  secondNormalFormMarksData,
  secondNormalFormStudentsData,
  thirdNormalFormMarksData,
  thirdNormalFormStudentsData,
  thirdNormalFormClassesData,
} from '../../data/exampleManagement/sqlExampleManagement'

const SqlLesson4 = () => {
  return (
    <Presentation language="sql">

      <SlideCollection title="Introduction">
        <Slide title="SQL Basics">
          <h4>Lesson 4</h4>
        </Slide>
        <Slide title="Lesson plan">
          <ol>
            <li>
              Data integrity and constraints:
              <ul>
                <li>Non-key constraints</li>
                <li>Key constraints</li>
              </ul>
            </li>
            <li>Data normalisation</li>
            <li>Joins</li>
          </ol>
        </Slide>
      </SlideCollection>

      <SlideCollection title="Non-key constraints">
        <Slide title="Types of non-key constraints">
          <p>Constraints are an important tool for enforcing data integrity in our database. This relates to ensuring that unwanted data values don't make it into our tables.</p>
          <p>We will study 3 types of non-key constraints:</p>
          <ul>
            <li><code>NOT NULL</code></li>
            <li><code>DEFAULT</code></li>
            <li><code>CHECK</code></li>
          </ul>
        </Slide>
        <Slide title="The NOT NULL constraint">
          <p>By default, regular table columns are allowed to contain <code>NULL</code> values.</p>
          <p>However, sometimes we may not want this for particularly important pieces of data. Common examples might be names or IDs.</p>
          <p>Upon table creation, if we want to ensure that <code>NULL</code> values cannot be inserted into a particular column in future, we can use a <code>NOT NULL</code> constraint after the data type declaration.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE NOT NULL\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when we violate a <code>NOT NULL</code> constraint?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE customers (\n  name VARCHAR(50) NOT NULL,\n  most_recent_order DATE\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO customers\n       (most_recent_order)\nVALUES (20220610);`} />
          </div>
        </Slide>
        <Slide title="The DEFAULT constraint">
          <p>When inserting data into a table, the default behaviour if we don't enter a value for a particular column is to insert a <code>NULL</code> if permitted. (For columns with <code>NOT NULL</code> applied, we would be shown an error).</p>
          <p>However, we may wish to change this behaviour and provide an alternative default value instead.</p>
          <p>Upon table creation, if we want to specify an alternative default value for a particular column, we can use a <code>DEFAULT</code> constraint after the data type declaration. (If <code>NOT NULL</code> is also being applied, the <code>DEFAULT</code> constraint typically comes afterwards.)</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE DEFAULT value\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when a <code>DEFAULT</code> constraint is called upon?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE pets (\n  name VARCHAR(50) NOT NULL,\n  species VARCHAR(20) NOT NULL DEFAULT 'Dog'\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO pets\n       (name)\nVALUES ('Spot');\n\nSELECT *\n  FROM pets;`} />
          </div>
        </Slide>
        <Slide title="The CHECK constraint">
          <p>By default, when a data type is specified for a column of a table, any value of that type may be inserted into that column.</p>
          <p>However, we may wish to restrict the data being inserted into the column according to custom criteria.</p>
          <p>Upon table creation, if we want to specify additional criteria for data being inserted into a column, we can use a <code>CHECK</code> constraint, typically at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n  another_column_name TYPE,\n\n  CHECK (column_name > value)\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when we violate a <code>CHECK</code> constraint?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE drivers (\n  name VARCHAR(50) NOT NULL,\n  age INTEGER NOT NULL,\n  car_reg VARCHAR(8) NOT NULL,\n\n  CHECK (age >= 18)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO drivers\n       (name, age, car_reg)\nVALUES ('Sarah', 17, 'AB21 CDE');`} />
          </div>
        </Slide>
        <ExerciseSlides title="Non-key constraints" ordinal="A" exercises={nonKeyConstraintExercises} />
      </SlideCollection>

      <SlideCollection title="Key constraints">
        <Slide title="Types of key constraints">
          <p>In a database, a <strong>key</strong> is an column or combination of columns that can uniquely identify a row.</p>
          <p>We will study 3 types of key constraints:</p>
          <ul>
            <li><code>UNIQUE (KEY)</code></li>
            <li><code>PRIMARY KEY</code></li>
            <li><code>FOREIGN KEY</code></li>
          </ul>
        </Slide>
        <Slide title="The UNIQUE constraint">
          <p>When inserting data into a table, the default behaviour is to allow duplicate data in columns.</p>
          <p>However, we may wish to restrict the data being inserted into a particular column to unique values only.</p>
          <p>Upon table creation, if we want to specify that non-<code>NULL</code> values being inserted into a particular column must be unique, we can use a <code>UNIQUE</code> constraint, either after the data type declaration or at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE UNIQUE\n);\n\nCREATE TABLE another_table_name (\n  another_column_name TYPE,\n\n  UNIQUE (another_column_name)\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when we violate a <code>UNIQUE</code> constraint?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE users (\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(255) NOT NULL,\n\n  UNIQUE (email)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO users\n       (name, email)\nVALUES ('Emily', 'someone@somewhere.com'),\n       ('Sarah', 'someone@somewhere.com');`} />
          </div>
        </Slide>
        <Slide title="The PRIMARY KEY constraint">
          <p>We can have as many unique keys as we like, but we are also able to specify a main unique identifier, the <strong>primary key</strong>.</p>
          <p>Primary keys are unique, not <code>NULL</code>, and are often (but by no means always) integers. They can be applied to a single column or a combination of columns.</p>
          <p><em>Note: in SQLite, due to an early bug, <code>NULL</code> values are sometimes allowed in primary key columns. This is not the case in other SQL dialects like MySQL.</em></p>
          <p>Upon table creation, if we want to create a primary key, we can use a <code>PRIMARY KEY</code> constraint, either after the data type declaration or at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE PRIMARY KEY\n);\n\nCREATE TABLE another_table_name (\n  another_column_name TYPE,\n\n  PRIMARY KEY (another_column_name)\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when we violate a <code>PRIMARY KEY</code> constraint?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE library_cards (\n  number CHAR(6),\n  name VARCHAR(50) NOT NULL,\n\n  PRIMARY KEY (number)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO library_cards\n       (number, name)\nVALUES ('E12345', 'Emily'),\n       ('S65432', 'Sarah'),\n       ('E12345', 'Elaine');`} />
          </div>
        </Slide>
        <Slide title="The FOREIGN KEY constraint">
          <p>When inserting data into a table, we may wish to restrict the data being inserted into a particular column to values present in a key column of another table only.</p>
          <p>To achieve this, we would specify a <strong>foreign key</strong>, indicating that the column depends on a key in a different (foreign) table. This is the first constraint we have seen which determines a relationship between separate tables.</p>
          <p>Upon table creation, if we want to specify a foreign key, we can use a <code>FOREIGN KEY</code> constraint, typically at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n\n  PRIMARY KEY (column_name)\n);\n\nCREATE TABLE another_table_name (\n  another_column_name TYPE,\n\n  FOREIGN KEY (another_column_name) REFERENCES table_name (column_name)\n);`} />
        </Slide>
        <Slide title="Example">
          <p>What happens when we violate a <code>FOREIGN KEY</code> constraint?</p>
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE pizzas (\n  name VARCHAR(20) UNIQUE,\n  price DECIMAL(4, 2)\n);\n\nCREATE TABLE orders (\n  reference INTEGER,\n  pizza VARCHAR(20),\n\n  PRIMARY KEY (reference),\n  FOREIGN KEY (pizza) REFERENCES pizzas (name)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO pizzas\n       (name, price)\nVALUES ('Margherita', 13.99),\n       ('Vegetable', 14.99),\n       ('Hawaiian', 15.99);\n\nINSERT\n  INTO orders\n       (reference, pizza)\nVALUES (12345, 'Pepperoni');`} />
          </div>
        </Slide>
        <ExerciseSlides title="Key constraints" ordinal="B" exercises={keyConstraintExercises} />
      </SlideCollection>

      <SlideCollection title="Data normalisation">
        <Slide title="First normal form">
          <p>There are various subtly different ways of defining 1NF (first normal form), but at this level, the key property to look for is the <strong>atomicity</strong> of a table: in any given row, each column should contain a single piece of information (or a <code>NULL</code>). There should also not be the same column, or essentially the same column, appearing multiple times.</p>
          <p>The main advantage of 1NF is that it makes table lookups much easier, since it doesn't become necessary to pick apart individual columns, or check multiple columns, to find a single piece of information while scanning a table.</p>
          <p>We will see an example of how to transform a table so that it adheres to 1NF.</p>
        </Slide>
        <Slide title="First normal form">
          <p>In this example, we will imagine that no two students have the same name, so we can use the student name to uniquely identify any given row. (In practice, having something like a student ID would be more robust.)</p>
          <p>This table does not adhere to 1NF because the subjects and marks columns are each allowed to contain multiple data values. This would make it quite complex for a DB engine to look up a student's mark for a particular subject (although it may be easy for a human).</p>
          <hr />
          <p>Table <code>students_and_marks</code>, with <code>(name)</code> as primary key</p>
          <SqlOutputTable headerRow={nonNormalisedStudentMarksData.headerRow} dataRows={nonNormalisedStudentMarksData.dataRows} />
        </Slide>
        <Slide title="First normal form">
          <p>This example is an improvement on the last one, because each column of the table is now designed to contain only one data value per row.</p>
          <p>The spirit of 1NF is still not quite being followed, though, since we have separate columns for subject_1 and subject_2, which contain essentially the same information. It would still be quite complex for a DB engine to look up a student's mark for a particular subject, since it would have to search both columns.</p>
          <p>The issues with this arrangement would get worse if a student wanted to take more than two subjects in future &ndash; it is not very <strong>extensible</strong>.</p>
          <hr />
          <p>Table <code>student_and_marks</code>, with <code>(name)</code> as primary key</p>
          <SqlOutputTable headerRow={technicalFirstNormalFormStudentMarksData.headerRow} dataRows={technicalFirstNormalFormStudentMarksData.dataRows} />
        </Slide>
        <Slide title="First normal form">
          <p>The standard solution would be to have one column for subjects and one for marks, and to spread separate subject-mark combinations across different dataRows. All the other information is kept, meaning that students who took multiple subjects now have multiple dataRows.</p>
          <p>Since student names can now be duplicated, the name/subject combination is needed to uniquely define a row.</p>
          <p>The duplication of data isn't ideal, but it is now much easier to look up a student's mark for a particular subject. Moving towards 2NF will help eliminate some duplication.</p>
          <hr />
          <p>Table <code>student_and_marks</code>, with <code>(name, subject)</code> as primary key</p>
          <SqlOutputTable headerRow={trueFirstNormalFormStudentMarksData.headerRow} dataRows={trueFirstNormalFormStudentMarksData.dataRows} />
        </Slide>
        <Slide title="Second normal form">
          <p>Adherence to 1NF is a precondition for 2NF (second normal form). The key additional purpose of 2NF is to disallow <strong>partial dependencies</strong>. A partial dependency occurs when we have a composite key (key made up of multiple columns) along with any other columns that depend on only part of the key.</p>
          <p>The main advantage of 2NF is that it reduces data duplication significantly, making data update much more straightforward and reliable.</p>
          <p>We will see an example of how to transform a 1NF table so that it adheres to 2NF.</p>
        </Slide>
        <Slide title="Second normal form">
          <p>In the 1NF form of our original example, we had a table with the name/subject combinations as a key. However, a student's class and class primary marker depended only on the who they were (the name part of the key), with no dependency on the subject part of the key. The mark column, on the other hand, depended on both parts &ndash; to find a particular mark, we would need to know both for whom and for which subject.</p>
          <hr />
          <p>Table <code>student_and_marks</code>, with <code>(name, subject)</code> as primary key</p>
          <SqlOutputTable headerRow={trueFirstNormalFormStudentMarksData.headerRow} dataRows={trueFirstNormalFormStudentMarksData.dataRows} />
        </Slide>
        <Slide title="Second normal form">
          <p>In order to remove the partial dependencies, we should split the data across two separate tables. The marks can stay in the first table, since these are fully dependent on the existing name/subject key, as discussed. However, since the other columns only depend on the student name, we can extract them into a new table with the student name as the sole key.</p>
          <hr />
          <div className="row">
            <div className="col">
              <p>Table <code>marks</code>, with <code>(name, subject)</code> as primary key</p>
              <SqlOutputTable headerRow={secondNormalFormMarksData.headerRow} dataRows={secondNormalFormMarksData.dataRows} />
            </div>
            <div className="col">
              <p>Table <code>students</code>, with <code>(name)</code> as primary key</p>
              <SqlOutputTable headerRow={secondNormalFormStudentsData.headerRow} dataRows={secondNormalFormStudentsData.dataRows} />
            </div>
          </div>
        </Slide>
        <Slide title="Third normal form">
          <p>Adherence to 2NF is a precondition for 3NF (second normal form). The key additional purpose of 3NF is to disallow <strong>transitive dependencies</strong>. A transitive dependency occurs when we have a non-key column that depends on another non-key column, rather than depending on a key directly.</p>
          <p>The main advantage of 3NF, like 2NF, is that it reduces data duplication significantly, making data update much more straightforward and reliable.</p>
          <p>We will see an example of how to transform a 2NF table so that it adheres to 3NF.</p>
        </Slide>
        <Slide title="Third normal form">
          <p>In the 2NF form of our example, the marks table is actually already in 3NF, since there is only one non-key column (mark), which means there is no opportunity for a transitive dependency to arise.</p>
          <p>The students table, however, is not in 3NF yet. This is because the class primary marker (not a key) depends solely on the class a student is in (also not a key), rather than directly on the student name (the only key in the table). In other words, we could hide the student name column and still be able to work out the class primary marker for each row, based solely on the class.</p>
          <hr />
          <div className="row">
            <div className="col">
              <p>Table <code>marks</code>, with <code>(name, subject)</code> as primary key</p>
              <SqlOutputTable headerRow={secondNormalFormMarksData.headerRow} dataRows={secondNormalFormMarksData.dataRows} />
            </div>
            <div className="col">
              <p>Table <code>students</code>, with <code>(name)</code> as primary key</p>
              <SqlOutputTable headerRow={secondNormalFormStudentsData.headerRow} dataRows={secondNormalFormStudentsData.dataRows} />
            </div>
          </div>
        </Slide>
        <Slide title="Third normal form">
          <p>In order to remove the transitive dependency, we should split the student data across two separate tables. The first should contain the student name and class columns, while the class primary marker can be extracted out into a separate classes table with the class as the key.</p>
          <hr />
          <div className="row">
            <div className="col">
              <p>Table <code>marks</code>, with <code>(name, subject)</code> as primary key</p>
              <p>(Unchanged from 2NF version)</p>
              <SqlOutputTable headerRow={thirdNormalFormMarksData.headerRow} dataRows={thirdNormalFormMarksData.dataRows} />
            </div>
            <div className="col">
              <p>Table <code>students</code>, with <code>(name)</code> as primary key</p>
              <SqlOutputTable headerRow={thirdNormalFormStudentsData.headerRow} dataRows={thirdNormalFormStudentsData.dataRows} />
              <p>Table <code>classes</code>, with <code>(class)</code> as primary key</p>
              <SqlOutputTable headerRow={thirdNormalFormClassesData.headerRow} dataRows={thirdNormalFormClassesData.dataRows} />
            </div>
          </div>
        </Slide>
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson4
