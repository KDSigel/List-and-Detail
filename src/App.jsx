import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import CharacterDetail from "./views/CharacterDetail";
import CharacterList from "./views/CharacterList";


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
