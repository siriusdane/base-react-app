import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/App.jsx';

class AppHandler extends React.Component {
    render() {
        return (
            <App { ...this.props } />
        );
    }
}

AppHandler.propTypes = {
    foo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        foo: state.foo
    };
}

export default connect(mapStateToProps)(AppHandler);
