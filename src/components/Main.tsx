import React from 'react'
import { Box, Typography, Container, Button, useMediaQuery, Link } from '@mui/material'

export const Main = () => {
    const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Container maxWidth="lg">
            <Box sx={{height: isTabletOrMobile ? '30vh' : '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Container>
                    <Typography variant="h1" color="primary" textAlign="center">
                            Australian Beef Initiative
                    </Typography>
                </Container>
            </Box>
            <Box sx={{paddingTop: 5, paddingBottom: 5}}>
                <Container maxWidth="lg" sx={{backgroundColor: '#553111', paddingTop: isTabletOrMobile? 4 : 10, paddingBottom: isTabletOrMobile? 4 : 10, borderRadius: '20px', textAlign: 'center'}}>
                        <Typography variant="h3" color="secondary" textAlign="center" sx={{paddingBottom: 2}} gutterBottom>
                            The ABI mission is to improve health by providing real nutrition throughout local communities.
                        </Typography>
                        <Button size="large" variant="outlined" color="secondary">
                            Read our mission statement
                        </Button>

                </Container>
            </Box>
            <Box sx={{paddingTop: 5, paddingBottom: 5}}>
                <img style={{width: '100%', borderRadius: '20px'}} src="https://res.cloudinary.com/dgpuwpmjk/image/upload/v1676423799/abi/cows-on-hill_z9j0ue.jpg" alt="Cows on a hill By Priscilla Du Preez">
                </img>
            </Box>
            <Box sx={{paddingTop: 5, paddingBottom: 5}}>
                <Container>
                <Typography variant="h3" color="secondary" textAlign="center" sx={{marginBottom: 10}} gutterBottom>
                    Check out our member <Link color="secondary" href="/farms">farms</Link>, get up to date with <Link color="secondary" href="/events">events</Link> or watch a <Link color="secondary" href="/media">podcast</Link>. 
                </Typography>
                </Container>

                
            </Box>
            <Box sx={{ paddingBottom: 5}}>
                <Container sx={{backgroundColor: '#dda15e', paddingTop: isTabletOrMobile? 4 : 10, paddingBottom: isTabletOrMobile? 4 : 10, borderRadius: '20px', textAlign: 'center'}}>
                <Typography variant="h3" color="primary" textAlign="center">
                    Please <Link href="mailto:australianbeefinitiative@proton.me">email us</Link> if you'd like to get involved, we'd love to hear from you.
                </Typography>
                
                </Container>


                
            </Box>
            
        </Container>
    )
}