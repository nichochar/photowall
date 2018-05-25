import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Photo extends Component {
  render() {
    const post = this.props.post
    const removePhoto = this.props.onPhotoRemove

    return  <figure className="figure">
              <img className="photo" src={post.imageLink} alt={post.description}/>
              <figcaption>
                <p className="comment">{post.description}</p>
              </figcaption>
              <div className="button-container">
                <button onClick={ () => {
                  removePhoto(post)
                  }
                }>
                  Remove
                </button>
              </div>
            </figure>
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onPhotoRemove: PropTypes.func.isRequired
}


export default Photo
