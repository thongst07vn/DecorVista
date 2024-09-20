using Microsoft.EntityFrameworkCore;

namespace DecorVistaApi.Models;

public partial class DatabaseContext : DbContext
{
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Address> Addresses { get; set; }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<CartItem> CartItems { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<ChatBox> ChatBoxes { get; set; }

    public virtual DbSet<Consultation> Consultations { get; set; }

    public virtual DbSet<Designer> Designers { get; set; }

    public virtual DbSet<Follow> Follows { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductAttr> ProductAttrs { get; set; }

    public virtual DbSet<SubCategory> SubCategories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__addresse__3213E83F9963994C");

            entity.ToTable("addresses");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.AddressLine1)
                .HasMaxLength(255)
                .HasColumnName("address_line_1");
            entity.Property(e => e.AddressLine2)
                .HasMaxLength(255)
                .HasColumnName("address_line_2");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasMaxLength(255)
                .HasColumnName("country");
            entity.Property(e => e.Landmark)
                .HasMaxLength(255)
                .HasColumnName("landmark");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(255)
                .HasColumnName("phone_number");
            entity.Property(e => e.PostalCode)
                .HasMaxLength(255)
                .HasColumnName("postal_code");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__addresses__user___04E4BC85");
        });

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__cart__3213E83F23F5B354");

            entity.ToTable("cart");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Total).HasColumnName("total");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Carts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__cart__user_id__19DFD96B");
        });

        modelBuilder.Entity<CartItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__cart_ite__3213E83F7A21428A");

            entity.ToTable("cart_item");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.CartId).HasColumnName("cart_id");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.Cart).WithMany(p => p.CartItems)
                .HasForeignKey(d => d.CartId)
                .HasConstraintName("FK__cart_item__cart___1CBC4616");

            entity.HasOne(d => d.Product).WithMany(p => p.CartItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__cart_item__produ__1DB06A4F");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__categori__3213E83F6F827C89");

            entity.ToTable("categories");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<ChatBox>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("chat_box");

            entity.Property(e => e.ChatDay).HasColumnName("chat_day");
            entity.Property(e => e.DesignerId).HasColumnName("designer_id");
            entity.Property(e => e.Message)
                .HasMaxLength(255)
                .HasColumnName("message");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Designer).WithMany()
                .HasForeignKey(d => d.DesignerId)
                .HasConstraintName("FK__chat_box__design__2739D489");

            entity.HasOne(d => d.User).WithMany()
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__chat_box__user_i__2645B050");
        });

        modelBuilder.Entity<Consultation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__consulta__3213E83FEBC93598");

            entity.ToTable("consultations");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DesignerId).HasColumnName("designer_id");
            entity.Property(e => e.Notes)
                .HasMaxLength(255)
                .HasColumnName("notes");
            entity.Property(e => e.ScheduledTime)
                .HasColumnType("datetime")
                .HasColumnName("scheduled_time");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("status");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Designer).WithMany(p => p.Consultations)
                .HasForeignKey(d => d.DesignerId)
                .HasConstraintName("FK__consultat__desig__1332DBDC");

            entity.HasOne(d => d.User).WithMany(p => p.Consultations)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__consultat__user___123EB7A3");
        });

        modelBuilder.Entity<Designer>(entity =>
        {
            entity.HasKey(e => e.DesignerId).HasName("PK__designer__DDA82ABD0CF59764");

            entity.ToTable("designers");

            entity.HasIndex(e => e.Email, "UQ__designer__AB6E6164860C55EB").IsUnique();

            entity.Property(e => e.DesignerId).HasColumnName("designer_id");
            entity.Property(e => e.Avatar)
                .HasMaxLength(255)
                .HasColumnName("avatar");
            entity.Property(e => e.Contactnumber)
                .HasMaxLength(255)
                .HasColumnName("contactnumber");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Role).HasColumnName("role");
            entity.Property(e => e.Specialization)
                .HasMaxLength(255)
                .HasColumnName("specialization");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
            entity.Property(e => e.Yearofexp).HasColumnName("yearofexp");
        });

        modelBuilder.Entity<Follow>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__follow__3213E83FC4A5C628");

            entity.ToTable("follow");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.DesignerId).HasColumnName("designer_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Designer).WithMany(p => p.FollowDesigners)
                .HasForeignKey(d => d.DesignerId)
                .HasConstraintName("FK__follow__designer__17036CC0");

            entity.HasOne(d => d.User).WithMany(p => p.FollowUsers)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__follow__user_id__160F4887");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__order_de__3213E83F54A18EF3");

            entity.ToTable("order_details");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt).HasColumnName("created_at");
            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.Total).HasColumnName("total");
            entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__order_det__user___208CD6FA");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__order_it__3213E83FD2766C7F");

            entity.ToTable("order_item");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.ProductsSkuId).HasColumnName("products_sku_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__order_ite__order__236943A5");

            entity.HasOne(d => d.Product).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__order_ite__produ__245D67DE");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__products__3213E83FAC28A031");

            entity.ToTable("products");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Brand)
                .HasMaxLength(255)
                .HasColumnName("brand");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .HasColumnName("image");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Price).HasColumnName("price");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__products__catego__0C85DE4D");
        });

        modelBuilder.Entity<ProductAttr>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__product___3213E83F3D3CB001");

            entity.ToTable("product_attr");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.ProductId).HasColumnName("product_id");

            entity.HasOne(d => d.Product).WithMany(p => p.ProductAttrs)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__product_a__produ__0F624AF8");
        });

        modelBuilder.Entity<SubCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__sub_cate__3213E83F818C3955");

            entity.ToTable("sub_categories");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.ParentId).HasColumnName("parent_id");

            entity.HasOne(d => d.Parent).WithMany(p => p.SubCategories)
                .HasForeignKey(d => d.ParentId)
                .HasConstraintName("FK__sub_categ__paren__09A971A2");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__users__3213E83FDC4D1174");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "UQ__users__AB6E616481700F03").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Avatar)
                .HasMaxLength(255)
                .HasColumnName("avatar");
            entity.Property(e => e.Contactnumber)
                .HasMaxLength(255)
                .HasColumnName("contactnumber");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Role).HasColumnName("role");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
