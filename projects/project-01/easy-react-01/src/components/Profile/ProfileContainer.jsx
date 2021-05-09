import  React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';






class Profile_Container extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12781;
        }
		this.props.getUserProfile(userId)
    }
    render(){
        document.title = "Моя страница"
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

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent) ;