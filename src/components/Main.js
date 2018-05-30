import PhotoWall from './Photowall'
import AddPhoto from './AddFile'
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'


class Main extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
          <Link to="/">PizzaFest</Link>
        </h1>
        <Route exact path="/" render={() => (
              <div>
                <PhotoWall {...this.props} />
              </div>
              )}/>

            <Route path="/AddPhoto" render={({history}) => (
              <AddPhoto {...this.props} />
            )}/>
     </div>
    )

  }
}

export default Main
