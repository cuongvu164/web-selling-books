using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;

namespace server.Controllers
{
    public class ValuesController : ApiController
    {
        QuanLyBanSachDataContext db = new QuanLyBanSachDataContext();
        //Mã hóa password
        public static string EncodePassword(string originalPassword)
        {
            //Declarations
            byte[] originalBytes;
            byte[] encodedBytes;
            MD5 md5;

            //Instantiate MD5CryptoServiceProvider, get bytes for original password and compute hash (encoded password)
            md5 = new MD5CryptoServiceProvider();
            originalBytes = ASCIIEncoding.Default.GetBytes(originalPassword);
            encodedBytes = md5.ComputeHash(originalBytes);

            //Convert encoded bytes back to a 'readable' string
            return BitConverter.ToString(encodedBytes);
        }
        //Thêm tài khoàn khách hàng
        [HttpPost]
        [Route("account/signup")]
        public bool AddCustomer(string name, string address, string phonenumb, string email, string pass)
        {

            try
            {
                Customer ctm = new Customer();
                ctm.Name = name;
                ctm.Address = address;
                ctm.PhoneNumber = phonenumb;
                ctm.Email = email;
                ctm.Password = EncodePassword(pass);
                db.Customers.InsertOnSubmit(ctm);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        //Kiểm tra đăng nhập
        [HttpPost]
        [Route("account/signin")]
        public List<Customer> SignIn(string email, string password)
        {
            List<Customer> kh = db.Customers.ToList();
            List<Customer> data = new List<Customer>();
            foreach (var item in kh)
            {
                if (item.Email == email && item.Password == EncodePassword(password))
                {
                    data.Add(item);
                }
            }
            return data;

        }
        //Lấy thông tin về sách
        [HttpGet]
        [Route("book")]
        public List<Book> GetAllBook()
        {
            return db.Books.ToList();
        }
    }

}
