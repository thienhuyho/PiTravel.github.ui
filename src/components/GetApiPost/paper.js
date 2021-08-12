import React, { useEffect, useReducer } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { actionCreators, initialState, reducer } from './posts';

const Paper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchPosts() {
            dispatch(actionCreators.loading());
            try {
                // for (let i = 0; i <= 1000000000; i++);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await response.json();
                console.log(posts);
                setTimeout(() => {
                    dispatch(actionCreators.success(posts));
                }, 3000);

            } catch (error) {
                dispatch(actionCreators.failure());
            }
        }
        fetchPosts();
    }, []);

    const { loading, error, posts } = state;
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator animating={true} color={'red'} />
            </View>
        )
    }
    if (error) {
        return (
            <View style={styles.center}>
                <Text>Failed to load posts!</Text>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.container}
            keyExtractor={(post) => post.id}
            data={posts}
            renderItem={({ item: { id, title, body }, index }) => (
                <View key={id} style={styles.post}>
                    <Text style={styles.title}>
                        {index}. {title}
                    </Text>
                    <Text style={styles.body}>{body}</Text>
                </View>
            )}

        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ACDA5',
    },
    post: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingVertical: 20,
        paddingRight: 20,
        marginLeft: 20,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    body: {
        marginTop: 10,
        fontSize: 14,
        color: '#F8F8F8',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default Paper

