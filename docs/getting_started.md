# Getting started guide

The Open Platform is the suite of services that enable developers to build applications with the Guardian. The [Content API](http://explorer.content.guardianapis.com/) is the flagship service within the Open Platform. It's a tool for selecting and collecting Guardian content through a database of articles and multimedia published daily. There are over 1M articles available published as far back as 1999.

This overview will give you insight into what data is available, how to find what you need, and what you will see when you request content from us.

You may wish to obtain an access key now in order to follow along. You can get some data without registering, but if you want deeper access you'll need to tell us about yourself and agree to the [terms and conditions](http://www.theguardian.com/open-platform/terms-and-conditions).

## Quick Start

The easiest way to see what's available is to search using the [API Explorer](http://explorer.content.guardianapis.com). You can build complex queries quickly and browse the results directly in the browser. It should be self-explanatory for someone who has used APIs in the past.

You may also want to try a fun little trick. Pull up an article on the Guardian web site in your web browser and replace the theguardian.com domain in your address bar with the API domain content.guardianapis.com. Go ahead, try it.

We have additional detail in the form of sample applications and client libraries if you already know how to use the Content API. You can also walk through the reference guides for each method: Content Search, Item, Tag Search, Section Search.

## Structure

The Content API was designed to provide simple methods for asking hard questions. There are four RESTful endpoints that will help you discover and locate exactly what you want:

* [Content Search](/#/content)
* [Tag Search]()
* [Section Search]()
* [Item]()

## Endpoint 1: [Content Search]()

Most people begin with a broad idea of what they want before forming precise queries. First, try a simple search for 'debate'. Look at the results, and then try to use the API to find out more about the impact of the debates in the recent UK general election.

[http://content.guardianapis.com/search?q=debate&amp;format=json]( http://content.guardianapis.com/search?q=debate&amp;format=json)

The search term is in the ``q`` parameter, and the response format is in the ``format`` parameter. The Content Search endpoint requires both of these parameters in order to return results to you. We return both JSON and XML formats.

In this case, there are well over 77,000 results, so we need to filter down the response to something more meaningful.

The next query includes several parameters. We're trying to answer the question, *"What news content does the Guardian have that includes the word 'debate' in it which has been published so far in 2010?"*

You can also define the details you want in the response, too...such as, _"Only give me articles tagged by a Guardian editor as 'politics'. I need the headline, thumbnail image, contributor name and article link. Show what else can be done to refine the query more."_

[http://content.guardianapis.com/search?q=debate&amp;format=json&amp;tag=tone/news,politics/politics&amp;from-date=2010-01-01&amp;show-tags=contributor&amp;show-fields=headline,thumbnail,short-url&amp;show-refinements=all](http://content.guardianapis.com/search?q=debate&amp;format=json&amp;tag=tone/news,politics/politics&amp;from-date=2010-01-01&amp;show-tags=contributor&amp;show-fields=headline,thumbnail,short-url&amp;show-refinements=all)

Now we have fewer results and a much more sensible corpus to play with. The parameter names should be self-explanatory. Here's a cheatsheet using the query above:

* ``from-date`` and ``to-date`` - You can ask for articles published in this year, for example. The request format required is *YYYY-MM-DD*.
* ``tag`` - Maybe you don't want all the debate coverage published by the Guardian in this instance. Ask for articles with that a Guardian editor has tagged as 'Politics'. It might be sensible in this case to narrow it down even further and ask for articles tagged with the 'General election 2010' tag. Multiple tags can be used by separating them with commas.
* ``page-size`` - By default, the API returns 10 results, but you can ask for up to 50 at a time. We recommend taking 10 items at a time to optimise performance. Then use the pagination options to collect all the content you need.
* ``show-fields`` - This is the parameter that tells the API what information you want from the articles. By default the API has been optimised to return the least amount of data necessary to understand what's available.
*Notes:* When you require certain fields you can specify them as you do with the tags. For example, if you just want the headline, stand-first and thumbnail image, request them as follows: ``show-fields=headline,standfirst,thumbnail``. Of course, you can use ``show-fields=all`` if you want everything available. But we prefer that you only take what you need in order to reduce server load.
* ``show-tags`` - This tells the API to return the tags associated with each article. You can either specify ``all`` or you can request only tags of a specific type, for example ``keyword`` or ``series``. See the [tag search reference documentation]() to find out what types of tags we have.
* ``show-refinements`` - Refinements provide options for filtering your results further. You can see them at the bottom of the response. Each refinement tells you how many content items within your search would be returned if you also filtered by that tag or section. In this example, you can see that there are 21 articles written by Andrew Sparrow that match your search criteria.

**Additional parameters:**

* ``page`` - Rather than request a large number of items per page, you can jump to any page in the results using the 'page' parameter. The number of pages for each search query are included at the top of each results page.
* ``section`` - This parameter lets you ask for articles that are only in specific sections based on the information architecture of the Guardian web site. For example, you could ask for articles about 'debates' that were published in the Environment section.

##Endpoint 2: [Tag Search]()

One of the more powerful aspects of the Content API is the manual categorisation that goes into releasing everything we publish. Our editors have a sophisticated approach to structuring information through the use of a range of tags and tag types, a database of nearly 20,000 terms.

This endpoint is very handy for things like auto-complete search boxes. A human-edited collection of search terms can be very useful in optimising search results for a web site or app.

The principles and structure of all the endpoints are similar, as you'll see with a simple search for tags that include the word 'green':

[http://content.guardianapis.com/tags?q=green&amp;format=json&amp;page-size=50](http://content.guardianapis.com/tags?q=green&amp;format=json&amp;page-size=50)

This request shows that there are several tags containing the word 'green'. The tags each serve different and unique purposes:

* ``keyword`` - a word describing what this piece of content is about.
* ``series`` - the name of a regularly produced content feature, such as podcasts or columns. For example, "Band of the week" and "Ask Jack" are both series.
* ``contributor`` - the author or authors of a content item.
* ``tone`` - the intent of the content. We have many tone tags including News, Letters, Reviews, Features, Analysis, Blogs, etc.
* ``type`` - the media type. responses might include Article, Poll, Video, Podcast, Interactive, etc.
* ``blog`` - the name of one of the Guardian's many blogs. Using the search for 'green' tags in the example here, you'll see that we have a 'Green living' blog.

## Endpoint 3: [Section Search]()

The Guardian network is organised by sections that more or less correspond to the way we organise the newspaper and the web site. Each piece of content can have one and only one section. Each tag can have only one section.

You can use the section search to find out what sections we use and the most recent content from that section.



## Endpoint 4: [Item]()

The item endpoint returns all the detail we can offer for a single piece of content.

Similar to the search endpoints, minimal results are returned by default but more data can be exposed by passing values in your request. We prefer you to request only the data that you require. You can reuse relevant parameters from the search endpoint.

We've aligned the URL structure of the web site with the URL structure of the Item endpoint. Replace the domain www.theguardian.com with content.guardianapis.com. For example, [http://www.theguardian.com/politics/2010/may/10/general-election-2010-live-blog](http://www.theguardian.com/politics/2010/may/10/general-election-2010-live-blog) is the same as [http://content.guardianapis.com/politics/2010/may/10/general-election-2010-live-blog](http://content.guardianapis.com/politics/2010/may/10/general-election-2010-live-blog).

The response will include the headline, byline, thumbnail image URL, short URL to the article and several other details.

## More detail

There are some other useful aspects of the API that are worth considering. The 'results' node in each response includes some key details that will help you build better functionality in your apps.

* ``status`` – Refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results.
* ``total`` – This number will tell you how many results are available for your search overall.
* ``pageSize`` – The number of items returned in this call
* ``pages`` – The total amount of pages that are in this call.
* ``currentPage`` – The number of the page you are browsing.
* ``orderBy`` – Order your results to make them more useful. You can specify ``newest``, ``oldest``, ``relevance``

Below is an example return for a single item in JSON format:

``
{
    "response": {
        "content": {
            "apiUrl": "http://internal.content.guardianapis.com/commentisfree/2010/mar/30/kaczynskis-poland-cameron-eu",
            "id": "commentisfree/2010/mar/30/kaczynskis-poland-cameron-eu",
            "sectionId": "commentisfree",
            "sectionName": "Comment is free",
            "webPublicationDate": "2010-03-30T14:30:01Z",
            "webTitle": "The marginalisation of Cameron's allies | Jaroslaw Adamowski",
            "webUrl": "http://www.theguardian.com/commentisfree/2010/mar/30/kaczynskis-poland-cameron-eu"
        },
        "status": "ok",
        "storyPackage": [],
        "total": 1,
    }
}
``

As you can see we have tried to make the results human readable. Here are some useful notes about each field:

The majority of the content for a single item will be included in the ``fields`` node. We structured the returns this way to give us room to grow. We will add more data and data types to the API over time, and this will prevent us from breaking your apps when we do so.
The ``shortUrl`` is available for every item. It gives you a 'gu.com' URL to use when character counts matter in the context of your app, for example.
``standfirst`` and ``trailtext`` fields both offer short summaries or introductions to an item that we use across the Guardian website. An item may contain both or just one or the other or neither. Typically, though not always, the standfirst resides below the headline on an article page, while the trailtext is often used as promotional copy on index pages to encourage users to click through to the full article.
``publication`` refers to one of many platforms through which Guardian content is first released. For example, most recipes on the website are first published under the publication 'The Observer'. The popular Observer supplement 'Food' is where these articles originate.
Although not present on every item we try to include a ``thumbnail`` when we can. It should be 140px by 84px and in jpg format.

## Further Reading / References

Follow the blog and [@openplatform](https://twitter.com/openplatform) on Twitter to stay current with the latest updates and enhancements. We also publish How-to's, sample apps and guest blog posts from other developers who are using the Open Platform.

Here are some of the ways you can get more out of working with the Open Platform:

1. [API Explorer](http://explorer.content.guardianapis.com/)
2. [FAQ](http://www.theguardian.com/open-platform/faq)
3. Reference Guides: [Content Search](), [Item](), [Tag Search](), [Section Search]()
4. [Open Platform Google Group](http://groups.google.com/group/guardian-api-talk/)
5. [Sample Apps](http://www.theguardian.com/open-platform/apps)

## General Usage Notes

Before using the Guardian's Content API, read the [terms and conditions](http://www.theguardian.com/open-platform/terms-and-conditions). You'll find details on attribution requirements, access and republishing rights, and restrictions for the Content API.

By accessing and continuing to use the API, you are deemed to have accepted the terms and conditions.

If we update the API we will post details on the blog and via the [Google Group](http://groups.google.com/group/guardian-api-talk/).

Lastly, we would love to see anything you create, so please post your applications (or questions) to our [Google Group](http://groups.google.com/group/guardian-api-talk/) for the Guardian's APIs.
