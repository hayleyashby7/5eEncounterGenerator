import { useForm } from 'react-hook-form';
import { Path, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { EncounterFormData } from '../../types/encounter.types';
import Input from './input';
import Select from './difficulty';
import Button from './button';

export interface DefaultInputProps {
    name: Path<EncounterFormData>;
    register: UseFormRegister<EncounterFormData>;
    required: boolean;
    label: string;
    errors?: any;
}

interface EncounterFormProps {
    onSubmission: (data: EncounterFormData) => void;
}

export const EncounterForm: React.FC<EncounterFormProps> = ({ onSubmission }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EncounterFormData>();

    const onSubmit: SubmitHandler<EncounterFormData> = async (data) => onSubmission(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='my-5 flex flex-col flex-wrap justify-end gap-4 rounded bg-stone-400/50 p-5 text-red-950 lg:flex-row lg:justify-between'
        >
            <Input
                errors={errors}
                label='Number of Characters'
                name='characters'
                register={register}
                required={true}
                minValue={1}
                maxValue={10}
            />

            <Input
                errors={errors}
                label='Level'
                name='level'
                register={register}
                required={true}
                minValue={1}
                maxValue={20}
            />
            <Select
                errors={errors}
                label='Difficulty'
                name='difficulty'
                register={register}
                required={true}
            />
            <Button label='Submit' type='submit' />
        </form>
    );
};

export default EncounterForm;
