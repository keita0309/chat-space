# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
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
|username|string|

### Association
- has many :groups_users, throgh: :groups_users
- has many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integet|
|groupname|string|
|chatmember|string|

### Association
- has many :groups_users, throgh: :groups_users
- has many :messages

## messages テーブル
 |Column|Type|Options|
|------|----|-------|
|id|integet|
|body|text|
|group_id|integet|
|user_id|integet|
