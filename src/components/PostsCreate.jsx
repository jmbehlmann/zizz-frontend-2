import axios from 'axios'

export function PostsCreate({ onPostCreate }) {

  const postCreate = (event) => {
    event.preventDefault();
    // console.log("postCreate")
    const params = new FormData(event.target)
    axios
      .post(`http://localhost:3000/posts.json`, params)
      .then((response) => {
        // console.log(response.data)
        onPostCreate(response.data);
      })
      .catch((error) => {
        console.error('error creating post:', error);
      })
    event.target.reset();
  }

  return (
    <div>
      <p>PostsCreate</p>
      <form onSubmit={postCreate}>
        <p><input name="text" type="text" placeholder="Buzzzzzzz" /> </p>
        <button>Create new post</button>
      </form>
    </div>
  )
}
