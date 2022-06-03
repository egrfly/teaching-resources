import Exercise from '../../models/Exercise'

export const simpleSelectionExercises: Exercise[] = [
  {
    question: "Select everyone in the students table using a * wildcard",
    solution: "SELECT *\n  FROM students;",
  },
  {
    question: "Select everyone in the students table by writing out the column names",
    solution: "SELECT s.name,\n       s.sponsor,\n       s.stream,\n       s.season,\n       s.year\n  FROM students AS s;",
  },
  {
    question: "Select the names of everyone in the students table",
    solution: "SELECT s.name\n  FROM students AS s;",
  },
  {
    question: "Select the names and streams of everyone in the students table",
    solution: "SELECT s.name,\n       s.stream\n  FROM students AS s;",
  },
  {
    question: "Select the sponsors, seasons and years of everyone in the students table",
    solution: "SELECT s.sponsor,\n       s.season,\n       s.year\n  FROM students AS s;",
  },
]

export const distinctSelectionExercises: Exercise[] = [
  {
    question: "Select all distinct names from the students table",
    solution: "SELECT DISTINCT s.name\n           FROM students AS s;",
  },
  {
    question: "Select all distinct sponsors from the students table",
    solution: "SELECT DISTINCT s.sponsor\n           FROM students AS s;",
  },
  {
    question: "Select all distinct seasons covered by courses from the students table",
    solution: "SELECT DISTINCT s.season\n           FROM students AS s;",
  },
  {
    question: "Select all distinct years covered by courses from the students table",
    solution: "SELECT DISTINCT s.year\n           FROM students AS s;",
  },
  {
    question: "Select all distinct cohorts (season-year combinations) from the students table",
    solution: "SELECT DISTINCT s.season,\n                s.year\n           FROM students AS s;",
  },
]

export const conditionalSelectionExercises: Exercise[] = [
  {
    question: "Select all students called Emma",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name = 'Emma';",
  },
  {
    question: "Select all students sponsored by CFG",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.sponsor = 'CFG';",
  },
  {
    question: "Select all Full Stack stream students",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.stream = 'Full Stack';",
  },
  {
    question: "Find the names of all students who completed a summer course",
    solution: "SELECT s.name\n  FROM students AS s\n WHERE s.season = 'Summer';",
  },
  {
    question: "Find the names and sponsors of all students who completed a course in 2021",
    solution: "SELECT s.name,\n       s.sponsor\n  FROM students AS s\n WHERE s.year = 2021;",
  },
]

export const comparisonOperatorExercises: Exercise[] = [
  {
    question: "Select all items from the products table with a stock of less than 40",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.stock < 40;",
  },
  {
    question: "Select all items from the products table that cost at least £1.50",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price > 1.50;",
  },
  {
    question: "Select all items from the products table apart from broccoli",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.name != 'Broccoli';",
  },
  {
    question: "Select all items from the products table that cost between £0.70 and £1.70",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price BETWEEN 0.70 AND 1.70;",
  },
  {
    question: "Select everything from the products table that belongs in the drinks or snacks departments",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.department IN ('Drinks', 'Snacks');",
  },
]

export const logicalOperatorExercises: Exercise[] = [
  {
    question: "Select all students who completed any spring course or any 2021 course",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.season = 'Spring'\n    OR s.year = 2021;",
  },
  {
    question: "Select all products that whose price isn't between £1.00 and £1.50",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price NOT BETWEEN 1.00 AND 1.50;",
  },
  {
    question: "Find the names and sponsors of all students who completed a Software course or were sponsored by Swiss Re",
    solution: "SELECT s.name, s.sponsor\n  FROM students AS s\n WHERE s.stream = 'Software'\n    OR s.sponsor = 'Swiss Re';",
  },
  {
    question: "Find the stream of the student called Ellie who was sponsored by Slalom",
    solution: "SELECT s.stream\n  FROM students AS s\n WHERE s.name = 'Ellie'\n   AND s.sponsor = 'Slalom';",
  },
  {
    question: "Select all students who completed a course in autumn 2021 or summer 2022",
    solution: "SELECT s.name, s.sponsor\n  FROM students AS s\n WHERE (s.season = 'Autumn'\n   AND s.year = 2021)\n    OR (s.season = 'Summer'\n   AND s.year = 2022);",
  },
]

