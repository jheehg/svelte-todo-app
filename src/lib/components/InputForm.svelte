<script lang="ts">
	import { list } from "../stores";

    const id = -1;
    let title:string = '';
    let content:string = '';

    const createTodo = () => {
        const newTodoData = {
            id,
            title,
            content
        };
        list.createItem(newTodoData);
    }
</script>

<form on:submit|preventDefault={createTodo}>
    <input name="title" id="title" bind:value={title} class="input input-bordered w-full max-w-xs"/>
    <input name="content" id="content" bind:value={content} class="input"/>
    <button type="submit" class="btn">add</button>
</form>
