import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { WelcomePage } from "./WelcomePage";
import { TodoItemsPage } from "./TodoItemsPage";
import { AppProvider, useApp } from "./RealmApp";
import { ThemeProvider } from "./Theme";
import { AppName } from "./AppName";
import atlasConfig from "../atlasConfig.json";
import "./App.css";
const { appId } = atlasConfig;

export default function ProvidedApp() {
  return (
    <ThemeProvider>
      <AppProvider appId={appId}>
        <App />
      </AppProvider>
    </ThemeProvider>
  );
}

function App() {
  const { currentUser, logOut } = useApp();
  return (
    <div className="App">
      {currentUser ? (
      <AppBar position="sticky">
        <Toolbar color="secondary">
          <AppName />
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await logOut();
              }}
            >
              <Typography variant="button">Log Out</Typography>
            </Button>
        </Toolbar>
      </AppBar>
      ) :  <AppName />}
      {currentUser ? <TodoItemsPage /> : <WelcomePage />}
    </div>
  );
}
