import { useState } from 'react';
import { TableLine } from '../TableLine/TableLine';
import './Table.scss';
import { Element } from '../../App';
import { ActiveElement } from '../ActiveElement/ActiveElement';

interface Props {
    elements: Array<Array<Element>>
}

export const Table:React.FC<Props> = ({elements}: Props) => {
    const [activeElement, setElement] = useState<Element>(elements[0][0]);

    const setActiveElement = (elem: Element) => {
        setElement(elem);
    }

    const lines = elements.map((elem, index) => (
        <TableLine line={elem} index={index} setActiveElement={setActiveElement}/>
    ))
   
    return (
        <div>
            <table className="table">
                <tr>
                    <td rowSpan={2} className="table__td">ПЕРИОДЫ</td>
                    <td colSpan={10} className="table__td table__td_group">ГРУППЫ ЭЛЕМЕНТОВ</td>
                </tr>
                <tr>
                    <td className="table__td table__td_period">A I B</td>
                    <td className="table__td table__td_period">A II B</td>
                    <td className="table__td table__td_period">A III B</td>
                    <td className="table__td table__td_period">A IV B</td>
                    <td className="table__td table__td_period">A V B</td>
                    <td className="table__td table__td_period">A VI B</td>
                    <td className="table__td table__td_period">A VII B</td>
                    <td colSpan={3} className="table__td table__td_period">A VIII B</td>
                </tr>
                {lines}
            </table>
            <ActiveElement {...activeElement}/>
        </div>
    )
}
