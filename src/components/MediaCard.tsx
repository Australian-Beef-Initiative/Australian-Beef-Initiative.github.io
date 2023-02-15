import React from 'react'
import { Card as MuiCard, CardMedia, CardContent, Chip, CardActions, Button, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const MediaCard = ({resource}: {resource: Record<string, any>}) => {
    const {imgSource, title, isAudioOnly, source, date, producer} = resource;
    return (
        <MuiCard key={title} raised>
          {isAudioOnly ? 
          <CardMedia
            sx={{ height: '25vh' }}
            image={imgSource}
          />
          :
          <div className="videoWrapper">
              <iframe 
                  src={source} 
                  className="responsive-iframe" 
                  title="A podcast interviewing Australian Beef Initiative directors" 
                  allow="fullscreen; web-share"
                  width={1000}
              ></iframe>
          </div>
          }
            
            <CardContent>
              <Typography sx={{ marginBottom: 2 }} variant="h5">
                {title}
              </Typography>
              <Typography sx={{ marginBottom: 2 }} variant="h6">
                Produced by {producer}
              </Typography>
              <Typography sx={{ marginBottom: 2 }} variant="h6">
                Date: {date}
              </Typography>
            </CardContent>
            <CardActions>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href={source}
                  startIcon={<OpenInNewIcon />}
                >
                  Link to Source
                </Button>
            </CardActions>
          </MuiCard>
    )
}


