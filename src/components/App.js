import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state) {
  return {
    posts: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

// Connect doesn't modify the component thats passed into it
// instead it's returning a new "connected component" App
const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
)

export default App
