import React, { Component } from 'react';
import Card from "./../components/Card";
import { connect } from 'react-redux';
import { fetchUsers } from "../store/actions/home";
import { User } from '../interfaces/user.interface';

interface IHomeProps {
    fetchUsers: Function,
    history?: any,
    loading: boolean,
    location?: any,
    match?: any,
    staticContext: any,
    users: User[]
}

class Home extends Component<any, IHomeProps> {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUsers = () => {
        return (
            this.props.users.map((user: User) => <Card {...user} key={user.id} />)
        )
    }
    render() {
        const loading: boolean = this.props.loading;
        return (
            loading ? (<p className="text-center">Loading...</p>) : (
                <React.Fragment>
                    <h1 className="mb-4">Список пингвинов</h1>
                    {this.renderUsers()}
                </React.Fragment>
            )
        )
    }
}

function mapStateToProps(state: any) {
    return {
        users: state.home.users,
        loading: state.home.loading
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);