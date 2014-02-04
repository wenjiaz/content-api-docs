/search
=======

## Refinements
* `section` - Return content in those sections
* `reference` - Return content with those references
* `reference-type` - Return content with references of those types
* `tag` - Return content with those tags
* `ids` - Returning content with those IDs
### Date options
 * `from-date` - Content published on or after that date, format: *yyyy-mm-dd*
 * `to-date` - Content published on or before that date, format: *yyyy-mm-dd*
 * `date-id` - Returns results within specified date range, format: *string*
#### Examples:
  * Relative date, e.g. `today`, `yesterday`
  * Past duration, e.g.`last24hours`, *last7days*, *last30days*
  * Year, e.g. *2012*, *2012*
### Page options
  * `page` - Returns results only for that page index, format: *integer*
  *  `page-size` - Returns the number of items displayed per page, format: *integer*, __Default: *10*__
## Ordering
 * `order-by - Returns results in the specified order, format: *string*
#### Accepted Values
   * `newest` - __Default__
   * `oldest`
   * `relevance`
* `use-date` - Changes which type of date is used to order the results, format *string*
#### Accepted Values
   * `published` - The date the content appeared on the web - __Default__
   * `newspaper-edition` - The date the content appeared in print
   * `last-modified` - The date the content was last updated
## Additional information
* `show-fields` format: *comma-seperated list of strings*
#### Default fields included in all responses
   * `id` - Path to content, format *string* - __Default__
   * `sectionId` - format *string* - __Default__
   * `sectionName` - format *string* - __Default__
   * `webPublicationDate` - format, combined date and time in UTC according to [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) - __Default__
   * `webTitle` - format *string* - __Default__
   * `webUrl` - format *string* - __Default__
   * `apiUrl` - format *string*
#### Example:
`2014-02-04T08:00:00Z`
#### Optional fields
   * trailText - format *string (HTML)*
   * headline - format *string (HTML)*
   * showInRelatedContent - *string (boolean)*
   * body - format *string (HTML)* - __Required user tier: internal__
   * lastModified - format *date*
   * hasStoryPackage - format *string (boolean)*
   * score - format *string (float)*
   * standfirst - format *string (HTML)*
   * shortUrl - format *string*
   * thumbnail - format *string*
   * wordcount - format *string (integer)*
   * commentable - format *string (boolean)*
   * isPremoderated - Comments will be checked by a moderator prior to publication - format *string (boolean)*
   * allowUgc - format *string (boolean)*
   * byline - format *string (HTML)*
   * publication - format *string*








































