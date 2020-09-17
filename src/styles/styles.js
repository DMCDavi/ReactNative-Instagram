import {
    StyleSheet,
    Dimensions
} from 'react-native'

const screen_width = Dimensions.get('window').width

const styles = StyleSheet.create({
    photo_list: {
        width: screen_width/2 - 20,
        height: screen_width/2 - 20,
        margin: 10,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles