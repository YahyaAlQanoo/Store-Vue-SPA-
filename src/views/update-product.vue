<template>
     <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">تعديل بيانات منتج</h2>    			    				    				
					<!--<div id="gmap" class="contact-map">
					</div>-->
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<div class="status alert alert-success" style="display: none"></div>
				    	<form id="main-contact-form" class="contact-form row" name="contact-form" >
				            <div class="form-group col-md-6">
				                <input type="text" name="name" v-model="name" class="form-control" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="text"  v-model="price" class="form-control" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select v-model="category" class="form-control">
                                    <option>اكسسوريز</option>
                                    <option>عنايه</option>
                                    <option>مكياج</option>
                                    <option>شنط</option>
                                    <option>عطور</option>
                                    <option>اجهزه</option>
                                    <option>ملابس نساء</option>
                                    <option>رجال</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
				                <input type="file" name="image" class="form-control"  placeholder="اختر صورة المنتج">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea v-model="message" id="message" required="required" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
								<router-link  @click="editItem()" to="/control" class="btn btn-primary pull-right">حفظ التعديلات</router-link >
				            </div>
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
	<!-- {{}} -->
<h1 @click="show()">jghvhghfc</h1>
</template>


<!-- <script>
export default {
  data() {
	return {
		products : JSON.parse(localStorage.products),
	}
  },
  methods: {

	deleteItem(id) {
			this.products.splice(id,1);
			localStorage.setItem('products',JSON.stringify(this.products));  

		},
		pass_id(id) {
			localStorage.setItem('pass',JSON.stringify(id));  

		}
	}

}
 </script> -->
<script>
export default {
  data() {
	return {
		name : '',
		price : '',
		category : '',
		message : '',
		products : JSON.parse(localStorage.products),
		value_old:{},
		newPro:{},
		date : new Date().toLocaleString(),
		id:''
	}
  },
  methods: {
	show(){
		// console.log(this.products);
		this.id = JSON.parse(localStorage.pass)

		this.value_old = this.products[this.id];
		// console.log(this.value_old);
		// console.log(this.value_old.name);
		this.name = this.value_old.name;
		this.price = this.value_old.price;
		this.category = this.value_old.category;
		this.message = this.value_old.message;
	},
	editItem() {
				console.log(this.products);
				this.id = JSON.parse(localStorage.pass)

				this.products[this.id].name = this.name;
				this.products[this.id].price = this.price;
				this.products[this.id].category = this.category;
				this.products[this.id].message = this.message;
				localStorage.setItem('products',JSON.stringify(this.products));  

				// date:this.date,


		}
	},
	created() {
		// alert(55);
		this.id = JSON.parse(localStorage.pass)

		this.value_old = this.products[this.id];
		// console.log(this.value_old);
		// console.log(this.value_old.name);
		this.name = this.value_old.name;
		this.price = this.value_old.price;
		this.category = this.value_old.category;
		this.message = this.value_old.message;
	},


}
</script>
