import React from 'react'
import { Grid, ButtonGroup, Button } from '@mui/material';
import {HeaderImage} from './HeaderImage'

export const DesktopHeader = () => {
    return (
        <Grid container spacing={2}>
          <Grid xs={3}>
            <HeaderImage />
          </Grid>
          <Grid xs={9}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <ButtonGroup variant="text" size="large" color="primary">
                    <Button
                      key="home-button"
                      style={{ borderStyle: 'none' }}
                      href="/"
                      sx={{ p: 1 }}
                    >
                      Home
                    </Button>
                    <Button
                      key="about-button"
                      style={{ borderStyle: 'none' }}
                      href="/about-us"
                      sx={{ p: 1 }}
                    >
                      About Us
                    </Button>
                    <Button
                      key="events-button"
                      style={{ borderStyle: 'none' }}
                      href="/events"
                      sx={{ p: 1 }}
                    >
                      Events
                    </Button>
                    <Button
                      key="farms-button"
                      style={{ borderStyle: 'none' }}
                      href="/farms"
                      sx={{ p: 1 }}
                    >
                      Farms
                    </Button>
                    <Button
                      key="media-button"
                      style={{ borderStyle: 'none' }}
                      href="/media"
                      sx={{ p: 1 }}
                    >
                      Podcasts and Media
                    </Button>
                    <Button
                      key="login-button"
                      variant="outlined"
                      href=""
                      sx={{ p: 1 }}
                    >
                      Sign in
                    </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>
    )
}