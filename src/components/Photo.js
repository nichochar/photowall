import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Photo extends Component {
  render() {
    const post = this.props.post

    return  <figure className="figure">
              <img className="photo" src={post.imageLink} alt={post.description}/>
              <figcaption>
                <p className="comment">{post.description}</p>
              </figcaption>
              <div className="button-container">
                <button onClick={() => {
                  console.log(`Button was clicked and index to be removed is ${this.props.index}`)
                  this.props.removePost(this.props.index)
                  }
                }> Remove
                </button>
              </div>
            </figure>
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
}


export default Photo
