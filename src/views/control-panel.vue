<template>
    <section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><router-link to="#">الرئيسية</router-link></li>
				  <li class="active">لوحة التحكم</li>
				</ol>
            </div>

            <h4 style="margin-bottom: 3rem;"><router-link to="/add-new-product">اضافة منتج جديد</router-link></h4>

			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">image</td>
							<td class="description">المنتج</td>
							<td class="description">الصنف</td>
							<td class="price">السعر</td>
							<td class="price">تاريخ الاضافة</td>
							<td class="total">العمليات</td>
							<td></td>
						</tr>
					</thead>
					<tbody>	

						<tr v-for="(item , index) in products">
							<td class="cart_product">
								<img src="images/products/8.jpeg" width="70" alt="">
							</td>
							<td class="cart_description">
								<h4><router-link to=""> {{ item.name }}</router-link></h4>
							</td>
							<td class="cart_description">
								<h4><router-link to="">{{ item.category }}</router-link></h4>
							</td>
							<td class="cart_price">
								<p>  {{ item.price }} $</p>
							</td>
							<td class="cart_description">
								<p>{{ item.date }}</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete border-0" @click="deleteItem(index)"><i class="fa fa-times"></i></a>
								<router-link class="cart_quantity_delete"  @click="pass_id(index)" to="/update-product"><i class="fa fa-pencil-square-o"></i></router-link>
								<router-link  class="cart_quantity_delete" @click="pass_id(index)" to="/product-details" ><i class="fa fa-info-circle"></i></router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    </section>
	{{ yhy() }}
</template>




<script>
export default {
  data() {
	return {
		products : [] ,
	}
  },
  methods: {
	yhy(){
		console.log(this.products);
	},
	deleteItem(id) {
			this.products.splice(id,1);
			localStorage.setItem('products',JSON.stringify(this.products));  

		},
		pass_id(id) {
			localStorage.setItem('pass',JSON.stringify(id));  
		}
	},
	created (){
// alert(55);
if(localStorage.products){
	this.products = JSON.parse(localStorage.products);

}
},

}
</script>
