//React imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
import { Buffer } from 'buffer';
//MUI elements imports
import {
    Grid,
    Button,
    Typography,
    Stack,
    Fade,
    IconButton
} from '@mui/material';
//page imports
import Loading from './utils/Loading';
import { headers } from '../static/data';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BlockIcon from '@mui/icons-material/Block';

const actions = [
    { label: "2 points tenté", key: "try2" },
    { label: "2 points marqué", key: "scored2" },
    { label: "3 points tenté", key: "try3" },
    { label: "3 points marqué", key: "scored3" },
    { label: "Passe décisive", key: "assist" },
    { label: "Rebond offensif", key: "offensiveRebound" },
    { label: "Rebond défensif", key: "defensiveRebound" },
    { label: "Interception", key: "ballIntercept" },
    { label: "Perte de balle", key: "ballLoss" }
]

export default function CurrentMatch() {

    const navigate = useNavigate();
    const [team, setTeam] = useState([]);
    const [match, setMatch] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [myCsv, setMyCsv] = useState({});
    const [selectedPlayer, setSelectedPlayer] = useState(-1);
    const [sign, setSign] = useState(true);

    useEffect(() => {
        const savedTeam = JSON.parse(localStorage.getItem('team'));
        const savedMatch = JSON.parse(localStorage.getItem('match'));
        if (savedTeam && savedMatch) {
            setTeam(savedTeam);
            setMatch(savedMatch);
        }
        else {
            setError(true);
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        setMyCsv({ data: team, headers: headers, filename: match.home + ' vs ' + match.away + ' ' + match.date });
        !loading && localStorage.setItem('team', JSON.stringify(team));
    }, [team]);

    const editStat = (e, player, sign, key) => {
        let newTeam = structuredClone(team);
        if (key === 'try2') {
            if (sign) {
                newTeam[player].try2++;
            }
            else {
                if (newTeam[player].try2 > 0) {
                    newTeam[player].try2--;
                }
            }
        }
        if (key === 'scored2') {
            if (sign) {
                newTeam[player].scored2++;
            }
            else {
                if (newTeam[player].scored2 > 0) {
                    newTeam[player].scored2--;
                }
            }
        }
        if (key === 'try3') {
            if (sign) {
                newTeam[player].try3++;
            }
            else {
                if (newTeam[player].try3 > 0) {
                    newTeam[player].try3--;
                }
            }
        }
        if (key === 'scored3') {
            if (sign) {
                newTeam[player].scored3++;
            }
            else {
                if (newTeam[player].scored3 > 0) {
                    newTeam[player].scored3--;
                }
            }
        }
        if (key === 'assist') {
            if (sign) {
                newTeam[player].assist++;
            }
            else {
                if (newTeam[player].assist > 0) {
                    newTeam[player].assist--;
                }
            }
        }
        if (key === 'offensiveRebound') {
            if (sign) {
                newTeam[player].offensiveRebound++;
            }
            else {
                if (newTeam[player].offensiveRebound > 0) {
                    newTeam[player].offensiveRebound--;
                }
            }
        }
        if (key === 'defensiveRebound') {
            if (sign) {
                newTeam[player].defensiveRebound++;
            }
            else {
                if (newTeam[player].defensiveRebound > 0) {
                    newTeam[player].defensiveRebound--;
                }
            }
        }
        if (key === 'ballIntercept') {
            if (sign) {
                newTeam[player].ballIntercept++;
            }
            else {
                if (newTeam[player].ballIntercept > 0) {
                    newTeam[player].ballIntercept--;
                }
            }
        }
        if (key === 'ballLoss') {
            if (sign) {
                newTeam[player].ballLoss++;
            }
            else {
                if (newTeam[player].ballLoss > 0) {
                    newTeam[player].ballLoss--;
                }
            }
        }
        setTeam(newTeam);
        setSelectedPlayer(-1);
    }
    const exportClipboard = () => {
        const buffer = Buffer.from(JSON.stringify([match, team]), 'utf-8')
        navigator.clipboard.writeText(buffer.toString('base64'));
        setVisible(true);
        setTimeout(() => { setVisible(false); }, 2800);
    }

    const selectPlayer = (e, key) => {
        setSelectedPlayer(key);
    }

    const handleChangeSign = () => {
        setSign(!sign);
    }
    const handleCancel = () => {
        setSelectedPlayer(-1);
        setSign(true);
    }
    const prettyLink = {
        backgroundColor: '#FF9E1B',
        fontSize: 18,
        fontWeight: 600,
        height: 70,
        padding: '4px 12px',
        borderRadius: 5,
        color: '#fff'
    };

    return (
        <>
            {loading
                ? <Loading />
                : error
                    ? <Stack direction='column' alignItems='center' justifyContent='center' spacing={1} py={5}>
                        <Typography variant='h6'>Aucun match trouvé</Typography>
                        <Button variant='contained' size='large' color='success' onClick={() => navigate('/nouveau-match')}>
                            Créer un match
                        </Button>
                    </Stack>
                    :
                    <Grid container direction='column' alignItems='center' justifyContent='center' spacing={2} pt={5}>
                        <Grid item pb={3}>
                            <Typography variant='h6'>{match.home} vs {match.away}, {match.date}</Typography>
                        </Grid>
                        {selectedPlayer === -1 && <Grid item pb={4}>
                            <Stack direction='column' spacing={1.8}>
                                {team.map((index) => (
                                    <Button variant='contained' onClick={e => selectPlayer(e, index.key)} sx={{ width: 200 }}>
                                        {index.name} ({index.number})
                                    </Button>
                                ))}
                            </Stack>
                        </Grid>}
                        {selectedPlayer !== -1 && <Grid item pb={4}>
                            <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                                <Stack direction='row' alignItems='center' justifyContent='center' spacing={3}>
                                    <IconButton variant='contained' onClick={handleChangeSign} sx={{ width: 40, height: 40, backgroundColor: 'common.grey', '&:hover': { backgroundColor: 'common.grey' } }}>
                                        {sign ? <AddIcon color='success' /> : <RemoveIcon color='error' />}
                                    </IconButton>
                                    <IconButton variant='contained' onClick={handleCancel} sx={{ width: 40, height: 40, backgroundColor: 'common.grey', '&:hover': { backgroundColor: 'common.grey' } }}>
                                        <BlockIcon color='secondary' />
                                    </IconButton>
                                </Stack>
                                {actions.map((index) => (
                                    <Button variant='contained' onClick={e => editStat(e, selectedPlayer, sign, index.key)} sx={{ width: 200 }}>
                                        {index.label}
                                    </Button>
                                ))}
                            </Stack>
                        </Grid>}
                        <Grid item pb={1}>
                            <CSVLink {...myCsv} style={prettyLink}>Exporter le match en csv</CSVLink>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='info' onClick={exportClipboard}>Exporter le code du match</Button>
                        </Grid>
                        <Grid item>
                            <Fade in={visible === true} timeout={400}>
                                <Typography variant='caption' sx={{ color: 'textfield.secondary' }}>Code copié dans le presse-papier</Typography>
                            </Fade>
                        </Grid>
                    </Grid>
            }
        </>
    )
}