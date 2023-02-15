import React from 'react'
import { Box, Typography, Container, Button, useMediaQuery } from '@mui/material'

export const AboutPage = () => {
    const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Box>
            <Container maxWidth="lg" sx={{marginTop: 5}}>
                <Typography variant="h1" color="primary" textAlign="center" gutterBottom>
                    About Us
                </Typography>
                <Container maxWidth="md">
                    <Typography variant="h3" color="primary" gutterBottom sx={{paddingTop: 5}}>
                        Mission
                    </Typography>
                    <Typography variant="body1">
                    The ABI mission is to improve health by providing real nutrition throughout local communities. We use our nationwide network and education to accomplish this. With expansion of market access to quality protein we’re connecting value aligned farmers, processors, distributors, retailers, and consumers. From paddock to plate, from farm to freezer we achieve success through teaching where your food comes from. 
                    </Typography>
                    <Typography variant="body1">
                    ABI has built a decentralised community of regenerative cattle producers and resilient consumers throughout Australia because ruminants have been the foundation of human health since antiquity, and regenerative farming is key to repairing our misused and fragile Australian soil.
                    </Typography>

                    <Typography variant="h3" color="primary" gutterBottom sx={{paddingTop: 5}}>
                        Objectives
                    </Typography>
                    <Typography variant="body1">
                    ABI was formed to facilitate a decentralised network connecting regenerative farmers with consumers, providing benefits including
                    </Typography>
                    <Typography variant="body1">
                        ABI was formed to facilitate a decentralised network connecting regenerative farmers with consumers, providing benefits including
                    </Typography>
                    <Container maxWidth="md">
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Premium animal protein and fresh farm produce direct to consumers’ door - promoting good
                            health for Australian families
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Higher revenues for Australian farmers by enabling them to capture retail prices for their
                            products from consumers who value the methods by which their animals are raised and
                            processed
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Superior animal welfare, maximising quality of life and humane processing procedures
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Regeneration of our soil, one of our most valuable assets
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            The opportunity for consumers to form and build a relationship with the farmers growing our
                            food
                        </Typography>
                    </Container>

                    <Typography variant="h3" color="primary" gutterBottom sx={{paddingTop: 5}}>
                        Memberships
                    </Typography>
                    <Typography variant="body1">
                        ABI membership runs on a calendar year basis.  Membership fees for the year 2023 have been set at $75.
                    </Typography>
                    <Typography variant="body1">
                        For members interested in making a higher contribution, the ABI also offers the opportunity to become a ‘Founding Member’.  Founding Member fees are available for $1,000, with the following benefits:
                    </Typography>
                    <Container maxWidth="md">
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Recognition on the ABI website and at ABI events
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            The opportunity to join the ABI Committee
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            The opportunity to give input on ABI policies and plans
                        </Typography>
                    </Container>


                    <Typography variant="h3" color="primary" gutterBottom sx={{paddingTop: 5}}>
                        Corporate Structure
                    </Typography>
                    <Typography variant="body1">
                        ABI has been established as a mutual, along the following principles:
                    </Typography>
                    <Container maxWidth="md">
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            The business and activities of the organisation are guided by an ethos of providing benefits through goods or services to members (as owners), rather than maximising profits to pay dividends or distributions to members (as shareholders) or external investors.
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            We are a democratic organisation in which members have equal voting rights (one member, one vote)
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Membership interests in cooperatives and mutuals are not transferable
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                        The company is run on a ‘for profit’ basis, with profits directed to generating benefits for members
                        </Typography>
                    </Container>

                    <Typography variant="h5" color="primary" gutterBottom sx={{paddingTop: 5}}>
                        Committee
                    </Typography>
                    <Typography variant="body1">
                        The Inaugural ABI Committee will sit for the calendar year 2023.  Our Annual General Meeting will be held late 2023 where members may nominate for Committee positions, to be voted upon by members in attendance at the AGM.  The 2023 Committee comprises:
                    </Typography>
                    <Container maxWidth="md">
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            President - Nathan Smith
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Vice-President - Izequiel McCoy
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'list-item' }}>
                            Treasurer - Kasey Stanfield
                        </Typography>
                    </Container>

                </Container>
                <Container>
                    <Button href="/" variant="contained" color="secondary" sx={{marginTop: 5, marginBottom: 5}}>
                        Return home
                    </Button>

                </Container>
            </Container>
        </Box>
    )
}