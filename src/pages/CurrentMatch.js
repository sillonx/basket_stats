//React imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";
//MUI elements imports
import {
    Grid,
    Button,
    Typography,
    Stack,
    Fade
} from '@mui/material';
//page imports
import Loading from './utils/Loading';
import { headers } from '../static/data';
import { styled } from '@mui/material/styles';

const GridTypo = styled(Typography)(({ theme }) => ({
    width: 150,
}));
const GridStack = styled(Stack)(({ theme }) => ({
    width: 150,
}));

export default function CurrentMatch() {

    const navigate = useNavigate();
    const [team, setTeam] = useState([]);
    const [match, setMatch] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [myCsv, setMyCsv] = useState({});
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

    const editStat = (e, index, op, stat) => {
        if (stat === 'try2') {
            if (op === '+') {
                index.try2 = index.try2 + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.try2 > 0) {
                    index.try2 = index.try2 - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'scored2') {
            if (op === '+') {
                index.scored2 = index.scored2 + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.scored2 > 0) {
                    index.scored2 = index.scored2 - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'try3') {
            if (op === '+') {
                index.try3 = index.try3 + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.try3 > 0) {
                    index.try3 = index.try3 - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'scored3') {
            if (op === '+') {
                index.scored3 = index.scored3 + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.scored3 > 0) {
                    index.scored3 = index.scored3 - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'assist') {
            if (op === '+') {
                index.assist = index.assist + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.assist > 0) {
                    index.assist = index.assist - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'offensiveRebound') {
            if (op === '+') {
                index.offensiveRebound = index.offensiveRebound + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.offensiveRebound > 0) {
                    index.offensiveRebound = index.offensiveRebound - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'defensiveRebound') {
            if (op === '+') {
                index.defensiveRebound = index.defensiveRebound + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.defensiveRebound > 0) {
                    index.defensiveRebound = index.defensiveRebound - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'ballIntercept') {
            if (op === '+') {
                index.ballIntercept = index.ballIntercept + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.ballIntercept > 0) {
                    index.ballIntercept = index.ballIntercept - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
        if (stat === 'ballLoss') {
            if (op === '+') {
                index.ballLoss = index.ballLoss + 1;
                let newTeam = structuredClone(team);
                newTeam[index.key - 1] = index;
                setTeam(newTeam);
            }
            if (op === '-') {
                if (index.ballLoss > 0) {
                    index.ballLoss = index.ballLoss - 1;
                    let newTeam = structuredClone(team);
                    newTeam[index.key - 1] = index;
                    setTeam(newTeam);
                }
            }
        }
    }
    const exportClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify([match, team]));
        setVisible(true);
        setTimeout(() => { setVisible(false); }, 2800);
    }

    return (
        <>
            {loading
                ? <Loading />
                : error
                    ? <Stack direction='column'>
                        <Typography>Aucun match trouvé</Typography>
                        <Button variant='contained' size='large' color='success' onClick={() => navigate('/nouveau-match')}>
                            Créer un match
                        </Button>
                    </Stack>
                    :
                    <Grid container direction='column'>
                        <Grid item>
                            <Stack direction='row'>
                                <Typography>{match.home} vs {match.away}, {match.date}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction='row'>
                                {headers.map((index) => (
                                    index.key !== 'id' && index.key !== 'number' && <Stack direction='row'>
                                        {index.key === 'name'
                                            ? <GridTypo align='center'>{index.label} (Numéro)</GridTypo>
                                            : <GridTypo align='center'>{index.label}</GridTypo>}
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction='column'>
                                {team.map((index) => (
                                    <Stack direction='row'>
                                        <GridTypo align='center'>{index.name} ({index.number})</GridTypo>
                                        <GridStack direction='row'>
                                            <Button disabled={index.try2 === 0} onClick={e => editStat(e, index, '-', 'try2')}>-</Button>
                                            <GridTypo align='center'>{index.try2}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'try2')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.scored2 === 0} onClick={e => editStat(e, index, '-', 'scored2')}>-</Button>
                                            <GridTypo align='center'>{index.scored2}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'scored2')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.try3 === 0} onClick={e => editStat(e, index, '-', 'try3')}>-</Button>
                                            <GridTypo align='center'>{index.try3}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'try3')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.scored3 === 0} onClick={e => editStat(e, index, '-', 'scored3')}>-</Button>
                                            <GridTypo align='center'>{index.scored3}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'scored3')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.assist === 0} onClick={e => editStat(e, index, '-', 'assist')}>-</Button>
                                            <GridTypo align='center'>{index.assist}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'assist')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.offensiveRebound === 0} onClick={e => editStat(e, index, '-', 'offensiveRebound')}>-</Button>
                                            <GridTypo align='center'>{index.offensiveRebound}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'offensiveRebound')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.defensiveRebound === 0} onClick={e => editStat(e, index, '-', 'defensiveRebound')}>-</Button>
                                            <GridTypo align='center'>{index.defensiveRebound}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'defensiveRebound')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.ballIntercept === 0} onClick={e => editStat(e, index, '-', 'ballIntercept')}>-</Button>
                                            <GridTypo align='center'>{index.ballIntercept}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'ballIntercept')}>+</Button>
                                        </GridStack>
                                        <GridStack direction='row'>
                                            <Button disabled={index.ballLoss === 0} onClick={e => editStat(e, index, '-', 'ballLoss')}>-</Button>
                                            <GridTypo align='center'>{index.ballLoss}</GridTypo>
                                            <Button onClick={e => editStat(e, index, '+', 'ballLoss')}>+</Button>
                                        </GridStack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item>
                            <CSVLink {...myCsv}>Exporter le match en csv</CSVLink>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='info' onClick={exportClipboard}>Exporter le code du match</Button>
                            <Fade in={visible === true} timeout={400}>
                                <Typography variant='caption' sx={{ color: 'textfield.secondary' }}>Code copié dans le presse-papier</Typography>
                            </Fade>
                        </Grid>
                    </Grid>
            }
        </>
    )
}