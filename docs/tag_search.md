Tag search
=======

## Endpoint URL
* `http://content.guardianapis.com/tags`

## Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Request tags containing this free text | *String* |

## Filters

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`section` | Return only content in those sections | *String*
`reference` | Return only content with those references | *String*
`reference-type` | Return only content with references of those types | *String*

### Page options

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`page`| Returns results only for that page index  | *Integer*
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
