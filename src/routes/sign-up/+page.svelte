<script lang="ts">
	import OauthLoginButton from '$lib/components/OauthLoginButton.svelte';
	import { toast } from '$lib/stores';

	let email: string;
	let password: string;

	const createUser = async () => {
		await fetch('/api/user/signUp', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then(({ result, message }) => {
				toast.showToast(message);
			});
	};
</script>

<div class="container px-4 mx-auto">
	<div class="max-md:grid md:flex justify-center items-center h-screen">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Sign Up</h2>
				<form on:submit|preventDefault={createUser}>
					<div class="form-control">
						<label class="label" for="title">
							<span class="label-text">Email</span>
						</label>
						<input
							type="text"
							name="email"
							id="email"
							bind:value={email}
							placeholder="Email here"
							class="input input-bordered input-sm w-full"
						/>
						<label class="label" for="content">
							<span class="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							id="password"
							bind:value={password}
							placeholder="Password here"
							class="input input-bordered input-sm w-full"
						/>
						<button type="submit" class="btn btn-sm my-4">Sign Up</button>
						<p>
							Already have an account?<a href="/sign-in" class="ml-1 text-gray-600 font-bold"
								>Login</a
							>
						</p>
					</div>
				</form>
				<div class="divider" />
				<OauthLoginButton />
			</div>
		</div>
	</div>
</div>
