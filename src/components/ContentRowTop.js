import React from 'react';
import ContentRowStats from './ContentRowStats';
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
					<div className='row'>
						<LastProduct />
						<GenresInDb />
					</div>
					<MoviesInDb />

				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;