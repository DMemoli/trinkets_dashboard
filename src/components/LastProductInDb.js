import React from "react"

function LastProductInDb (props) {
return(
     <>
               
						{/*<!-- Last Product in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.img} alt=""/>
									</div>
                                    <h3>{props.name}</h3>
									<p>{props.description}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="{props.view}">Ver producto</a>
								</div>
							</div>
                        </div>
			
    </>
)
}

export default LastProductInDb;

// props.img = URL de imagen del producto 
// props.name = nombre del producto
// props.description = descripción del producto 
// props.view = URL del producto 