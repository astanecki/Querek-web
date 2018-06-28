import { connect } from 'react-redux';
import AppComponent from './App';
import {
    fetchApps,
    deleteApp,
    createApp,
    clickEmptyCard,
    closeDialog,
    changeTab
} from '../../actions';

export default connect(
    function mapStateToProps(store) {
        return {
            app: store.app.toJS(),
            ui: store.ui.toJS()
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            fetchApps: () => dispatch(fetchApps()),
            deleteApp: app => dispatch(deleteApp(app)),
            createApp: (app, options) => dispatch(createApp(app, options)),
            clickEmptyCard: () => dispatch(clickEmptyCard()),
            closeDialog: () => dispatch(closeDialog()),
            changeTab: (value) => dispatch(changeTab(value)),
        }
    }
)(AppComponent);