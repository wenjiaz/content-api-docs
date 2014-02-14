Content search
=======

## Endpoint URL
* `http://content.guardianapis.com/search`

## Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Request content containing this free text

## Filters

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`section` | Return only content in those sections
`reference` | Return only content with those references
`reference-type` | Return only content with references of those types
`tag` | Return only content with those tags
`ids` | Return only content with those IDs

### Date options

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`from-date` | Return only content published on or after that date | *Date*
`to-date` | Return only content published on or before that date | *Date*
`date-id` | Return only content published within specified date range | *String* | See list below

* Relative date, e.g. `today`, `yesterday`
* Past duration, e.g.`last24hours`, `last7days`, `last30days`
* Year, e.g. `2012`, `2013`

### Page options

Name  | Description | Type | Accepted values
----- | ----------- | -----| ---------------
`page` | Return only the result set from a particular page | *Integer*
`page-size` | Modify the number of items displayed per page | *Integer* | 1 to 50
`show-redistributable-only` | Hide content | Boolean | true\|false

## Ordering


Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
 `order-by` | Returns results in the specified order | *String* | See list below

* `newest` - __Default__
* `oldest`
* `relevance`  

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`use-date` | Changes which type of date is used to order the results | *String* | See list below

* `published` - The date the content appeared on the web - __Default__
* `newspaper-edition` - The date the content appeared in print
* `last-modified` - The date the content was last updated

## Additional information

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-fields` | Add fields associated with the content | *String list* | See table below

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`trailText` |  | *String (HTML)*
`headline` |  |  *String (HTML)*
`showInRelatedContent` | Whether this content can appear in automatically generated Related Content | *String (boolean)*
`body` |  |  *String (HTML)*
`lastModified`  |  |  *Datetime*
`hasStoryPackage` | Has related content selected by editors | *String (boolean)*
`score` | A relevance score based on the search query used | *String (float)*
`standfirst` |  | *String (HTML)*
`shortUrl`  |  | *String*
`thumbnail` |  | *String*
`wordcount`  |  |  *String (Integer)*
`commentable`  |  | *String (Boolean)*
`isPremoderated` | Comments will be checked by a moderator prior to publication if `true` | *String (Boolean)*
`allowUgc` | May have associated User Generated Content. This typically means the content has an associated [Guardian Witness](http://witness.theguardian.com/) assignment which can be accessed by querying `show-references=witness-assignment` | *String (Boolean)*
`byline` |  | *String (HTML)*
`publication` |  | *String*
`internalPageCode` |  | *String*
`productionOffice` |  | *String*
`shouldHideAdverts` | Adverts will not be displayed if `true` | *String (Boolean)*
`liveBloggingNow` | Content is currently live blogged if `true` | *String (Boolean)*
`commentCloseDate` | The date the comments have been closed | Datetime
`starRating` |  | *String (Integer)*
`all` | Includes all the fields | 

The following fields are also included in all responses:

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`id` | The path to content | *String*
`sectionId` | The id of the section |  *String*
`sectionName` | The name of the section |  *String*
`webPublicationDate` |  The combined date and time of publication | *Datetime*
`webUrl` | Url of the html content | *String*
`apiUrl` | Url of the raw content | *String*


Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-factboxes` | Add associated facts grouped in factboxes | *String list* | See list below

* `book` 
* `country`
* `film`
* `game`
* `generic`
* `photography-tip`
* `recorded-music`
* `show`
* `travel`
* `all`

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-tags` | Add associated metadata tags | *String list* | See list below

* `blog`
* `contributor`
* `keyword`
* `newspaper-book`
* `newspaper-book-section`
* `publication`
* `series`
* `tone`
* `type`
* `all`

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
*  `show-elements` | Add associated media elements such as images and audio | *String list* | See list below

* `audio`
* `image`
* `video`
* `all`

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-references` | Add associated reference data such as ISBNs | *String list* | See list below

* author
* bisac-prefix
* esa-cricket-match
* esa-football-match
* esa-football-team
* esa-football-tournament
* isbn
* musicbrainz
* musicbrainzgenre
* opta-cricket-match
* opta-football-match
* opta-football-team
* opta-football-tournament
* pa-football-competition
* pa-football-match
* pa-football-team
* r1-film
* reuters-index-ric
* reuters-stock-ric
* witness-assignment - See `allowUgc`

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-snippets` | Add snippets for each specified field. A snippet is the text from the field that immediately surrounds one of the search term | *String list* | all the fields name (See `show-fields` accepted values)
`snippet-pre` | Prefix the matched search term in the snippet response with specified value | *String*
`snippet-post` | Postfix the matched search term in the snippet response with specified value | *String*
`show-refinements` | Specify which refinements to return for the search result set. Refinements will help filter the query into more specific and useful results | *String list*
`refinement-size` | Limit the number of refinements to the number specifed | *Integer* | __Default: *10*__

## Example query
[http://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance](http://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance)




          
 






































