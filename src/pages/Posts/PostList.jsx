import React from 'react';
import {connect} from "react-redux";

class PostList extends React.Component {
    render() {
        return (
            <>
                <div>
                    posts list
                </div>
                <p>You still Logged in and this is protected route</p>
            </>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

const actionCreators = {
};

export default connect(mapStateToProps, actionCreators)(PostList) ;