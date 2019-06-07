import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text, Button, Image, StyleSheet} from 'react-native'

import {getPhotos} from "../../store/actions/index";
import PhotoList from "../../components/PhotoList/PhotoList";
import {Navigation} from "react-native-navigation";

class PhotosList extends Component {

    componentDidMount() {
        this.props.loadPhotos()
    }

    onImageSelectedHandler = (id) => {

        const selectedPhoto = this.props.photos.find(photo => photo.id === id);

        Navigation.push(this.props.componentId, {
            component: {
                name: 'test-app.PhotoDetailScreen',
                passProps: {
                    photoURI: selectedPhoto.urls.regular,
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Photo Detail'
                        }
                    }
                }
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PhotoList
                    photos={this.props.photos}
                    onImageSelected={this.onImageSelectedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30,
    }
});

const mapDispatchToProps = dispatch => {
    return {
        loadPhotos: () => dispatch(getPhotos())
    }
};

const mapStateToProps = state => {
    return {
        photos: state.photos.photos
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);