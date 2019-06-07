import React from 'react'
import {Provider} from 'react-redux'
import {Navigation} from 'react-native-navigation'

import PhotoListScreen from './src/screens/PhotosList/PhotosList'
import PhotoDetailScreen from './src/screens/PhotoDetail/PhotoDetail'
import configureStore from './src/store/configureStore'

const store = configureStore();

Navigation.registerComponent('test-app.PhotoDetailScreen', () => PhotoDetailScreen);

Navigation.registerComponent('test-app.PhotoListScreen', () => (props) => (
    <Provider store={store}>
        <PhotoListScreen {...props}/>
    </Provider>
), () => PhotoListScreen);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'test-app.PhotoListScreen',
                        },
                    },
                ],
                options: {
                    topBar: {
                        title: {
                            text: 'Photo List',
                        },
                    },
                },
            },
        },
    });
});