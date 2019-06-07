import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ListItem from "../ListItem/ListItem";

const photoList = props => {

    return (
        <FlatList
            style={styles.container}
            data={props.photos}
            renderItem={(info) => (
                <ListItem
                    photoId={info.item.id}
                    imageURI={info.item.urls.regular}
                    author={info.item.user}
                    onImageSelected={props.onImageSelected}
                />
            )}
        />
    );
};


const styles = StyleSheet.create({
    container: {
        width: '95%'
    },
});


export default photoList;