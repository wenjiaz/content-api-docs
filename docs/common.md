
The following types are used below:

* *String*
* *String list* : a comma separated list of *String*
* *Integer*
* *Boolean*
* *Date* : a date using the `yyyy-mm-dd` pattern
* *Datetime* : a combined date and time in UTC according to [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601), eg. `2014-02-04T08:00:00Z`

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
`callback` | The javascript callback name to wrap the JSON response. Read [HTTP Status Codes and APIs: how the Guardian's Content API does it](http://www.theguardian.com/info/developer-blog/2012/jul/16/http-status-codes-jsonp) for more details | *String*


