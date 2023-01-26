import customAxios from '$lib/utils/customAxios';
// @ts-ignore
export async function load() {
    try {
        const getPostList = await customAxios.get("/post");
        const data = getPostList.data;
        const getTopicList = await customAxios.get(`/admin/topic`);
        const topicData = await getTopicList.data.topics

        return { posts: data.posts, topics: topicData }
    } catch (error) {
        console.warn("getPostList[error]:  ", error)
    }
}