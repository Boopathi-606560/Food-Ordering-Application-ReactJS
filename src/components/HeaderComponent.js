import React, { Component } from 'react'
import './header.css';
import { MdAccountCircle } from "react-icons/md";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
    }

       
      
    }
   
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Food Ordering Application</a></div>
                    <div className = "col">

                        
      <MdAccountCircle style={{marginLeft: "850px",color: 'pink', fontSize: "39px"}} 
      ></MdAccountCircle><div style={{marginLeft: "850px",color: 'pink', fontSize: "12px"}}>Boopathi</div>
                   </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
