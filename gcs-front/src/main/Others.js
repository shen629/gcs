import React, {Component} from 'react'
import emitter from '../ev'

class Others extends Component {
    componentDidMount() {
        emitter.emit('setActive', this.props.num);
    }

    render() {
        return (
            <div className="gcs-content">
                <h3><span>GCS</span> - 建设中 - {this.props.num - 1}</h3>
                <div>
                    建设中
                </div>
            </div>
        );
    }
}

export default Others;
