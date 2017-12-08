$.getJSON('https://www.reddit.com/r/WhiteRights.json', function(redditJSON){
  for (i=1; i<redditJSON.data.children.length; i++){
    var postTitle = redditJSON.data.children[i].data.title;
    var imgData = redditJSON.data.children[i].data.thumbnail;
    var url = redditJSON.data.children[i].data.permalink;
    $(".white").append("<div><a href='https://www.reddit.com" + url + "' >" + postTitle + "</a></div>");
  }
});

$.getJSON('https://www.reddit.com/r/BlackLivesMatter.json', function(redditJSON){
  for (i=1; i<redditJSON.data.children.length; i++){
    var postTitle = redditJSON.data.children[i].data.title;
    var imgData = redditJSON.data.children[i].data.thumbnail;
    var url = redditJSON.data.children[i].data.permalink;
    $(".blm").append("<div><a href='https://www.reddit.com" + url + "' >" + postTitle + "</a></div>");
  }
});


