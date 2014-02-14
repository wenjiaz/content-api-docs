$(document).ready(function() {

  var markdownApi = new MarkdownApi();

  function renderDoc(name) {
    markdownApi.convert('docs/' + name +'.md', convertDone); 
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
      if (common !== undefined) {$('#doccontent h2').eq(1).before(common);}

      /* handle special item endpoint */
      var name = $('#doccontent').attr('data-name');
      if (name === 'item') {
        $('h1').empty().append("Item search");
        $('li > code:contains("http")').empty().append("http://content.guardianapis.com/");
      }

      /* enhance apparence */
      $('table').addClass('ui basic table');
      $( "tr th:nth-child(1)" ).addClass('three wide');
      $( "tr th:nth-child(2)" ).addClass('seven wide');
      $( "tr th:nth-child(3)" ).addClass('two wide');
      $( "tr th:nth-child(4)" ).addClass('four wide');
  }

  var file = $('#doccontent').attr('data-file');
  if (file !== undefined) {
    renderDoc(file);
  }

});
