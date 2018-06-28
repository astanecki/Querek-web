import React from 'react';
import {RefreshIndicator} from 'material-ui';

module.exports = React.createClass({

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <div
                className='loader-container'>
                <RefreshIndicator
                    size={70}
                    left={10}
                    top={10}
                    status={this.props.isVisible ? 'loading' : 'hide'}
                    />
            </div>
        );
    }
});