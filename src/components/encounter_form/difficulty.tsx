import { DIFFICULTIES } from '../../types/difficulty.types';
import { DefaultInputProps } from './encounter_form';
import { ErrorMessage } from '@hookform/error-message';

const Difficulty = ({ errors, label, name, register, required }: DefaultInputProps) => {
    return (
        <>
            <div className='flex justify-end gap-2'>
                <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
                    {label}
                </label>
                <select
                    id={name}
                    className='form-select solid rounded  border-2 border-neutral-900 bg-orange-100 px-2 py-1 outline-none'
                    {...register(name, { required })}
                >
                    <option value=''>Select Difficulty</option>
                    {Object.entries(DIFFICULTIES).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <ErrorMessage
                errors={errors}
                name='characters'
                render={({ message }) => <p>{message}</p>}
            />
        </>
    );
};

export default Difficulty;
