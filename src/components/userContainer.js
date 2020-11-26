import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';

const UserContainer = ({userData, fetchUser}) => {
    useEffect(() => {
        fetchUser()
    },[])
    return userData.loading ? (
        <div>
            <h2>Loading...</h2>
        </div>
    ) : !userData.error ? (
        <div>
            <h2>User List</h2>
            <div>
                    {userData && userData.users && 
                    userData.users.map(x => <p>{x.name}</p>)}
            </div>
        </div>
    ) : (
        <h2>{userData.error}</h2>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispathchToProps =  (dispatch) => {
    return {
        fetchUser : () => dispatch(fetchUser())
    }
}

export default connect
(mapStateToProps,
 mapDispathchToProps)
(UserContainer)