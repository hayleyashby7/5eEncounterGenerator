interface ButtonProps {
    label: string;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, type, disabled }) => {
    return (
        <button
            type={type}
            className="rounded-lg border-2 border-solid border-orange-100 bg-red-950 p-2 font-['Alegreya_Sans'] text-orange-100 hover:bg-red-900 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-red-900/50"
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
