### Przykład aplikacji React z TypeScript - Lista pracowników w tabelce

#### 1. Tworzenie interfejsu dla pracownika

```typescript
// src/types/Employee.ts
export interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}
```

#### 2. Tworzenie komponentu `EmployeeTable`

```typescript
// src/components/EmployeeTable.tsx
import React from 'react';
import { Employee } from '../types/Employee';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
```

#### 3. Tworzenie komponentu `App`

```typescript
// src/App.tsx
import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import { Employee } from './types/Employee';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'John Doe', position: 'Developer', salary: 60000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 55000 },
    { id: 3, name: 'Sam Johnson', position: 'Manager', salary: 75000 },
  ]);

  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;
```

#### 4. Struktura projektu

```
my-app/
├── src/
│   ├── components/
│   │   └── EmployeeTable.tsx
│   ├── types/
│   │   └── Employee.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

#### 5. Uruchomienie aplikacji

Upewnij się, że masz zainstalowane wszystkie niezbędne zależności, a następnie uruchom aplikację:

```sh
npm install
npm start
```

