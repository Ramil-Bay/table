import { Provider } from 'react-redux';

import { store } from './redux/store';
import { Table } from './components/Table/Table';
import { tableElements } from './tableElements/tableElements';
import "./scss/App.scss";

export interface Element {
  elemSymbol: string,
  elemName: string,
  id: number,
  elemWeight: number,
  color: string
}

export const App:React.FC = () => {
  return (
    <Provider store={store}>
      <Table elements={tableElements}/>
    </Provider>
  );
}
