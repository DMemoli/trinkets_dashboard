import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
function Logout(){
    
    Cookies.remove('User')
    
    return (
        <React.Fragment>
            
            <div id="content-wrapper" className="d-flex flex-column">
                
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Logout;