import {Routes, Route, Navigate} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {CarPage, CatPage, DogPage, GirlPage, NotebookPage} from './pages';
import './App.css';


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'cat'}/>}/>
                    <Route path={'cat'} element={<CatPage/>}/>
                    <Route path={'car'} element={<CarPage/>}/>
                    <Route path={'dog'} element={<DogPage/>}/>
                    <Route path={'girl'} element={<GirlPage/>}/>
                    <Route path={'notebook'} element={<NotebookPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;