<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import OauthLoginButton from '$lib/components/OauthLoginButton.svelte';
	import { toast } from '$lib/stores';

	let email: string;
	let password: string;
	let isLoading = false;

	const signInUser = async () => {
		isLoading = true;
		const { data, error } = await $page.data.supabase.auth
			.signInWithPassword({
				email,
				password
			})
			.finally(() => (isLoading = false));

		if (error) {
			toast.showToast('Invalid login credentials');
			return;
		}

		if (data?.session) {
			goto('/todo');
		}
	};
</script>

<div class="container px-4 mx-auto">
	<div class="max-md:grid md:flex justify-center items-center h-screen">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Sign In</h2>
				<form on:submit|preventDefault={signInUser}>
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
						<button type="submit" class="btn btn-sm my-4" class:loading={isLoading}>Sign In</button>
						<p>
							Don't have an account?<a href="/sign-up" class="ml-1 text-gray-600 font-bold"
								>Sign Up</a
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
