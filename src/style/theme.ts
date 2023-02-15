
import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#00008B'
        },
        secondary: {
            main: '#F7931A',
            contrastText: 'white'
        },
        background: {
            paper: '#fef9d8',
          },
    },
    typography: {
        fontFamily: `"DM Serif Text", serif;`,
        h1: {
            fontSize: 80,
        },
        body1: {
            fontFamily: '"Open Sans", san-serif;'
        },
        
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'large',
                variant: 'contained'
            }
        },
        MuiTypography: {
            defaultProps: {
                variant: 'body1',
            },
            styleOverrides: {
                h1: {
                    fontSize: "5rem",
                    "@media (max-width:600px)": {
                        fontSize: "3rem"
                    },
                },
                h3: {
                    fontSize: "4rem",
                    "@media (max-width:600px)": {
                        fontSize: "2rem"
                    },
                },
                body1: {
                    paddingTop: 5,
                    paddingBottom: 5
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                sx: {
                    // paddingTop: 5,
                    // paddingBottom: 5
                }
            }
        },
    }
})