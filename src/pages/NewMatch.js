//React imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//MUI elements imports
import {
    Grid,
    Button,
    TextField,
    Stack,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@mui/material';
//Data imports
import { defaultPlayer, defaultMatch } from '../static/data';

export default function NewMatch() {

    const navigate = useNavigate();
    const [team, setTeam] = useState([]);
    const [match] = useState(defaultMatch);
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const addPlayer = () => {
        let tempTeam = structuredClone(team);
        let tempPlayer = structuredClone(defaultPlayer);
        tempPlayer.key = currentId;
        setCurrentId(currentId + 1);
        tempTeam.push(tempPlayer);
        setTeam(tempTeam);
    }
    const saveTeam = () => {
        localStorage.setItem('team', JSON.stringify(team));
        localStorage.setItem('match', JSON.stringify(match));
        navigate('/match-actuel');
    }

    return (
        <>
            <Grid container direction='column' alignItems='center' justifyContent='center' pt={5}>
                <Grid item>
                    <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                        <TextField placeholder='Locaux' required onChange={(e) => match.home = e.target.value} sx={{ width: 350 }}>{match.home}</TextField>
                        <TextField placeholder='Visiteurs' required onChange={(e) => match.away = e.target.value} sx={{ width: 350 }}>{match.away}</TextField>
                        <TextField placeholder='Date' type='date' required onChange={(e) => match.date = e.target.value} sx={{ width: 200 }}>{match.date}</TextField>
                    </Stack>
                </Grid>
                <Grid item pt={4}>
                    <Button variant='contained' size='large' onClick={addPlayer}>
                        Ajouter un joueur
                    </Button>
                </Grid>
                <Grid item pt={1}>
                    {team.map((index) => (
                        <Stack direction='row' alignItems='center' justifyContent='center' spacing={1} pb={1}>
                            <TextField placeholder='Nom' required onChange={(e) => index.name = e.target.value} sx={{ width: 275 }}>{index.name}</TextField>
                            <TextField placeholder='Numéro' type='number' required onChange={(e) => index.number = e.target.value} sx={{ width: 150 }}>{index.number}</TextField>
                        </Stack>
                    ))}
                </Grid>
                <Grid item pt={2}>
                    <Button variant='contained' size='large' color='info' disabled={team.length < 5} onClick={() => setOpen(true)}>
                        Confirmer équipe
                    </Button>
                </Grid>
            </Grid >
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Écraser l'ancien match</DialogTitle>
                <DialogContent>
                    <DialogContentText>Le match précedemment enregistré sera supprimé définitivement</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Annuler</Button>
                    <Button onClick={saveTeam} autoFocus>Continuer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}