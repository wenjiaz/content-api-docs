/Content search
=======

## Endpoint URL
* `http://content.guardianapis.com/search`

## Query term
* `q` - Return tag based on the query term specified

## Filters
* `section` - Return only content in those sections
* `reference` - Return only content with those references
* `reference-type` - Return only content with references of those types
* `tag` - Return only content with those tags
* `ids` - Return only content with those IDs
* Date options
    * `from-date` - Return only content published on or after that date - *yyyy-mm-dd*
    * `to-date` - Return only content published on or before that date - *yyyy-mm-dd*
    * `date-id` - Return only content published within specified date range - *string*
    * Examples:
        * Relative date, e.g. `today`, `yesterday`
        * Past duration, e.g.`last24hours`, `last7days`, `last30days`
        * Year, e.g. `2012`, `2013`
* Page options
    * `page` - Returns results only for that page index  - *integer*
    * `page-size` - Modify the number of items displayed per page  - *integer*  - __Default: *10*__
* `show-redistributable-only` - Hide content 

## Ordering
* `order-by` - Returns results in the specified order - *string*
    * Accepted values:
        * `newest` - __Default__
        * `oldest`
        * `relevance`
* `use-date` - Changes which type of date is used to order the results - *string*
    * Accepted values:
        * `published` - The date the content appeared on the web - __Default__
        * `newspaper-edition` - The date the content appeared in print
        * `last-modified` - The date the content was last updated

## Additional information
* `show-fields` - Add fields associated with the content - *comma-seperated list of strings*
    * Default fields included in all responses
        * `id` - Path to content - *string*
        * `sectionId` - Id of the section -  *string*
        * `sectionName` - Name of the section -  *string*
        * `webPublicationDate` -  combined date and time in UTC according to [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601)
            * Example:`2014-02-04T08:00:00Z`
        * `webTitle` - Title -  *string*
        * `webUrl` - Url of the html content - *string*
        * `apiUrl` - Url of the raw content - *string*
    * Accepted values:
        * `trailText` -  *string (HTML)*
        * `headline` - *string (HTML)*
        * `showInRelatedContent` - Whether this content can appear in automatically generated Related Content - *string (boolean)*
        * `body` - *string (HTML)*
        * `lastModified` - *date*
        * `hasStoryPackage` - Has related content selected by editors - *string (boolean)*
        * `score` - A relevance score based on the search query used - *string (float)*
        * `standfirst` - *string (HTML)*
        * `shortUrl` - *string*
        * `thumbnail` - *string*
        * `wordcount` - *string (integer)*
        * `commentable` - *string (boolean)*
        * `isPremoderated` - Comments will be checked by a moderator prior to publication if `true` - *string (boolean)*
        * `allowUgc` - May have associated User Generated Content. This typically means the content has an associated [Guardian Witness](http://witness.theguardian.com/) assignment which can be accessed by querying `show-references=witness-assignment` *string (boolean)*
        * `byline` - *string (HTML)*
        * `publication` - *string*
        * `internalPageCode` - *string*
        * `productionOffice` - *string*
        * `shouldHideAdverts` - Adverts will not be displayed if `true` - *string (boolean)*
        * `liveBloggingNow` - Content is currently live blogged if `true` - *string (boolean)*
        * `commentCloseDate` - The date the comments have been closed - *date*
        * `starRating` - *string (integer)*
        * `all`

*  `show-factboxes` - Add associated facts grouped in factboxes - *comma-seperated list of strings*
    * Accepted values:
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
*  `show-tags` - Add associated metadata tags - *comma-seperated list of strings*
    * Accepted values:
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
*  `show-elements` - Add associated media elements such as images and audio - *comma-seperated list of strings*
    * Accepted values:
        * `audio`
        * `image`
        * `video`
        * `all`
*  `show-references` - Add associated reference data such as ISBNs - *comma-seperated list of strings*
    * Accepted values:
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
*  `show-snippets` - Add snippets for each specified field. A snippet is the text from the field that immediately surrounds one of the search term   - *comma-separated list of strings*
    * Accepted values are all the fields name (See `show-fields` accepted values)
    * `snippet-pre` - Prefix the matched search term in the snippet response with specified value - *string*
    * `snippet-post` - Postfix the matched search term in the snippet response with specified value - *string*
*   `show-refinements` - Add refinement for each specified field. A refinement summarise what tags have applied to all the content in the result, listing the tags and how many pieces of content they have been applied to - *comma-seperated list of strings*
    * `refinement-size` - Limit the number of refinements to the one specifed - *integer* - __Default: *10*__




          
 






































