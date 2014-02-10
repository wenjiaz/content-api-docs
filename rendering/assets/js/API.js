function ContentApi() {
    
    var contentURL = 'http://content.guardianapis.com/search';
    var itemURL = 'http://content.guardianapis.com';
    var tagURL = 'http://content.guardianapis.com/tags'; 
    var sectionURL = 'http://content.guardianapis.com/sections';


    this.url = function (type) {
        var u = itemURL;
        if (type === 'content') {u = contentURL;}
        else if (type === 'tag') {u = tagURL;}
        else if (type === 'section') {u = sectionURL;}
        return u;
    }

    this.query = function (formData, type) {
        return this.url(type)+ '?'+ $.param(formData);
    }

    this.search = function (formData, type, format) {

    var u = this.url(type)
    var that = this;

    var jqxhr = $.ajax({
        type: 'GET',
        url:u,
        crossDomain: true,
        dataType: 'jsonp',
        data: formData
        })
        .done(function(data) {
            $( "#result" ).empty().append( "<pre><code>" + that.prettyPrint(data, format) + "</code></pre>" );
            $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
        })
        .fail(function() {
            alert( "error" );
        });
    }

    this.prettyPrint = function (data, format) {
       switch(format) {
            case "xml":
                var xml = data.xml;
                return this.prettyPrintXML(xml);
                break;
            case "json":
                return JSON.stringify(data, null, 4);
                break;
            default:
                return null;
        }
    }


    this.prettyPrintXML = function (xml) {
        var formatted = '';
        var reg = new RegExp("(>)(<)(\/*)", "g");
        xml = xml.replace(reg, '$1\r\n$2$3');
        var pad = 0;
        $.each(xml.split('\r\n'), function(index, node) {
            var indent = 0;
            if (node.match( /.+<\/\w[^>]*>$/ )) {
                indent = 0;
            } else if (node.match( /^<\/\w/ )) {
                if (pad != 0) {
                    pad -= 1;
                }
            } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
                indent = 1;
            } else {
                indent = 0;
            }

            var padding = '';
            for (var i = 0; i < pad; i++) {
                padding += '  ';
            }

            formatted += padding + node + '\r\n';
            pad += indent;
        });

        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };

        return String(formatted).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
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
