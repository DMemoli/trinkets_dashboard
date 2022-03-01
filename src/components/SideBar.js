import React from 'react';
import image from '../assets/images/logo/trinKets - logo tras sin baseline.png';
import {Route, Routes, Link} from 'react-router-dom'




import Error404 from './Error404';
import MoviesInDb from './MoviesInDb';
import ContentRowStats from './ContentRowStats';
import ContentRowStats2 from './ContentRowStats2';
import ContentRowStats3 from './ContentRowStats3';
import CategoriesDetail from './CategoriesDetail';
import ContentWrapper from './ContentWrapper';
import SearchMovies from './SearchMovies';
import LastProduct from './lastProduct';
import Logout from './Logout';




function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Trinkets"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - trinKets</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                     <Link className="nav-link collapsed" to="/stats">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Estadísticas</span>
                    </Link>
                    
                </li>

               

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/lastproduct">
                        <i className="fas fa-fw fa-box"></i>
                        <span>Último Producto</span></a>
                </li>

                 {/*<!-- Nav Item - Tables -->*/}
                 <li className="nav-item">
                    <a className="nav-link" href="/table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos publicados</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            


    <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <ContentRowStats /><ContentRowStats2 /><ContentRowStats3 /></div>} />
        <Route path="/categories" element =  {<div className='col-8'> <ContentRowStats3 /></div>} />
        <Route path="/lastproduct" element = {<LastProduct />} />
        <Route path="/table" element = {<MoviesInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />
        <Route path="/search" element = {<SearchMovies />} />
        <Route path='/logout' element= {<Logout />} />
        <Route path='/:id' element= {<ContentWrapper />} />
        <Route path='*' element= {<Error404 />} />

    </Routes>




        </React.Fragment>
    )
}
export default SideBar;