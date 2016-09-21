import Vue from 'vue';
import App from './App.vue';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import VueApollo from 'vue-apollo';

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
});

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
});

// Start the app
new Vue({
  el: '#app',
  render: h => h(App)
});
