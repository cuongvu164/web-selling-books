import React,{useState,useEffect} from 'react';

const Product = () => {
  return (
    <>
      <section className="wn__bestseller__area bg--white pt--80  pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__title text-center">
                <h2 className="title__be--2">All <span className="color--theme">Products</span></h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered lebmid alteration in some ledmid form</p>
              </div>
            </div>
          </div>

          <div className="tab__container mt--60">
            {/* Start Single Tab Content */}
            <div className="row single__tab tab-pane active" id="nav-all" role="tabpanel">
              <div className="product__indicator--4 arrows_style">
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                <div className="single__product">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="product product__style--3">
                      <div class="product__thumb">
                        <a class="first__img" href="single-product.html"><img src="../../images/books/1.jpg" alt="product image" /></a>
                        <a class="second__img animation1" href="single-product.html"><img src="../../images/books/2.jpg" alt="product image" /></a>
                        <div class="hot__box">
                          <span class="hot-label">HOT</span>
                        </div>
                      </div>
                      <div class="product__content content--center content--center">
                        <h4><a href="single-product.html">Ghost</a></h4>  {/* ten sp */}
                        <ul class="prize d-flex">
                          <li>$50.00</li>            {/* gia sp */}
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
                  </div>
                </div>
                

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Product;