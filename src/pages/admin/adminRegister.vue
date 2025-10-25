<template>
	<div className="grid grid-cols-2">
				<div className="text-black text-center h-screen content-center"><h2 className="text-[100px] text-italic italic font-medium font-[roboto]">Register</h2></div>
    			<div className="text-black text-center content-center">
    				<form className="max-w-sm mx-auto border-1 border-grey-500 rounded p-8">
    					<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname *</label>
    						<input v-model="registerData.username" type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
    						<input v-model="registerData.email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone *</label>
    						<input v-model="registerData.phone" type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
  						</div>

  						<div className="mb-5">
    						<label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    							<textarea v-model="registerData.address" id="address" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  						</div>
  						<button type="submit" className="text-left text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black py-2 px-4 rounded">Register</button>
  					</form>
  				</div>
			</div>
</template>
<script setup>
	import { ref } from 'vue';
	const URL = "http://127.0.0.1:8000/api/";
	const registerData = ref({ fullname: '', email: '', phone: '', address: '' });

	const registerUser = async () => {
		try {
			const res = await fetch(`${URL}register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registerData.value),
			});

			const data = await res.json();
			if (res.ok) {
				alert('Registration successful! Please login.');
				registerData.value = { fullname: '', email: '', phone: '', address: '' };
			} else {
				alert('Error: ' + data.message);
			}
		} catch (err) {
			console.error('Registration failed:', err);
		}
	};
</script>
<style></style>