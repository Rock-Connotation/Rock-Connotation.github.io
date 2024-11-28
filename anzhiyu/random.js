var posts=["2024/11/27/How-to-build-up-a-blog-site-using-Hexo-and-GitHub-Pages/","2024/11/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };