import React from 'react';

// Stateless functional components
const NavBar = ({ totalCounters }) => {
  // Cannot use Lifecycle hooks on SFC -- only use Class Components
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar{"  "}
            <span className="badge badge-pill bg-secondary">{totalCounters}</span>
          </span>
        </div>
      </nav>
  )
}

// class NavBar extends Component {
//   render() { 
//     return (
      
//     );
//   }
// }
 
export default NavBar;