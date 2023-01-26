<script>
  export let data;

  let post = data.post;
</script>

<h2>{post.title}</h2>
<div>
  {@html post.body}
</div>
