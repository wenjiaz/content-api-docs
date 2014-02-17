Tag search
=======

## Endpoint URL
* `http://content.guardianapis.com/tags`

## Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Request tags containing this free text | *String* | e.g. sausages

## Filters

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`section` | Return only tags in those sections | *String* | e.g. football
`reference` | Return only tags with those references | *String* | e.g. isbn/9780349108391
`reference-type` | Return only tags with references of those types | *String* | e.g. isbn

### Page options

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`page`| Returns results only for that page index  | *Integer* | e.g. 5
`page-size` | Modify the number of items displayed per page | *Integer*  | __Default: *10*__

## Additional information

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-references` | Show associated reference data such as ISBNs | Comma-seperated list of Strings | See list below |

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
* witness-assignment

## Example

[http://content.guardianapis.com/tags?q=apple&section=technology&show-references=all](http://content.guardianapis.com/tags?q=apple&section=technology&show-references=all)
