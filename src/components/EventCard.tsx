import React from 'react'
import { Card as MuiCard, CardMedia, CardContent, Chip, CardActions, Button, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const EventCard = ({resource}: {resource: Record<string, any>}) => {
    const {imgSource, url, title, location, date} = resource;
    return (
        <MuiCard key={title} raised>
            <CardMedia
              sx={{ height: '25vh' }}
              image={imgSource}
            />
            <CardContent>
              <Typography sx={{ marginBottom: 2 }} variant="h5">
                {title}
              </Typography>
              <Typography sx={{ marginBottom: 2 }} variant="h5">
                Date: {date}
              </Typography>
              <Chip label={location} />
            </CardContent>
            <CardActions>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  startIcon={<OpenInNewIcon />}
                >
                  Link to Event
                </Button>
            </CardActions>
          </MuiCard>
    )
}


