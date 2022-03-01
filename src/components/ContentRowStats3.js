import React, { Component } from "react"
import SmallCard from "./SmallCard"

class ContentRowStats3 extends Component {
    constructor() {
        super()
        this.state = {

            productsList: [],
        
        }
    }


    componentDidMount(){

        fetch("http://localhost:3030/api/products")
        
        .then(res=>res.json())
        
        .then(genres =>{
            console.log(genres)
            this.setState({productsList: genres.countByCategory})
        })
        .catch(error => console.log(error))

    }
    render() {

        let totalProducts = {

            title: 'Arte',
            color: 'dark',
            icon: 'fa-feather',
            quantity: this.state.productsList.arte

        }

        let totalCat = {

            title: 'Coleccionable',
            color: 'dark',
            icon: 'fa-images',
            quantity: this.state.productsList.coleccionable
        }

        let totalUser = {
            title: 'Artesanía',
            color: 'dark',
            icon: 'fa-hamsa',
            quantity: this.state.productsList.artesania
        }


        let cartProps = [totalProducts, totalCat, totalUser]

        return (

            <div className="row">

                {cartProps.map((movie, i) => {

                    return <SmallCard {...movie} key={i} />

                })}

            </div>
        )
    }

}


export default ContentRowStats3; 