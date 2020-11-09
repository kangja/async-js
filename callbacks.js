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

getPosts();//need to call the function for it to work. After a second, because it's in a set timeout, it will load the 2 posts. We get the posts from the array and then we're looping through and we are putting them into the output variable and then outputting that on to the page. 
