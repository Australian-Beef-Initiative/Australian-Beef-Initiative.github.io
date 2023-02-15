import React from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => <Box>
    <Container sx={{paddingTop: 5, textAlign: 'center'}}>
        <IconButton color="secondary" size='large' href="https://twitter.com/BeefInAustralia" target="_blank">
            <TwitterIcon fontSize='large'/>
        </IconButton>
        <Typography color="primary" variant="body2">
            &copy; Copyright Australian Beef Initiative 2023
        </Typography>
    </Container>
</Box>