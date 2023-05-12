<script lang="ts">
	import type { ITodoItem } from "$lib/types";
    import { list } from '$lib/stores'

    export let item:ITodoItem;

    let title:string = '';
    let content:string = '';
    let isEditable = false;

    const toggleModo = () => isEditable = !isEditable;

    const updateTodo = () => {
        const updatedData = {
            title,
            content
        };
        list.updateItem(updatedData);
    }

    const toggleCompleted = (item: ITodoItem) => {
        const updatedData = {
            id: item.id,
            isCompleted: !item?.isCompleted
        };
        list.updateItem(updatedData);
    }
</script>

<li>
    {#if isEditable}
        <input name="title" id="title" bind:value={title} class="input input-bordered"/>
        <input name="content" id="content" bind:value={content} class="input input-bordered"/>
        <button on:click={updateTodo} class="btn btn-sm">Confirm</button>
        <button on:click={toggleModo} class="btn btn-sm">Back</button>
    {:else}
        <p>{item.title}</p>
        <p>
            {item.content}
            {#if !item.isCompleted}
                <button on:click={() => toggleCompleted(item)}>⬜️</button>
            {:else}
                <button on:click={() => toggleCompleted(item)}>✅</button>
            {/if} 
        </p>
        <button on:click={toggleModo} class="btn btn-sm">Edit</button>
    {/if}
    
    <button on:click={() => list.deleteItem(item.id)} class="btn btn-sm">Delete</button>
</li>