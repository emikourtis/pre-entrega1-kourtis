import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from './CartWidget';
import Contact from './Contact';


const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="container-fluid">
                    <CartWidget />
                    <AiOutlineShoppingCart />
                    <Link className="navbar-brand ms-5" to='/Home'>FakeStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Contact'>Contacto</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
