import { Table } from './components/Table/Table';
import { tableElements } from './tableElements/tableElements';

export interface Element {
  elemSymbol: string,
  elemName: string,
  id: number,
  elemWeight: number,
  color: string
}

export const App:React.FC = () => {
  return (
    <div>
      <Table elements={tableElements}/>
    </div>
  );
}
