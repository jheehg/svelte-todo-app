<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_APP_URL } from '$env/static/public';
	import OauthLoginButton from '$lib/components/OauthLoginButton.svelte';
	import { toast } from '$lib/stores';

	let email: string;
	let password: string;
	let isLoading = false;

	const createUser = async () => {
		isLoading = true;
		const { data, error } = await $page.data.supabase.auth
			.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${PUBLIC_APP_URL}/sign-in`
				}
			})
			.finally(() => (isLoading = false));

		if (error || !data?.user) {
			toast.showToast('No User signed up');
			return;
		}
		toast.showToast('Please confirm your email to sign in');
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
							type="email"
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
						<button type="submit" class="btn btn-sm my-4" class:loading={isLoading}>Sign Up</button>
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
