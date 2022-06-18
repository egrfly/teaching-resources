import ResultSet from '../../models/ResultSet'

export const nonNormalisedStudentMarksData: ResultSet = {
  headerRow: ['name', 'subjects', 'marks', 'class', 'class_primary_marker'],
  rows: [
    ['Ali',   'Python',      '100',      'fullstack-1', 'Anna'],
    ['Lana',  'Python',      '101',      'fullstack-1', 'Anna'],
    ['Ella',  'Python',      '102',      'fullstack-1', 'Anna'],
    ['Manal', 'Python',      '103',      'fullstack-1', 'Anna'],
    ['Ciara', 'SQL, Python', '104, 105', 'software-2',  'Christine'],
    ['Anood', 'SQL, Python', '106, 107', 'software-2',  'Christine'],
    ['Lydia', 'SQL, Python', '108, 109', 'software-2',  'Christine'],
    ['Reema', 'SQL, Python', '110, 111', 'software-2',  'Christine'],
    ['Chloe', 'SQL',         '112',      'data-1',      'Fiona'],
    ['Mhai',  'SQL',         '113',      'data-1',      'Fiona'],
    ['Joey',  'SQL',         '114',      'data-1',      'Fiona'],
    ['Diane', 'SQL',         '115',      'data-1',      'Fiona'],
  ],
}

export const technicalFirstNormalFormStudentMarksData: ResultSet = {
  headerRow: ['name', 'subject_1', 'subject_1_mark', 'subject_2', 'subject_2_mark', 'class', 'class_primary_marker'],
  rows: [
    ['Ali',   'Python', '100', '',       '',    'fullstack-1', 'Anna'],
    ['Lana',  'Python', '101', '',       '',    'fullstack-1', 'Anna'],
    ['Ella',  'Python', '102', '',       '',    'fullstack-1', 'Anna'],
    ['Manal', 'Python', '103', '',       '',    'fullstack-1', 'Anna'],
    ['Ciara', 'SQL',    '104', 'Python', '105', 'software-2',  'Christine'],
    ['Anood', 'SQL',    '106', 'Python', '107', 'software-2',  'Christine'],
    ['Lydia', 'SQL',    '108', 'Python', '109', 'software-2',  'Christine'],
    ['Reema', 'SQL',    '110', 'Python', '111', 'software-2',  'Christine'],
    ['Chloe', 'SQL',    '112', '',       '',    'data-1',      'Fiona'],
    ['Mhai',  'SQL',    '113', '',       '',    'data-1',      'Fiona'],
    ['Joey',  'SQL',    '114', '',       '',    'data-1',      'Fiona'],
    ['Diane', 'SQL',    '115', '',       '',    'data-1',      'Fiona'],
  ],
}

export const trueFirstNormalFormStudentMarksData: ResultSet = {
  headerRow: ['name', 'subject', 'mark', 'class', 'class_primary_marker'],
  rows: [
    ['Ali',   'Python', '100',      'fullstack-1', 'Anna'],
    ['Lana',  'Python', '101',      'fullstack-1', 'Anna'],
    ['Ella',  'Python', '102',      'fullstack-1', 'Anna'],
    ['Manal', 'Python', '103',      'fullstack-1', 'Anna'],
    ['Ciara', 'SQL',    '104',      'software-2',  'Christine'],
    ['Ciara', 'Python', '105',      'software-2',  'Christine'],
    ['Anood', 'SQL',    '106',      'software-2',  'Christine'],
    ['Anood', 'Python', '107',      'software-2',  'Christine'],
    ['Lydia', 'SQL',    '108',      'software-2',  'Christine'],
    ['Lydia', 'Python', '109',      'software-2',  'Christine'],
    ['Reema', 'SQL',    '110',      'software-2',  'Christine'],
    ['Reema', 'Python', '111',      'software-2',  'Christine'],
    ['Chloe', 'SQL',    '112',      'data-1',      'Fiona'],
    ['Mhai',  'SQL',    '113',      'data-1',      'Fiona'],
    ['Joey',  'SQL',    '114',      'data-1',      'Fiona'],
    ['Diane', 'SQL',    '115',      'data-1',      'Fiona'],
  ],
}

export const secondNormalFormMarksData: ResultSet = {
  headerRow: ['name', 'subject', 'mark'],
  rows: [
    ['Ali',   'Python', '100'],
    ['Lana',  'Python', '101'],
    ['Ella',  'Python', '102'],
    ['Manal', 'Python', '103'],
    ['Ciara', 'SQL',    '104'],
    ['Ciara', 'Python', '105'],
    ['Anood', 'SQL',    '106'],
    ['Anood', 'Python', '107'],
    ['Lydia', 'SQL',    '108'],
    ['Lydia', 'Python', '109'],
    ['Reema', 'SQL',    '110'],
    ['Reema', 'Python', '111'],
    ['Chloe', 'SQL',    '112'],
    ['Mhai',  'SQL',    '113'],
    ['Joey',  'SQL',    '114'],
    ['Diane', 'SQL',    '115'],
  ],
}

export const secondNormalFormStudentsData: ResultSet = {
  headerRow: ['name', 'class', 'class_primary_marker'],
  rows: [
    ['Ali',   'fullstack-1', 'Anna'],
    ['Lana',  'fullstack-1', 'Anna'],
    ['Ella',  'fullstack-1', 'Anna'],
    ['Manal', 'fullstack-1', 'Anna'],
    ['Ciara', 'software-2',  'Christine'],
    ['Anood', 'software-2',  'Christine'],
    ['Lydia', 'software-2',  'Christine'],
    ['Reema', 'software-2',  'Christine'],
    ['Chloe', 'data-1',      'Fiona'],
    ['Mhai',  'data-1',      'Fiona'],
    ['Joey',  'data-1',      'Fiona'],
    ['Diane', 'data-1',      'Fiona'],
  ],
}

export const thirdNormalFormMarksData: ResultSet = secondNormalFormMarksData

export const thirdNormalFormStudentsData: ResultSet = {
  headerRow: ['name', 'class'],
  rows: [
    ['Ali',   'fullstack-1'],
    ['Lana',  'fullstack-1'],
    ['Ella',  'fullstack-1'],
    ['Manal', 'fullstack-1'],
    ['Ciara', 'software-2'],
    ['Anood', 'software-2'],
    ['Lydia', 'software-2'],
    ['Reema', 'software-2'],
    ['Chloe', 'data-1'],
    ['Mhai',  'data-1'],
    ['Joey',  'data-1'],
    ['Diane', 'data-1'],
  ],
}

export const thirdNormalFormClassesData: ResultSet = {
  headerRow: ['class', 'primary_marker'],
  rows: [
    ['fullstack-1', 'Anna'],
    ['software-2',  'Christine'],
    ['data-1',      'Fiona'],
  ],
}
