import { Link } from "react-router-dom";






 function Header({log,setLog}) {
console.log(log);
function logout(){
  setLog(prev=>false);
}
  return (
<>
<header className="site-header sticky-top py-1">
  <nav className="container mt-2 mb-2 d-flex flex-column flex-md-row justify-content-between">
  <Link to="/" >
    <button className="btn btn-dark btn-outline-light">
        Home
        </button>
      </Link>
      <Link to="/heatmap" >
      
      <button className="btn btn-dark btn-outline-light">
        Heatmap
        </button>
      
      </Link>
      <Link to="/insert" >
      
      <button className="btn btn-dark btn-outline-light">
        Insert
        </button>
      
      </Link>
      <Link to="/today" >
      
      <button className="btn btn-dark btn-outline-light">
        Today
        </button>
      
      </Link>
      
      <Link to="/prediction">
            <button className="btn btn-dark btn-outline-light">Prediction</button>
          </Link>
      {log &&
      <button onClick={logout}>
        Logout
        </button>
 }
  </nav>
</header>

    

</>
  );
}
export default Header;