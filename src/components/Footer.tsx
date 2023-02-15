import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export const Footer = () => <Box>
    <Container sx={{paddingTop: 5}}>
        <Typography color="primary" variant="body2">
        &copy; Copyright Australian Beef Initiative 2023
        </Typography>
    </Container>
</Box>