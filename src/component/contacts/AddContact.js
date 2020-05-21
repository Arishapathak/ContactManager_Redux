import React,{Component} from 'react';
//import {Consumer} from '../../context';
import TextInputGroup from'../layout/TextInputGroup';
//import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addContacts} from '../../actions/contactActions';
class AddContact extends Component{
 state={
     name: '',
     email: '',
     phone: '',
     errors:{}
 };
 onChange=e=>this.setState({[e.target.name]: e.target.value});
 onSubmit=e=>{
     e.preventDefault();
     const{name,email,phone}=this.state;
        if(name===''){
            this.setState({errors:{name:"Name is required"}});
        }
        if(email===''){
            this.setState({errors:{email:"Eamil is required"}});
        }
        if(phone===''){
            this.setState({errors:{phone:"PHONE is required"}});
        }
     const newContact={
        
         name,
         email,
         phone,
        
     };
this.props.addContacts(newContact);
     this.setState({
         name:'',
         email:'',
         phone:'',
         errors:{}
     }); 
     this.props.history.push('/');
 };

    render(){
        const {name,email,phone,errors}=this.state;
                    return(
                        <div className="card mb-3">
                        <div className="card-header">Add</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                               <TextInputGroup
                               label="Name"
                               name="name"
                               placeholder="Enter Name"
                               value={name}
                               onChange={this.onChange}
                               error={errors.name}
                               />
                               <TextInputGroup
                               label="Email"
                               name="email"
                               type="email"
                               placeholder="Enter Email"
                               value={email}
                               onChange={this.onChange}
                               error={errors.email}
                               />
                               <TextInputGroup
                               label="Phone"
                               name="phone"
                               placeholder="Enter Phone"
                               value={phone}
                               onChange={this.onChange}
                               error={errors.phone}
                               />
                                <input type="submit" value="Add Contact"
                                className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>
                    );
       
    }
}
AddContact.propTypes={
    addContacts: PropTypes.func.isRequired
}
export default connect(null,{addContacts})(AddContact); 