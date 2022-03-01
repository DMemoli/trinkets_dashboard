import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
function ContentWrapper(){
    let id = useParams()
    if(id.id){
        Cookies.set('User', id.id)
        console.log(id.id)
        console.log(Cookies.get())
    }
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;