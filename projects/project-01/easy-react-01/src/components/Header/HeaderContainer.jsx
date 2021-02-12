import React from "react";
import Header from "./Header"
import  axios  from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
			 .then( response => {
                debugger;
			 });
    }
	render() {
		return <Header {...this.props}/>
	}
}


const mapStateToProps = (state)=>({});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
