import React, {Component} from 'react'

class Comments extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    // Don't relead the page when you press the button
    event.preventDefault()
    const comment = event.target.elements.comment.value
    event.target.elements.comment.value = ''
    this.props.startAddingComment(comment, this.props.postId)
  }

  render() {
    return (
    <div className="comment">
      {
        this.props.comments.map((comment, index) => {
          return (
          <p key={index}>{comment}</p>
          )
        })
      }
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input type="text" name="comment" placeholder="comment" />
        <input type="submit" hidden/>
      </form>
    </div>
    )
  }
}

export default Comments
