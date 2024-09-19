Use master
Go
create database KONECTIVE
go
use KONECTIVE
GO

CREATE TABLE [Users] (
  [id] int PRIMARY KEY identity,
  [username] nvarchar(255) NOT NULL,
  [email] nvarchar(255) UNIQUE NOT NULL,
  [password] nvarchar(255),
  [role] int,
  [firstname] nvarchar(255),
  [lastname] nvarchar(255),
  [contactnumber] nvarchar(255),
  [created_at] Date,
  [deleted_at] Date
)
CREATE TABLE [Designers](
	[designer_id] int primary key,
	[yearofexp] int,
	[specialization] nvarchar(255),
	FOREIGN KEY (designer_id) REFERENCES [Users](id)

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
  [created_at] Date,
  [deleted_at] Date,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id)
)
GO

CREATE TABLE [categories] (
  [id] integer PRIMARY KEY,
  [name] nvarchar(255),
  [description] nvarchar(255),
  [created_at] Date,
  [deleted_at] Date
)
GO

CREATE TABLE [sub_categories] (
  [id] integer PRIMARY KEY,
  [parent_id] integer,
  [name] nvarchar(255),
  [description] nvarchar(255),
  [created_at] Date,
  [deleted_at] Date,
  FOREIGN KEY ([parent_id]) REFERENCES [categories](id)

)
GO

CREATE TABLE [products] (
  [id] integer PRIMARY KEY,
  [name] nvarchar(255),
  [brand] nvarchar(255),
  [price] float,
  [image] nvarchar(255),
  [description] nvarchar(255),
  [category_id] int,
  [created_at] Date,
  [deleted_at] Date,
  FOREIGN KEY ([category_id]) REFERENCES [sub_categories](id)

)
GO

CREATE TABLE [consultations] (
  [id] int PRIMARY KEY IDENTITY,
  [user_id] int FOREIGN KEY REFERENCES [Users]([id]),
  [designer_id] int FOREIGN KEY REFERENCES [Users]([id]),
  [scheduled_time] datetime,
  [status] nvarchar(255),
  [notes] nvarchar(255)
)
GO

CREATE TABLE [wishlist] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [designer_id] integer,
  [created_at] Date,
  [deleted_at] Date
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
  FOREIGN KEY ([designer_id]) REFERENCES [Users](id)
)
GO

CREATE TABLE [cart] (
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [total] integer,
  [created_at] Date,
  [updated_at] Date
  FOREIGN KEY ([user_id]) REFERENCES [Users](id)

)
GO

CREATE TABLE [cart_item] (
  [id] integer PRIMARY KEY,
  [cart_id] integer,
  [product_id] integer,
  [quantity] integer,
  [created_at] Date,
  [updated_at] Date,
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
  [created_at] Date,
  [updated_at] Date,
  FOREIGN KEY ([order_id]) REFERENCES [products](id),
  FOREIGN KEY ([product_id]) REFERENCES [order_details](id),

)
GO

CREATE TABLE [payment_details] (
  [id] integer PRIMARY KEY,
  [order_id] integer,
  [amount] integer,
  [provider] nvarchar(255),
  [status] bit,
  [created_at] Date,
  [updated_at] Date,
  FOREIGN KEY ([order_id]) REFERENCES [order_details](id)

)
GO