import React, { Component } from 'react'

class OrderListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                foodlist: this.props.location.state.order
        }
        
    }

    

   
    

    render() {
        console.log(this.state.foodlist)
        return (
            <div >
                 <h2 className="text-center">My Order Summary</h2>
                 <br></br>
                 <div  style={{ 
                backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")` }} className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr style={{backgroundColor: "green"}}>
                                    <th> Order Id</th>
                                    <th> Restaurant Name</th>
                                    <th> Amount(Rs.)</th>
                                    <th> Date and Time</th>
                                    <th> Order Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.foodlist.map((list) =>{
                                    return (
                                        <tr style={{backgroundColor: "pink"}}>
                                        <td style={{textAlign:"center"}}> {list.id} </td>  
                                        <td> {list.name} </td>   
                                        <td>{list.amount} </td>
                                        <td>{list.date}</td>
                                        <td>
                                            {/* <button  className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button> */}
                                            <button style={{marginLeft: "10px"}}  className="btn btn-info">View </button>
                                        </td>
                                    </tr>)
                                })  
                                   
                                    
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default OrderListComponent
