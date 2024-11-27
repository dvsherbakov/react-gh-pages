import "./App.css";
import {HashRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">

            <HashRouter>
                <nav>
                    <ul>
                        <li><Link to={'/login'}>login</Link></li>
                        <li><Link to={'/'}>home</Link></li>
                    </ul>
                </nav>
                <Routes>
                <Route path='/' element={<Layout/>}>
                        <Route index element={<div>Home </div>}/>
                        <Route path='login' element={<div>Login</div>}/>
                        <Route path='*' element={<NoMatch />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}


function Layout() {
    return (
        <>
            <Outlet/>
           <Footer />
        </>
    )
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to='/'>Go to the home page</Link>
            </p>
        </div>
    )
}

export default App;


