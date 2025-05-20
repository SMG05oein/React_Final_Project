import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import TopMenu from "./layout/TopMenu";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";
import MoviesView from "./pages/MoviesView/MoviesView";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import DevTest from "./pages/DevTest/DevTest";
import ReviewView from "./pages/MoviesView/Review/ReviewView";

function App() {
    return (
        <div>
            {/*<TopMenu/>*/}
            <Routes>

                <Route path={"/"} element={<TopMenu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="movies"> {/**와우 혁신적이고 혁명적인 발상!! SsaBalJeg*/}
                        <Route index element={<Movies/>}/>
                        <Route path=":idx" element={<MoviesView/>}/>
                        <Route path="review/:idx/:id" element={<ReviewView/>}/>
                    </Route>
                    <Route path="test" element={<DevTest/>}/>
                    {/*<Route path={"movies"} element={<Movies/>}/>*/}
                    {/*<Route path={"movies/:idx"} element={<MoviesView/>}/>*/}
                </Route>

                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
