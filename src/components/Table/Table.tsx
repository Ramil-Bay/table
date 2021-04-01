import './Table.scss';

export const Table:React.FC<{elements: any[][]}> = ({elements}) => {
    const line = elements.map((elem, i) => {
        const cell = elem.map(elem => (
            <td className={`table__td table__td_${elem.color}`}>
                <div className="table__container">
                    <div className="table__name-block">
                        <span className="table__elem-symbol">{elem.elemSymbol}<br/></span>
                        <span className="table__elem-name">{elem.elemName}</span>
                    </div>
                    <div className="table__weight-block">
                        <span className="table__elem-number">{elem.elemNumber}</span><br/>
                        <span className="table__elem-weight">{elem.elemWeight}</span>
                    </div>
                </div>
            </td>)
        );
        const bool: boolean = cell.length > 10;

        if (i === 0) {
            return (
                <tr>
                    <td className="table__td">1</td>
                    <td className="table__td table__elem-symbol">(H)</td>
                    <td className="table__td"></td>
                    <td className="table__td"></td>
                    <td className="table__td"></td>
                    <td className="table__td"></td>
                    <td className="table__td"></td>
                    {cell}
                </tr>
            )
        }
        return (
            <>
                <tr>
                    <td className="table__td" rowSpan={bool ? 2 : 1}>{i + 1}</td>
                    { bool ? cell.slice(0, 10) : cell}
                </tr>
                { bool && 
                    <tr>
                        {cell.slice(10)}
                    </tr>
                }
            </>
        )
    })

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
                {line}
            </table>
        </div>
    )
}
