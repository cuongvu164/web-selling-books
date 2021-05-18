import React,{useState,useEffect} from 'react';
import axios from 'axios'

const BookPage = () => {
  const [books, setBooks] = useState([])

  const fetchAllBook = async () => {
    await axios.get('http://localhost:5000/book', {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => {
      setBooks(response.data)
      console.log('Sach',response.data)
    })
  }

  useEffect(() =>{
    fetchAllBook()
    console.log('user',books)
  }, [])
  return (
    <>
      <div class="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
              <div class="shop__sidebar">
                <aside class="wedget__categories poroduct--cat">
                  <h3 class="wedget__title">Product Categories</h3>
                  <ul>
                    <li><a href="#">Biography <span>(3)</span></a></li>
                    <li><a href="#">Business <span>(4)</span></a></li>
                    <li><a href="#">Cookbooks <span>(6)</span></a></li>
                    <li><a href="#">Health & Fitness <span>(7)</span></a></li>
                    <li><a href="#">History <span>(8)</span></a></li>
                    <li><a href="#">Mystery <span>(9)</span></a></li>
                    <li><a href="#">Inspiration <span>(13)</span></a></li>
                    <li><a href="#">Romance <span>(20)</span></a></li>
                  </ul>
                </aside>

                <aside class="wedget__categories poroduct--tag">
                  <h3 class="wedget__title">Product Tags</h3>
                  <ul>
                    <li><a href="#">Biography</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Cookbooks</a></li>
                    <li><a href="#">Health & Fitness</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Mystery</a></li>
                    <li><a href="#">Inspiration</a></li>
                  </ul>
                </aside>
              </div>
            </div>

            <div class="col-lg-9 col-12 order-1 order-lg-2">
              <div class="tab__container">
                <div class="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">

                    {
                      books.map((book,index) =>{
                        return (
                          <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src={book.Image} alt="product image" /></a>{/* /anh1 o day */}
                        <a class="second__img animation1" href="single-product.html"><img src={book.Image2} alt="product image" /></a>{/* /anh2 o day */}
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center">
                        <h4><a href="single-product.html">{book.Name}</a></h4>{/* /ten o day */}
                        <ul class="prize d-flex">
                          <li>${book.Price}</li>{/* /gia o day */}
                        </ul>
                        <div class="action">
                          <div class="actions_inner">
                            <ul class="add_to_links">
                              <li><a class="cart" href="cart.html"><i class="bi bi-shopping-bag4"></i></a></li>
                              <li><a class="wishlist" href="wishlist.html"><i class="bi bi-shopping-cart-full"></i></a></li>
                              <li><a class="compare" href="#"><i class="bi bi-heart-beat"></i></a></li>
                              <li><a data-toggle="modal" title="Quick View" class="quickview modal-view detail-link" href="#productmodal"><i class="bi bi-search"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="product__hover--content">
                          <ul class="rating d-flex">
                            <li class="on"><i class="fa fa-star-o"></i></li>
                            <li class="on"><i class="fa fa-star-o"></i></li>
                            <li class="on"><i class="fa fa-star-o"></i></li>
                            <li><i class="fa fa-star-o"></i></li>
                            <li><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                        )
                      })
                    }
                    

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;