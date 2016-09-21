<template>
  <div class="post-list">
    <template v-if="loading > 0">
      Loading
    </template>
    <template v-else>
      <ul>
        <li v-for="post in sortedPosts" :key="post.id">
          {{ post.title }} by
          {{ post.author.firstName }} {{ post.author.lastName }}
          <span>({{ post.votes }} votes)</span>

          <post-upvoter :post-id="post.id"></post-upvoter>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PostUpvoter from './PostUpvoter.vue';

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
  },
  // Local state
  data: () => ({
    posts: [],
    loading: 0,
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
      return this.posts.sort((x, y) => y.votes - x.votes);
    }
  },
};
</script>
