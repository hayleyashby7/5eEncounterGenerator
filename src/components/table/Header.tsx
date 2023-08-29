interface HeaderProps {
    header: {
        name: string;
        important: boolean;
    };
}

export const Header: React.FC<HeaderProps> = ({ header }) => {
    return (
        <th aria-labelledby={header.name} key={header.name} className={header.important ? 'table-cell' : 'hidden md:table-cell'}>
            {header.name}
        </th>
    );
};

export default Header;