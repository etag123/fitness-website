const allPosts = [
    {
      title: "How To Count Calories?",
      link: "#",
      thumbnail: "track.jpg  ",
    },
  
    {
      title: "Get More Muscles With These Tricks",
      link: "#",
      thumbnail: "muscles.jpg",
    },
  
    {
      title: "What Is the Best Splits For Workout?",
      link: "#",
      thumbnail: "ppl.jpg",
    },
  
   
  ];
  
  const relatedPosts = document.querySelector(".related-posts");
  
  const generateReleatedPosts = () => {
    const shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, 3);
    shuffledList.forEach((post) => {
      const thumbnailLink = document.createElement("a");
      thumbnailLink.href = post.link;
  
      const thumbnail = document.createElement("img");
      thumbnail.src = post.thumbnail;
  
      thumbnailLink.appendChild(thumbnail);
  
      const title = document.createElement("a");
      title.classList.add("post-title");
      title.href = post.link;
      title.innerHTML = post.title;
  
      const relatedPost = document.createElement("div");
      relatedPost.classList.add("related-post");
  
      relatedPost.appendChild(thumbnailLink);
      relatedPost.appendChild(title);
  
      relatedPosts.appendChild(relatedPost);
    });
  };
  
  generateReleatedPosts();