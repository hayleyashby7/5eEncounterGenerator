import { useEffect, useState } from 'react';
import { GeneratedEncounter, Monster } from '../../types/encounter.types';

interface EncounterSuggestionsProps {
    encounter: GeneratedEncounter | null;
}

export const EncounterSuggestions: React.FC<EncounterSuggestionsProps> = ({encounter}) => {
    const [monsters, setMonsters] = useState<Monster[] | null>(); 

    useEffect(() => {
        setMonsters(encounter?.monsters);
    }, [encounter]);

    return (
        <div className='bg-neutral-900 text-orange-100'>
            {monsters && <p>Display monsters here</p>}
        </div>
    );
};

export default EncounterSuggestions;
