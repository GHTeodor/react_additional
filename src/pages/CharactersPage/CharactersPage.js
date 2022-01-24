import {useLocation} from "react-router-dom";

import Characters from "../../components/Characters/Characters";
import './CharactersPage.css';


const CharactersPage = () => {
    const {state} = useLocation();

    return (
        <div className='charactersPage'>
            {state.map(character => <Characters key={character} character={character}/>)}
        </div>
    );
};

export {CharactersPage};