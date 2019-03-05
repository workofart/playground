import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Redux from './redux/App';
import Text from './text/App';
import App from '../App';
import logo from '../logo.svg';


class Navbar extends Component {

  render() {
      return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/redux/">Redux</Link>
                            </li>
                            <li>
                            <Link to="/text/">Text</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/redux/" component={Redux} />
                    <Route path="/text/" component={Text} />
                </div>
            </Router>
      )
  }
}

export default Navbar;