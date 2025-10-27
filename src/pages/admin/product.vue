<template>
	<div className="w-full p-8">
		<h1 className="-mt-10 text-[45px] text-center p-4">Product List</h1>
		<div class="add-button">
			<button>
				<RouterLink to="/add-product" className="text-[16px] font-normal hover:text-gray-300"><i class="fa fa-plus"></i> Add Product</RouterLink>
       		</button>
       	</div>

       	<div class="table-container">
       		<table className="min-w-full border border-gray-200 bg-stipped">
       			<thead>
       				<tr>
                    	<th>ID</th>
                    	<th>Name</th>
                    	<th>Description</th>
                    	<th>Image</th>
                    	<th>Action</th>
                	</tr>
            	</thead>
            	<tbody>
            		<tr v-for="item in products" :key="item.id">
            			<th>{{ item.id }}</th>
            			<th>{{ item.name }}</th>
            			<th>{{ item.description }}</th>
            			<th v-if="item.image">
            				<img :src="`http://127.0.0.1:8000/uploads/${item.image}`" alt="Product Image" width="50" />
            			</th>
            			<th v-else="item.image">
            				<img :src="`http://127.0.0.1:8000/uploads/common.jpg`" alt="Product Image" width="50" />
            			</th>
            			<th>
            				
                        			<button className="btn edit" title="Edit"><i class="fa fa-edit"></i></button>
                        			<button className="btn delete" title="Delete"><i class="fa fa-trash"></i></button>
                    			
            			</th>
            		</tr>
            	</tbody>
            </table>
    	</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from 'vue';
	const products = ref([]);
	const URL = "http://127.0.0.1:8000/api/";
	import { useRouter, useRoute, RouterLink } from 'vue-router'
	// READ: Get all posts
const fetchProducts = async () => {
  try {
    const res = await fetch(`${URL}products`); // limit to 5 posts
    const result = await res.json();
    if(res.ok){
    	products.value = result.data;
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};
onMounted(fetchProducts);
</script>
<style scoped>
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }

        .add-button {
            text-align: right;
            margin-bottom: 20px;
        }

        .add-button button {
            background-color: #28a745;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        .add-button button i {
            margin-right: 5px;
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }

        th, td {
            padding: 12px 15px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f1f1f1;
            color: #333;
            font-weight: bold;
        }

        tr:hover {
            background-color: #f9f9f9;
        }

        img.product-img {
            width: auto;
            height: 80px;
            object-fit: cover;
            border-radius: 5px;
            display: block;
            margin: 0 auto;
        }

        .btn {
            padding: 8px 12px;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            cursor: pointer;
        }

        .btn.edit {
            background-color: #007bff;
        }

        .btn.delete {
            background-color: #dc3545;
            margin-left: 5px;
        }

        .btn i {
            pointer-events: none;
        }

        @media screen and (max-width: 600px) {
            th, td {
                font-size: 14px;
                padding: 10px;
            }

            .add-button button {
                font-size: 14px;
                padding: 8px 12px;
            }
        }

</style>