interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Mokoena',
  age: 21,
  location: 'Cape Town',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  location: 'Johannesburg',
};

const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement('table');

// Add table header (optional)
const headerRow: HTMLTableRowElement = document.createElement('tr');
const nameHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader: HTMLTableCellElement = document.createElement('th');

nameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add rows
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);

