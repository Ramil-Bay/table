import { useSelector } from 'react-redux';

import { TableCell } from '../TableCell/TableCell';
import { RootState } from '../../redux/rootReducers';

export const ActiveElement = () => {
   
    const { elemSymbol, elemName, id, elemWeight, color }: any = useSelector((state: RootState) => { 
        return state.tableReducer
    });

    if (id === null) {
        return null;
    }

    return (
        <div className="selected-elem">
            <TableCell elemSymbol={elemSymbol} 
            elemName={elemName}
            elemWeight={elemWeight} 
            id={id} 
            color={color}/>
            <p><span className="selected-elem__span">{elemSymbol}</span> - символ элемента</p>
            <p><span className="selected-elem__span">{elemName}</span> - наименование элемента</p>
            <p><span className="selected-elem__span">{id}</span> - порядковый номер</p>
            <p><span className="selected-elem__span">{elemName}</span> - относительная атомная масса</p>
        </div>
    )
}
