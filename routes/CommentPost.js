/*
	CommentPost.js
	Created by Saksham Saxena (saksham_saxena@outlook.com) on 6th November 2016
	If you're seeing a more updated version, then this must probably be live on the internet!
	* Look Ma! More than 1 viewers! *
*/

var express = require('express');
var CommentPost = express.Router();

/* Route specific Middlewares */
function AuthenticateVisitor(req, res, next) {
	next();
}

/* Routes goes here*/

/**
	Public route to fetch all comments of a certain blog post.

	GET /:postID

*/
CommentPost.get('/:postID/', function(req, res) {
	res.send('You are on viewing comments of Post ' + req.params.postID);
});

/**
	Private route to post a comment to a certain blog post.

	POST /:postID
*/
CommentPost.post('/:postID/', AuthenticateVisitor, function(req, res) {
	res.send('Comment published successfullt on post ' + req.params.postID);
});

module.exports = CommentPost;