import Header, {HeaderType} from './Header';

interface TableProps {
    headers: HeaderType[];
  
}

export const Table: React.FC<TableProps> = ({ headers }) => {
    return (
        <table className='table w-full border-separate text-left'>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <Header key={header.name} header={header} />
                    ))}
                </tr>
            </thead>
            <tbody>
                { }
            </tbody>
        </table>
    );
};

export default Table;