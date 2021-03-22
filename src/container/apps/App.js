import { Route, Switch } from 'react-router'

/** Import page */
import Homepage from '../homepage'
import Browsepage from '../browsepage'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/browsepage" component={Browsepage}/>
    </Switch>
  </div>
)

export default App;
