import React, { Component } from 'react'
import FoodService from '../services/FoodService';

class SignUpComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.createUser = this.createUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }
        // else{
        //     FoodService.getUserById(this.state.id).then( (res) =>{
        //         let employee = res.data;
        //         this.setState({firstName: employee.firstName,
        //             lastName: employee.lastName,
        //             emailId : employee.emailId
        //         });
        //     });
        // }        
    }
    createUser = (e) => {
        e.preventDefault();
        let userDetail = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('userDetail => ' + JSON.stringify(userDetail));
            FoodService.createUser(userDetail).then(res =>{
                this.props.history.push('/login');
            });
        
    }

    loginUser =(e) => {
        this.props.history.push('/login');
    }    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

   
    render() {

        const { firstName,lastName,emailId } = this.state;
        const isEnabled = firstName.length > 0 && lastName.length && emailId.includes('@gmail.com');
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        <div className = "card col-md-6 offset-md-3"style={{height:"335px"}}>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.loginUser} style={{marginLeft: "30px"}}>Login</button> 
                                        <button className="btn btn-success" onClick={this.createUser} disabled={!isEnabled } style={{marginLeft: "140px", width:"130px"}}>Register</button>
                                    </form>
                                </div>
                           </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default SignUpComponent
