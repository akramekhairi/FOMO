import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width :'100%',
        height: Dimensions.get('window').height,
    },

    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },

    buttoncontainer: {

        height: '100%',
        justifyContent: 'flex-end'
    },
    
    rightbuttoncontainer: {
        alignSelf: 'flex-end',
        height:250,
        justifyContent : 'space-between'
    },

    profilepic: {
        width:50,
        height:50,
        borderRadius:50,
        borderColor:'#fff',
        borderWidth:2,


        


    },

    iconcontainer: {
        alignItems: 'center',
    },
    username: {
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        margin:5,

    },
    description: {
        color:'#fff',
        fontSize:16,
        fontWeight:'300',
        margin:5,
        
    },
    eventrow: {
        flexDirection: 'row',
    },
    bottomcontainer:
    {
        padding:10,
        backgroundColor:'rgba(0,0,0,0.4)',
    }
});

export default styles;