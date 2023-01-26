<script>
  // @ts-nocheck
  import { AuthStore, initAuth } from "../../store/AuthStore";
  let userInfo;
  AuthStore.subscribe((curAuth) => {
    userInfo = curAuth;
  });

  const onClickLogout = () => {
    localStorage.clear();
    AuthStore.set(initAuth);
  };
</script>

<nav>
  {#if !!userInfo.isLoggedIn}
    <h3>welcome{userInfo.user.name}</h3>
  {/if}

  <a href="/">main</a>
  <a href="/about">about</a>
  <a href="/post">post</a>
  {#if !!userInfo.user}
    <a href="/admin">admin</a>
  {/if}
  {#if !userInfo.isLoggedIn}
    <a href="/auth">login</a>
  {:else}
    <button on:click={onClickLogout}>logout</button>
  {/if}
</nav>
