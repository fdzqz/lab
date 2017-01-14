import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory, routes } from 'react-router'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'

import Index from './components/index/index.jsx'
import About from './components/about/about.jsx'
import Member from './components/member/member.jsx'
import MemberDet from './components/memberDet/memberDet.jsx'
import MasterTraining from './components/masterTraining/masterTraining.jsx'
import StudyTrends from './components/studyTrends/studyTrends.jsx'
import StudyTrendsDet from './components/studyTrendsDet/studyTrendsDet.jsx'
import StudyActivity from './components/studyActivity/studyActivity.jsx'
import StudyActivityDet from './components/studyActivityDet/studyActivityDet.jsx'
import OldMember from './components/oldMember/oldMember.jsx'
import OldMemberDet from './components/oldMemberDet/oldMemberDet.jsx'
import Product from './components/product/product.jsx'

class App extends React.Component{
	render() {
		return (
			<div>
			    <Header />
				{this.props.children}
			    <Footer />
			</div>
		)
	}
}

ReactDOM.render((
    <Router history={browserHistory} routes={routes}>
        <Route path='/' component={App}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
            <Route path='member' component={Member}>
	            <Route path='/member/memberDet' component={MemberDet} />
            </Route>
            <Route path='studyActivity' component={StudyActivity}>
	            <Route path='/studyActivity/studyActivityDet' component={StudyActivityDet} />
            </Route>
            <Route path='studyTrends' component={StudyTrends}>
	            <Route path='/studyTrends/studyTrendsDet' component={StudyTrendsDet} />
            </Route>
            <Route path='MasterTraining' component={MasterTraining} />
            <Route path='product' component={Product} />
            <Route path='oldMember' component={OldMember}>
	            <Route path='/oldMember/oldMemberDet' component={OldMemberDet} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'))