import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../../../styles/styles'
import { useNavigation } from '@react-navigation/native';

export default function PhotoCard({
    thumbnail_url,
    id,
    title,
    url,
}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Foto',
                    {
                        thumbnail_url ,
                        id,
                        title,
                    })
            }}
        >
            <Image source={{ uri: url }} style={styles.photo_list} />
        </TouchableOpacity>
    );

}