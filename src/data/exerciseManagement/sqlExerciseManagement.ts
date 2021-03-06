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
    question: "Select all items from the products table that cost at least ??1.50",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price >= 1.50;",
  },
  {
    question: "Use the != operator to select all items from the products table apart from broccoli",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.name != 'Broccoli';",
  },
  {
    question: "Use the <> operator to select all items from the products table apart from those from the fruit and veg department",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.department <> 'Fruit and veg';",
  },
]

export const furtherComparisonOperatorExercises: Exercise[] = [
  {
    question: "Select all items from the products table that cost between ??0.70 and ??1.70",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price BETWEEN 0.70 AND 1.70;",
  },
  {
    question: "Select all items from the products table that belong in the drinks or snacks departments",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.department IN ('Drinks', 'Snacks');",
  },
  {
    question: "Select all items from the products table that are out of stock (stock set to 0)",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.stock = 0;",
  },
  {
    question: "Select all items from the products table whose stock is not known (stock set to NULL)",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.stock IS NULL;",
  },
  {
    question: "Select everyone from the students table whose sponsor is either Moneybox or Experian",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.sponsor IN ('Moneybox', 'Experian');",
  },
  {
    question: "Select everyone from the students table whose name comes between Hannah and Patricia alphabetically",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name BETWEEN 'Hannah' AND 'Patricia';",
  },
]

export const patternMatchingExercises: Exercise[] = [
  {
    question: "Select everyone from the students table whose name begins with an L",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name LIKE 'L%';",
  },
  {
    question: "Select everyone from the students table whose name ends with an A",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name LIKE '%a';",
  },
  {
    question: "Select everyone from the students table whose name begins with an L and ends with an A",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name LIKE 'L%a';",
  },
  {
    question: "Select everyone from the students table whose name begins with an L, ends with an A, and is exactly 4 letters long",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name LIKE 'L__a';",
  },
  {
    question: "Select everyone from the students table whose name has A as its second letter",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.name LIKE '_a%';",
  },
]

