import CodeTextArea from '../../components/CodeTextArea'
import ExerciseSlides from '../../components/ExerciseSlides'
import Presentation from "../../components/Presentation"
import Slide from '../../components/Slide'
import SlideCollection from '../../components/SlideCollection'
import {
  nonKeyConstraintExercises,
  keyConstraintExercises,
} from '../../data/exerciseManagement/sqlExerciseManagement'

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
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE pets (\n  name VARCHAR(50) NOT NULL,\n  species VARCHAR(20) NOT NULL DEFAULT 'Dog'\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO pets\n       (name)\nVALUES ('Spot');`} />
          </div>
        </Slide>
        <Slide title="The CHECK constraint">
          <p>By default, when a data type is specified for a column of a table, any value of that type may be inserted into that column.</p>
          <p>However, we may wish to restrict the data being inserted into the column according to custom criteria.</p>
          <p>Upon table creation, if we want to specify additional criteria for data being inserted into a column, we can use a <code>CHECK</code> constraint, typically at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n  another_column_name TYPE,\n\n  CHECK (column_name > value)\n);`} />
        </Slide>
        <Slide title="Example">
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
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE users (\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(255) NOT NULL,\n\n  UNIQUE (email)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO users\n       (name, email)\nVALUES ('Emily', 'someone@somewhere.com'),\n       ('Sarah', 'someone@somewhere.com');`} />
          </div>
        </Slide>
        <Slide title="The PRIMARY KEY constraint">
          <p>We can have as many unique keys as we like, but we are also able to specify a main unique identifier, the <strong>primary key</strong>.</p>
          <p>Primary keys are unique, not <code>NULL</code>, and are often (but by no means always) integers. They can be applied to a single column or a combination of columns.</p>
          <p>Upon table creation, if we want to create a primary key, we can use a <code>PRIMARY KEY</code> constraint, either after the data type declaration or at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n\n  PRIMARY KEY (column_name)\n);`} />
        </Slide>
        <Slide title="Example">
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE library_cards (\n  number INTEGER,\n  name VARCHAR(50) NOT NULL,\n\n  PRIMARY KEY (number)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO library_cards\n       (number, name)\nVALUES (123, 'Emily'),\n       (123, 'Sarah'),\n       (NULL, 'Elaine');`} />
          </div>
        </Slide>
        <Slide title="The FOREIGN KEY constraint">
          <p>When inserting data into a table, we may wish to restrict the data being inserted into a particular column to values present in a key column of another table only.</p>
          <p>To achieve this, we would specify a <strong>foreign key</strong>, indicating that the column depends on a key in a different (foreign) table. This is the first constraint we have seen which determines a relationship between separate tables.</p>
          <p>Upon table creation, if we want to specify a foreign key, we can use a <code>FOREIGN KEY</code> constraint, typically at the end of the table definition.</p>
          <CodeTextArea mode="syntax" exampleCode={`CREATE TABLE table_name (\n  column_name TYPE,\n\n  PRIMARY KEY (column_name)\n);\n\nCREATE TABLE another_table_name (\n  another_column_name TYPE,\n\n  FOREIGN KEY (another_column_name) REFERENCES table_name (column_name)\n);`} />
        </Slide>
        <Slide title="Example">
          <div className="d-flex dual-code-text-area">
            <CodeTextArea mode="demo" exampleCode={`CREATE TABLE pizzas (\n  name VARCHAR(20) UNIQUE,\n  price DECIMAL(4, 2)\n);\n\nCREATE TABLE orders (\n  reference INTEGER,\n  pizza VARCHAR(20),\n\n  PRIMARY KEY (reference),\n  FOREIGN KEY (pizza) REFERENCES pizzas (name)\n);`} />
            <CodeTextArea mode="demo" exampleCode={`INSERT\n  INTO pizzas\n       (name, price)\nVALUES ('Margherita', 13.99),\n       ('Vegetable', 14.99),\n       ('Hawaiian', 15.99);\n\nINSERT\n  INTO orders\n       (reference, pizza)\nVALUES (12345, 'Pepperoni');`} />
          </div>
        </Slide>
        <ExerciseSlides title="Key constraints" ordinal="B" exercises={keyConstraintExercises} />
      </SlideCollection>

    </Presentation>
  )
}

export default SqlLesson4
