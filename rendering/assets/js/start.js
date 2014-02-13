$(document).ready(function() {

    $('.requestor-menu .item').tab();
    $('.checkbox').checkbox();
    $('.ui.dropdown').dropdown(); 

  var markdownApi = new MarkdownApi()
  var contentApi = new ContentApi()

  function getFieldValue(form, fieldId) { 
      return form.form('get field', fieldId).val();
  }

  function submit(form) {

      var formData = {
          q: getFieldValue(form, 'q'),
          format: getFieldValue(form, 'format')
          /* TODO more field should be added there */
      };

      var type = form.attr('data-tab');
      form.addClass('loading');
      contentApi.search(formData, type, formData.format, searchSucceed, searchFailed, searchDone);
   }

   function searchSucceed(data, formData, type) {
      $( "#result" ).empty().append( "<pre><code>" + data + "</code></pre>" );
      $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
      var query = contentApi.query(formData, type);
      $("#request").get(0).firstChild.nodeValue = query;
   }

   function searchFailed() {
      $("#request").get(0).firstChild.nodeValue = "Last search failed ! Please retry";
   }

   function searchDone() {
      $('.ui.form.loading').removeClass('loading');
   }

  
  /* install form submission handler */
   //$('.ui.form').submit(submitForm);
   /* there is some stramge behaviors with submit events not launched => attached a new one */
   $('.ui.submit.button').click(function(e) {
        e.preventDefault();
        var form = $(this).parents('form:first');
        submit(form);
    });
   $('.ui.form').submit(function(e) {
        e.preventDefault();
   });


  function renderDoc(name, html) {
    markdownApi.convert('docs/' + name +'.md', updateContent, html); 
  }

  function updateContent(html) {
      $('#doccontent').empty().append(html);
  }


  var name = $('#doccontent').attr('data-file');
  var includecommon = $('#doccontent').attr('data-include-common');
  if (includecommon === 'true') {
    markdownApi.convert('docs/common.md', function(html) {
      renderDoc(name, html);
    });    
  } else {
      renderDoc(name);
  }

});
