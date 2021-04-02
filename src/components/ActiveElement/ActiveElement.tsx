import { Element } from '../App/App';
import { TableCell } from '../TableCell/TableCell';
import './ActiveElement.scss';

export const ActiveElement = ({elemSymbol, elemName, elemWeight, id, color}: Element) => {
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
