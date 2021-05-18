import React,{useEffect} from 'react';
// import bg from '../../../public/images/logo/logo.png'
import {
  Link
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { setUser as setUserStore } from '../../redux/reducer/user'

const Navbar = () => {
  const loggedInUser = useSelector(store => store.user.user)
  const dispatch = useDispatch()
  const logoutUser = () => {
    dispatch(setUserStore({
      address: null,
      name: null,
      email: null,
      status: false
    }))

  }
  const setLocalStorage = () => {
    console.log('setStorage')
    if (!loggedInUser) {
      const values = {address: null, name: null, email: null, status: false};
      console.log('setStorage2',loggedInUser)
      localStorage.setItem('user',JSON.stringify(values))
      
    }
  }
  setLocalStorage()
  const obj=JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <header id="wn__header" className="header__area header__absolute sticky__header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <div className="logo">
                <Link to="/" onclick={(e) => e.preventDefault()}>
                  <img src="../../images/logo/logo.png" alt="logo images" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu__nav">
                <ul className="meninmenu d-flex justify-content-start">
                  <li className="drop with--one--item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="drop"><Link to="/book">Books</Link>
                  </li>
                  <li className="drop"><a href="shop-grid.html">Kids</a>
                    <div className="megamenu mega02">
                      <ul className="item item02">
                        <li className="title">Top Collections</li>
                        <li><a href="shop-grid.html">American Girl</a></li>
                        <li><a href="shop-grid.html">Diary Wimpy Kid</a></li>
                        <li><a href="shop-grid.html">Finding Dory</a></li>
                        <li><a href="shop-grid.html">Harry Potter</a></li>
                        <li><a href="shop-grid.html">Land of Stories</a></li>
                      </ul>
                      <ul className="item item02">
                        <li className="title">More For Kids</li>
                        <li><a href="shop-grid.html">B&amp;N Educators</a></li>
                        <li><a href="shop-grid.html">B&amp;N Kids' Club</a></li>
                        <li><a href="shop-grid.html">Kids' Music</a></li>
                        <li><a href="shop-grid.html">Toys &amp; Games</a></li>
                        <li><a href="shop-grid.html">Hoodies</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="drop">
                    <a href="#">Pages</a>
                  </li>
                  <li className="drop">
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  
                </ul>
              </nav>
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                <li className="shopcart"><a className="cartbox_active" href="#"><span className="product_qun">0</span></a></li>
                <li style={{marginRight:'15px'}}><a href="/">{obj.name}</a></li>
                    
                  
                {
                  obj.status ? <li><Link to="/" onClick={() => logoutUser()}>LogOut</Link></li> : <li className="setting__bar__icon"><Link className="setting__active" to="/signin" /></li>
                }

              </ul>
            </div>
          </div>
        </div>
      </header>

      <div class="brown--color box-search-content search_active block-bg close__top">
        <form id="search_mini_form" class="minisearch" action="#">
          <div class="field__search">
            <input type="text" placeholder="Search entire store here..." />
            <div class="action">
              <a href="#"><i class="zmdi zmdi-search"></i></a>
            </div>
          </div>
        </form>
        <div class="close__wrap">
          <span>close</span>
        </div>
      </div>

    </>
  );
};

export default Navbar;