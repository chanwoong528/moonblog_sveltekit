import { writable } from "svelte/store";

export const initAuth = {
    isLoggedIn: false,
    isAdmin: false,
    accToken: "",
    refToken: "",
    user: {},
}

export const AuthStore = writable(initAuth);

