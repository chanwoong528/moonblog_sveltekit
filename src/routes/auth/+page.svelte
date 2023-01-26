<script>
  // @ts-nocheck
  import { AuthStore } from "./../../store/AuthStore.js";
  import { baseUrl } from "$lib/utils/customAxios.js";
  import { goto } from "$app/navigation";

  let email;
  let password;
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const req = { email, password };
      const res = await fetch(`${baseUrl}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        credentials: "include",
      });
      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("accToken", data.accToken);
        localStorage.setItem("refToken", data.refToken);
        AuthStore.set(data);
        goto("/");
      }
    } catch (error) {
      console.warn("onSubmitLogin[error]: ", error);
    }
  };
</script>

<h1>login</h1>
<form on:submit={onSubmitLogin} method="POST">
  <input type="text" bind:value={email} />
  <input type="password" bind:value={password} />
  <input type="submit" value="login" />
</form>
