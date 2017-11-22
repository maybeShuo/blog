import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'

export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)        
    }

    render() {
        return (
            <h1>Banner</h1>
        )
    }
}