<template>
  <span class="author">{{ author.firstName }} {{ author.lastName }}</span>
</template>

<script>
import gql from 'graphql-tag';

const authorQuery = gql`query getAuthor($id: Int!){
  author(id: $id) {
    firstName
    lastName
  }
}`;

export default {
  props: ['id'],
  data: () => ({
    author: {},
  }),
  apollo: {
    author: {
      query: authorQuery,
      variables() {
        return {
          id: this.id,
        };
      },
      result(data) {
        console.log(data.author.firstName);
      },
    },
  },
};
</script>
