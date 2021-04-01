import { Table } from '../Table/Table';
import { tableElements } from '../../tableElements/tableElements';

export interface Element {
  elemSymbol: string,
  elemName: string,
  elemNumber: number,
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
