import React from 'react'
import { View, StyleSheet, Text, ActivityIndicator,FlatList, Dimensions,Image, TouchableWithoutFeedback, Linking, Share, ScrollView, Button } from 'react-native'
const { width, height } =  Dimensions.get('window')
import * as Font from 'expo-font'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';



export default class NewsScreen extends React.Component{

state = {
    news: [],
    loading: true,
    fontLoaded: false,
    query: ''
  }

  // handleInputChange = (e) => {
  //   this.setState({e.target.name: e.target.value})
  // }

  featchnews = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5359df3deeca4fda93007ce1f9b4cc5a')
    .then((res) => res.json())
    .then((response) => {
      this.setState({
        news: response.articles,
        loading: false
      })
    })
  }

  onSubmitEdit = () => {
    // console.log(this.state.query);
    const query = this.state.query
    const link = 'https://newsapi.org/v2/everything?q='+query+'&language=en&sortBy=publishedAt&apiKey=5359df3deeca4fda93007ce1f9b4cc5a';
    console.log(link)
    fetch(link)
    .then((res) => res.json())
    .then((response) => {
      this.setState({
        news: response.articles,
        loading: false
      })
      console.log(response);
    })
    
  }

  shareArticle  = async (url) => {
    try {
      await Share.share({
        message: url
      })
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount(){
    this.featchnews()
    await Font.loadAsync({
      'regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      'medium': require('../../assets/fonts/Poppins-Medium.ttf') 
    })
    this.setState({fontLoaded: true})
  }

  render (){
    if(this.state.loading && !this.state.fontLoaded){
      return(
        <View style={{flex:1, alignContent: 'center',justifyContent: 'center', backgroundColor:'#333'}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:30, color: '#fff', marginTop: 15, marginBottom: 1, textAlign: "center", fontFamily: 'medium'}}>Top Medical News</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="search for news.." onChangeText={query => this.setState({query})} onSubmitEditing={this.onSubmitEdit} />
            {/* <Button style={styles.buttonSearch} title="Search" color="#841584" /> */}
          </View>
  
          <View style={styles.news}>
            <ScrollView>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={this.state.news}
              keyExtractor={key => key}
              renderItem={({item}) => {
                return (
                  <TouchableWithoutFeedback onPress={() => Linking.openURL(item.url)}>
                    <View style={{width: width-50, height:200, backgroundColor: '#fff', marginBottom: 15,borderRadius: 15}}>
                      <Image source={{uri: item.urlToImage}} style={[StyleSheet.absoluteFill, {borderRadius: 15}]} />
                      <View style={styles.gradient}>
                          <Text style={{position: 'absolute', bottom: 0, color: '#fff', fontSize: 20, padding: 5, fontFamily: 'regular'}}>{item.title}</Text>
                          <Text style={{fontSize: 16, fontWeight: 'bold',position: 'absolute', color: '#fff', top: 0, right: 0, padding: 5,fontFamily: 'regular'}} onPress={() => this.shareArticle(item.url)}>Share</Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )
              }}
            />
            </ScrollView>
          </View>
        </View>
      )
    }
  }
}

NewsScreen['navigationOptions'] = screenProps => ({
  title: 'News',
  tabBarIcon: <FontAwesome name="newspaper-o" size={24} color="#194350" />
})

const styles = StyleSheet.create({
  container : {
     flex: 1,
     backgroundColor: '#333',
  },
  header: {
    padding:40
  },
  news: {
    alignSelf: 'center',
    flex: 1
  },
  gradient: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15
  },
  searchContainer: {
    width: 340,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'

  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16
  },
  buttonSearch: {
    width: '10%'
  }
})