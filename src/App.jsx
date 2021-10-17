import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppRoutes from "./routes"

const App = () => {
  return (
    <Router>
      <Switch>

        {AppRoutes.map((route, key) => {
        const { component, path } = route;
        const Component = component;

        return (
          <Route
            exact={true}
            path={path}
            key={key}
            render={Component}
          />
        )
      })}
      </Switch>
    </Router>
  )
}

export default App;
