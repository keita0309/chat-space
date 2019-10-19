$(function() {

  var user_list = $("#user-search-result");
  var menber_list = $("#menber-search-result")

function appenduser(user){
    var html = `<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user.user_name }</p>
                 <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.user_id}" data-user-name="${user.user_name}">追加</div>
                </div>`
    user_list.append(html);
}


function appendErrMsgToHTML(msg){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${msg}</p>
              </div>`
    user_list.append(html);
} 

function appendmenber(id,name){
  console.log(id,name)
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                 </div>`
    menber_list.append(html);
}
  $("#user-search-field").on("keyup", function(e) {
    var input = $("#user-search-field").val();
    $("#user-search-result").empty();
  
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      if (users.length !== 0) {
        users.forEach(function(user){
        appenduser(user);
          
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません")
      }

    })
    .fail(function() {
      alert('該当するユーザーはいません');
    })
  })
  $(document).on("click",".user-search-add.chat-group-user__btn.chat-group-user__btn--add",function(e){
    $(".chat-group-user.clearfix").remove();
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    appendmenber(id,name);
  })
  $(document).on("click",".user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn",function(e){
    $('.chat-group-user').remove();
  })

  
});