#!/usr/bin/env node

var feedread = require('feed-read');
var today = new Date().toISOString().slice(0,10)
var feed = "http://cm.lskitchen.se/johanneberg/karrestaurangen/sv/"+today+".rss";

(function(){
	feedread(feed, function(err, articles){
		var prev = "first"; 
		for(var i = 0; i < articles.length; i++){
			if(articles[i].title !== prev || prev === "first"){
				console.log("=== " + articles[i].title + " ===");
				console.log(articles[i].content.slice(0,articles[i].content.indexOf("@")))
			}
			//Skips duplicates, i.e. english translations
			prev = articles[i].title;
		}
	});
})();