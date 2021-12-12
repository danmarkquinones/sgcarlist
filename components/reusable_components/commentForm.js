import React , {useState , useContext , useEffect} from 'react'
import { StyleSheet, View , Text, Dimensions, Switch } from 'react-native'
import { Divider} from 'react-native-elements'
import { theme } from '../contants/colors'
import { OffCancelButton, PrimaryButton } from '../custom_components/customButtons'
import PrimaryInput from '../custom_components/customInput'
import { Rating } from 'react-native-ratings';
import { UserConfigContext } from '../store/context_api/userContext'
import { addProductReview } from '../store/api_calls/cars_api'

const windowWidth = Dimensions.get('window').width;

const CommentForm = (props) => {

    const {commentArray , setCommentArray , item , onCancel} = props 
    const [userConfig , setUserConfig] = useContext(UserConfigContext)
    const [rating , setRating] = useState(3)
    const [form , setForm] = useState({
        comment:'',
        itemId:item._id,
        anonymous:true,
        fname:'',
        lname:'',
        userId:'',
    })

    console.log(form)

    useEffect(()=>{
        if(!form.anonymous){
            setForm({...form , fname:"",lname:""})
        }
    },[form.anonymous])

    useEffect(()=>{
        if(userConfig.isLoggedIn){
            setForm({
                ...form, 
                userId:userConfig.userDetails.user_id , 
                fname:userConfig.userDetails.user_first_name,
                lname:userConfig.userDetails.user_last_name,
                anonymous:false
            })
        }
    },[userConfig.isLoggedIn])

    const onChange = (name , value) => {
        setForm({...form , [name] : value})
    }

    const onRating = (rating) => {
        setRating(rating)
    }

    const toggleAnonymity = () => {
        setForm({...form , anonymous:!form.anonymous})
        
    }

    const onSubmit = () => {
        addProductReview(form , rating).then((res)=>{
            if(res.data){
                console.log(res.data)
            }
        }).catch((e)=>{
            console.log('error adding review' , e)
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Add a Review</Text>
            </View>
            <Divider/>

            {!userConfig.isLoggedIn?
                <View>
                    <View
                        style={styles.anonymityContainer}
                    >
                        <Text style={styles.commentLabel}>Hide my name? : </Text>
                        <Switch
                            trackColor={{ false: theme.gray, true: theme.secondaryBlue }}
                            thumbColor={form.anonymous? theme.primaryBlue : theme.white}
                            ios_backgroundColor={theme.gray}
                            onValueChange={toggleAnonymity}
                            value={form.anonymous?true:false}
                        />
                    </View>

                    {!form.anonymous?
                        <View>
                            <View style={{marginVertical:5}}>
                                <PrimaryInput value={form.fname} onChange={(text)=>onChange('fname',text)} placeholder="First Name" borderColor={theme.gray}/>
                            </View>
                            <View style={{marginVertical:5}}>
                                <PrimaryInput value={form.lname} onChange={(text)=>onChange('lname',text)} placeholder="Last Name" borderColor={theme.gray}/>
                            </View>
                        </View>
                    :null}
                </View>
            :null}
            
            <View style={styles.rateContainer}>
                <Text style={styles.ratelabel}>Rate : </Text>
                <Rating imageSize={20} onFinishRating={onRating}/>
            </View>
            <View>
                <Text style={styles.commentLabel}>Comment/Review : </Text>
                <PrimaryInput value={form.comment} onChange={(text)=>onChange('comment',text)} multiline={true} borderColor={theme.gray} editable={true} height={100} textAlignVertical="top"/>
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
    },
    anonymityContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default CommentForm
