
use DecorVista
GO

drop table if exists [order_item]
go
drop table if exists [order_details]
go
drop table if exists [follow]
go
drop table if exists [products]
Go
drop table if exists [categories]
Go
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
  [id] integer PRIMARY KEY identity,
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
  [id] integer PRIMARY KEY identity,
  [name] nvarchar(255),
  [description] nvarchar(255),
  [products_id] integer,
  
)
GO
CREATE TABLE [products] (
  [id] integer PRIMARY KEY identity,
  [name] nvarchar(255),
  [brand] nvarchar(255),
  [description] nvarchar(255),
  [image] nvarchar(255),
  [price] float,
  [color] nvarchar(255),
  [category_id] int,
  FOREIGN KEY ([category_id]) REFERENCES [categories](id)
)
GO



CREATE TABLE [consultations] (
  [id] int PRIMARY KEY IDENTITY,
  [scheduled_time] datetime,
  [status] int,
  [notes] nvarchar(255),
  [user_id] int FOREIGN KEY REFERENCES [users]([id]),
  [designer_id] int FOREIGN KEY REFERENCES [designers]([designer_id]),
)
GO

CREATE TABLE [follow] (
  [id] integer PRIMARY KEY identity,
  [user_id] integer,
  [designer_id] integer,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
  FOREIGN KEY ([designer_id]) REFERENCES [Users](id)
)
GO

CREATE TABLE [cart] (
  [id] integer PRIMARY KEY,
  [total] integer,
  FOREIGN KEY ([id]) REFERENCES [Users](id)

)
GO

CREATE TABLE [cart_item] (
  [id] integer PRIMARY KEY identity,
  [cart_id] integer,
  [product_id] integer,
  [quantity] integer,
  FOREIGN KEY ([cart_id]) REFERENCES [cart](id),
  FOREIGN KEY ([product_id]) REFERENCES [products](id)
)
GO

CREATE TABLE [order_details] (
  [id] integer PRIMARY KEY identity,
  [user_id] integer,
  [payment_type] integer,
  [total] integer,
  [created_at] Date,
  [updated_at] Date,
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
)
GO

CREATE TABLE [order_item] (
  [id] integer PRIMARY KEY identity,
  [order_id] integer,
  [product_id] integer,
  [quantity] integer,
  FOREIGN KEY ([product_id])REFERENCES [products](id),
  FOREIGN KEY ([order_id]) REFERENCES [order_details](id),
)
GO

Create table [chat_box]
(
	[user_id] int,
	[designer_id] int,
	[chat_day] DATETIME,
	[chat_type] BIT,
	[message] nvarchar(255),
  FOREIGN KEY ([user_id]) REFERENCES [Users](id),
  FOREIGN KEY ([designer_id]) REFERENCES [designers]([designer_id]),
)

