import React, {Component} from 'react';
import {View, Image, Text,StyleSheet} from 'react-native'


class PhotoDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: this.props.photoURI}}
                />
                <Text>Test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    }
});

export default PhotoDetail;
