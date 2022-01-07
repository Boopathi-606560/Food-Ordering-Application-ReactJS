import React, { Component } from 'react'
import FoodService from '../services/FoodService';
import { MdAccountCircle } from "react-icons/md";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailId: '',
            password:'',
            isValidUser:'true'
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.onClickLoginButton = this.onClickLoginButton.bind(this);
        this.registerHere = this.registerHere.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_register'){
            return
        }else{
            FoodService.getUserById(this.state.id).then( (res) =>{
                let userDetail = res.data;
                this.setState({emailId: userDetail.emailId,
                    password: userDetail.password
                });
            });
        }        
    }
    onClickLoginButton = (e) => {
        e.preventDefault();
        let userDetail = {emailId: this.state.emailId, password: this.state.password };
        console.log('userDetail => ' + JSON.stringify(userDetail));

            FoodService.loginUserValidation(userDetail).then(res =>{
                this.setState ({isValidUser :res.data});
                const { isValidUser } = this.state;
                if(isValidUser) {
                this.props.history.push('/hotels');
                }
            });
        
    }
    
    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    registerHere(){
        this.props.history.push('/');
    }

   
    render() {

        const { emailId, password,isValidUser } = this.state;
        const isEnabled = emailId.length > 0 && password.length > 0 && emailId.includes('@gmail.com');
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3" style={{height:"260px"}}>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder=  " Email Address " name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>

                                 <div className = "form-group"style={{marginBottom: "5px"}}>
                                            <label> Password: </label>
                                            <input placeholder="Password" required name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div  style={{color:"red",display:isValidUser?'none':'block'}}>
                                          Invalid UserName or Password!  
                                    </div>
                                    <div style={{marginTop: "10px"}}>
                                        <button className="btn btn-success"  disabled={!isEnabled} onClick={this.onClickLoginButton} style={{marginLeft: "20px"}}>Login</button>
                                         <button className="btn btn-success" onClick={this.registerHere} style={{marginLeft: "140px", width:"130px"}}>Register Here</button> 
                                  </div>
                                   </form>
                                </div>
                           </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Login
