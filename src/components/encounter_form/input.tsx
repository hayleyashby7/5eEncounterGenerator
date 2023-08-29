import { DefaultInputProps } from './encounter_form';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps extends DefaultInputProps {
    minValue: number;
    maxValue: number;
}

export const Input = ({
    errors,
    label,
    name,
    register,
    required,
    minValue,
    maxValue,
}: InputProps) => {
    return (
        <>
            <div className='flex justify-end gap-2'>
                <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
                    {label}
                </label>
                <input
                    id={name}
                    type='number'
                    className='form-input solid rounded  border-2 border-neutral-900 bg-orange-100 px-2 py-1 outline-none'
                    {...register(name, {
                        required,
                        min: { value: minValue, message: `Min ${minValue}` },
                        max: { value: maxValue, message: `Max ${maxValue}` },
                    })}
                />
            </div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p>{message}</p>}
            />
        </>
    );
};

export default Input;
