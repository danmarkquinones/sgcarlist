import { StyleSheet } from 'react-native';
import { theme } from '../../../contants/colors';

export const tosStyles = StyleSheet.create({
    tosContainer :{
        backgroundColor:theme.white,
        display:'flex',
        flex:1,
        paddingVertical:20,
        paddingHorizontal:20
    },
    textContainer:{
        marginVertical:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },  
    text:{
        color:theme.black,
        fontSize:18,
        marginVertical:10
    },
})

