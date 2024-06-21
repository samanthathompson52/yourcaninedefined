import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material/styles";
import { colors } from "../colors";


const themeConfig = {
  palette: {
    primary: {
      main: '#687E8C',
      light: colors.lightBlue,
      dark: colors.darkBlue,
      contrastText: colors.white,
    },
    secondary: colors.green,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: '#fff',
              borderRadius: '20px',
            }),
        }),
      },
      variants: [
        {
          props: (props) =>
            props.variant === 'dashed' && props.color !== 'secondary',
          style: {
            textTransform: 'none',
            text: colors.white
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: 'sign-in', color: 'primary'},
          style: {
            textTransform: 'none',
            text: colors.white,
            backgroundColor: colors.darkBlue
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
    button: {
      fontSize: '1rem',
    },
    h2: {
      fontSize: '2.5rem',
      color: '#ACA6A6'
    },
  },
}

let theme = createTheme(themeConfig);
theme = responsiveFontSizes(theme);

export function ThemeProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
}
