import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.owner.firstName}</td>
                    <td>{props.owner.lastName}</td>
                    <td>{props.category} </td>
                </tr>
            )
    }
    
        

export default ChartRow;