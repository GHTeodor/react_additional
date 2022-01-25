import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {EpisodesPage, CharactersPage, NotFound} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episodes'}/>}/>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'episodes/:id/characters'} element={<CharactersPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;