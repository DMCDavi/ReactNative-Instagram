import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from '../../styles/styles'
import PhotoCard from './photo_card/photo_card'

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      is_loading: true,
      data_source: [],
    }
  }

  async getData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          is_loading: false,
          data_source: json,
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    if (this.state.is_loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            numColumns={2}
            horizontal={false}
            data={this.state.data_source}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
              <PhotoCard thumbnail_url={item.thumbnailUrl} id={item.id} title={item.title} url={item.url} />
            }
          />
        </SafeAreaView>
      );
    }
  }
};