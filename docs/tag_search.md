Tag search
=======

## Endpoint URL
* `http://content.guardianapis.com/tags`

## Query term
* `q` - Request tags containing this free text

## Filters
* `section` - Return only content in those sections
* `reference` - Return only content with those references
* `reference-type` - Return only content with references of those types
* Page options
    * `page` - Returns results only for that page index  - *integer*
    * `page-size` - Modify the number of items displayed per page  - *integer*  - __Default: *10*__

## Additional information
*  `show-references` - Show associated reference data such as ISBNs - *comma-seperated list of strings*
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
        * witness-assignment

## Example
[http://content.guardianapis.com/tags?q=apple&section=technology&show-references=all](http://content.guardianapis.com/tags?q=apple&section=technology&show-references=all)
