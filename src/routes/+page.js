import customAxios from '$lib/utils/customAxios';
import { AuthStore } from '../store/AuthStore';
// @ts-ignore
export async function load() {
    try {
        const res = await customAxios("/auth");
        const data = await res.data;
        if (res.status === 200) {
            AuthStore.set(data);
        }
    } catch (error) {
        // console.warn("root check if loggedIn user or not[error]: ", error)
    }

}