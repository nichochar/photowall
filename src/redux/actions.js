import {database} from '../database/config'

// Initialize from DB, call this on componentDidMount in the Main component
export function startLoadingPosts() {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = []
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val())
      })
      dispatch(loadPosts(posts))
    }).catch((error) => {
      console.log(`Error loading posts: ${error}`)
    })
  }
}

export function startLoadingComments() {
  return (dispatch) => {
    return database.ref('comments').once('value').then((snapshot) => {
      let comments = {}
      snapshot.forEach((childSnapshot) => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val())
        dispatch(loadComments(comments))
      })
    }).catch((error) => {
      console.log(`Error loading comments: ${error}`)
    })
  }
}

export function startAddingPost(post) {
  return (dispatch) => {
    // `update` takes a key value pair
    return database.ref('posts').update({[post.id]: post}).then(() => {
      dispatch(addPost(post))
    }).catch((error) => {
      console.log(`Error saving a post to firebase: ${error}`)
    })
  }
}

export function startAddingComment(comment, postId) {
  return (dispatch) => {
    // .push() will create it as a child with a unique key
    return database.ref('comments/'+postId).push(comment).then(() => {
      dispatch(addComment(comment, postId))
    }).catch((error) => {
      console.log(`Error adding a comment to firebase: ${error}`)
    })
  }
}

export function startRemovingPost(index, id) {
  const updates = {
   [`posts/${id}`]: null,
   [`comments/${id}`]: null
  }
  return (dispatch) => {
    return database.ref().update(updates).then( () => {
      dispatch(removePost(index))
    }).catch((error) => {
      console.log(`Error deleting a post from firebase: ${error}`)
    })
  }
}

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

// add
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post: post
  }
}

// add comment
export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment: comment,
    postId: postId

  }
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts: posts
  }
}

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments: comments
  }
}
