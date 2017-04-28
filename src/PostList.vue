<template>
  <div class="post-list">
    <template v-if="loading > 0">
      Loading
    </template>
    <template v-else>
      <ul>
        <li v-for="post in sortedPosts" :key="post.id">
          {{ post.title }} by
          <span @click="authorId = post.author.id">{{ post.author.firstName }} {{ post.author.lastName }}</span>
          <span>({{ post.votes }} votes)</span>

          <post-upvoter :post-id="post.id"></post-upvoter>
        </li>
      </ul>
    </template>

    <author v-if="authorId" :id="authorId"></author>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PostUpvoter from './PostUpvoter.vue';
import Author from './Author.vue';

// GraphQL query
const postsQuery = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

// Component def
export default {
  components: {
    PostUpvoter,
    Author,
  },
  // Local state
  data: () => ({
    posts: [],
    loading: 0,
    authorId: null,
  }),
  // Apollo GraphQL
  apollo: {
    // Local state 'posts' data
    posts: {
      query: postsQuery,
      loadingKey: 'loading',
    },
  },
  // Computed properties
  computed: {
    sortedPosts() {
      return this.posts.slice().sort((x, y) => y.votes - x.votes);
    }
  },
};
</script>
