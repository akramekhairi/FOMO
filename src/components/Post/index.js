import React from 'react'
import {View,Text, Image, ImageBackground} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Post = (props) => {

    const {post} = props;
    return (
        <View style = {styles.container}>
            <Image source = {{uri: post.image}}
            style = {styles.image}
            resizeMode = {'stretch'}/>


            <View style = {styles.buttoncontainer}>
                <View style = {styles.rightbuttoncontainer}>
                        <Image style = {styles.profilepic} source = {{uri:post.profilepic}}
                        />

                        <AntDesign name = {'heart'} size = {40} color="white"/>
                        <AntDesign name = {'trademark'} size = {40} color="white"/>
                        <FontAwesome name = {'share-square-o'} size = {40} color="white"/>
                </View>
                <View style = {styles.bottomcontainer}>
                    <Text style = {styles.username}>@{post.username}</Text>
                    <Text style = {styles.description}>{post.description}</Text>
                        <View style = {styles.eventrow}>
                            <Text></Text>
                        </View>
                </View>
                
            </View>

            
        </View>

        
    )
};

export default Post;