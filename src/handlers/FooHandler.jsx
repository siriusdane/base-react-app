import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Foo from '../components/Foo.jsx';

class FooHandler extends React.Component {
    render() {
        return (
            <Foo { ...this.props } />
        );
    }
}

FooHandler.propTypes = {
    foo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        foo: state.foo
    };
}

export default connect(mapStateToProps)(FooHandler);
