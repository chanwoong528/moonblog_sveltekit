import customAxios from "$lib/utils/customAxios";

// @ts-ignore
export async function load({ params }) {
    try {
        const getSinglePost = await customAxios.get(`/post/${params.slug}`);
        const data = await getSinglePost.data;

        return data;
    } catch (error) {
        console.warn("getSinglePost[error]:  ", error)
    }
}