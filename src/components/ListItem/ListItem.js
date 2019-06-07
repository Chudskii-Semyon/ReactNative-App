import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

const listItem = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.onImageSelected(props.photoId)}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: props.imageURI}}
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {props.author.first_name} {props.author.last_name}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 100,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 21,
    },
    image: {
        width: 95,
        height: '95%',
    }
});

export default listItem;