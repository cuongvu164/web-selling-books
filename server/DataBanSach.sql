USE [master]
GO
/****** Object:  Database [QuanLyBanSach]    Script Date: 5/18/2021 12:27:41 AM ******/
CREATE DATABASE [QuanLyBanSach]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QuanLyBanSach', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuanLyBanSach.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'QuanLyBanSach_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\QuanLyBanSach_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [QuanLyBanSach] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QuanLyBanSach].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QuanLyBanSach] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET ARITHABORT OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [QuanLyBanSach] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QuanLyBanSach] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QuanLyBanSach] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET  ENABLE_BROKER 
GO
ALTER DATABASE [QuanLyBanSach] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QuanLyBanSach] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [QuanLyBanSach] SET  MULTI_USER 
GO
ALTER DATABASE [QuanLyBanSach] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QuanLyBanSach] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QuanLyBanSach] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QuanLyBanSach] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [QuanLyBanSach] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [QuanLyBanSach] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [QuanLyBanSach] SET QUERY_STORE = OFF
GO
USE [QuanLyBanSach]
GO
/****** Object:  Table [dbo].[Book]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book](
	[Id] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Author] [nvarchar](45) NULL,
	[Price] [int] NOT NULL,
	[Detail] [nvarchar](250) NULL,
	[Image] [nvarchar](250) NULL,
	[Amount] [int] NULL,
	[Publisher] [nvarchar](45) NULL,
	[Type] [nvarchar](50) NULL,
	[Bookshelf_position] [nvarchar](50) NULL,
	[Image2] [nvarchar](250) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bookshelf]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookshelf](
	[Id] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](45) NOT NULL,
	[Position] [nvarchar](45) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](500) NOT NULL,
	[Name] [nvarchar](45) NULL,
	[Address] [nvarchar](45) NULL,
	[PhoneNumber] [nvarchar](11) NULL,
PRIMARY KEY CLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detail_invoice_in]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detail_invoice_in](
	[Id] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detail_invoice_out]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detail_invoice_out](
	[Id] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice_in]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice_in](
	[Id] [nvarchar](50) NOT NULL,
	[Date] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice_out]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice_out](
	[Id] [nvarchar](50) NOT NULL,
	[Date] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Manager]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Manager](
	[Email] [nvarchar](45) NOT NULL,
	[Password] [nvarchar](200) NOT NULL,
	[Name] [nvarchar](45) NULL,
	[Address] [nvarchar](90) NULL,
	[PhoneNumber] [nvarchar](11) NULL,
PRIMARY KEY CLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Publisher]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Publisher](
	[Id] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](45) NOT NULL,
	[Address] [nvarchar](45) NULL,
	[PhoneNumber] [nvarchar](11) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeBook]    Script Date: 5/18/2021 12:27:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeBook](
	[Id] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](45) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'1', N' Yêu - Being In Love', N'OSHO', 132, N'“YÊU” TRONG TỈNH THỨC VỚI OSHO

Một chỉ dẫn “yêu không sợ hãi” đầy ngạc nhiên từ bậc thầy tâm linh Osho', N'https://taisachmoi.com/wp-content/uploads/2021/02/review-sach-yeu-love-tac-gia-osho-pdf.jpg', 10, N'Nhà Xuất Bản Văn Hóa - Văn Nghệ TP.HCM', N'Tiểu thuyết', N'Nước ngoài', N'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/29643.jpg?v=1&w=1200&h=628')
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'2', N'Đắc Nhân Tâm', N'Dale Carnegie', 49, N'Là quyển sách đầu tiên có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới, Đắc Nhân Tâm là cuốn sách đem lại những giá trị tuyệt vời cho người đọc, bao gồm những lời khuyên cực kì bổ ích về cách ứng xử trong cuộc sống hàng ngày. ', N'https://sachhaynendoc.net/wp-content/uploads/2019/07/dac-nhan-tam.jpg', 10, N'Nhà Xuất Bản Tổng Hợp', N'Self-help', N'Nước ngoài', N'https://smlife.vn/wp-content/uploads/2020/03/Sach-Dac-nhan-tam-4.jpg')
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'3', N'Đừng Làm Việc Chăm Chỉ Hãy Làm Việc Thông Minh', N'Thanh Bình', 104, N'Thành công là học cách làm việc THÔNG MINH hơn chứ không phải CHĂM CHỈ hơn! Những người thành công thường chỉ tập trung thời gian của họ vào một vài ưu tiên và luôn nghĩ làm thế nào để mọi việc diễn ra suôn sẻ.', N'https://www.netabooks.vn/Data/Sites/1/News/1252/dung-lam-viec-cham-chi-hay-lam-viec-thong-minh.jpg', 10, N'Nhà Xuất Bản Hồng Đức', N'Self-help', N'Sách dịch', N'https://cf.shopee.vn/file/13d47113109989f87a9c5efc0302556e_tn')
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'4', N'How Psychology Works - Hiểu Hết Về Tâm Lý Học', N'Trần Trương Phúc Hạnh , Phương Hoài Nga', 240, N'MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI!', N'https://thebookland.vn/images/1589364320867_HWPW_1.jpg', 10, N'Nhà Xuất Bản Thế Giới', N'Self-help', N'Sách dịch', N'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525197372l/36747292._SX318_.jpg')
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'5', N'Nóng Giận Là Bản Năng , Tĩnh Lặng Là Bản Lĩnh', N'Tống Mặc', 60, N'Cuốn sách là tập hợp những bài học, lời tâm sự về nhân sinh, luận về cuộc đời của đại sư Hoằng Nhất – vị tài tử buông mọi trần tục để quy y cửa Phật, người được mệnh danh tinh thông kim cổ và cũng có tầm ảnh hưởng lớn trong Phật giáo.', N'https://cungdocsach.vn/wp-content/uploads/2020/08/N%C3%B3ng-gi%E1%BA%ADn-l%C3%A0-b%E1%BA%A3n-n%C4%83ng-c%E1%BA%A3m-x%C3%BAc-l%C3%A0-b%E1%BA%A3n-l%C4%A9nh2.jpg', 10, N'Nhà Xuất Bản Thế Giới', N'Self-help', N'Sách dịch', N'https://salt.tikicdn.com/cache/w444/ts/product/70/9a/98/e6d54019a2079b9565114bce93b245b7.jpg')
INSERT [dbo].[Book] ([Id], [Name], [Author], [Price], [Detail], [Image], [Amount], [Publisher], [Type], [Bookshelf_position], [Image2]) VALUES (N'6', N'Khởi Nghiệp Bán Lẻ ', N'Trần Thanh Phong', 99, N'Khởi Nghiệp Bán Lẻ là quyển sách không thể thiếu cho những ai muốn quản lý cửa hàng và làm giàu bằng ngành bán lẻ.

', N'https://image.voso.vn/users/vosoimage/images/74db2d1bcef60737bef5ad6fb6cf9ae1?t%5B0%5D=compress%3Alevel%3D100&accessToken=6b964446aa8e4e3df8835dfd54b02024d9d5d912a1b63db15ed9b952bccf9687', 10, N'Nhà Xuất Bản Đà Nẵng', N'Kinh tế', N'Việt Nam', N'https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/a1/87/75/c362ad146a3b8a5327b472b8cf4300f4.jpg')
GO
INSERT [dbo].[Customer] ([Email], [Password], [Name], [Address], [PhoneNumber]) VALUES (N'hoangminhzzz123@gmail.com', N'E1-0A-DC-39-49-BA-59-AB-BE-56-E0-57-F2-0F-88-3E', N'Nguyễn Hoàng Minh', N'Khương Đình,Thanh Xuân,Hà Nội', N'0329969129')
GO
USE [master]
GO
ALTER DATABASE [QuanLyBanSach] SET  READ_WRITE 
GO
