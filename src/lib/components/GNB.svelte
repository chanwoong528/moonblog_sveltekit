<script>
  // @ts-nocheck
  import { page } from "$app/stores";
  import { AuthStore, initAuth } from "../../store/AuthStore";

  import logo from "$lib/assets/icons/moon_logo_bl.png";
  let path;

  $: path = $page.url.pathname;

  let curTab = 0;

  const NavLists = [
    { href: "/", auth: "login", title: "Main" },
    { href: "/about", auth: "login", title: "About" },
    { href: "/post", auth: "login", title: "Post" },
    { href: "/admin", auth: "admin", title: "Admin" },
    { href: "/auth", auth: "none", title: "Login" },
  ];

  let userInfo;
  AuthStore.subscribe((curAuth) => {
    userInfo = curAuth;
  });

  const onClickLogout = () => {
    localStorage.clear();
    userInfo = "";
    AuthStore.set(initAuth);
  };
  const filteredNavList = () => {
    if (!!userInfo.isLoggedIn) {
      //login yes
      if (userInfo.user.admin) {
        // admin show all
        return NavLists.filter((item) => item.auth !== "none");
      } else {
        // logged in but not admin
        NavLists.filter((item) => item.auth === "login");
      }
    } else {
      //not logged in
      return NavLists.filter((item) => item.auth !== "admin");
    }
  };
</script>

<nav class="gnb">
  <div class="gnb-left">
    <h1><img class="moon_logo" src={logo} alt="moon_blog_logo" /></h1>
    {#if !!userInfo.isLoggedIn}
      <h2>welcome {userInfo.user.name}</h2>
    {/if}
  </div>

  <ul class="gnb-right">
    {#each filteredNavList() as navItem, i}
      <li>
        <a href={navItem.href}>{navItem.title}</a>
      </li>
    {/each}
    {#if !!userInfo.isLoggedIn}
      <li>
        <button on:click={onClickLogout}>Logout</button>
      </li>
    {/if}
  </ul>
</nav>
