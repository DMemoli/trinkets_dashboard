import React, { Component } from "react"
import SmallCard from "./SmallCard"

class ContentRowStats2 extends Component {
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

            title: 'Precio más alto',
            color: 'success',
            icon: 'fa-arrow-up',
            quantity: "$25.000"

        }

        let totalCat = {

            title: 'Precio más bajo',
            color: 'danger',
            icon: 'fa-arrow-down',
            quantity: "$200"
        }

        let totalUser = {
            title: 'Precio promedio',
            color: 'info',
            icon: 'fa-equals',
            quantity: "$1.500"
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


export default ContentRowStats2; 