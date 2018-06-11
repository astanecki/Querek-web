import { connect } from 'react-redux';
import AppComponent from './App';
import { fetchApps, deleteApp, createApp } from '../../actions';

export default connect(
    function mapStateToProps(state) {
        return { apps: state.apps };
    },
    {
        fetchApps,
        deleteApp,
        createApp
    }
)(AppComponent);