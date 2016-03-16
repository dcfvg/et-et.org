$( document ).ready(function() {

  var textHtml = marked(getText('https://g-u-i.me/pad/p/et-et.org/export/txt'))
  $("#main-text").html(textHtml);

});

function getText(myUrl){
    var result = null;
    $.ajax( { url: myUrl,
              type: 'get',
              dataType: 'html',
              async: false,
              success: function(data) { result = data; }
            }
    );
    FileReady = true;
    return result;
}
