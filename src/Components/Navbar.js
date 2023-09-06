import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate} from 'react-router-dom';

export default function Navbar() {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location]);
  let navigate = useNavigate();

  const handleLogout = ()=>
  {
    localStorage.removeItem('token');
    navigate('/login', {replace:true});
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TODO App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {localStorage.getItem('token') === null?
        <form className="d-flex" role="search">
        <Link to = "/login"><button className = " btn btn-primary mx -2">Login</button></Link>
        <Link to = "/signup"><button className = " btn btn-primary mx-2">Signup</button></Link>
        </form>
        :<button className='btn btn-primary mx-2' onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  </nav>
    </div>
  )
}
