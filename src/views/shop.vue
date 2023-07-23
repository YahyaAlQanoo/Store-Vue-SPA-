<template>
  <section>
    <div class="container">
		<input type="text" v-model="search">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>الأقسام</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('اكسسوريز')">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('عنايه')">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('مكياج')">مكياج</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('شنط')">شنط</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('عطور')">عطور</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('اجهزه')">اجهزه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#" @click="setFilter('ملابس نساء')">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="#" @click="setFilter('رجال')">رجال</a></h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">{{ currentFilter }}</h2>

            <div v-for="(item, index) in searchSkills()">
              <div
                class="product-image-wrapper col-sm-4"
                v-if="
                  currentFilter == 'المنتجات' || currentFilter === item.category
                "
              >
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/1.jpeg" alt="" />
                    <h2>${{ item.price }}</h2>
                    <p>{{ item.name }}</p>
                    <a href="#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>${{ item.price }}</h2>
                      <p>{{ item.name }}</p>
                      <a href="#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="#" @click="add_fav(index)"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- {{ yhy() }} -->
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
  <h1 @click="searchSkills()">dfhndfgn</h1>
</template>




<script>
export default {
  data() {
    return {
      products: [],
      currentFilter: "المنتجات",
      search: '',
    };
  },
  methods: {

    searchSkills() {
      // console.log(JSON.parse(localStorage.search)) ;
      const app = this;
	  // console.log(this.products);

	//   alert(app.hyhyhyhyhy.toLowerCase());
      return app.products.filter(function (item) {
        return item.name.toLowerCase().indexOf(app.search.toLowerCase()) !== -1;
      });
    },
    add_fav(index) {
      this.products[index].favourites = 1;
      console.log(this.products);

      localStorage.products = JSON.stringify(this.products);
    },
    setFilter(value) {
      this.currentFilter = value;
    },
    yhy() {
      console.log(localStorage.products);
    },
    pass_id(id) {
      localStorage.setItem("pass", JSON.stringify(id));
    },
  },
  created() {
    // alert(55);
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }
  },
};
</script>
