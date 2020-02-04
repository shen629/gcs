import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import emitter from '../ev';

class JapInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kanji: '',
            hiragana: '',
            chinese: '',
            sample: '',
            noun: false,
            adj1: false,
            adj2: false,
            verb1: false,
            verb2: false,
            verb3: false,
            adverb: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        emitter.emit('setActive', this.props.num);
    }

    handleSubmit() {
        if (!this.state.kanji) {
            return;
        }
        let hiragana = this.state.hiragana;
        if (!hiragana) {
            hiragana = this.state.kanji;
        }
        $.ajax({
            url: 'jap/set',
            type: 'post',
            contentType:'application/json',
            dataType: 'json',
            data: JSON.stringify({
                "kanji": this.state.kanji,
                "hiragana": hiragana,
                "chinese": this.state.chinese,
                "sample": this.state.sample,
                "noun": this.state.noun,
                "adj1": this.state.adj1,
                "adj2": this.state.adj2,
                "verb1": this.state.verb1,
                "verb2": this.state.verb2,
                "verb3": this.state.verb3,
                "adverb": this.state.adverb
            }),
            complete: data => {
                this.setState({
                    kanji: '',
                    hiragana: '',
                    chinese: '',
                    sample: '',
                    noun: false,
                    adj1: false,
                    adj2: false,
                    verb1: false,
                    verb2: false,
                    verb3: false,
                    adverb: false
                });
            }
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    static propTypes = {
        num: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="gcs-content">
                <h3><span>GCS</span> - 日语单词登录</h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="kanji">漢字</label>
                            <input type="text" className="form-control" name="kanji" value={this.state.kanji} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hiragana">ひらがな</label>
                            <input type="text" className="form-control" name="hiragana" value={this.state.hiragana} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hiragana">中国語</label>
                            <input type="text" className="form-control" name="chinese" value={this.state.chinese} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hiragana">例</label>
                            <input type="text" className="form-control" name="sample" value={this.state.sample} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="noun" name="noun" checked={this.state.noun} onChange={this.handleChange} />
                                    <label htmlFor="noun">名词</label>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="adj1" name="adj1" checked={this.state.adj1} onChange={this.handleChange} />
                                    <label htmlFor="adj1">形容词-1</label>
                                </div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="adj2" name="adj2" checked={this.state.adj2} onChange={this.handleChange} />
                                    <label htmlFor="adj2">形容词-2</label>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="verb1" name="verb1" checked={this.state.verb1} onChange={this.handleChange} />
                                    <label htmlFor="verb1">动词-1</label>
                                </div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="verb2" name="verb2" checked={this.state.verb2} onChange={this.handleChange} />
                                    <label htmlFor="verb2">动词-2</label>
                                </div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="verb3" name="verb3" checked={this.state.verb3} onChange={this.handleChange} />
                                    <label htmlFor="verb3">动词-3</label>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox checkbox-primary checkbox-inline">
                                    <input type="checkbox" className="styled" id="adverb" name="adverb" checked={this.state.adverb} onChange={this.handleChange} />
                                    <label htmlFor="adverb">副词</label>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>次へ</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default JapInput;
