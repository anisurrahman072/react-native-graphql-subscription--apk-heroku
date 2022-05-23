import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "ANG") {
      currency
      rate
    }
  }
`;

function ChildPosts() {
  const {loading, error, data} = useQuery(EXCHANGE_RATES);
  return (
    <View>
      <Text>Hello</Text>
      {loading ? <Text>Loading...</Text> : <></>}
      {error ? <Text>Error occurred</Text> : <></>}
      {data ? (
        <View>
          <Text>Hello from post screen</Text>
          {console.log('Data from server...')}
          {console.log(data)}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default function Posts() {
  return (
    <ApolloProvider client={client}>
      <ChildPosts />
    </ApolloProvider>
  );
}
