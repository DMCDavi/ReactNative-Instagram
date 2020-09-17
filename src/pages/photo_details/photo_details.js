
import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import photo_details_styles from './photo_details_styles'
import styles from '../../styles/styles'

export default function PhotoDetails({ route }) {

    const { title, id, thumbnail_url } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: thumbnail_url }} style={styles.photo_list} />
            <View style={photo_details_styles.details_photo}>
                <Text style={photo_details_styles.photo_id}>{id}</Text>
                <Text style={photo_details_styles.photo_title}>{title}</Text>
            </View>
        </SafeAreaView>
    );
}