var gfeed = require('google-feed-api');
var today = new Date().toISOString().slice(0,10)
var feed = new gfeed.Feed('http://cm.lskitchen.se/johanneberg/karrestaurangen/sv/'+today+'.rss');


feed.listItems(function(items){
    console.log("=== Classic Kött ===");
    console.log(items[0].contentSnippet);

    console.log("=== Classic Fisk ===");
    console.log(items[2].contentSnippet);

    console.log("=== Soppa ===");
    console.log(items[3].contentSnippet);
});