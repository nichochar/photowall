import React, {Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
  render() {
    return <div>
        <Link className="addIcon" onClick={this.props.addPhoto} to="/AddPhoto"></Link>
        <div className="photoGrid">
               { this.props.posts.map((post, idx) =>
                 <Photo key={idx} post={post} onPhotoRemove={this.props.onPhotoRemove}/>
               )}
        </div>
    </div>
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onPhotoRemove: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired
}


export default PhotoWall
