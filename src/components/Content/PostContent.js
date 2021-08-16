import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Button } from 'react-native'
import Posts from '../GetApiPost/posts';
import RenderHTML from "react-native-render-html";

const PostContent = () => {
    const [post, setPost] = React.useState([]);
    const [isShowPost, setIsShowPost] = React.useState(false);
    useEffect(() => {
        fetch('https://pibooking.vn/api/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                // Alert.alert("The film at 2nd:  " + responseJson.movies[1].title);
                console.log('success');
                console.log('du lieu:', responseJson);
                setPost(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    console.log(post);
    // const htmlTitle = `${post.name}`

    const html = `${post.content}`
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {
                isShowPost ?
                    <>
                        <Text style={styles.text}>{post.name}</Text>
                        <RenderHTML contentWidth={width} source={{ html }} />
                    </>
                    : null
            }
            <Button title={isShowPost ? 'thu gọn' : 'xem thêm...'} onPress={() => setIsShowPost(!isShowPost)} />
        </View>
    )
}

export default PostContent

const styles = StyleSheet.create({
    text: {
        color: '#00a99d',
        fontWeight: 'bold',
    },
    container: {
        padding: 10,
    }
})
