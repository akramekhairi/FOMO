import React, {useState} from 'react'
import {View,Text, Image, ImageBackground, TouchableOpacity} from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Post = (props) => {
    const [isLiked, setIsLiked] = useState();
    const {post} = props;
    const onLikePress = () => {
        setIsLiked(!isLiked)
    }
    return (
        <View style = {styles.container}>
            <Image source = {{uri: post.image}}
            style = {styles.image}
            resizeMode = {'stretch'}/>


            <View style = {styles.buttoncontainer}>
                <View style = {styles.rightbuttoncontainer}>
                        <Image style = {styles.profilepic} source = {{uri:post.profilepic}}
                        />
                        <TouchableOpacity onPress={onLikePress}><AntDesign name = {'like2'} size = {40} color={isLiked ? "blue":"white"}/></TouchableOpacity>   
                        
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