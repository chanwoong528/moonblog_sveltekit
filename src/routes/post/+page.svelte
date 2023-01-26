<script>
  // @ts-nocheck
  import { TopicStore } from "./../../store/TopicStore.js";
  import { PostStore } from "../../store/PostStore.js";

  import PostNavbar from "$lib/components/postNavbar.svelte";

  export let data;
  let posts;
  let curTopicId = "0";

  TopicStore.set(data.topics);
  PostStore.set(data.posts);
  PostStore.subscribe((curData) => {
    posts = curData;
  });

  $: filteredPost =
    curTopicId === "0"
      ? posts
      : posts.filter((post) => post.postType === curTopicId);
</script>

<PostNavbar bind:curTopicId />
<h1>post main page</h1>
<a href="/post/new">create post</a>

{#if filteredPost.length < 1}
  <div>no posts</div>
{:else}
  <ul>
    {#each filteredPost as post, i}
      <li>
        <a href={`post/${post._id}`}>
          {i + 1}: {post.title}
        </a>
      </li>
    {/each}
  </ul>
{/if}
