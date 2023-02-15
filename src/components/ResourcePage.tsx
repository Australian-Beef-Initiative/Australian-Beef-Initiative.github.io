import React from 'react'
import { Container, Grid, Button, Typography, useMediaQuery } from '@mui/material';


export const ResourcePage = ({resources, CardComponent, pageTitle}: {resources: Record<string, any>[], CardComponent: React.ElementType, pageTitle: string}) => {
    const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Container maxWidth="md" sx={{marginTop: 5}}>
            <Container sx={{paddingBottom: isTabletOrMobile ? 0 : 10}}>
                <Typography variant="h1" color="primary" textAlign="center">
                    {pageTitle}
                </Typography>
            </Container>
            <Container sx={{paddingTop: 5, paddingBottom: 5}}>
                <Grid container spacing={4}>
                    {resources.map(resource => {
                        return (
                            <Grid item xs={12} md={6}>
                                <CardComponent 
                                resource={resource}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Container>
                <Button href="/" variant="contained" color="secondary">
                    Return home
                </Button>
            </Container>
            
        </Container>
    )
}