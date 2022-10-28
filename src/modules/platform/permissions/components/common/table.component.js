import TableHeader from './table.header.component';
import TableBody from './table.body.component';

function Table({ items, columns }) {
    return (
        <>
            <table className="table text-center">
                <TableHeader columns={columns} />
                <TableBody items={items} columns={columns} />
            </table>
        </>
    );
}
 
export default Table;