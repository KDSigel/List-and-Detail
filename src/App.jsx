import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CharacterDetail from "./views/CharacterDetail";
import CharacterList from "./views/CharacterList";
import './App.css'

export default function App() {
  return(
    <>
    <Header />
    <Switch>
      <Route exact path={'/'}>
        <CharacterList />
      </Route>
      <Route path={'/character/:id'}>
        <CharacterDetail />
      </Route>
    </Switch>
    </>
  );
}
