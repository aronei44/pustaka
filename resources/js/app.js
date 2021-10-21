import React from 'react';
import ReactDOM from 'react-dom';
import {
	Link,
	BrowserRouter,
	Route,
} from 'react-router-dom'


require('./bootstrap');

import Index from './components/Index'
import Buku from './components/Buku'
import Pinjaman from './components/Pinjaman'
import Pengguna from './components/Pengguna'



const Main = () =>{
	return(
		<BrowserRouter>
	    <div className="container-fluid">
	    	<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
		      <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">Perpustakaan</Link>
		      <button className="navbar-toggler position-absolute d-md-none collapsed" style={{marginLeft:'150px'}} type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon" />
		      </button>
		      <div className="navbar-nav">
		        <div className="nav-item text-nowrap">
		          <a className="nav-link px-3" href="#">Sign out</a>
		        </div>
		      </div>
		    </header>
	      <div className="row">
	      	<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
			      <div className="position-sticky pt-3">
			        <ul className="nav flex-column">
			          <li className="nav-item">
			            <Link className="nav-link active" aria-current="page" to="/">
			              <span data-feather="home" />
			              Dashboard
			            </Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/buku">
			              <span data-feather="file" />
			              Data Buku
			            </Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/pinjaman">
			              <span data-feather="shopping-cart" />
			              Data Pinjaman
			            </Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/pengguna">
			              <span data-feather="users" />
			              Data Pengguna
			            </Link>
			          </li>
			        </ul>
			      </div>
			    </nav>
	    		<Route path={'/'} exact component={Index} />
	    		<Route path={'/buku'} exact component={Buku} />
	    		<Route path={'/pinjaman'} exact component={Pinjaman} />
	    		<Route path={'/pengguna'} exact component={Pengguna} />
	      </div>
	    </div>
    </BrowserRouter>
	)
}



if (document.getElementById('body')) {
    ReactDOM.render(<Main />, document.getElementById('body'));
}




// if (document.getElementById('nav')) {
//     ReactDOM.render(<Navigasi />, document.getElementById('nav'));
// }