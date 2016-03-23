var manetInstance = "http://manet.herokuapp.com/?"
loadPad('https://g-u-i.me/pad/p/et-et.org/export/txt', '#main-text');

function loadPad(url, selector, callback){
  $.ajax({
    url: 'https://g-u-i.me/pad/p/et-et.org/export/txt',
    type: 'get',
    dataType: 'html',
    async: true,
    success: function(data){
      $(selector).html(marked(data))
      textify(selector);
    }
  });
}

function textify(selector){

  $(selector+ ' a[href^="http://"]')
    .attr('target','_blank')
    .each(function(i) {

      var small = jQuery.param({
        url:$(this).attr('href'),
        width:120,
        height:80,
        zoom:0.1,
        clipRect:"0,0,120,100"
      });

      var cur = this;

      setTimeout(function(){
        $(cur).prepend('<img class="site" src="'+manetInstance+small+'"> ')
      }, (i+1) *250 )

      $(this).mouseover(function(){

        var small = jQuery.param({
          url:$(this).attr('href'),
          width:540,
          height:960,
          clipRect:'0,0,960,540',
          zoom:0.5,
          format:'jpeg'
        });

        console.log($(this).offset())

        $("#preview img").attr('src',manetInstance+small).css("margin-top",
          Math.max(0, $(this).offset()['top'] - $("#preview img").height()/3)
        ).removeClass("hidden")

      })

    });
}
