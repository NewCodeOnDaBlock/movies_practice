import './styles/app.scss'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';

function App() {
  const key = process.env.REACT_APP_API_KEY;

  const UpcomingMoviesAPI = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': 'c376bcb900mshf77be0f52e73435p16d376jsn13c201fcd1a4',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  return (
    <BrowserRouter>
      <Link to="/"></Link>
        <Switch>
          <Route path="/">
            <NavBar />
            <MainSection
              UpcomingMoviesAPI={UpcomingMoviesAPI}
            />
          </Route>   
        </Switch>
    </BrowserRouter>
      );
}

export default App;
