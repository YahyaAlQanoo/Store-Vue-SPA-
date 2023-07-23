<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>الأقسام</h2>
						<div class="panel-group category-products" id="accordian"><!--category-productsr-->

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="accessories.html">اكسسوريز</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="attention.html">عنايه</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="makeup.html">مكياج</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="bags.html">شنط</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="perfumes.html">عطور</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="devices.html">اجهزه</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="women.html">ملابس نساء</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="men.html">رجال</a></h4>
								</div>
							</div>

						</div><!--/category-products-->


					</div>
				</div>

				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
						<h2 class="title text-center">المنتجات المفضلة</h2>

						<div v-for="(item, index) in favourites" class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="images/products/5.jpeg" alt="" />
										<h2>${{ item.price }}</h2>
										<p>{{ item.name }}</p>
										<a href="#" class="btn btn-default add-to-cart"><i
												class="fa fa-shopping-cart"></i>أضف إلى السلة</a>
									</div>
									<div class="product-overlay">
										<div class="overlay-content">
											<h2>${{ item.price }}</h2>
											<p>{{ item.name }}</p>
											<a href="#" class="btn btn-default add-to-cart"><i
													class="fa fa-shopping-cart"></i>أضف إلى السلة</a>
										</div>
									</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><a href="#" @click="rem_fav(index)"><i class="fa fa-plus-square"></i>حذف من المفضلة</a></li>
									</ul>
								</div>

							</div>
						</div>


					</div><!--features_items-->
				</div>
			</div>
		</div>
	</section>
</template>



<script>
export default {
	data() {
		return {
			products: [],
			favourites: [],
		}
	},
	methods:{
		rem_fav(index){
			this.favourites.splice(index,1);

			for (let index = 0; index < this.products.length; index++) {
				if (this.products[index].favourites !== undefined) {
					delete this.products[index].favourites;
					localStorage.products = JSON.stringify(this.products);  
				}
			}
		},
	},

	created() {
		if (localStorage.products) {
			this.products = JSON.parse(localStorage.products);
			for (let index = 0; index < this.products.length; index++) {
				if (this.products[index].favourites !== undefined) {
					this.favourites.push(this.products[index]);
				}
			}
		}

	},

}
</script>
