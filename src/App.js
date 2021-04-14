import Navbar from './Navbar.js';             
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from './blogDetails.js';
import Create from './Create.js';
import FileNotFound from './FilenotFound.js';
import Footer from './footer.js';


function App() {          
  return (
    <Router>
      <div className="api">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Create/>
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <FileNotFound/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
