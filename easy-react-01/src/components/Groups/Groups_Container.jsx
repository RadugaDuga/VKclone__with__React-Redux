

import { connect } from "react-redux";
import Groups from "./Groups";




let mapStateToProps = (state) => {
	return {
		groupsData: state.groupsPage.groupsData	
	};
};

const Groups_Container = connect(mapStateToProps)(Groups);

export default Groups_Container;
