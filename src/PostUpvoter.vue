<template>
  <button @click="upvote">Upvote</button>
</template>

<script>
import gql from 'graphql-tag';

const upvoteMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;

export default {
  // Attribute
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    upvote() {
      // Mutation
      this.$apollo.mutate({
        mutation: upvoteMutation,
        variables: {
          postId: this.postId,
        },
      });
    },
  },
};
</script>
