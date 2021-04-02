import { Element } from "../App/App";
import { TableCell } from "../TableCell/TableCell"

interface Props {
    line: Element[],
    index: number,
    setActiveElement: any
}


export const TableLine = ({line, index, setActiveElement}: Props) => {
    const cell = line.map((elem: Element) => <TableCell {...elem} setActiveElement={setActiveElement}/>)
    const bool: boolean = cell.length > 10;

    return (
        <>
            <tr>
                <td rowSpan={bool ? 2 : 1} className="table__td">{index + 1}</td>
                { bool ? cell.slice(0, 10) : cell}
            </tr>
            { bool && 
                <tr>
                    {cell.slice(10)}
                </tr>
            }
        </>
    )
}
