import React from 'react';
import PropTypes from 'prop-types';

class Foo extends React.Component {
    render() {
        return (
            <div className='foo-container'>
                <div className='foo-header'>
                    { this.props.foo.header }
                </div>
                <div className='foo-menu'>
                    { this.props.foo.menu }
                </div>
                <div className='foo-body'>
                    { this.props.foo.body }
                </div>
                <div className='foo-footer'>
                    { this.props.foo.footer }
                </div>
            </div>
        );
    }
}

Foo.propTypes = {
    foo: PropTypes.shape({
        header: PropTypes.string,
        menu: PropTypes.string,
        body: PropTypes.string,
        footer: PropTypes.string
    })
};

export default Foo;
