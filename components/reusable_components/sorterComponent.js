import React , {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../contants/colors'
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const SorterComponent = (props) => {

    const {config , setConfig} = props

    const toggleSwitchView = () => {
        setConfig({...config,isGridView:!config.isGridView})
    }
    return (
        <View
            style={styles.container}
        >
            <View style={styles.sortContainer}>
                <MatIcon name='sort' color={theme.black} size={20}/>
                <Text style={styles.sortText}>Price - Lowest</Text>
                <MatIcon name='keyboard-arrow-down' color={theme.black} size={20}/>
            </View>
            <View>
                <TouchableOpacity onPress={toggleSwitchView}>
                    {config.isGridView?
                        <MatIcon name='grid-view' color={theme.black} size={20}/>
                        :<MatIcon name='list' color={theme.black} size={20}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.white,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20
    },
    sortContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    sortText:{
        marginHorizontal:10,
        color:theme.black
    }
})

export default SorterComponent
