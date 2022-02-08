import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {GenresPage, MoviesPage} from "./pages";
import {Movie} from "./components/Movie/Movie";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} element={<Movie/>}/>
                <Route path={'/genres'} element={<GenresPage/>}/>
                <Route path={'*'} element={<Navigate to={"/"}/>}/>
            </Route>
        </Routes>
    );
}

export default App;