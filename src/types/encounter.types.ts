export interface GeneratedEncounter {
    challengeRating: string | null;
    monsters: Monster[];
}

export interface Monster {
    name: string;
    size: string;
    type: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: Speed[];
    stats: Stat[];
    skills: Skill[];
    damage_immunities?: string;
    damage_resistances?: string;
    damage_vulnerabilities?: string;
    condition_immunities?: string;
    senses: Sense[];
    languages: Language[];
    language_desc: string;
    challenge_rating: number;
    traits?: string;
    actions?: string;
    legendary_actions?: string;
    reactions?: string;
}

interface Speed {
    movement_type: string;
    range: number;
}

interface Stat {
    stat: string;
    score: number;
    modifier: number;
    saving_throw: number;
}

interface Skill {
    skill: string;
    score: number;
}

interface Sense {
    sense: string;
    value: string;
}

interface Language {
    language: string;
    range: string;
}