import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NoteList from './components/NoteList';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NoteContextProvider from './context/NoteContext';

function App() {
  return (
    // using react-router for navigation
    <div className="app">
      <NoteContextProvider>
        <Router>
          <Header />
          <Sidebar />
          <div className="page">
            <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/create" component={NoteCreate} />
              <Route path="/edit/:id" component={NoteEdit} />
            </Switch>
          </div>
        </Router>
      </NoteContextProvider>
    </div>
  );
}

export default App;