export const logicalOperatorExercises: Exercise[] = [
  {
    question: "Select all students who completed any spring course or any 2021 course",
    solution: "SELECT *\n  FROM students AS s\n WHERE s.season = 'Spring'\n    OR s.year = 2021;",
  },
  {
    question: "Select all products that whose price isn't between ??1.00 and ??1.50",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.price NOT BETWEEN 1.00 AND 1.50;",
  },
  {
    question: "Select all products whose stock is known",
    solution: "SELECT *\n  FROM products AS p\n WHERE p.stock IS NOT NULL;",
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
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Mariyum', 'Dunelm', 'Full Stack', 'Spring', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Insert Anood, a CFG-sponsored Software student from spring 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Anood', 'CFG', 'Software', 'Spring', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Insert Nikita, an Experian-sponsored Software student from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Nikita', 'Experian', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
]

export const bulkInsertionExercises: Exercise[] = [
  {
    question: "Insert Ayan and Ioana, two Ford-sponsored Full Stack students from spring 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Ayan', 'Ford', 'Full Stack', 'Spring', 2022),\n       ('Ioana', 'Ford', 'Full Stack', 'Spring', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Insert Kyla, Lucy and Janet, three Moneybox-sponsored Software students from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Kyla', 'Moneybox', 'Software', 'Summer', 2022),\n       ('Lucy', 'Moneybox', 'Software', 'Summer', 2022),\n       ('Janet', 'Moneybox', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Insert Akarsha, Rachel, Nazo and Olivia, four IPO-sponsored Software students from summer 2022, into the students table. Try a SELECT statement afterwards to see if it worked",
    solution: "INSERT\n  INTO students\n       (name, sponsor, stream, season, year)\nVALUES ('Akarsha', 'IPO', 'Software', 'Summer', 2022),\n       ('Rachel', 'IPO', 'Software', 'Summer', 2022),\n       ('Nazo', 'IPO', 'Software', 'Summer', 2022),\n       ('Olivia', 'IPO', 'Software', 'Summer', 2022);",
    secondaryCode: "SELECT *\n  FROM students;",
  },
]

export const updateExercises: Exercise[] = [
  {
    question: "Change all the autumn students to be winter students instead",
    solution: "UPDATE students\n   SET season = 'Winter'\n WHERE season = 'Autumn';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Change all the Slalom-sponsored students to be sponsored by Slalom Build instead",
    solution: "UPDATE students\n   SET sponsor = 'Slalom Build'\n WHERE sponsor = 'Slalom';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Change all the summer 2021 students to be sponsored by CFG",
    solution: "UPDATE students\n   SET sponsor = 'CFG'\n WHERE season = 'Summer'\n   AND year = 2021;",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Change Emma, a spring Full Stack student, to be a summer Software student sponsored by CFG",
    solution: "UPDATE students\n   SET season = 'Summer',\n       stream = 'Software',\n       sponsor = 'CFG'\n WHERE name = 'Emma'\n   AND season = 'Spring'\n   AND stream = 'Full Stack';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
]

export const deletionExercises: Exercise[] = [
  {
    question: "Remove Georgie from the students table",
    solution: "DELETE\n  FROM students\n WHERE name = 'Georgie';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Remove Ellie, sponsored by Dunelm, from the students table",
    solution: "DELETE\n  FROM students\n WHERE name = 'Ellie'\n   AND sponsor = 'Dunelm';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Remove everyone sponsored by Deloitte from the students table",
    solution: "DELETE\n  FROM students\n WHERE sponsor = 'Deloitte';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Remove everyone from the summer 2021 cohort from the students table",
    solution: "DELETE\n  FROM students\n WHERE season = 'Summer'\n   AND year = '2021';",
    secondaryCode: "SELECT *\n  FROM students;",
  },
]

export const tableCreationExercises: Exercise[] = [
  {
    question: "Create a table called projects with the following columns: group_name (VARCHAR), group_size (INTEGER), stream and description (both VARCHAR)",
    solution: "CREATE TABLE projects (\n  group_name  VARCHAR(50),\n  group_size  INTEGER,\n  stream      VARCHAR(20),\n  description VARCHAR(255)\n);",
  },
  {
    question: "Create a table called classes with the following columns: stream_and_number, lead_instructor_1, lead_instructor_2 and assistant_instructor (all VARCHAR)",
    solution: "CREATE TABLE classes (\n  stream_and_number    VARCHAR(20),\n  lead_instructor_1    VARCHAR(50),\n  lead_instructor_2    VARCHAR(50),\n  assistant_instructor VARCHAR(50),\n  number_of_students   INTEGER\n);",
  },
  {
    question: "Create a table called marks with the following columns: student_name (VARCHAR), assessment_1, assessment_2, assessment_3 and project (all INTEGER)",
    solution: "CREATE TABLE marks (\n  student_name VARCHAR(50),\n  assessment_1 INTEGER,\n  assessment_2 INTEGER,\n  assessment_3 INTEGER,\n  project      INTEGER\n);",
  },
]

export const tableAlterationExercises: Exercise[] = [
  {
    question: "Rename the students table to graduates",
    solution: "ALTER TABLE students\n  RENAME TO graduates;",
    secondaryCode: "SELECT *\n  FROM graduates;",
  },
  {
    question: "Rename the graduates table back to students",
    solution: "ALTER TABLE graduates\n  RENAME TO students;",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Add a new column to the students table called final_mark",
    solution: "ALTER TABLE students\n ADD COLUMN final_mark;",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Rename the stream column from the students table to be called subject instead",
    solution: "  ALTER TABLE students\nRENAME COLUMN stream TO subject;",
    secondaryCode: "SELECT *\n  FROM students;",
  },
  {
    question: "Drop the sponsor column from the students table",
    solution: "ALTER TABLE students\nDROP COLUMN sponsor;",
    secondaryCode: "SELECT *\n  FROM students;",
  },
]

export const tableDeletionExercises: Exercise[] = [
  {
    question: "Drop the table called projects you created in a previous exercise",
    solution: "DROP TABLE projects;",
  },
  {
    question: "Drop the table called classes you created in a previous exercise",
    solution: "DROP TABLE classes;",
  },
  {
    question: "Drop the table called marks you created in a previous exercise",
    solution: "DROP TABLE marks;",
  },
]

export const stringFunctionExercises: Exercise[] = [
  {
    question: "Select the first 5 letters of each name from the students table",
    solution: "SELECT SUBSTR(s.name, 1, 5) AS 'First 5 letters of name'\n  FROM students AS s;",
  },
  {
    question: "Select the names and sponsors in uppercase from the students table",
    solution: "SELECT UPPER(s.name) AS 'NAME',\n       UPPER(s.sponsor) AS 'SPONSOR'\n  FROM students AS s;",
  },
  {
    question: "Select the distinct streams from the students table with the word 'Stream' added to the end",
    solution: "-- SQLite code - won't work in MySQL\nSELECT DISTINCT s.stream || ' Stream'\n           FROM students AS s;",
    secondaryCode: "-- Alternative MySQL code - won't work in SQLite\nSELECT DISTINCT CONCAT(s.stream, ' Stream')\n           FROM students AS s;"
  },
  {
    question: "Select the distinct cohorts (season-year combinations) in a single column of the form 'Autumn, 2022'",
    solution: "-- SQLite code - won't work in MySQL\nSELECT DISTINCT s.season || ', ' || s.year\n           FROM students AS s;",
    secondaryCode: "-- Alternative MySQL code - won't work in SQLite\nSELECT DISTINCT CONCAT(s.season, ', ', s.year)\n           FROM students AS s;"
  },
]

export const numericFunctionExercises: Exercise[] = [
  {
    question: "Select the price of each item in the products table rounded to the nearest 10p",
    solution: "SELECT ROUND(p.price, 1)\n  FROM products AS p;",
  },
  {
    question: "(Difficult.) A nearby store has exactly 20 of everything in stock. For each item in the products table, find out the difference between the current stock and the stock of that item in the nearby store. For example, if an item has 35 in stock, the difference would be 15, and if an item has only 2 in stock, the difference would be 18",
    solution: "SELECT p.name,\n       ABS(p.stock - 20) AS 'Stock difference'\n  FROM products AS p;\n\n-- Also valid\n-- SELECT p.name\n--        ABS(20 - p.stock) AS 'Stock difference'\n--   FROM products AS p;",
  },
  {
    question: "(Difficult.) An employee wants to order the stock of each item into a square grid in its place on the shelf. For each item, work out the side length of the square grid of its stock, to the nearest whole number. For example, if an item has 100 in stock, it should be arranged on the shelf in a 10-by-10 grid, and the side length would be 10",
    solution: "SELECT ROUND(SQRT(p.stock))\n  FROM products AS p",
  },
]

export const setFunctionExercises: Exercise[] = [
  {
    question: "Select the number of students who followed the Full Stack stream",
    solution: "SELECT COUNT(*)\n  FROM students AS s\n WHERE s.stream = 'Full Stack';",
  },
  {
    question: "Select the number of students who completed a course in Summer 2021",
    solution: "SELECT COUNT(*)\n  FROM students AS s\n WHERE s.season = 'Summer' AND s.year = 2021;",
  },
  {
    question: "Select the average length of the names in the students table",
    solution: "SELECT AVG(LENGTH(s.name))\n  FROM students AS s;",
  },
  {
    question: "Select the total length of all the names in the students table",
    solution: "Select SUM(LENGTH(s.name))\n  FROM students AS s;",
  },
  {
    question: "Find out the number of students in the students table whose sponsor is known",
    solution: "SELECT COUNT(s.sponsor)\n  FROM students AS s;",
    secondaryCode: "-- Alternative\nSELECT COUNT(*)\n  FROM students AS s\n WHERE s.sponsor IS NOT NULL;"
  },
  {
    question: "Select all distinct seasons covered by students table in a single string, separated by commas",
    solution: "SELECT GROUP_CONCAT(DISTINCT s.season)\n  FROM students AS s;",
  },
]

export const flowControlExercises: Exercise[] = [
  {
    question: "Select everyone from the students table and the year the CFGdegree was in since its inauguration when they took their course (first year for 2021, second year for 2022)",
    solution: "SELECT s.name,\n       CASE s.year\n           WHEN 2021 THEN 'First year'\n           WHEN 2022 THEN 'Second year'\n       END AS 'Year of CFGdegree'\n  FROM students AS s;",
  },
  {
    question: "Select everyone from the students table and the language their final project is primarily in (Python for data and software students, React for full stack students)",
    solution: "SELECT s.name,\n       CASE s.stream\n           WHEN 'Data' THEN 'Python'\n           WHEN 'Software' THEN 'Python'\n           WHEN 'Full Stack' THEN 'React'\n       END AS 'Final project language'\n  FROM students AS s;",
  },
  {
    question: "(Difficult.) Suppose the offer in the products table is for half price. Select each item and an additional calculated column, the offer price, which contains half the regular price if the item is on offer, otherwise just the unchanged regular price",
    solution: "SELECT p.name,\n       CASE\n           WHEN p.on_offer THEN ROUND(0.5 * p.price, 2)\n           ELSE p.price\n       END AS 'Offer price'\n  FROM products AS p;",
  },
]

export const groupByExercises: Exercise[] = [
  {
    question: "Find the number of students sponsored by each sponsor for each stream",
    solution: "  SELECT s.sponsor,\n         s.stream,\n         COUNT(*)\n    FROM students AS s\nGROUP BY s.sponsor,\n         s.stream;",
  },
  {
    question: "Find the number of distinct sponsors for each year",
    solution: "  SELECT s.year,\n         COUNT(DISTINCT s.sponsor)\n    FROM students AS s\nGROUP BY s.year;",
  },
  {
    question: "Find the length of the longest name of the students for each sponsor",
    solution: "  SELECT s.sponsor,\n         MAX(LENGTH(s.name))\n    FROM students AS s\nGROUP BY s.sponsor;",
  },
  {
    question: "Find the total stock for each department in the products table",
    solution: "  SELECT p.department,\n         SUM(p.stock)\n    FROM products AS p\nGROUP BY p.department;",
  },
  {
    question: "Find the average price of the products in each department of the products table",
    solution: "  SELECT p.department,\n         AVG(p.price)\n    FROM products AS p\nGROUP BY p.department;",
  },
]

export const havingExercises: Exercise[] = [
  {
    question: "Find all sponsors in the students table with more than 3 students. Include their student count in the results",
    solution: "  SELECT s.sponsor,\n         COUNT(*)\n    FROM students AS s\nGROUP BY s.sponsor\n  HAVING COUNT(*) > 3;",
  },
  {
    question: "Find the price of the most expensive item in each department in the products table with more than 1 product",
    solution: "  SELECT p.department,\n         MAX(p.price)\n    FROM products AS p\nGROUP BY p.department\n  HAVING COUNT(*) > 1;",
  },
  {
    question: "Find the total stock of each department in the products table where the average stock is at least 20",
    solution: "  SELECT p.department,\n         SUM(p.stock)\n    FROM products AS p\nGROUP BY p.department\n  HAVING AVG(p.stock) > 20;",
  },
  {
    question: "Find all departments where I would spend under ??2 if I bought 1 of each item that was currently in stock",
    solution: "  SELECT p.department\n    FROM products AS p\n   WHERE p.stock > 0\nGROUP BY p.department\n  HAVING SUM(p.price) < 2;",
  },
]

export const orderByExercises: Exercise[] = [
  {
    question: "Display everyone in the students table in descending alphabetical name order",
    solution: "  SELECT *\n    FROM students AS s\nORDER BY s.name DESC;",
  },
  {
    question: "Display the items in the products table in order of price, cheapest first",
    solution: "  SELECT *\n    FROM products AS p\nORDER BY p.price ASC;",
  },
  {
    question: "Display the departments in the products table in order of total stock, least first",
    solution: "  SELECT p.department,\n         SUM(p.stock) AS 'Total stock'\n    FROM products AS p\nGROUP BY p.department\nORDER BY SUM(p.stock) ASC;",
  },
  {
    question: "Display the items in the products table in ascending alphabetical department order. Where items have the same department, display the item with the most stock first",
    solution: "  SELECT *\n    FROM products AS p\nORDER BY p.department ASC,\n         p.stock DESC;",
  },
  {
    question: "Display everyone in the students table in ascending chronological season order (spring students first, then summer students, then autumn students)",
    solution: "  SELECT *\n    FROM students AS s\nORDER BY CASE s.season\n             WHEN 'Spring' THEN 1\n             WHEN 'Summer' THEN 2\n             WHEN 'Autumn' THEN 3\n         END ASC;",
  },
]

export const limitExercises: Exercise[] = [
  {
    question: "Select any 5 items from the products table",
    solution: "SELECT *\n  FROM products AS p\n LIMIT 5;",
  },
  {
    question: "Select the first 5 items alphabetically from the products table",
    solution: "  SELECT *\n    FROM products AS p\nORDER BY p.name ASC\n   LIMIT 5;",
  },
  {
    question: "Select the cheapest item from the products table",
    solution: "  SELECT *\n    FROM products AS p\nORDER BY p.price ASC\n   LIMIT 1;",
  },
  {
    question: "Select the 3 sponsors with the longest names from the students table",
    solution: "SELECT DISTINCT s.sponsor\n           FROM students AS s\n       ORDER BY LENGTH(s.sponsor) DESC\n          LIMIT 3;",
  },
  {
    question: "Select the 3 departments with the most overall stock from the products table",
    solution: "  SELECT p.department,\n         SUM(p.stock)\n    FROM products AS p\nGROUP BY p.department\nORDER BY SUM(p.stock) DESC\n   LIMIT 3;",
  },
]

export const nonKeyConstraintExercises: Exercise[] = [
  {
    question: "Create a table called employees with three columns: name (VARCHAR, cannot be NULL), working_pattern (VARCHAR, must be either full-time or part-time, defaulting to part-time) and hourly_wage (DECIMAL, must be at least ??10.00). Try some INSERT statements to see if the constraints are being applied correctly",
    solution: "CREATE TABLE employees (\n  name VARCHAR(50) NOT NULL,\n  working_pattern VARCHAR(20) DEFAULT 'part-time',\n  hourly_wage DECIMAL(5, 2),\n\n  CHECK (working_pattern IN ('full-time', 'part-time')),\n  CHECK (hourly_wage >= 10.00)\n);",
    secondaryCode: "-- Example INSERT statement\nINSERT\n  INTO employees\n       (name, working_pattern, hourly_wage)\nVALUES ('Laura', 'full-time', 21.00);",
  },
  {
    question: "Create a table called tallest_trees with four columns: species (VARCHAR, cannot be NULL), type (VARCHAR, must be either Conifer or Flowering Plant, defaulting to Conifer), continent (VARCHAR, must be one of Asia, Africa, Europe, North America, South America or Oceania) and height (FLOAT, cannot be NULL or under 80 metres). Try some INSERT statements to see if the constraints are being applied correctly",
    solution: "CREATE TABLE tallest_trees (\n  species VARCHAR(20) NOT NULL,\n  type VARCHAR(20) DEFAULT 'Conifer',\n  continent VARCHAR(20),\n  height FLOAT NOT NULL,\n\n  CHECK (type IN ('Conifer', 'Flowering Plant')),\n  CHECK (continent IN ('Asia', 'Africa', 'Europe', 'North America', 'South America', 'Oceania')),\n  CHECK (height >= 80)\n);",
    secondaryCode: "-- Example INSERT statement\nINSERT\n  INTO tallest_trees\n       (species, type, continent, height)\nVALUES ('Coast Redwood', 'Conifer', 'North America', 115.92),\n       ('Mountain Ash', 'Flowering Plant', 'Oceania', 100.5);",
  },
  {
    question: "Create a table called train_tickets with four columns, all set to NOT NULL: booking_reference (INTEGER), origin_station_code (CHAR(3)), destination_station_code (also CHAR(3), cannot be the same as the value for origin_station_code) and tier (VARCHAR, must be either Standard or Premium, defaulting to Standard). Try some INSERT statements to see if the constraints are being applied correctly",
    solution: "CREATE TABLE train_tickets (\n  booking_reference INTEGER NOT NULL,\n  origin_station_code CHAR(3) NOT NULL,\n  destination_station_code CHAR(3) NOT NULL,\n  tier VARCHAR(20) NOT NULL DEFAULT 'Standard',\n\n  CHECK (origin_station_code != destination_station_code),\n  CHECK (tier IN ('Standard', 'Premium'))\n);",
    secondaryCode: "-- Example INSERT statement\nINSERT\n  INTO train_tickets\n       (booking_reference, origin_station_code, destination_station_code, tier)\nVALUES (12345, 'MYB', 'BHM', 'Premium');",
  },
]

export const keyConstraintExercises: Exercise[] = [
  {
    question: "Create two tables, one called users and one called posts. The users table should have two columns: id (INTEGER, primary key) and email (VARCHAR, unique, cannot be null). The posts table should have three columns: user_id (INTEGER, foreign key referencing the id column of the users table), content (VARCHAR) and timestamp (DATETIME). Try some INSERT statements to see if the constraints are being applied correctly",
    solution: "CREATE TABLE users (\n  id INTEGER,\n  email VARCHAR(255) NOT NULL UNIQUE,\n\n  PRIMARY KEY (id)\n);\n\nCREATE TABLE posts (\n  user_id INTEGER NOT NULL,\n  content VARCHAR(255),\n  timestamp DATETIME,\n\n  FOREIGN KEY (user_id) REFERENCES users (id)\n);",
    secondaryCode: "INSERT\n  INTO users\n       (id, email)\nVALUES (1, 'someone@gmail.com'),\n       (2, 'someone.else@gmail.com');\n\nINSERT\n  INTO posts\n       (user_id, content, timestamp)\nVALUES (1, 'Follow your heart', DATETIME('now', 'localtime')),\n       (1, 'Out of control', DATETIME('now', 'localtime')),\n       (2, 'What in heck', DATETIME('now', 'localtime'));",
  },
  {
    question: "Create two tables, one called households and one called annual_bills. The households table should have two columns: id (INTEGER, primary key) and address (VARCHAR, cannot be null, unique). The annual_bills table should have three columns: household_id (INTEGER, foreign key referencing the id column of the households table), year (INTEGER) and amount (DECIMAL). Any household_id/year combination should be unique. Try some insert statements to see if the constraints are being applied correctly",
    solution: "CREATE TABLE households (\n  id INTEGER,\n  address VARCHAR(255) NOT NULL UNIQUE,\n\n  PRIMARY KEY (id)\n);\n\nCREATE TABLE annual_bills (\n  household_id INTEGER,\n  year INTEGER,\n  amount DECIMAL(6, 2),\n\n  FOREIGN KEY (household_id) REFERENCES households (id),\n  UNIQUE (household_id, year)\n);",
    secondaryCode: "INSERT\n  INTO households\n       (id, address)\nVALUES (1, '10 Main Street, AB1 2CD'),\n       (2, '123 Other Lane, EF3 4GH');\n\nINSERT\n  INTO annual_bills\n       (household_id, year, amount)\nVALUES (1, 2021, 120.00),\n       (1, 2022, 144.00),\n       (2, 2022, 132.00);",
  },
]
