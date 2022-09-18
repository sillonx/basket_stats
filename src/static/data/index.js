export const headers = [
    { label: "id", key: "id" },
    { label: "Nom", key: "name" },
    { label: "Numéro", key: "number" },
    { label: "2 points tenté", key: "try2" },
    { label: "2 points marqué", key: "scored2" },
    { label: "3 points tenté", key: "try3" },
    { label: "3 points marqué", key: "scored3" },
    { label: "Passe décisive", key: "assist" },
    { label: "Rebond offensif", key: "offensiveRebound" },
    { label: "Rebond défensif", key: "defensiveRebound" },
    { label: "Interception", key: "ballIntercept" },
    { label: "Perte de balle", key: "ballLoss" },
];

export const defaultPlayer = {
    key: 0,
    name: '',
    number: '',
    try2: 0,
    scored2: 0,
    try3: 0,
    scored3: 0,
    assist: 0,
    offensiveRebound: 0,
    defensiveRebound: 0,
    ballIntercept: 0,
    ballLoss: 0,
};

export const defaultMatch = {
    home: '',
    away: '',
    date: null,
};