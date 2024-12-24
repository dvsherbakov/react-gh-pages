import "./App.css";
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { EngMenu, Footer, MainMenu } from "./components";
import React from "react";
import { AtOnIn } from "./components/english/AtOnIn/AtOnIn";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/login"}>login</Link>
            </li>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/eng/AtOnIn"}>tst</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainMenu />} />
            <Route path="login" element={<div>Login</div>} />

            <Route path="eng">
              <Route index element={<EngMenu />} />
              <Route path="AtOnIn" element={<AtOnIn />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

function Layout() {
  return (
    <div className="outlet">
      <Outlet />
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
