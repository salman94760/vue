<template>
	<div className="grid grid-cols-2">
				<div className="text-black text-center h-screen content-center"><h2 className="text-[100px] text-italic italic font-medium font-[roboto]">Login</h2></div>
    			<div className="text-black text-center content-center">
    				<form className="max-w-sm mx-auto border-1 border-grey-500 rounded p-8">

						<div className="mb-5">
							<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
    					<input v-model="loginData.email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  					</div>

  					<div className="mb-5">
    					<label for="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password *</label>
    					<input v-model="loginData.password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
  					</div>

  					<div className="flex items-start mb-5">
    					<div className="flex items-center h-5">
      					<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    					</div>
    					
    						<label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  					</div>
  					
  					<button @click="loginUser" type="button" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Submit</button>
  				</form>
  			</div>
			</div>
</template>
<script setup>
	import { ref } from 'vue';
	const URL = "http://127.0.0.1:8000/api/";
	const loginData = ref({ email: '', password: '' });	

	const loginUser = async () => {
		try {
			const res = await fetch(`${URL}login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData.value),
			});

			const result = await res.json();
			if (res.ok) {
				localStorage.setItem('id', result.user.id);
        		localStorage.setItem('name',result.user.name);
        		localStorage.setItem('email', result.user.email);
      			alert('Login successful!');
      			loginData.value = { email: '', password: '' };
    		} else {
      			alert('Login failed: ' + data.message);
    		}
  		} catch (err) {
    		console.error('Login error:', err);
  		}
	};
</script>

<style></style>