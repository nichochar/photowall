import PhotoWall from "./Photowall";
import AddPhoto from "./AddFile";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  componentDidMount() {
    this.props.startLoadingPosts();
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">PizzaFest</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => <AddPhoto {...this.props} />}
        />
        <Route
          path="/single/:id"
          render={params => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
