import React,{Component} from 'react';
//import {Consumer} from '../../context';
import TextInputGroup from'../layout/TextInputGroup';
//import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getContact,updateContacts} from '../../actions/contactActions';

class EditContacts extends Component{
 state={
     name: '',
     email: '',
     phone: '',
     errors:{}
 };
 componentWillReceiveProps(nextProps,nextState){
const {name,email,phone}=nextProps.contact;
this.setState({name,email,phone});
 }
     componentDidMount(){
         const {id}=this.props.match.params;
         this.props.getContact(id);
     }
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
        const {id}=this.props.match.params;
        const updContact={
            id,
            name,
            email,
            phone
        }
        this.props.updateContacts(updContact);
      
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
                        <div className="card-header">Edit</div>
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
                                <input type="submit" value="Update Contact"
                                className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>
    
        )
       
    }
}
EditContacts.propTypes={
    contact:PropTypes.object.isRequired,
    getContact:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    contact: state.contact.contact
})
export default connect(mapStateToProps,{getContact,updateContacts})(EditContacts); 