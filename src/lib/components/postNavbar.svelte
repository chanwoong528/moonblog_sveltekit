<script>
  // @ts-nocheck
  import { TopicStore } from "./../../store/TopicStore.js";
  export let curTopicId;

  let topicList;
  TopicStore.subscribe((curData) => {
    topicList = curData;
  });
  const onClickPostNav = (topicId) => {
    curTopicId = topicId;
  };
</script>

<nav>
  <header>{curTopicId}</header>
  <ul>
    <li>
      <button on:click={() => onClickPostNav("0")}>all</button>
    </li>
    {#each topicList as topic, i}
      <li>
        <button
          on:click={() => {
            onClickPostNav(topic._id);
          }}
        >
          {topic.topic}
        </button>
      </li>
    {/each}
  </ul>
</nav>
