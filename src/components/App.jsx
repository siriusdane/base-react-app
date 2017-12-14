import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>{ this.props.foo.text }</div>
        );
    }
}

App.propTypes = {
    foo: PropTypes.object
};

export default App;
