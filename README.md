## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## user テーブル
|Column|Type|Options|
|------|----|-------|
|id|integet|
|email|string|
|password|string|
|name|string|

### Association
- has many :group_users
- has many :group_users, throgh: :groups_users
- has many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integet|
|name|string|

### Association
- has many :group_users
- has many :groups_users, throgh: :groups_users
- has many :messages

## messages テーブル
 |Column|Type|Options|
|------|----|-------|
|id|integet|
|body|text|
|image|string|
|group_id|integet|
|user_id|integet|
