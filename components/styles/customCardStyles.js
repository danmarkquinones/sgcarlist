import { StyleSheet } from 'react-native';
import { theme } from '../contants/colors';

export const customCardStyles = StyleSheet.create({
    textBodyContainer:{
        paddingVertical:10,
        paddingHorizontal:10,
    },
    textListBodyContainer:{
        paddingVertical:10,
        paddingHorizontal:10,
        flex:1
    },
    carName:{
        color:theme.black,
        fontSize:15,
        fontWeight:"bold"
    },
    carPrice:{
       color:theme.primaryBlue ,
       fontWeight:"bold",
       fontSize:15
    },
    line:{
        color:theme.black,
        marginVertical:10,
    },

    // square card
    squareCardContainer :{
        backgroundColor:'#fff',
        borderRadius:5,
        margin:5,
        position:"relative",
        width:150,
        overflow:"hidden",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    iconSquareContainer:{
        position:"absolute",
        backgroundColor:theme.white,
        top:0,
        right:0,
        height:30,
        width:30,
        zIndex:10,
        borderBottomLeftRadius:5,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    imageSquareContainer:{
        height:100,
        backgroundColor:theme.yellow
    },
    carSquareImage:{
        height:100,
        width:150
    },

    // list card
    listCardContainer :{
        backgroundColor:'#fff',
        borderRadius:5,
        margin:5,
        position:"relative",
        overflow:"hidden",
        display:'flex',
        flexDirection:'row',
        height:110,
        width:'90%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    listCardHeader:{
        display:"flex",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    listIconContainer:{
        // flex:1,
        // justifyContent:"flex-end",
    },
    listTextContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    listCarPrice:{
        color:theme.primaryBlue ,
        fontWeight:"bold",
        fontSize:18,
        marginRight:20
    },
    listCarImage:{
        height:110,
        width:150
    },


    // grid card
    gridCardContainer :{
        backgroundColor:'#fff',
        borderRadius:5,
        margin:5,
        position:"relative",
        overflow:"hidden",
        display:'flex',
        width:'50%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    gridCarImage:{
        width:220,
        height:100
    }
});