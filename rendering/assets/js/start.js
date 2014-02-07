$(document)
  .ready(function() {
    $('.requestor-menu .item').tab();
    $('.checkbox').checkbox();


    $('.menu.sidebar .item').click(function(e) {
        e.preventDefault();
        var name = $(this).attr('data-name');
        markdownApi.convert('../docs/' + name + '.md', updateContent);
    });

  var markdownApi = new MarkdownApi()
  var contentApi = new ContentApi()


  function getFieldValue(form, fieldId) { 
      return form.form('get field', fieldId).val();
   }

   function submitForm(e) {
      e.preventDefault();
      var form = $(this);

      var formData = {
          q: getFieldValue(form, 'q')
      };


      contentApi.search(formData);
   } 


   $('.ui.form').submit(submitForm);


   function updateContent(html) {
      console.log(html);
      $('#doccontent').empty().append(html);
   }

   markdownApi.convert('../docs/common.md', updateContent);

  })
;


/*

//Get value from an input field
   

   


*/