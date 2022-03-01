import React, { Component } from "react";
import Category from "./Category";


class TotalByCat extends Component {
    constructor(){
        super()
        this.state = {

            categoryList : []

        }
    }

    componentDidMount(){

        fetch("http://localhost:3030/api/products/")
        
        .then(res=>res.json())
        
        .then(products =>{
            console.log(products)
            this.setState({categoryList: products.countByCategory})
            console.log(this.state.categoryList)
        })
        .catch(error => console.log(error))

    }


render () {

    return (
             
        <>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Totales por categorias </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.categoryList.map((Cat, index)=> {
                                   // console.log(Cat)
                                 return <Category  {...Cat} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </>


    )

}
}



export default TotalByCat