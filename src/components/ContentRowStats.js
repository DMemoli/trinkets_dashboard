import React, { Component } from "react"
import SmallCard from "./SmallCard"

class ContentRowStats extends Component {
    constructor() {
        super()
        this.state = {

            productsList: [],
            userList: []

        }
    }


    componentDidMount() {

        Promise.all([
            fetch('http://localhost:3030/api/products/'),
            fetch('http://localhost:3030/api/users/')
        ])

            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))

            .then(([data1, data2]) => this.setState({
                productsList: data1,
                userList: data2

            }))
            .catch(error => console.log(error))
    }

    render() {

        let totalProducts = {

            title: 'Total de productos',
            color: 'primary',
            icon: 'fa-chart-area',
            quantity: this.state.productsList.count

        }

        let totalCat = {

            title: 'Total de categorias',
            color: 'success',
            icon: 'fa-folder',
            quantity: this.state.productsList.categoriesLength
        }

        let totalUser = {
            title: 'Cantidad de Usuario',
            color: 'warning',
            icon: 'fa-user',
            quantity: this.state.userList.count
        }

        if(this.state.productsList.categories == undefined) {
            this.state.productsList.categories = 'Cargando...'
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


export default ContentRowStats; 