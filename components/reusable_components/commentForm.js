import React from 'react'
import { StyleSheet, View , Text, Dimensions } from 'react-native'
import { Rating , Divider} from 'react-native-elements'
import { theme } from '../contants/colors'
import { OffCancelButton, PrimaryButton } from '../custom_components/customButtons'
import PrimaryInput from '../custom_components/customInput'

const windowWidth = Dimensions.get('window').width;

const CommentForm = (props) => {

    const {form , setForm, onSubmit , onCancel} = props 

    const onChange = (value) => {
        setForm({...form , comment : value})
    }

    const onRating = (rating) => {
        setForm({...form , rating : rating})
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Rate & Review</Text>
            </View>
            <Divider/>
            <View style={styles.rateContainer}>
                <Text style={styles.ratelabel}>Rate : </Text>
                <Rating imageSize={20} onFinishRating={onRating}/>
            </View>
            <View>
                <Text style={styles.commentLabel}>Comment/Review : </Text>
                <PrimaryInput value={form.comment} onChange={onChange} multiline={true} borderColor={theme.gray} editable={true} height={100} textAlignVertical="top"/>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryButton title="Submit" onPress={onSubmit} color={theme.primaryBlue} />
                <OffCancelButton title="Cancel" onPress={onCancel}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        padding:10,
        width:windowWidth*0.9
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:theme.primaryBlue,
        marginBottom:10
    },
    rateContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    ratelabel:{
        fontSize:20,
    },
    commentLabel:{
        fontSize:20,
        marginBottom:10,
    },
    btnContainer:{
        marginTop:10
    }
})

export default CommentForm
