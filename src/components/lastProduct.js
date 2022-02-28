import React, { Component } from "react"
import imagenFondo from '../assets/images/mandalorian.jpg'

class LastProduct extends Component {
    constructor() {
        super()
        this.state = {

            productsList: []

        }
    }
componentDidMount() {
	
	fetch('http://localhost:3030/api/products/0') //EN la API se utiliza el id = 0 para obtener el ultimo registro
	.then((res) => res.json())
	.then((products) => this.setState({
		productsList: products

	}))
	.catch(error => console.log(error))
}


render(){
	
	let productURL = "http://localhost:3030/product/detail/"+this.state.productsList.id
	
	
	return (
		<>

			{/*<!-- Last Movie in DB -->*/}
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado: {this.state.productsList.name}</h5>
					</div>
					<div className="card-body">
						<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={this.state.productsList.imageURL} alt={this.state.productsList.name} />
							</div>
						<p>{this.state.productsList.description}</p>
						<a className="btn btn-danger" target="_blank" rel="nofollow" href={productURL} >Detalle del producto</a>
					</div>
				</div>
			</div>

		</>
	)
}
}

export default LastProduct;