import React from 'react'
import { Grid, Box, IconButton, Container, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderImage } from './HeaderImage'

export const MobileHeader = () => {
  const [state, setState] = React.useState(false)

    const list = () => (
      <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      >
        <List>
          {[{label: 'Home', href: '/'}, {label: 'About Us', href: '/about-us'}, {label: 'Farms', href: '/farms'}, {label: 'Events', href: '/events'}, {label: 'Podcasts and Media', href: '/media'}].map(({label,href}, index) => (
            <ListItem key={label} disablePadding>
              <ListItemButton href={href}>
                <ListItemText primary={label} primaryTypographyProps={{variant: 'h5', color: 'primary'}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const toggleDrawer =
    (open: boolean) =>
    () => {
      setState(open);
    };

    const handleClick = () => {
      setState(true)
    }


    return (
      <Container>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <HeaderImage />
          </Grid>
          <Grid xs={6}>
            <Box display="flex" justifyContent="end" alignItems="center" sx={{height: '100%'}}>
              <IconButton
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Drawer
                anchor="right"
                open={state}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
}