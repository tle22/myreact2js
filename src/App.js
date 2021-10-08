import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyFirstPage from './MyFirstPage';
import Ant from './Ant';
import Bird from './Bird';
import Cat from './Cat';
export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MyFirstPage />
      </Route>
      <Route exact path="/ant">
        <Ant />
      </Route>
      <Route exact path="/bird">
        <Bird />
      </Route>
      <Route path="/cat">
        <Cat />
      </Route>
    </BrowserRouter>
  );
}

