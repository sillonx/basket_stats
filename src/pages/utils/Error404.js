import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Typography,
    Stack,
    Button
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';


export default function Error404() {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }

    return (
        <Stack spacing={3} direction='column' justifyContent='center' alignItems='center' sx={{ minHeight: 300 }}>
            <Typography variant='h6'>
                ERREUR 404 : page inconnue
            </Typography>
            <Button size='large' variant='contained' onClick={returnHome} startIcon={<HomeIcon />} sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.main' } }}>
                Retourner à l'accueil
            </Button>
        </Stack>
    )
};