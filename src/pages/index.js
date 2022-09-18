//React imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//MUI elements imports
import {
    Grid,
    Button,
    Typography,
    TextField,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@mui/material';
//page imports
import Loading from './utils/Loading';

export default function HomePage() {

    const navigate = useNavigate();
    const [match, setMatch] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        const savedMatch = JSON.parse(localStorage.getItem('match'));
        if (savedMatch) {
            setMatch(savedMatch);
        }
        else {
            setError(true);
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        setSuccessMessage('');
        setErrorMessage('');
    }, [code]);
    const importData = () => {
        try {
            let rawData = JSON.parse(code);
            const loadedMatch = rawData[0];
            const loadedTeam = rawData[1];
            localStorage.setItem('match', JSON.stringify(loadedMatch));
            localStorage.setItem('team', JSON.stringify(loadedTeam));
            setSuccessMessage('Chargement réussi')
            setMatch(loadedMatch);
        }
        catch (e) {
            setErrorMessage('Erreur lors du chargement du match')
        }
    }
    const clearData = () => {
        localStorage.removeItem('team');
        localStorage.removeItem('match');
        setMatch({});
        setOpen(false);
        setError(true);
    }

    return (
        <>
            {loading
                ? <Loading />
                : <Grid container direction='column'>
                    <Grid item>
                        {error
                            ? <Typography>Pas de match chargé</Typography>
                            : <Typography>Match chargé : {match.home} vs {match.away}, {match.date}</Typography>
                        }
                        <Button variant='contained' size='large' disabled={error} onClick={() => navigate('/match-actuel')}>
                            Match actuel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' size='large' onClick={() => navigate('/nouveau-match')}>
                            Nouveau match
                        </Button>
                    </Grid>
                    <Grid item>
                        {successMessage === '' && errorMessage === '' && <Typography>Collez le code du match ci-dessous</Typography>}
                        {successMessage !== '' && <Typography sx={{ color: 'success.main' }}>{successMessage}</Typography>}
                        {errorMessage !== '' && <Typography sx={{ color: 'error.main' }}>{errorMessage}</Typography>}
                        <TextField placeholder='Code match' onChange={(e) => setCode(e.target.value)}>{code}</TextField>
                        <Button variant='contained' color='info' onClick={importData}>Importer match</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='error' onClick={() => setOpen(true)}>Supprimer le match actuel</Button>
                    </Grid>
                </Grid>
            }
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Écraser l'ancien match</DialogTitle>
                <DialogContent>
                    <DialogContentText>Le match précedemment enregistré sera supprimé définitivement</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Annuler</Button>
                    <Button onClick={clearData} autoFocus>Continuer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}