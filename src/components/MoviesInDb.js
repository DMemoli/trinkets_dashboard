import React, { Component } from "react";
import ChartRow from './ChartRow';

class MoviesInDb extends Component {
    constructor(){
        super()
        this.state = {

           moviesList : []

        }
    }



    componentDidMount(){

        fetch('http://localhost:3030/api/products/')
        
        .then(res=>res.json())
        
        .then(movies =>{
            console.log(movies)
            this.setState({moviesList: movies.products})
        })
        .catch(error => console.log(error))

    }


    render () {

        return (
  
        /* <!-- DataTales Example --> */
        <div className="card shadow col-lg-6 mb-4">
           
            <div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Lista de productos: </h5>
					</div>
                    <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Vendedor/a</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                    {

                        this.state.moviesList.map((movie, index)=> {


                            return <ChartRow  {...movie} key = {index} />


                        })

                    }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
}

export default MoviesInDb;