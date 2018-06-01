import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <Link
          className="addIcon"
          onClick={this.props.addPhoto}
          to="/AddPhoto"
        />
        <div className="photoGrid">
          {this.props.posts
            .sort((a, b) => b.id - a.id)
            .map((post, index) => (
              <Photo key={post.id} index={index} post={post} {...this.props} />
            ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;
