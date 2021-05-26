

import { connect } from "react-redux";
import Groups from "./Groups";




let mapStateToProps = (state) => {
	return {
		groupsData: state.groupsPage.groupsData	
	};
};

const GroupsContainer = connect(mapStateToProps)(Groups);

export default GroupsContainer;
