import React from 'react'
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import appTheme from './theme'

const { COLORS, FONTS, SIZES } = appTheme
const ImageHotel = ({ images }) => {
  const [completed, setCompleted] = React.useState(false)

  const scrollX = new Animated.Value(0)

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === images.length - 1) {
        setCompleted(true)
      }
    })

    return () => scrollX.removeListener()
  }, [])

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {images.map((item, index) => {
          return (
            <View
              //center
              //bottom
              key={`img-${index}`}
              style={styles.imageAndTextContainer}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={{ uri: `https://pibooking.vn/${item.url}` }}
                  resizeMode='cover'
                  style={{
                    width: 365,
                    height: 365,
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: 40,
                  right: 40,
                }}
              >
                {/* <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.gray,
                    textAlign: 'center',
                  }}
                >
                </Text> */}

                <Text
                  style={{
                    ...FONTS.body3,
                    textAlign: 'center',
                    marginTop: SIZES.base,
                    color: COLORS.gray,
                  }}
                >
                  Huy đẹp trai! Ahihi đồ ngốk!!!
                </Text>
              </View>
            </View>
          )
        })}
      </Animated.ScrollView>
    )
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View style={styles.dotsContainer}>
        {images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  )
}

export default ImageHotel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: '-15%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
})
