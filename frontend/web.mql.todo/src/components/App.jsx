import { WelcomePage } from "./WelcomePage";
import { TodoItemsPage } from "./TodoItemsPage";
import { UserToolbar } from "./UserToolbar";
import { GuestToolbar } from "./GuestToolBar";
import { AppProvider, useApp } from "./RealmApp";
import { ThemeProvider } from "./Theme";
import atlasConfig from "../atlasConfig.json";
import "./App.css";
const { appId } = atlasConfig;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AdminDashboardPage } from "./DashboardAdminPage";

export default function ProvidedApp() {
  return (
    <ThemeProvider>
      <AppProvider appId={appId}>
        <App />
        <Navigation />
      </AppProvider>
    </ThemeProvider>
  );
}

function App() {
  const { currentUser, logOut } = useApp();
  return (
    <div className="App">
      {currentUser ? <UserToolbar logOut={logOut} /> : <GuestToolbar />}
      {currentUser ? <TodoItemsPage /> : <WelcomePage />}
    </div>
  );
}

function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/dashboard" element={<AdminDashboardPage />}> </Route>
          <Route path="/" element = {<TodoItemsPage />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}
