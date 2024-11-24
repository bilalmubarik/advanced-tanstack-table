import { Table } from './components/Table';
import { useJobTableColumns } from './hooks/useJobTableColumns';
import { JOBS, generateTableColumns } from './utils';
import './App.css';

function App() {
  const columns = generateTableColumns([
    {
      id: 'name',
      title: 'Name'
    },
    {
      id: 'description',
      title: 'Description'
    },
    {
      id: 'salary',
      title: 'Salary',
      size: 35
    },
    {
      id: 'salaryType',
      title: 'Salary Type',
      size: 40
    },
    {
      id: 'location',
      title: 'Location'
    }
  ]);

  return (
    <div className="App" style={{ padding: '50px' }}>
      <Table data={JOBS} columns={columns} />
    </div>
  );
}

export default App;
