const posts = [
  {
    title: "Post One", body: "This is post one"
  },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() { 
  
  setTimeout(() => {
  
    let output = ""; 
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
}, 2000);
}
createPost({
  title: "Post Three", body: "This is post three"
}, getPosts);