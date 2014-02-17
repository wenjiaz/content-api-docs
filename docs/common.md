###  Authentication parameters

Name  | Description | Type | Accepted values
----- | ----- | ----------- | ---------------
`api-key` | The API key used for the query | *String*

### Format parameters

Name  | Description | Type | Accepted values
----- | ----- | ----------- | ---------------
`format` |  The format to return the results in | *String* | json \| xml  


### Cross origin requests parameters

Name  | Description | Type | Accepted values
----- | ----- | ----------- | ---------------
`callback` | The javascript callback name to wrap the JSON response. Read [HTTP Status Codes and APIs: how the Guardian's Content API does it](http://www.theguardian.com/info/developer-blog/2012/jul/16/http-status-codes-jsonp) for more details | *String* | e.g. foo

### Boolean operators
Tag IDs can be can be combined with boolean operators `,` = AND `|` = OR `-` = NOT. Expressions are grouped using `()` For example: `tag1,tag2,-tag4` will return content with `tag1` and `tag2` but not `tag3`
`(tag1,tag2)|(tag3,tag4)` will return content with either `tag1` and `tag2` or `tag3` and `tag4`.
