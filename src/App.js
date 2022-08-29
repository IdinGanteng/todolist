import { BrowserRouter as Route, Router, Navigate, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Toedoe from "./pages/toedoe"
const App = () => {
  return (
    
    <Router>
      
        <Route exact path="/login" component={Login}/>
        <Route exact path="/toedoe" component={Toedoe}/>
    
    </Router>
    
  )
}

export default App