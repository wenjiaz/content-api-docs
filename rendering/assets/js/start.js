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
    //$("#requestor-menu").tab('changeTab', tab);
    markdownApi.convert('../docs/' + name + '.md', updateContent); 
  }

  function updateContent(html) {
      $('#doccontent').empty().append(html);
   }

  
  /* install form submission handler */
   $('.ui.form').submit(submitForm);

   function submitForm(e) {
      e.preventDefault();
      var form = $(this);

      var formData = {
          q: getFieldValue(form, 'q'),
          format: getFieldValue(form, 'format')
          /* TODO more field should be added there */
      };

      var type = $(this).attr('data-tab');
      contentApi.search(formData, type, formData.format);
      var query = contentApi.query(formData, type);
      $("#request").get(0).nodeValue = query;
   }

  function getFieldValue(form, fieldId) { 
      return form.form('get field', fieldId).val();
  }

  changeEndpoint('content', 'content_search');

});
