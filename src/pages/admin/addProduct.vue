<template>
	<div className="grid grid-cols-1">
		<div className="text-black text-center"><h2 className="text-[45px] text-center p-4">Add Product</h2></div>
		<div className="text-black text-center content-center">
			<form @submit.prevent="submitForm" className="max-w-lg mx-auto border-1 border-grey-500 rounded p-8">
				<div className="mb-5">
					<label for="pname" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
					<input v-model="product.name" name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required />
				</div>

  						<div className="mb-5">
    						<label for="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
    						<input v-model="product.description" name="description" type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product description" required />
  						</div>

  						<div className="grid grid-cols-2">
  							<div className="mb-5 mr-3">
    							<label for="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
    							<input v-model="product.price" name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" required />
  							</div>

  							<div className="mb-5">
    							<label for="unit" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product unit</label>
    							<select v-model="product.unit" id="unit" name="unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
    								<option>Select unit</option>
    								<option value="Kg">Kg</option>
    								<option value="Piece">Piece</option>
    								<option value="Dozen">Dozen</option>
    							</select>
  							</div>	
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
    						<input @change="handleFileUpload" name="image" accept="image/*" type="file" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image" />
  						</div>
  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview</label>
    						<img   v-if="imagePreview" 
    :src="imagePreview" width="100" className="w-full border border-gray-300 h-[200px]"/>
  						</div>
  						
  						<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Add</button>
  					</form>
  				</div>
			</div>
</template>
<script setup>
	import {ref,computed} from 'vue';
	const URL = "http://127.0.0.1:8000/api/";

	const product = ref({name:"",description:"",price:"",unit:""});
	const imageFile = ref(null);
	const imagePreview = ref(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		imageFile.value = file;

		if (file && typeof window !== 'undefined' && window.URL && window.URL.createObjectURL) {
			imagePreview.value = window.URL.createObjectURL(file);
		} else {
			imagePreview.value = null;
		}
	};

	const submitForm = async () => {
		const formData = new FormData();
		formData.append('name', product.value.name);
  		formData.append('description', product.value.description);
  		formData.append('price', product.value.price);
  		formData.append('unit', product.value.unit);
		formData.append('image', imageFile.value);
		formData.append('useremail', localStorage.getItem('email'));

		try {
  			const response = await fetch('http://127.0.0.1:8000/api/products', {
  				method: 'POST',
  				body: formData,
  			});

  			const data = await response.json();
    		console.log('Success:', data);
    		product.value = {name:"",description:"",price:"",unit:""};
    		imageFile.value = null;
    		imagePreview.value = null;
  		} catch (error) {
    		console.error('Error:', error);
  		}
	};
</script>
<style></style>