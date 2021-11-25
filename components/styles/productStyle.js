import { StyleSheet } from 'react-native';
import { theme } from '../contants/colors';

export const productStyles = StyleSheet.create({
    container :{
        backgroundColor:theme.lightBlue,
        display:'flex',
        flex:1
    },
    imageSliderContainer:{
        position:'relative',
    },
    backIcon:{
        position:'absolute',
        zIndex:2,
        top:10,
        left:10
    },
    imageIcon:{
        position:'absolute',
        zIndex:2,
        bottom:10,
        right:10
    },
    sliderContainer:{
        height:200
    },
    primaryDetailsContainer:{
        backgroundColor:theme.white
    },
    nameLocCont:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    nameLocPriceCont:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10
    },
    productName:{
        color:theme.black,
        fontSize:20,
        fontWeight:'bold'
    },
    productPrice:{
        fontSize:22,
        color:theme.primaryBlue,
        fontWeight:'bold'
    },
    productPerMonth:{
        color:theme.gray
    },

    secondaryDetailsContainer:{
        backgroundColor:theme.white,
        paddingHorizontal:20,
        marginTop:20
    },
    rowSecDetailsCont:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    singleSecDetailsCont:{
        flex:0.5,
        display:"flex",
        flexDirection:'row',
        alignItems:'center'
    },
    singleSecDetailsText:{
        marginLeft:10
    },

    specsContainer:{
        backgroundColor:theme.white,
        marginVertical:20,
    },
    tabContainer:{
        backgroundColor:theme.white
    },
    adContainer:{
        marginVertical: 10,
    },
    similarCars:{
        marginVertical:10,
        paddingHorizontal:10
    },
    similarCarsText:{
        fontSize:18,
        color:theme.black
    }
})
