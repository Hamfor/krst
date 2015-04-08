var gfeed = require('google-feed-api');
var feed = new gfeed.Feed('http://cm.lskitchen.se/johanneberg/karrestaurangen/sv/2015-04-08.rss');
feed.listItems(function(items){
    console.log(items);
});