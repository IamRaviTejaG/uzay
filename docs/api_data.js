define({ "api": [
  {
    "type": "get",
    "url": "blog/id/:id",
    "title": "Fetch a Blog Post by ID",
    "name": "GetBlogPostByID",
    "group": "Blog",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blog Post ID</p>"
          }
        ],
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "includeComments",
            "defaultValue": "false",
            "description": "<p>Option to specifiy whether to include comments in the payload or not.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/Blog.js",
    "groupTitle": "Blog"
  }
] });
