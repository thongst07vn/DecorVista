Use master
Go

create database DecorVista
go
use DecorVista
GO
drop table if exists [payment_details]
go
drop table if exists [order_item]
go
drop table if exists [order_details]
go
drop table if exists [follow]
go
drop table if exists [product_attr]
go
drop table if exists [products]
drop table if exists [sub_categories]
drop table if exists [categories]
go
drop table if exists [consultations]
go
drop table if exists [cart_item]
go
drop table if exists [follow]
go
drop table if exists [cart]
go
drop table if exists [chat_box]
GO
drop table if exists [designers]
go
drop table if exists [addresses]
go
drop table if exists [users]
GO
CREATE TABLE [users] (
  [id] int PRIMARY KEY identity,
  [avatar] nvarchar(255),
  [username] nvarchar(255) NOT NULL,
  [email] nvarchar(255) UNIQUE NOT NULL,
  [password] nvarchar(255),
  [role] int,
  [contactnumber] nvarchar(255),
)
CREATE TABLE [designers](
	[designer_id] int primary key identity,
	[avatar] nvarchar(255),
	[username] nvarchar(255) NOT NULL,
	[email] nvarchar(255) UNIQUE NOT NULL,
	[password] nvarchar(255),
	[role] int,
	[contactnumber] nvarchar(255),
	[yearofexp] int,
	[specialization] nvarchar(255),
)
CREATE TABLE [addresses] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [title] nvarchar(255),
  [address_line_1] nvarchar(255),
  [address_line_2] nvarchar(255),
  [country] nvarchar(255),
  [city] nvarchar(255),
  [postal_code] nvarchar(255),
  [landmark] nvarchar(255),
  [phone_number] nvarchar(255),
  FOREIGN KEY ([user_id]) REFERENCES [Users](id)
)
GO

CREATE TABLE [categories] (
  [id] integer PRIMARY KEY,
  [name] nvarchar(255),
  [description] nvarchar(255),
)
GO

CREATE TABLE [sub_categories] (
  [id] integer PRIMARY KEY,
  [parent_id] integer,
  [name] nvarchar(255),
  [description] nvarchar(255),
  FOREIGN KEY ([parent_id]) REFERENCES [categories](id)
)
GO

CREATE TABLE [products] (
  [id] integer PRIMARY KEY,
  [name] nvarchar(255),
  [brand] nvarchar(255),
  [description] nvarchar(255),
  [category_id] int,
  [image] nvarchar(255),
  [price] float,
  FOREIGN KEY ([category_id]) REFERENCES [sub_categories](id)
)
GO

CREATE TABLE [product_attr] (
  [id] integer PRIMARY KEY,
  [product_id] int,
  [name] nvarchar(255),

  FOREIGN KEY ([product_id]) REFERENCES [products](id)
)
GO

CREATE TABLE [consultations] (
  [id] int PRIMARY KEY IDENTITY,
  [scheduled_time] datetime,
  [status] nvarchar(255),
  [notes] nvarchar(255),
   [user_id] int FOREIGN KEY REFERENCES [users]([id]),
  [designer_id] int FOREIGN KEY REFERENCES [designers]([designer_id]),
)
GO

CREATE TABLE [follow] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [designer_id] integer,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
  FOREIGN KEY ([designer_id]) REFERENCES [Users](id)
)
GO

CREATE TABLE [cart] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [total] integer,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id)

)
GO

CREATE TABLE [cart_item] (
  [id] integer PRIMARY KEY,
  [cart_id] integer,
  [product_id] integer,
  [quantity] integer,
  FOREIGN KEY ([cart_id]) REFERENCES [cart](id),
  FOREIGN KEY ([product_id]) REFERENCES [products](id)

)
GO

CREATE TABLE [order_details] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [payment_id] integer,
  [total] integer,
  [created_at] Date,
  [updated_at] Date,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
)
GO

CREATE TABLE [order_item] (
  [id] integer PRIMARY KEY,
  [order_id] integer,
  [product_id] integer,
  [products_sku_id] integer,
  [quantity] integer,
  FOREIGN KEY ([order_id]) REFERENCES [products](id),
  FOREIGN KEY ([product_id]) REFERENCES [order_details](id),
)
GO

Create table [chat_box]
(
	[user_id] int,
	[designer_id] int,
	[chat_day] Date,
	[message] nvarchar(255),
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
  FOREIGN KEY ([designer_id]) REFERENCES [designers]([designer_id]),
)

insert into [users] ([avatar],[username],[email],[password],[role],[contactnumber])
values ('noimg.jpg','KietTran','trananhkietzzz@gmail.com','123',1,'0123456789')