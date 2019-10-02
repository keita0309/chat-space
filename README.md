## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key:true|

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

### association
- has_many :groups_users
- has_many :group, through: groups_users
- has_many :messages


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integet|
|name|string|

### association
- nas_many :groups_users
- has_many :user, through: groups_users
- has_many :messages


## messages テーブル
 |Column|Type|Options|
|------|----|-------|
|id|integet|
|body|text|
|image|string|
|group_id|integet|
|user_id|integet|

### association
- belong_to :grop
- belong_to :user
