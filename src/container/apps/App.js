import { Route, Switch } from 'react-router'

/** Import page */
import Homepage from '../homepage'

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Homepage}/>
    </Switch>
  </div>
)

export default App;
