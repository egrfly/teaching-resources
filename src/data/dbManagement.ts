export const createTables = (db: any) => {
  db.run(`CREATE TABLE students (name TEXT,     sponsor TEXT,      stream TEXT,   season TEXT, year INTEGER)`)
  db.run(`INSERT INTO students  (name,          sponsor,           stream,        season,      year) VALUES
                                ('Lydia',       'Experian',        'Software',    'Summer',    2022),
                                ('Emma',        'IPO',             'Software',    'Summer',    2022),
                                ('Alice',       'IPO',             'Software',    'Summer',    2022),
                                ('Reema',       'Moneybox',        'Software',    'Summer',    2022),
                                ('Leslie',      'Dunelm',          'Full Stack',  'Spring',    2022),
                                ('Ellie',       'Dunelm',          'Full Stack',  'Spring',    2022),
                                ('Dominika',    'Dunelm',          'Full Stack',  'Spring',    2022),
                                ('Agne',        'Dunelm',          'Full Stack',  'Spring',    2022),
                                ('Emma',        'Dunelm',          'Full Stack',  'Spring',    2022),
                                ('Georgie',     'Swiss Re',        'Full Stack',  'Spring',    2022),
                                ('Ciara',       'CFG',             'Software',    'Spring',    2022),
                                ('Josephine',   'CFG',             'Software',    'Spring',    2022),
                                ('Zhaonan',     'Ford',            'Full Stack',  'Spring',    2022),
                                ('Nathile',     'Ford',            'Full Stack',  'Spring',    2022),
                                ('Ali',         'Slalom',          'Full Stack',  'Spring',    2022),
                                ('Chloe',       'Slalom',          'Full Stack',  'Spring',    2022),
                                ('Ellie',       'Slalom',          'Full Stack',  'Spring',    2022),
                                ('Lana',        'Slalom',          'Full Stack',  'Spring',    2022),
                                ('Magda',       'Brit Insurance',  'Full Stack',  'Spring',    2022),
                                ('Diane',       'CFG',             'Data',        'Spring',    2022),
                                ('Rachel',      'NatWest',         'Data',        'Autumn',    2021),
                                ('Ayesha',      'Deloitte',        'Software',    'Autumn',    2021),
                                ('Chiara',      'Deloitte',        'Software',    'Autumn',    2021),
                                ('Dare',        'Bank of America', 'Data',        'Summer',    2021),
                                ('Mhai',        'Bank of America', 'Data',        'Summer',    2021),
                                ('Chloe',       'Bank of America', 'Data',        'Summer',    2021),
                                ('Shayli',      'CFG',             'Software',    'Summer',    2021)`)
  db.run(`CREATE TABLE products (name TEXT,               department TEXT,          stock INTEGER, price FLOAT)`)
  db.run(`INSERT INTO products  (name,                    department,               stock,         price) VALUES
                                ('Grated cheddar',        'Dairy and alternatives', 50,            1.50),
                                ('Button mushrooms',      'Fruit and veg',          20,            0.99),
                                ('Bag of mixed peppers',  'Fruit and veg',          20,            1.35),
                                ('Long-grain white rice', 'Pasta and rice',         40,            0.50),
                                ('Banana smoothie',       'Drinks',                 15,            1.70),
                                ('Paprika pringles',      'Snacks',                 25,            1.75),
                                ('Rich tea biscuits',     'Snacks',                 40,            0.25),
                                ('Flat peaches',          'Fruit and veg',          30,            0.30),
                                ('Macaroni cheese',       'Ready meals',            10,            2.00),
                                ('Smooth orange juice',   'Drinks',                 20,            1.50),
                                ('Rigatoni',              'Pasta and rice',         50,            0.70),
                                ('Oat cream',             'Dairy and alternatives', 10,            1.50),
                                ('Haribo giant strawbs',  'Snacks',                 20,            1.00),
                                ('Easy peeler oranges',   'Fruit and veg',          40,            1.00),
                                ('Broccoli',              'Fruit and veg',          35,            0.50)`)
}
