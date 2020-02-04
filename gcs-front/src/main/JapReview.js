import React, {Component} from 'react';
import $ from 'jquery';
import emitter from '../ev';
import PropTypes from 'prop-types';

class JapReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kanji: '',
            hiragana: '',
            value: '',
            jap: {},
            showDetail: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        emitter.emit('setActive', this.props.num);
        this.getData();

        document.addEventListener("keydown", this.onKeyDown)
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.onKeyDown)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({
            value: value
        });
    }

    handleNext() {
        if (this.state.value === this.state.jap.hiragana ||
            this.state.value === this.state.jap.kanji) {
            this.setState({
                kanji: '',
                hiragana: '',
                value: '',
                jap: {},
                showDetail: false
            });
            this.getData();
        } else {
            this.setState({
                showDetail: true
            });
        }
    }

    onKeyDown(e) {
        switch(e.keyCode) {
            case 13:
                this.handleNext();
                break;
            default:
                break;
        }
    }

    getData() {
        $.ajax({
            url: 'jap/get',
            type: 'get',
            contentType:'application/json',
            dataType: 'json',
            success: data => {
                this.setState({
                    kanji: data.kanji,
                    jap: data
                });
            }
        });
    }

    handleDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    static propTypes = {
        num: PropTypes.string.isRequired
    }

    render() {
        let detail = <div className="gcs-detail">
            <div>{this.state.jap.kanji}</div>
            <div>{this.state.jap.hiragana}</div>
            <div>{this.state.jap.chinese}</div>
            <div>{this.state.jap.sample ? this.state.jap.sample : ''}</div>
        </div>;
        if (!this.state.showDetail) {
            detail = null;
        }

        return (
            <div className="gcs-content">
                <h3><span>GCS</span> - 日语单词复习</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="kanji">漢字</label>
                            <input type="text" className="form-control" id="kanji" value={this.state.kanji} readOnly="readonly"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hiragana">ひらがな</label>
                            <input type="text" className="form-control" id="hiragana" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleNext}>次へ</button>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-secondary" onClick={this.handleDetail}>詳細</button>
                    </form>
                </div>
                {detail}
            </div>
        );
    }
}

export default JapReview;
