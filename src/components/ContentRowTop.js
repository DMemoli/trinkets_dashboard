import React from 'react';
import ContentRowStats from './ContentRowStats';
import ContentRowStats2 from './ContentRowStats2';
import ContentRowStats3 from './ContentRowStats3';
import LastProduct from './lastProduct';
import GenresInDb from './GenresInDb';
import MoviesInDb from './MoviesInDb';
import LastProductInDb from './LastProductInDb';


function ContentRowTop(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Indicadores claves</h1>
					</div>
			
					<ContentRowStats />
					<ContentRowStats2 />
					<ContentRowStats3 />
					<div className='row'>
						<LastProduct />
						{/* <GenresInDb /> */}
						<MoviesInDb />
					</div>
					
				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;