export const singleInsertionExercises: Exercise[] = [
  {
    question: "Insert Mariyum, a Dunelm-sponsored Full Stack student from spring 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Mariyum', 'Dunelm', 'Full Stack', 'Spring', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Insert Anood, a CFG-sponsored Software student from spring 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Anood', 'CFG', 'Software', 'Spring', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Insert Nikita, an Experian-sponsored Software student from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Nikita', 'Experian', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
]

export const bulkInsertionExercises: Exercise[] = [
  {
    question: "Insert Ayan and Ioana, two Ford-sponsored Full Stack students from spring 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Ayan', 'Ford', 'Full Stack', 'Spring', 2022),\n('Ioana', 'Ford', 'Full Stack', 'Spring', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Insert Kyla, Lucy and Janet, three Moneybox-sponsored Software students from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Kyla', 'Moneybox', 'Software', 'Summer', 2022),\n('Lucy', 'Moneybox', 'Software', 'Summer', 2022),\n('Janet', 'Moneybox', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Insert Akarsha, Rachel, Nazo and Olivia, four IPO-sponsored Software students from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT INTO students\n(name, sponsor, stream, season, year)\nVALUES\n('Akarsha', 'IPO', 'Software', 'Summer', 2022),\n('Rachel', 'IPO', 'Software', 'Summer', 2022),\n('Nazo', 'IPO', 'Software', 'Summer', 2022),\n('Olivia', 'IPO', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT * FROM students;",
  },
]

export const updateExercises: Exercise[] = [
  {
    question: "Change all the autumn students to be winter students instead",
    solution: "UPDATE students\n   SET season = 'Winter'\n WHERE season = 'Autumn';",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Change all the Slalom-sponsored students to be sponsored by Slalom Build instead",
    solution: "UPDATE students\n   SET sponsor = 'Slalom Build'\n WHERE sponsor = 'Slalom';",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Change all the summer 2021 students to be sponsored by CFG",
    solution: "UPDATE students\n   SET sponsor = 'CFG'\n WHERE season = 'Summer'\n   AND year = 2021;",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Change Emma, a spring Full Stack student, to be a summer Software student sponsored by CFG",
    solution: "UPDATE students\n   SET season = 'Summer',\n       stream = 'Software',\n       sponsor = 'CFG'\n WHERE name = 'Emma'\n   AND season = 'Spring'\n   AND stream = 'Full Stack';",
    secondaryCode: "SELECT * FROM students;",
  },
]

export const deletionExercises: Exercise[] = [
  {
    question: "Remove Georgie from the students table",
    solution: "DELETE\n  FROM students\n WHERE name = 'Georgie';",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Remove Ellie, sponsored by Dunelm, from the students table",
    solution: "DELETE\n  FROM students\n WHERE name = 'Ellie'\n   AND sponsor = 'Dunelm';",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Remove everyone sponsored by Deloitte from the students table",
    solution: "DELETE\n  FROM students\n WHERE sponsor = 'Deloitte';",
    secondaryCode: "SELECT * FROM students;",
  },
  {
    question: "Remove everyone from the summer 2021 cohort from the students table",
    solution: "DELETE\n  FROM students\n WHERE season = 'Summer'\n   AND year = '2021';",
    secondaryCode: "SELECT * FROM students;",
  },
]

export const creationExercises: Exercise[] = [
  {
    question: "Create a table called projects with the following columns: group_name (VARCHAR), group_size (INTEGER), stream (VARCHAR) and description (VARCHAR)",
    solution: "CREATE TABLE projects (\n  group_name  VARCHAR(50),\n  group_size  INTEGER,\n  stream      VARCHAR(20),\n  description VARCHAR(255)\n);"
  },
  {
    question: "Create a table called classes with the following columns: stream_and_number, lead_instructor_1, lead_instructor_2, assistant_instructor (all VARCHAR), number_of_students (INTEGER)",
    solution: "CREATE TABLE classes (\n  stream_and_number    VARCHAR(20),\n  lead_instructor_1    VARCHAR(50),\n  lead_instructor_2    VARCHAR(50),\n  assistant_instructor VARCHAR(50),\n  number_of_students   INTEGER\n);",
  },
  {
    question: "Create a table called marks with the following columns: student_name (VARCHAR), assessment_1, theory_1, assessment_2, theory_2, homework, assessment_3 and project (all INTEGER)",
    solution: "CREATE TABLE marks (\n  student_name VARCHAR(50),\n  assessment_1 INTEGER,\n  theory_1     INTEGER,\n  assessment_2 INTEGER,\n  theory_2     INTEGER,\n  homework     INTEGER,\n  assessment_3 INTEGER,\n  project      INTEGER\n);",
  },
]
