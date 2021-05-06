import  React from 'react';
import Profile from './Profile';
import  axios  from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';





class Profile_Container extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12781;
        }
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
			 .then( response => {
                this.props.setUserProfile(response.data)
			 });
    }
    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(Profile_Container);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent) ;