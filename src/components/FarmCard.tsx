import React from 'react'
import { Card, CardMedia, CardContent, Chip, CardActions, Button, ButtonGroup, Typography, useMediaQuery } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FarmCard = ({resource}: {resource: Record<string, any>}) => {
    const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
    const { name, imageSrc, altText, location, facebook, instagram, website } = resource;

    return (
        <Card key={name} raised>
            <CardMedia
                sx={{ height: '25vh' }}
                image={imageSrc}
                title={altText}
            />
            <CardContent>
            <Typography sx={{ marginBottom: 2 }} variant="h5">
                {name}
            </Typography>
            <Chip label={location}/>
            </CardContent>
            <CardActions>
            <ButtonGroup color="primary" size="small" orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}>
                <Button
                target="_blank"
                rel="noreferrer"
                href={website || ''}
                startIcon={<OpenInNewIcon />}
                >
                    Website
                </Button>
                <Button
                target="_blank"
                rel="noreferrer"
                href={facebook || ''}
                startIcon={<FacebookIcon />}
                disabled={!facebook}
                >
                    Facebook
                </Button>
                <Button
                target="_blank"
                rel="noreferrer"
                href={instagram || ''}
                startIcon={<InstagramIcon />}
                disabled={!instagram}
                >
                    Instagram
                </Button>
            </ButtonGroup>
            </CardActions>
        </Card>
    )
}