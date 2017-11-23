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
import Menus from "../components/menu/Menus"


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
                    <Switch>
                        <Route path='/admin' component={Admin}/>
                        <Route component={Front}/>
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

const Front = ({ match }) => {
    console.info(match)
    return (
        <div>
            <Banner/>
            <Menus/>
            <Switch>
                <Route exact path={match.url} component={Home}/>
                <Route path={`/detail/:id`} component={Detail}/>
                <Route path={`/:tag`} component={Home}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    )
}

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

const Admin = ({ match }) => {
    return(
        <div>
            <Switch>
                <Route exact path={match.url} component={Home}/>
                <Route path={`${match.url}/detail`} component={Detail}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    )
}