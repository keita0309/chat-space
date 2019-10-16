$(function(){
  function buildHTML(message){
    var html =  `<div class = "message">
                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                      ${message.user_name}
                    </div>
                      <div class = "upper-message__date">
                        ${message.time}
                      </div>
                  </div>
                  <div class = "message__text">
                    ${ message.content }
                  </div>
                </div>`
    return html;
  }
  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
    url: url,
    type: 'POST',
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
    $('.form__submit').removeAttr('data-disable-with')
  })

})
