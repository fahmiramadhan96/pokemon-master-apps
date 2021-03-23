import { Route, Switch } from 'react-router'

/** Import page */
import Homepage from '../homepage'
import Browsepage from '../browsepage'
import Detailspage from '../detailspage'
import Comparepage from '../comparepage'
import Predictedpage from '../predictedpage'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/browsepage" component={Browsepage}/>
      <Route exact path="/details/:name" component={Detailspage}/>
      <Route path="/comparepage" component={Comparepage}/>
      <Route path="/predictedpage" component={Predictedpage}/>
    </Switch>
  </div>
)

export default App;
