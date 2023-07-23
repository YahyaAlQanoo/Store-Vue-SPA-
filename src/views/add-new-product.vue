<template>
     <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">إضافة منتج جديد</h2>    			    				    				
					<!--<div id="gmap" class="contact-map">
					</div>-->
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<div class="status alert alert-success" style="display: none"></div>
				    	 <form id="main-contact-form" class="contact-form row"  > 
				             <div class="form-group col-md-6">
				                <input type="text" v-model="name" class="form-control" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="text" v-model="price"  class="form-control" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select  v-model="category" class="form-control">
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
				                <input type="file" name="image" class="form-control" required="required" placeholder="اختر صورة المنتج">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea  v-model="message" required="required" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
								 <router-link  @click="addItem()" to="/control" class="btn btn-primary pull-right">اضافة</router-link >

				            </div> 
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
</template>


<script>
export default {
  data() {
	return {
		name : '',
		price : '',
		category : '',
		message : '',
		products : [],
		newPro:{},
		date : new Date().toLocaleString(),
	}
  },
  methods: {
	addItem() {

			this.newPro = {
				name:this.name,
				price:this.price,
				category:this.category,
				message:this.message,
				date:this.date,
			}

			this.products.push(this.newPro);
			localStorage.setItem('products',JSON.stringify(this.products));  

			console.log(localStorage.products);

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
