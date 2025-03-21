import './nav.css'
function Nav(){
    return <>



<nav className="navbar navbar-expand-lg bg-body-tertiary">
<a className="navbar-brand" href="#"><i className="fa-solid fa-circle-user" ></i></a>

  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" id="3">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id="1">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"id="2">homeservice</a>
        </li>
      </ul>
      
      <button type="button" class="btn btn-light">Light</button>
   
    </div>
  </div>
</nav>

    
    
    </>
}





export {Nav}