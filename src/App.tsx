import "./App.css";
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { EngMenu, Footer, MainMenu, VoiceInput } from "./components";
import React from "react";
import {
  AtOnIn,
  DailyPhrases,
  EnglishPresentSimple,
  EnglishToBe, Intro,
  IrregularVerbs,
  TableOfVerbs,
} from "./components/english";
import { SentencesTest } from "./components/english";

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
              <Route path="sentencesTest" element={<SentencesTest
                  phrase="Я люблю тебя" variants={["you", "I", "love"]} subsequence={[1,2,0]}></SentencesTest>} />
              <Route path="voice-input" element={<VoiceInput />} />
              <Route path="irregularVerbs" element={<IrregularVerbs />} />
              <Route path="tobe" element={<EnglishToBe />} />
              <Route path="PresentSimple" element={<EnglishPresentSimple />} />
              <Route path="daily" element={<DailyPhrases />} />
              <Route path="verbsTable" element={<TableOfVerbs />} />
              <Route path="intro" element={<Intro />} />
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
