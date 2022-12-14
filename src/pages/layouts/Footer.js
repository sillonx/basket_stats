import React from 'react';

import {
    Grid,
    Stack,
} from '@mui/material';


export default function Footer() {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' py={4} px={1} sx={{ position: 'relative', right: 0, left: 0, bottom: 0, backgroundColor: 'background.paper' }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-start' alignItems='center' sx={{ display: 'flex' }}>
                <Stack p={2} spacing={1} direction='row' justifyContent='center' alignItems='center'>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-end' alignItems='center' sx={{ display: 'flex' }}>
                <Stack p={2} spacing={1} direction='row' justifyContent='center' alignItems='center'>
                </Stack>
            </Grid>
        </Grid>
    )
};