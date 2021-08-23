import React, { useEffect, useReducer } from 'react'
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Button,
  Pressable,
} from 'react-native'
import Posts from '../GetApiPost/posts'
import RenderHTML from 'react-native-render-html'
import colors from '../../theme/colors'

const PostContent = () => {
  const [post, setPost] = React.useState([])
  const [isShowPost, setIsShowPost] = React.useState(false)
  useEffect(() => {
    fetch('https://pibooking.vn/api/posts')
      .then(response => response.json())
      .then(responseJson => {
        // Alert.alert("The film at 2nd:  " + responseJson.movies[1].title);
        setPost(responseJson)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  // const htmlTitle = `${post.name}`

  const html = `${post.content}`
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{post.name}</Text>

      {isShowPost ? (
        <>
          <RenderHTML contentWidth={width} source={{ html }} />
        </>
      ) : null}

      <Pressable
        style={styles.button}
        onPress={() => setIsShowPost(!isShowPost)}
      >
        <Text style={styles.textButton}>
          {isShowPost ? 'Thu gọn' : 'xem thêm...'}
        </Text>
      </Pressable>
    </View>
  )
}

export default PostContent

const styles = StyleSheet.create({
  text: {
    color: colors.lightGreen,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    color: colors.lightGrey,
  },
  textButton: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
})
