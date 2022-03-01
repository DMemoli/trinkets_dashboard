import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.owner.firstName} {props.owner.lastName}</td>
                    <td>{props.category.toUpperCase()} </td>
                </tr>
            )
    }
    
        

export default ChartRow;