<template>
  <header id="header">
    <!--header-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <router-link to="/"
                ><img src="images/home/logo-2.png" alt=""
              /></router-link>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="/account" class="active"
                    ><i class="fa fa-user"></i> الحساب</router-link
                  >
                </li>
                <li>
                  <router-link to="/favorite"
                    ><i class="fa fa-star"></i> المفضلة</router-link
                  >
                </li>
                <li>
                  <router-link to="/checkout"
                    ><i class="fa fa-crosshairs"></i> الدفع</router-link
                  >
                </li>
                <li>
                  <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i> عربة
                    التسوق</router-link
                  >
                </li>
                <li>
                  <router-link to="/login"
                    ><i class="fa fa-lock"></i> تسجيل الدخول</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/">الرئيسية</router-link></li>
                <li><router-link to="/shop">المنتجات</router-link></li>
                <li><router-link to="/contact">تواصل معنا</router-link></li>
                <li><router-link to="/control">لوحة التحكم</router-link></li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="بحث" v-model="search" />
            </div>
          </div> -->
		  <InputSearch />

        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
  <!--/header-->

  <router-view  />
  <footer id="footer">
    <!--Footer-->

    <div class="footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="companyinfo" style="margin-top: 5px">
              <h2 style="font-size: 38px"><span>e</span>-mall</h2>
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>-->
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>روابط</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="/">الرئيسية</router-link></li>
                <li><router-link to="/account">الحساب</router-link></li>
                <li><router-link to="/favorite">المفضلة</router-link></li>
                <li><router-link to="/cart">عربة التسوق</router-link></li>
                <li><router-link to="/login">التسجيل</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>تسوق سريع</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="#">تي شيرت</router-link></li>
                <li><router-link to="#">رجالي</router-link></li>
                <li><router-link to="#">حريمي</router-link></li>
                <li><router-link to="#">بطاقات الهدايا</router-link></li>
                <li><router-link to="#">أحذية</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>عن المتجر</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="/404">معلومات الشركة</router-link></li>
                <li><router-link to="/404">الوظائف</router-link></li>
                <li><router-link to="/404">موقع المتجر</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <p style="text-align: center">
            Copyright © E-MALL Inc.{{ year }} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!--/Footer-->
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<!-- <script>
let year = document.write(new Date().getFullYear());
</script> -->


<script>
import InputSearch from "@/components/InputSearch.vue";
// import InputSearch from "@/components/InputSearch.vue";

export default {
    data() {
        return {
        //   search: "",
        };
    },
    methods: {},
    watch: {
        search(val) {
            // localStorage.setItem("search", JSON.stringify(val));
            console.log(val);
        },
    },
    components: { InputSearch }
};
</script>
