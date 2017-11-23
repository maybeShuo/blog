import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Menu } from 'antd'

import style from './style.less'

export default class Menus extends Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)  
        
        this.state = {
            current: 'react'
        }
    }

    handleClick = (e) => {
        console.log('click', e)
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode='horizontal'
                className={style.MenuContainer}
            >
                <Menu.Item key='react'>
                    Reactjs
                </Menu.Item>
                <Menu.Item key='html'>
                    Html
                </Menu.Item>
                <Menu.Item key='js'>
                    Javascript
                </Menu.Item>
            </Menu>
        )
    }

}