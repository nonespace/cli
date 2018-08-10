import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { add, minus, asyncAdd } from '../../actions/test'
import "./index.scss"
@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    }
}))


class Index extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    render() {
        return (
            <div>
                <WingBlank>
                    <span>{this.props.counter.num}</span> 
                    <WhiteSpace />
                    <Button
                        type="primary"
                        onClick={this.props.asyncAdd}
                    
                    >
                        点击</Button>
                </WingBlank>


            </div>
        )
    }
}

export default Index
