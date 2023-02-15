import React from 'react';
import './style/App.css';
import "@fontsource/dm-serif-text"
import "@fontsource/open-sans"
import { Box, Container } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './style/theme'
import {Header, Main, AboutPage, Footer, ResourcePage, FarmCard, EventCard, MediaCard} from './components'
import { EVENTS, FARMS, MEDIA } from './data'

// attribution for bull icon <a href="https://www.flaticon.com/free-icons/cow" title="cow icons">Cow icons created by Freepik - Flaticon</a>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/about-us",
    element: <AboutPage />
  },
  {
    path: "/events",
    element: <ResourcePage pageTitle="Events" resources={EVENTS} CardComponent={EventCard}/>
  },
  {
    path: "/farms",
    element: <ResourcePage pageTitle="Farms" resources={FARMS} CardComponent={FarmCard}/>
  },
  {
    path: "/media",
    element: <ResourcePage pageTitle="Podcasts and Media" resources={MEDIA} CardComponent={MediaCard}/>
  },

])

const App = () => {
  
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={{ paddingTop: 5 }}>
          <Container maxWidth="lg">
            <Header />
            <RouterProvider router={router} />
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
