import React, {Component, PropTypes} from 'react'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import './reset.less'

import style from './style.less'
import { Detail } from './detail'
import { Home } from './home'
import Banner from "../components/banner/Banner"



class AppIndex extends Component {

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this)
        this.state = {
            count: 1
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Router>
                <div className={style.app}>
                    <Banner/>
                    <h2>{this.state.count}</h2>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail' component={Detail}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}


function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
    
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppIndex)