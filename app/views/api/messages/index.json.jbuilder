# 自動更新で複数メッセージが投稿されてもいいように配列にする
json.array! @messages do |message|
  json.content  message.content
  json.image  message.image.url
  json.time  message.created_at
  json.user_name  message.user.name
  json.id  message.id
end