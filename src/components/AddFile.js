import React, {Component} from 'react'

class AddPhoto extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Don't reload the page when you press the button
    event.preventDefault()
    const imgLink = event.target.elements.link.value
    const description = event.target.elements.description.value
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imgLink
    }
    if (imgLink && description) {
      this.props.addPost(post)
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="link" placeholder="Image link"/>
            <input type="text" name="description" placeholder="Image description"/>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto
