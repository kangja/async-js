const posts = [
  {
    title: "Post One", body: "This is post one"
  },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() { //we're mimicking how it is to fetch from a server and that could take a couple seconds. 
  
  setTimeout(() => { //takes in a callback function and then it takes in a certain amount of time where you want to delay whatever you put in here. I'm going to delay it by a second. We want 1000 because it's 1000 miliseconds. 

  // The purpose is to get the posts and put them on the page.
  
    let output = ""; 

    //we could use a for loop to loop through the posts, but I will use the high order, for each method. It takes in a callback.

    //as far as the parameter goes, we could say post and it could be anything. We could also pass in a index if we want. For each post, we want to add it to the output variables. 
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)  
}

// getPosts();//need to call the function for it to work. After a second, because it's in a set timeout, it will load the 2 posts. We get the posts from the array and then we're looping through and we are putting them into the output variable and then outputting that on to the page. 


//we want to get the post and create a new one.
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
// }, 2000); //this one takes 2 seconds/2000ms.
// }

// createPost({
//   title: "Post Three", body: "This is post three"
// }); //When we run this, we don't see "Post Three". The reason is createPost took longer than the getPost. getPost happened in 1 second; our server returned it in 1 second. The createPost function took 2 seconds. By the time we ran createPost, the DOM was already painted. So we can't do anything beyond that point. This is where asynchronous programming comes in and this is where callbacks come in which is one way to handle it. Lets make this work by using a callback. 


// for createPost function, we put in the second parameter. We will call it callback and in fact, you could call this anything. And we want that function to be called right after that post is pushed on. And then all we have to do is we have to make getPost this callback so that it runs right after this is pushed, NOT wating 2 seconds for the entire function so we can completely get rid of getPost() and add in the next second parameter of getPosts with no parenthesis. 
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
}, 2000);
}


createPost({
  title: "Post Three", body: "This is post three"
}, getPosts); 
