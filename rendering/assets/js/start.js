$(document).ready(function() {

  var markdownApi = new MarkdownApi();

  function renderDoc(name, html) {
    markdownApi.convert('docs/' + name +'.md', updateContent, html); 
  }

  function updateContent(html) {
      $('#doccontent').empty().append(html);
  }

  var name = $('#doccontent').attr('data-file');
  if (name !== undefined) {
     var includecommon = $('#doccontent').attr('data-include-common');
    if (includecommon === 'true') {
      markdownApi.convert('docs/common.md', function(html) {
        renderDoc(name, html);
      });    
    } else {
      renderDoc(name);
    }
  }

});
