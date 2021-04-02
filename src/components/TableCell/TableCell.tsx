import { Element } from "../App/App";

interface Props extends Element {
    setActiveElement?: any
}

export const TableCell = ({elemSymbol, elemName, elemWeight, id, color, setActiveElement}: Props) => {
    return (
        <td className={`table__td table__td_${color} ${id && 'table__td_pointer'}`} 
        onClick={id && setActiveElement ? () => setActiveElement({elemSymbol, elemName, elemWeight, id, color}) : undefined}>
            <div className="table__container">
                <div className="table__name-block">
                    <span className="table__elem-symbol">{elemSymbol}<br/></span>
                    <span className="table__elem-name">{elemName}</span>
                </div>
                <div className="table__weight-block">
                    <span className="table__elem-number">{id}</span><br/>
                    <span className="table__elem-weight">{elemWeight}</span>
                </div>
            </div>
        </td> 
    )
}
