import { StyleSheet } from 'react-native';
import { theme } from '../contants/colors';

export const sellersStyles = StyleSheet.create({
    sellerContainer:{
        backgroundColor:theme.lightBlue,
        flex:1,
    },
    back:{
        // position:'absolute',
        // top:10,
        // left:10,
        // zIndex:2
        marginRight:10
    },
    sellerHeaderContainer :{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:theme.white,
    },
    headerName:{
        fontSize:20,
        color:theme.primaryBlue,
        fontWeight:'500',
        marginVertical:5,
    },
    nameContainer:{
        marginLeft:10
    },


    // tabs
    tabContainer: {
        backgroundColor:theme.lightBlue,
        // height:500,
    },
    scene: {
        flex: 1,
    },
    sceneList:{
    //   padding:20
    },

    //rating
    reviewContainer:{
        backgroundColor:theme.white,
        paddingHorizontal:20,
    },
    ratingHeaderContainer:{
        backgroundColor:theme.white,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10
    },
    ratingContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        color:theme.primaryBlue
    },
    headerRate:{
        fontSize:20,
        color:theme.yellow,
        fontSize:30,
        marginRight:10,
        fontWeight:'bold'
    },

    //comment
    commentContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginVertical:10
    },
    commentName:{
        fontWeight:'500',
        color:theme.black
    },
    comment:{
        color:theme.black
    },
    commentRate:{
        fontSize:20,
        color:theme.primaryBlue,
        fontWeight:'bold',
    }
})

