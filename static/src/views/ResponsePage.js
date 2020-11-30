import React, {Component} from 'react';

class Response extends Component {
    render() {
        return (
            this.props.names.map(row => 
                <div key = {row.id}>
                    {row.name}
                </div>
                )
        )
    }
}

export default Response