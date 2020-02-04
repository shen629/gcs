import React, {Component} from 'react'
import MenuItem from './MenuItem';
import emitter from '../ev';

export default class GcsLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actives: [true, false, false, false, false, false]
        };
    }

    componentDidMount() {
        this.eventEmitter = emitter.addListener('setActive', arg => {
            const as = [];
            const idx = parseInt(arg);
            const count = this.state.actives.length;
            for (let i = 0; i < count; i++) {
                as.push(idx === i);
            }
            this.setState({
                actives: as
            });
        });
    }

    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter);
    }

    render() {
        return (
            <div className="gcs-left">
                <div className="gcs-menu">
                    <ul role="tablist">
                        <MenuItem isActive={this.state.actives[0]} linkTo="/" cssClass="fa fa-book fa-fw" text="日语单词复习" />
                        <MenuItem isActive={this.state.actives[1]} linkTo="/japInput" cssClass="fa fa-pencil fa-fw" text="日语单词登录" />
                        <MenuItem isActive={this.state.actives[2]} linkTo="/printerManage" cssClass="fa fa-print fa-fw" text="打印机管理" />
                        <MenuItem isActive={this.state.actives[3]} linkTo="/printerBook" cssClass="fa fa-phone fa-fw" text="打印机预定" />
                        <MenuItem isActive={this.state.actives[4]} linkTo="/userManage" cssClass="fa fa-user-circle fa-fw" text="系统用户管理" />
                        <MenuItem isActive={this.state.actives[5]} linkTo="/systemSet" cssClass="fa fa-gear fa-fw" text="系统参数设置" />
                    </ul>
                </div>
            </div>
        );
    }
}
