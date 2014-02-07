function ContentApi() {
    this.search = function (formData) {
    var jqxhr = $.ajax({
        type: 'GET',
        url:'http://content.guardianapis.com/search',
        crossDomain: true,
        dataType: 'jsonp',
        data: formData
        })
        .done(function(data) {
            $( "#result" ).empty().append( "<pre><code>" + JSON.stringify(data, null, 4) + "</code></pre>" );
            $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
        })
        .fail(function() {
            alert( "error" );
        });
    }
}

function MarkdownApi() {

    this.read = function(file, onSuccess)  {
        var rawFile = new XMLHttpRequest();
        var rawText;
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    rawText = rawFile.responseText;
                    onSuccess(rawText);
                    }
            }
        }
        rawFile.send(null);
    }

    this.convert = function(file, onSuccess) {
        this.read(file, function(data){onSuccess(markdown.toHTML(data))});
    }
}
