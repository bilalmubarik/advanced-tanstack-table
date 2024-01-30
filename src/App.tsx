import { Table } from './components/Table';
import { type TJob } from './types';
import { jobData } from './config/data';
import { useJobTableColumns } from './hooks/useJobTableColumns';
import './App.css';

function App() {
  const data: TJob[] = jobData;
  const columns = useJobTableColumns();

  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
