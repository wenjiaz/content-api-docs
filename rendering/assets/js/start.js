$(document).ready(function() {

  var markdownApi = new MarkdownApi();

  function renderDoc(name, f) {
    markdownApi.convert('docs/' + name +'.md', f); 
  }

  function convertDone(html) {
      var includecommon = $('#doccontent').attr('data-include-common');
      if (includecommon === 'true') {
        markdownApi.convert('docs/common.md', function(commonHtml) {
          updateContent(html, commonHtml);            
        }); 
      } else {
        updateContent(html);
      }
  }

  function updateContent(html, common) {
      $('#doccontent').empty().append(html);
      if (common !== undefined) {$('#doccontent h2').eq(2).after(common);}

      /* handle special item endpoint */
      var name = $('#doccontent').attr('data-name');
      if (name === 'item') {
        //$('h1').empty().append("Item search");
        //$('li > code:contains("http")').empty().append("http://content.guardianapis.com/");
      }

      /* enhance apparence */
      $('table').addClass('ui basic table');
      $( "tr th:nth-child(1)" ).addClass('three wide');
      $( "tr th:nth-child(2)" ).addClass('seven wide');
      $( "tr th:nth-child(3)" ).addClass('two wide');
      $( "tr th:nth-child(4)" ).addClass('four wide');


      renderDoc('types', function(html){
        $('tr th:contains("Type")').attr('data-html', html);
        $('tr th:contains("Type")').append('<div class="ui mini icon button"><i class="down triangle basic icon"></i></div>');
        $('th[data-html]').popup({
            on: 'click'
          });
        });

      /* display beautiful json */
      $('pre code').text(function(i, t){return JSON.stringify($.parseJSON(t), null, 4)});
      $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

  }

  var file = $('#doccontent').attr('data-file');
  if (file !== undefined) {
    renderDoc(file, convertDone);
  }

});
