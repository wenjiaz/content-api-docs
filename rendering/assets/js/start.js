$(document).ready(function() {

    /* initialize semantci ui component */
    $('.ui.sidebar').sidebar('attach events', '.launch.button');
    $('.requestor-menu .item').tab();
    $('.checkbox').checkbox();
    $('.ui.dropdown').dropdown(); 




    /* install menu handdler */
    $('.menu.sidebar .item').click(function(e) {
        e.preventDefault();
        var name = $(this).attr('data-name');
        var tab = $(this).attr('data-tab');
        if (name === "") {
           //do nothing for the moment
        } else {
          changeEndpoint(tab, name)
        }
    });

  var markdownApi = new MarkdownApi()
  var contentApi = new ContentApi()

  function changeEndpoint(tab, name) {
    $(".ui.tab[data-tab="+tab+"]").tab('changeTab', tab);
    markdownApi.convert('../docs/' + name + '.md', updateContent); 
  }

  function updateContent(html) {
      $('#doccontent').empty().append(html);
   }

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



  changeEndpoint('content', 'content_search');

});
