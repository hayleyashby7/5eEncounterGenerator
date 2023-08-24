import { useEffect, useState } from 'react';
import { useMonsters } from '../../hooks/useMonsters';

interface EncounterSuggestionsProps {
    challengeRating: number | null;
}

export const EncounterSuggestions: React.FC<EncounterSuggestionsProps> = ({ challengeRating }) => {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (challengeRating === null) {
                    throw new Error('Unable to request data.');
                }

                const data = await useMonsters(challengeRating);

                if (data instanceof Error) {
                    throw new Error(
                        'Unable to retrieve monsters from server. Please try again later.',
                    );
                }
                if (data.count === 0) {
                    throw new Error('No suitable monsters found.');
                }

                setMonsters(data.results);
                console.log(data);
                setError(false);
            } catch (err) {
                setError(true);
                setMonsters([]);
                setMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
            }
        };

        fetchData();
    }, [challengeRating]);

    return (
        <div className='bg-neutral-900 text-orange-100'>
            {error && <div>{message}</div>} {monsters && <p>{message}</p>}
        </div>
    );
};

export default EncounterSuggestions;