insert into [users] ([avatar],[username],[email],[password],[role],[contactnumber])
values ('noimg.jpg','KietTran','trananhkietzzz@gmail.com','123',1,'0123456789')
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/26048726/r/il/cc6f32/5314802476/il_600x600.5314802476_sj6n.jpg', 'Indian Handmade Handcarved Woodland Bed, Indian Handmade Handcarved Bedroom Furniture', '113613636', 'Solid oak dining table with a modern design and tapered legs.', 'MinimalistMinds');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17381346/r/il/fafa5f/6163696355/il_600x600.6163696355_e0d9.jpg', 'Large BERBER WOOD CHEST, Carved Wooden Trunk, Moroccan storage Chest, Vintage Handicraft Trunk, Berber Design Home Furniture Decor', '35305556', 'Rustic dining table made of reclaimed wood with a natural finish.', 'ZenZen');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/27537528/r/il/79ca81/5183530498/il_600x600.5183530498_7f0i.jpg', 'Unique Craved Bed Frame, Moroccan Bed Frame, Costume Made, Traditional Handmade Bed frame, New Design, Free Shipping', '70056818', 'Glass-topped dining table with a sleek metal frame.', 'SleekStyle');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/36365392/r/il/91e15d/5888995613/il_600x600.5888995613_1fec.jpg', 'Hand Carved Daybed Sofa | Rattan Canning Sofa | Handmade Furniture | Wooden Sofa | Teak Wood Furniture | Home Decor Furniture', '96590909', 'Extendable dining table for versatile seating options.', 'Timeless Treasures');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/41331726/r/il/ef24c4/6202618792/il_600x600.6202618792_gxzi.jpg', 'Indian Solid Teak Wooden Diwan/ Wooden sofa/ Indian fine carved diwan/ free delivery/ order via Etsy', '32803030', 'Round dining table with a marble top and brushed gold base.', 'Vintage Vibes');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/18311442/c/2250/2250/0/105/il/acef25/5894296580/il_600x600.5894296580_qq1i.jpg', 'Indian Handcarved wooden Jharokha Mirror, Distressed Rustic Finish, Intricately Carved Indian Wall Mirror, Indian furniture, Home/Wall decor', '19696970', 'Ergonomic office chair with adjustable height and lumbar support.', 'Retro Revival');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/32719746/r/il/92b533/6279938556/il_600x600.6279938556_34sv.jpg', 'Cosmic Wooden Hand Carved Almirah, Cabinet with Drawer, Decorative Almirah, Indian Handmade Wardrobe', '81947475', 'Upholstered dining chair with a curved backrest and tapered legs.', 'GreenGrove');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/39694909/c/3000/3000/0/0/il/0cb1de/6210077354/il_600x600.6210077354_8ilb.jpg', 'Wooden Elephant Hand Painted Table, Footstool, Bench chair, Miniature Decorative Elephant Table, Kids Stool, Indian Style', '292237', 'Leather armchair with a modern silhouette and statement design.', 'Earthly Elements');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/53906712/r/il/9120f9/6277452831/il_600x600.6277452831_dzab.jpg', 'Floral and Mirrorwork Side Table, Colorful Floral Accent Piece, Unique Wooden Storage Table, Painted Floral Design, Vibrant Indian End Table', '5934343', 'Stackable outdoor chairs made of weather-resistant materials.', 'Sustainable Serenity');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/29711936/r/il/628a21/5701813584/il_600x600.5701813584_7n36.jpg', 'Wooden Coffee Table Natural Hand Made Craved Round Indian Grinder Table Chakki Table,Central Home Decor Side Table, Beautiful Handicraft Art', '3755556', 'Rocking chair with a comfortable seat and curved frame.', 'Opulent Oak');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/8884298/c/898/898/0/0/il/c9c1c7/5937098185/il_600x600.5937098185_5aaf.jpg', 'Bone Inlay Stencil Set - Pack of 7 Boho Indian Craft Furniture Wall Floor Stencils for Painting - JAIPUR Stencil by Dizzy Duck', '400000', 'Sectional sofa with a chaise lounge and removable cushions.', 'Royal Retreat');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/25488668/r/il/d9d5fd/5071436169/il_600x600.5071436169_9bfu.jpg', 'Wholesale Lot Of Indian Vintage Kantha Quilt Handmade Throw Reversible Blanket Bedspread Cotton Fabric BOHEMIAN quilt', '132323', 'Leather sofa with clean lines and a minimalist aesthetic.', 'Velvet Dreams');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/15833932/r/il/ffb9fc/6030302239/il_600x600.6030302239_q4h4.jpg', 'Handcrafted Wooden Jhula Swing, Indoor Indian Sankheda Jhula', '47200758', 'Velvet sofa with a tufted backrest and elegant design.', 'ComfortCraft');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/30449428/r/il/34925d/3617532751/il_600x600.3617532751_tmry.jpg', 'bedroom ottoman bench, wood bench, boho chair, dining table bench, ottoman bench seat, turkish rug bench, long ottoman bench, BENCH 160', '6969697', 'Corner sofa with built-in storage compartments.', 'ModernClassic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/8571185/r/il/69e54c/1143555636/il_600x600.1143555636_ca1s.jpg', 'Indian Inlay Stencils- Furniture Stencils Set- Indian Inlay Furniture Stencil Kit- Reusable Wall Stencils Set- StencilsLAB', '991667', 'Futon sofa with a convertible sleeping function.', 'LuxeLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/30238281/r/il/27b443/5125654902/il_600x600.5125654902_g53r.jpg', '8"" Thick Maroon Arabic Floor Sofa, Maroon Arabic Floor Couch, Moroccan livingroom sofas, U shaped Floor Seating Sofa, Ottoman Couch', '1000253', 'King-size bed frame with a headboard and footboard.', 'PureForm');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/729a69/5697168693/il_600x600.5697168693_iqli.jpg', 'Old Indian Temple Mirror , Reclaimed Mirror, Antique Furniture, Home Decor / #templemirror #indiantemplemirror / wall hanging mirror frame.', '4924242', 'Platform bed with a low profile and clean lines.', 'CleanLines');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/c1e881/3783363519/il_600x600.3783363519_t7xl.jpg', 'Old Indian Bleach Temple Mirror , Reclaimed Mirror, Antique Furniture, Home Decor / indiantemplemirror / wall hanging mirror frame.', '1742424', 'Four-poster bed with a canopy and elegant details.', 'SimpleLuxe');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/34163222/c/2250/2250/0/102/il/d54dca/5547640844/il_600x600.5547640844_lvq3.jpg', 'Beautiful, unique Indian kantha quilts', '382576', 'Upholstered bed frame with a luxurious velvet fabric.', 'EssentialElegance');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/8571185/r/il/69e54c/1143555636/il_600x600.1143555636_ca1s.jpg', 'Indian Inlay Stencils- Furniture Stencils Set- Indian Inlay Furniture Stencil Kit- Reusable Wall Stencils Set- StencilsLAB', '991667', 'Bunk bed with a ladder and safety rails.', 'ModernMinimal');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/29711936/r/il/0226c7/5831005399/il_600x600.5831005399_o90a.jpg', 'Wooden Coffee Chakki Table, Hand Made Fine Work, Craved Round, Indian Grinder Chakki Table, Beautifully Table, Home Decor, Handicraft Art', '3577778', 'Glass coffee table with a metal base and a contemporary design.', 'GeometricGrace');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17807375/c/2000/2000/0/0/il/b9c243/4114163453/il_600x600.4114163453_2kdp.jpg', 'Wooden Elephant Table, 4 Side Elephant Decorative Stool Pedestal Table Plant Stand Rajasthani Home Decor Handmade Indian Collectible Art', '1506061', 'Wood coffee table with a rustic finish and carved details.', 'LinearLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/19898918/c/1818/1818/127/364/il/57492a/6204091723/il_600x600.6204091723_qwtz.jpg', 'Wooden Console Table, Floral Painted Sideboard, Vintage Home Decor Storage Cabinet,  Living Room Furniture, Indian Ethnic Style Wardrobe.', '34848485', 'Nesting coffee tables in different sizes for versatile use.', 'StreamlinedStyle');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/29711936/r/il/f8dac4/6238974661/il_600x600.6238974661_58lp.jpg', 'Wooden Chakki Table Grinder Table Flower Leaf design Coffee Table Hand Made Craved Indian Beautifully Table Home Decor Living Room Decor Art', '2200000', 'Coffee table with built-in storage drawers.', 'ContemporaryChic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/43621779/c/750/750/0/158/il/f7a1a3/5454652405/il_600x600.5454652405_p3kq.jpg', 'Kantha Floor Cushion throw pillow seat pad Window seat cushion Vintage Patchwork floor pillow sofa Cushion Velvet French Tufted Cushion', '1319667', 'Marble coffee table with a sleek and modern look.', 'UrbanZen');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/33046628/r/il/1f01e5/5452856230/il_600x600.5452856230_dyiv.jpg', 'Moroccan Custom Made Sofa Table, Wooden Rustic Table, Unique Accent Brown Coffee Table, Mohandicraft Handmade Table, Vintage Style Table', '6893939', 'Small end table with a round top and metal legs.', 'NostalgicNest');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/43126492/r/il/335da1/5907127713/il_600x600.5907127713_g3ds.jpg', 'Bone Inlay Swan Chest of Drawer, Bone Inlay Dresser, Bone Inlay Sideboard, Bone Inlay Furniture', '38694444', 'Nightstand with drawers and a shelf for bedside essentials.', 'VintageVibes');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/48943126/r/il/a1c760/6282422034/il_600x600.6282422034_1h3i.jpg', 'Round stool, side table, plant stand, small stool in solid mango wood', '1960227', 'Console table with a long, narrow top and decorative legs.', 'RetroHaven');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/44998601/r/il/e70d3f/5727934854/il_600x600.5727934854_4ne2.jpg', 'Solid Mango Wood Side Table Ideal Corner Tray Table Unique Gift Detachable Legs Flat Packed Stunning Hummingbird', '2549667', 'Side table with a glass top and a unique base design.', 'MidCenturyMagic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/7365004/r/il/9307c3/5962781201/il_600x600.5962781201_m957.jpg', 'Lady in the garden | Indian Mughal inspired digital art work, Printable wall art, traditional Indian Pakistani art, Indian woman painting', '99242', 'Ottoman side table with a padded top and storage compartment.', 'VintageTreasure');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17807375/c/1080/1080/0/0/il/a73c4c/4555603302/il_600x600.4555603302_9qw1.jpg', 'Wooden Elephant Stool Copper Elephant Table step stool Indian Home Decor Small Furniture Collectible Art Elephant Decor Unique gift for her', '1525505', 'Bookshelf with multiple shelves and a modern design.', 'TimelessClassics');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/21441581/r/il/f86bdc/5374925847/il_600x600.5374925847_e4iq.jpg', 'Wooden Indian Solid Wood  Nesting Table Nest of Tables set of 3 wooden stool set/ Ethnic tables/ Side table/ End Table Art', '7954293', 'Dresser with drawers and a mirror for bedroom storage.', 'RetroChic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17970568/c/1199/1199/0/295/il/d5687f/5118509668/il_600x600.5118509668_q060.jpg', 'Wood Woven Rope Charpai, Hand Carved Indian Home Decor, Wooden Jute Rope Bed, Garden Seater, Kids Room Bench, Wood Bed, Rustic Table Decor', '2803030', 'TV stand with shelves and cable management features.', 'VintageFinds');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/33046628/r/il/1f01e5/5452856230/il_600x600.5452856230_dyiv.jpg', 'Moroccan Custom Made Sofa Table, Wooden Rustic Table, Unique Accent Brown Coffee Table, Mohandicraft Handmade Table, Vintage Style Table', '6893939', 'Cabinet with doors and drawers for versatile storage.', 'HeritageHome');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/36058210/r/il/d8ecf2/4969868555/il_600x600.4969868555_1r3m.jpg', 'Wholesale Lot Of Indian Vintage Kantha Quilt Handmade Throw Reversible Blanket Bedspread Cotton Fabric BOHEMIAN quilt', '397727', 'Shoe rack with multiple tiers for organized shoe storage.', 'ClassicRevival');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20248645/r/il/42c1a5/4684114357/il_600x600.4684114357_lmrl.jpg', 'Lamp / Plant Hanger Small Wooden Wall Bracket Corbel Set Of 2 Wall Hanging With Hook Entrance Lamp Hanging Vintage Antique Home Decor Bodhil', '1464646', 'Patio dining set with a table and chairs made of weather-resistant materials.', 'MinimalistMinds');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/31753443/r/il/f9bd8a/3725263718/il_600x600.3725263718_a1x3.jpg', 'Moroccan chest of drawers in biege painted solid wood / Antique oriental sideboard / TRUE MARRAKECH CRAFTSMANSHIP', '20964361', 'Lounge set with a sofa, chairs, and a coffee table for outdoor relaxation.', 'ZenZen');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/48184576/r/il/c70059/5789576617/il_600x600.5789576617_284x.jpg', 'Carved Antique Indian Window and Frame, Decorative Vintage Doors, Rustic Indian Furniture Antique Finish Jharokha Festival Decor Gift', '19267677', 'Hammock stand with a comfortable hammock for outdoor lounging.', 'SleekStyle');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/21192821/c/564/564/0/91/il/aa9607/5924179500/il_600x600.5924179500_nlo3.jpg', 'Custom Size Hand Carved Barn Door, Craftsman Exterior Entry Front Door, Double or Single Sliding interior Doors, Antique Door, Wood Wall Art', '35328283', 'Adirondack chairs with a classic design and comfortable seating.', 'Timeless Treasures');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20066781/c/878/878/28/0/il/87ed36/5569737338/il_600x600.5569737338_ml2c.jpg', 'Inlay Coffee Table|Inlaid Coffee Table|', '16572505', 'Outdoor bar set with a counter and bar stools for entertaining.', 'Vintage Vibes');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/48204717/r/il/e2f2d2/6001084214/il_600x600.6001084214_fq17.jpg', 'Indian decor DIGITAL backdrop, Indian home wallpaper, Indian furniture background, photo editing template, studio photography decoration', '117330', 'Custom-designed dining table with a unique shape and size.', 'Retro Revival');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/32719746/c/1817/1817/16/637/il/6db7f7/5396705067/il_600x600.5396705067_lue1.jpg', 'Indian Antique Jharokha Wooden Hand Carved Centre Table, Coffee table, Indian Antique Serving Table Indian, Handcrafted Table', '32877525', 'Bespoke sofa with personalized upholstery and features.', 'GreenGrove');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/24231655/r/il/23298c/6227234672/il_600x600.6227234672_6s6s.jpg', '75 Indian Palace Backdrops, Indian home Background, Indian Style Wedding Backdrops,Hues of India Backdrops,indian backdrop,Indian furniture', '237626', 'Handcrafted bedroom set with intricate details and high-quality materials.', 'Earthly Elements');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/41331726/r/il/840f9d/4992265410/il_600x600.4992265410_inf9.jpg', 'Indian Solid Teak Wooden Diwan/ Wooden sofa/ Indian fine carved diwan/ free delivery/ order via Etsy', '32803030', 'One-of-a-kind coffee table with unique materials and design.', 'Sustainable Serenity');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17380909/r/il/bf6c7e/4704935978/il_600x600.4704935978_7ejr.jpg', 'Surprise selection - 1 piece hand-painted Indian furniture knobs, furniture handles, furniture knob, ceramic shabby chest of drawers', '25568', 'Custom-built outdoor furniture set to match your specific needs.', 'Opulent Oak');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/28368237/c/2000/2000/0/0/il/ab2536/5089147249/il_600x600.5089147249_le95.jpg', 'Antique Coffee Round Table Boho End Furniture Carved Room Wooden Side Table  Corner Table Indian Decor 18 Inches side tables for living room', '4924242', 'Solid oak dining table with a modern design and tapered legs.', 'Royal Retreat');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20248645/r/il/a44375/6211335361/il_600x600.6211335361_ibmq.jpg', 'Wooden Table Telephone Idol Stand Octagonal Round Table Vintage Home Decor Handicraft Ivory Art Living Room Pooja Mandir Interior Decorative', '2575758', 'Rustic dining table made of reclaimed wood with a natural finish.', 'Velvet Dreams');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/53906712/r/il/724b4b/6248798881/il_600x600.6248798881_bcv9.jpg', 'Handcrafted Embossed Wooden Sideboard, Traditional Indian Floral Design, Rustic Bohemian Cabinet, 100% Mango Wood, Decorative Sideboard', '13131313', 'Glass-topped dining table with a sleek metal frame.', 'ComfortCraft');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17225584/r/il/5e5311/4368580566/il_600x600.4368580566_omaq.jpg', 'Moroccan Brass Table , Brass Tea table , Moroccan Arabesque Engraved Carved Polished Brass Tray Folding Table .', '3181818', 'Extendable dining table for versatile seating options.', 'ModernClassic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17400812/r/il/dc5114/6091699414/il_600x600.6091699414_61ym.jpg', 'Indian Handmade Kilim Wool Jute Rug Piano Bench - Unique Upholstered Sitting Ottoman Stylish Piano Seat, Perfect Housewarming Gift', '5292929', 'Round dining table with a marble top and brushed gold base.', 'LuxeLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/38983468/c/1385/1385/0/0/il/f566bf/6226842221/il_600x600.6226842221_syb7.jpg', '70% OFF Morocco Kilim Pouf, Outdoor Furniture Pouf, Vintage Moroccan Ottoman, Outdoor Chair Pouf, Yoga Meditation Poof, Outdoor Kilim Poufs', '2070707', 'Ergonomic office chair with adjustable height and lumbar support.', 'PureForm');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/33428852/r/il/99ab5a/6208334163/il_600x600.6208334163_cd0m.jpg', 'Lush Jaipur Garden Wallpaper, Indian Wallpaper, Scenic Removable Wall Art, India Mughal Design, Peel and Stick Mughal Wallpaper', '541116', 'Upholstered dining chair with a curved backrest and tapered legs.', 'CleanLines');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/45990859/c/3000/3000/0/0/il/ac2a27/5781407643/il_600x600.5781407643_71u9.jpg', 'Reclaimed Indian Style Wooden Almirah, Old Primitive Cabinet, Hand Carved, Old Rustic Cabinet, Distressed Cupboard,Collectible Display Shelf', '11555556', 'Leather armchair with a modern silhouette and statement design.', 'SimpleLuxe');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/42652953/r/il/4c6e91/5074916937/il_600x600.5074916937_iwkr.jpg', 'Indian Antique Wooden Carved Temple Mirror Frame Reclaimed Vintage Home Decor Wall Hanging / Indian Art Old Handmade Mirror Frame', '1969444', 'Stackable outdoor chairs made of weather-resistant materials.', 'EssentialElegance');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20248645/r/il/f0f994/5428330968/il_600x600.5428330968_6rbu.jpg', 'Round Table Wooden Center Table Coffee Teapoy Vintage / Antique Style Home Garden Living Room Interior Decor Furniture Elephant Inlaid Art', '4040404', 'Rocking chair with a comfortable seat and curved frame.', 'ModernMinimal');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20441303/r/il/4bd7a3/6172570356/il_600x600.6172570356_4a07.jpg', 'Wooden Coffee Table,Folding Table, Moroccan Turkish Handmade Coffee Table,Wood Carving Coffee Table,Folding Living Room Table,Christmas Gift', '5636364', 'Sectional sofa with a chaise lounge and removable cushions.', 'GeometricGrace');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/3a7d3c/5853755532/il_600x600.5853755532_9hjw.jpg', 'Wooden Mirror Frame / Indian Temple Mirror Frames / Indian Mirror Frames / Reclaimed Mirror, Antique Furniture, Home Decor (Set of 3)', '2904040', 'Leather sofa with clean lines and a minimalist aesthetic.', 'LinearLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/05d535/3156740677/il_600x600.3156740677_mj72.jpg', 'Old Indian Shaving Box, Reclaimed Mirror Box , Antique Furniture, Home Decor , best gift for home , Vintage box , Reclaimed multi color box', '2500000', 'Velvet sofa with a tufted backrest and elegant design.', 'StreamlinedStyle');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/34163222/r/il/2aa33c/5160042152/il_600x600.5160042152_kf1k.jpg', 'vintage handmade patchwork quilt', '403535', 'Corner sofa with built-in storage compartments.', 'ContemporaryChic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/26465086/r/il/9e9a7a/6075962434/il_600x600.6075962434_5cgi.jpg', 'Wooden Round Side Central Coffee Table, India Carved Chakki Table, Brass Handicraft Central Table , Bedroom Furniture Table', '3957078', 'Futon sofa with a convertible sleeping function.', 'UrbanZen');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/27537528/r/il/249df5/4697370553/il_600x600.4697370553_5ob5.jpg', 'Stunning Berber Wardrobe, Moroccan Dresser, Bedroom Furniture, Custom Wardrobe, Free Shipping', '104147727', 'King-size bed frame with a headboard and footboard.', 'NostalgicNest');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/26048726/r/il/6305ef/5362777247/il_600x600.5362777247_j6ve.jpg', 'Indian Handmade Handcarved Menara Bed Black, Indian Handmade Handcarved Bedroom Furniture', '65656566', 'Platform bed with a low profile and clean lines.', 'VintageVibes');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/30449428/r/il/df74d5/4787663336/il_600x600.4787663336_43xj.jpg', 'lounging chair, meditation sofa, sleeper sofa, chaise lounge sofa, bohemian sofa, dressing bench, handmade furniture, cat couch, SOFA 40', '20202020', 'Four-poster bed with a canopy and elegant details.', 'RetroHaven');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/43126492/r/il/2d766e/6242926820/il_600x600.6242926820_1906.jpg', 'Bone Inlay Bohemian Floral Green Armoire, Bone Inlay Cupboard, Bone Inlay Wardrobe, Bone Inlay Furniture', '83080808', 'Upholstered bed frame with a luxurious velvet fabric.', 'MidCenturyMagic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/8ca428/5697088721/il_600x600.5697088721_eszk.jpg', 'Old Indian Temple Mirror , Reclaimed Mirror, Antique Furniture, Home Decor / #templemirror #indiantemplemirror / wall hanging mirror frame.', '5025253', 'Bunk bed with a ladder and safety rails.', 'VintageTreasure');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/21885076/r/il/c5183e/6106984963/il_600x600.6106984963_g823.jpg', 'Antique wooden table - India - Low model - 19th to early 20th century', '4971591', 'Glass coffee table with a metal base and a contemporary design.', 'TimelessClassics');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/44711844/r/il/720a91/6076277788/il_600x600.6076277788_50og.jpg', 'Wooden Indian Beautiful Painted 2 Drawer Cabinet for Home ,Side Table,Living Room Sideboard,Solid Wood Furniture,Painted Furniture', '12083333', 'Wood coffee table with a rustic finish and carved details.', 'RetroChic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/22234959/r/il/9068bb/4772208824/il_600x600.4772208824_tgsm.jpg', 'Old Indian Bleach Temple Mirror , Reclaimed Mirror, Antique Furniture, Home Decor / indiantemplemirror / wall hanging mirror frame.', '1754798', 'Nesting coffee tables in different sizes for versatile use.', 'VintageFinds');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/43126492/r/il/b69027/6266468579/il_600x600.6266468579_l9f3.jpg', 'Floral Navy Bone Inlay Side Table with 2 Drawers, Bedside Table, Nightstand, Bone Inlay Furniture India, Bone Inlay', '15732323', 'Coffee table with built-in storage drawers.', 'HeritageHome');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/41331726/r/il/2abec7/5040486461/il_600x600.5040486461_qsj2.jpg', 'Indian Solid Teak wood Diwan/ Wooden sofa/ Indian fine carved diwan/ free delivery/ order via Etsy', '37853535', 'Marble coffee table with a sleek and modern look.', 'ClassicRevival');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/26465086/r/il/30d8df/6074085258/il_600x600.6074085258_gh8n.jpg', 'Wood Painted Indian Carved bookshelf | Temple Shelf | Home decor | Living Room Furniture | Storage Cabinet', '6529680', 'Small end table with a round top and metal legs.', 'GrandioseGlamour');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/35786144/r/il/0d2d10/6032506524/il_600x600.6032506524_rrh5.jpg', 'Indian Pichwai Set of 6 , Indian art Pichhwai cow print with lotus, Ethnic art,indian home decor,desi print,indian Print,indian home decor', '264899', 'Nightstand with drawers and a shelf for bedside essentials.', 'RegalResidence');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/33046628/r/il/1e1337/5538951347/il_600x600.5538951347_3umb.jpg', 'Great Moroccan Door, Unique Design Door, HANDMADE Blue Wood Door, Hand Engraved Rustic Door, Old CARVED Door, Vintage Double Panel Door', '38005051', 'Console table with a long, narrow top and decorative legs.', 'ExquisiteElegance');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/49041132/r/il/6051f3/6179294101/il_600x600.6179294101_i287.jpg', 'Oriental Art Antique a large indian bone inlaid wooden chest box, 19th century', '151489899', 'Side table with a glass top and a unique base design.', 'LuxuriousLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/21445821/r/il/51168c/5997885693/il_600x600.5997885693_4tvv.jpg', 'Floor sofa set, Arab sofa, Modular sofa, Floor cushion sofa, Floor couch, Pallet cushion, Floor pouf ottoman, Sofa with back pillow, FS 07', '4924242', 'Ottoman side table with a padded top and storage compartment.', 'OpulentOasis');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/13507958/c/1500/1500/276/0/il/643c8e/6029372162/il_600x600.6029372162_bk5l.jpg', 'Moroccan Sofa - Set of 6 ft (180x70x15 cm)  Unstuffed Long Floor Cushion + Floor cushion + Insert covers', '11338384', 'Bookshelf with multiple shelves and a modern design.', 'RoyalRhapsody');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/24129554/r/il/aa4ea8/4197526243/il_600x600.4197526243_ffkh.jpg', 'Indian Cairo Wooden Bench| Handmade Kantha Cushioned Couch Furniture for Home Living Room Dining Table | Desi Home Decor|Indian Ethnic Style', '3711869', 'Dresser with drawers and a mirror for bedroom storage.', 'VelvetVisions');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17970568/r/il/7b4916/6176532454/il_600x600.6176532454_8fe5.jpg', 'Old Indian Temple Mirror, Reclaimed Mirror, Antique Furniture, Home Decor, Indian temple mirror, wall hanging mirror frame', '2500000', 'TV stand with shelves and cable management features.', 'GoldenGlitz');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/42652953/r/il/658fd7/6141631735/il_600x600.6141631735_mnng.jpg', 'Indian Vintage Brass Chapati Box / Brass Tiffin Box / Antique Jewellery Box / Indian Art And Decor / Showpiece Old Box', '2272475', 'Cabinet with doors and drawers for versatile storage.', 'SumptuousStyle');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/42652953/r/il/d9aee7/5078641879/il_600x600.5078641879_pkeq.jpg', 'Indian Antique Wooden Wall Hanging Temple Mirror Frame Set Of 6 Natural Finish / Vintage Design Mirror Framer / Home Decor / Wall Decor', '1477020', 'Shoe rack with multiple tiers for organized shoe storage.', 'ImperialElegance');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/41331726/r/il/473468/5022607368/il_600x600.5022607368_cj6y.jpg', 'Indian Solid Teak wood Diwan/ Wooden sofa/ Indian fine carved diwan/ free delivery/ order via Etsy', '37853535', 'Patio dining set with a table and chairs made of weather-resistant materials.', 'ModernVintage');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/27682330/r/il/f0578f/3784255087/il_600x600.3784255087_s0yp.jpg', 'Buy Wooden Chakki A Hand Painted Indian Carved Coffee Table, End Table, Garden Center Table, Handmade Planter, Fruit Box, Boho Plant Stand,', '2200000', 'Lounge set with a sofa, chairs, and a coffee table for outdoor relaxation.', 'EcoLuxeLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20562849/r/il/f3e868/1955911814/il_600x600.1955911814_o2qo.jpg', 'Old Indian Temple Mirror , Reclaimed Mirror, Antique Furniture, Home Decor', '2045455', 'Hammock stand with a comfortable hammock for outdoor lounging.', 'MinimalistMagic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/24119455/r/il/05e654/5551378920/il_600x600.5551378920_qecj.jpg', 'Indian hand made Wooden Console table, Cabinet, Hall Table, Handcrafted inlay Furniture , Living room Table, bedroom table', '9469697', 'Adirondack chairs with a classic design and comfortable seating.', 'VintageZen');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/38711392/r/il/55b139/5557826028/il_600x600.5557826028_abo7.jpg', 'Primitive Table Scarf, Handmade Table Topper, Coffee Tablecloth, Woven Centerpiece, Chenille Party Runner, Ethnic Table Sheet, Table Accents', '602273', 'Outdoor bar set with a counter and bar stools for entertaining.', 'SustainableChic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/31383472/r/il/5d1819/3384945751/il_600x600.3384945751_d3ql.jpg', 'Flower bone inlay two door cabinet, bone inlay storage, bone inlay entryway cabinet dusk', '42904040', 'Custom-designed dining table with a unique shape and size.', 'RetroMinimal');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/18738148/c/2361/2361/121/284/il/64de3f/4595763929/il_600x600.4595763929_2y2u.jpg', 'Ottoman Coffee Table , Aztec Patterned Furniture, Handmade Bohemian Bench, Vintage Stool, Ethnic Pouf, Living Room Furniture', '23989899', 'Bespoke sofa with personalized upholstery and features.', 'OpulentOrganic');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/27682330/r/il/1e6307/5710271540/il_600x600.5710271540_ktyq.jpg', 'Handmade Bone inlay Floral  design Bedside Table , Bone inlay Nightstand, Bone Inlay side table, Bone Inlay 3 drawers Dresser', '12195455', 'Handcrafted bedroom set with intricate details and high-quality materials.', 'ModernMinimalist');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/25488668/r/il/86082c/4909400809/il_600x600.4909400809_3k9u.jpg', 'Wholesale Lot Of Indian Vintage Kantha Quilt Handmade Throw Reversible Blanket Bedspread Cotton Fabric BOHEMIAN quilt', '132323', 'One-of-a-kind coffee table with unique materials and design.', 'ClassicContemporary');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/47836346/r/il/942111/5452624286/il_600x600.5452624286_lcd3.jpg', 'wooden cabinet home decor 40 x 50 x 60 cm', '3787879', 'Custom-built outdoor furniture set to match your specific needs.', 'LuxuriousLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20269733/r/il/64a0c8/6171722995/il_600x600.6171722995_h1on.jpg', 'Side table Bajot indian table made of recycled old wood shabby-vintage color', '1562500', 'Adirondack chairs with a classic design and comfortable seating.', 'ClassicRevival');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/17807375/r/il/049d17/5118649466/il_600x600.5118649466_8zmt.jpg', 'Wooden Hand painted Corner Stand with Drawer Side Table Pedestal Stand Unique Indian Art Living room Furniture Wood Bedside Table nightstand', '2462374', 'Outdoor bar set with a counter and bar stools for entertaining.', 'GrandioseGlamour');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/27682330/r/il/70bdeb/4390632613/il_600x600.4390632613_1f0r.jpg', 'Hand-painted Wooden Blue  Color Home Decor Sideboard | Cabinet/Cupboard, Indian Decor Cabinet, Side Table, Handmade, Furniture,Made In India', '14666667', 'Custom-designed dining table with a unique shape and size.', 'RegalResidence');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/42652953/r/il/d7d4e2/4859381246/il_600x600.4859381246_fsas.jpg', 'Indian Antique Wooden Beautiful Wall Hanging Self / Wall Decor / Home Decor / Indian Art / Vintage Wall Hanging Brick Mold.', '1723232', 'Bespoke sofa with personalized upholstery and features.', 'ExquisiteElegance');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/29711936/r/il/df4957/4534501326/il_600x600.4534501326_nhpn.jpg', 'Indian Wooden Bedside Table, Storage Table, Wood Drawer Furniture, Sideboard Handmade Hand Painted Indian Handcrafted Art', '10200000', 'Handcrafted bedroom set with intricate details and high-quality materials.', 'LuxuriousLiving');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/19898918/c/1225/1225/325/12/il/27b35f/6305521619/il_600x600.6305521619_hcy7.jpg', 'Antique Hand-Carved Indian Painted Teakwood Damachiya Console, Vintage Indian Hope Chest, Ethnic Home Decor, Rustic Sideboard, Dowry Chest', '63131313', 'One-of-a-kind coffee table with unique materials and design.', 'OpulentOasis');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/50689962/r/il/9e374e/6126477777/il_600x600.6126477777_3r4b.jpg', 'Free Shipping & Beautiful Gift: Beautiful Antique Wedding Chest/Dowry Chest from India!', '17044034', 'Adirondack chairs with a classic design and comfortable seating.', 'RoyalRhapsody');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/36329267/r/il/756809/5904345285/il_600x600.5904345285_801x.jpg', 'Chakki table', '8238636', 'Outdoor bar set with a counter and bar stools for entertaining.', 'VelvetVisions');
INSERT INTO [products] ([image], [name], [price], [description], [brand]) VALUES ('https://i.etsystatic.com/20415229/r/il/eba026/3352665944/il_600x600.3352665944_fm8b.jpg', 'Wooden Traditional Swing - Indian Jhoola With Back Armrest & Finished With Black Pu and Brass Links', '88131313', 'Custom-designed dining table with a unique shape and size.', 'GoldenGlitz');