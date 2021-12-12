import React , {useState , useEffect} from 'react'
import { FlatList, Text, View ,TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements'
import { theme } from '../../../contants/colors'
import PrimaryInput from '../../../custom_components/customInput'
import { productStyles } from '../../../styles/productStyle'
import { useIsFocused } from '@react-navigation/native';
import { fetchProductReview } from '../../../store/api_calls/cars_api'
import moment from "moment";
import { Rating } from 'react-native-elements'
import CommentForm from '../../../reusable_components/commentForm'

const Reviews = (props) => {

    const {item} = props
    const [reviews , setReviews] = useState([])
    const [showForm , setShowForm] = useState(false)
    const isFocused = useIsFocused()

    const getAverage = () => {
        const sum = reviews.reduce((a, b) => +a + +b.review_score, 0);
        const ave = parseFloat(sum/reviews.length).toFixed(1)
        return ave
    }

    const generateRateColor = () => {
        if(getAverage() > 3.5){
            return theme.green
        }else if(getAverage() > 2 && getAverage() < 3.5){
            return theme.yellow
        }else{
            return theme.red
        }
    }

    const onCancel = () => {
        setShowForm(!showForm)
    }

    useEffect(() => {
        if(isFocused){
            const getReviews = fetchProductReview(item._id , 1)

            getReviews.then((res)=>{
                if(res.data){
                    // console.log('reviews',res.data.data)
                    setReviews(res.data.data)
                }
            }).catch((e)=>{
                console.log('error reviews' , e)
            })
        }
    }, [isFocused])
    

    return (
        <View style={productStyles.reviewContainer}>
            <View style={productStyles.reviewBody}>

                <View style={productStyles.ratingHeaderContainer}>
                    <Text style={productStyles.reviewLabel}>Car Reviews</Text>
                    {reviews.length?
                        <View style={productStyles.aveScoreBody}>
                            <View style={productStyles.aveScoreContainer}>
                                <Text 
                                    style={[
                                        productStyles.aveScore,
                                        {color:generateRateColor()}
                                    ]}
                                >
                                    {getAverage()}
                                </Text>
                                <Rating ratingColor={generateRateColor()} type='custom' imageSize={15} readonly startingValue={getAverage()} ratingCount={5}/>
                            </View>
                            
                            <Text>Overall Rating</Text>
                        </View>
                    :null}
                </View>
                

                <TouchableOpacity onPress={()=>setShowForm(!showForm)}>
                    <PrimaryInput placeholder="Add your review to this car." editable={false} borderColor={theme.gray}/>
                </TouchableOpacity>

                <View>
                    <Text style={productStyles.reviewCommentLabel}>{reviews.length} Comment(s)</Text>
                    <FlatList
                        keyExtractor={(item)=>item._id}
                        data={reviews}
                        renderItem={({item,index})=>(
                            <View style={productStyles.comment}>
                                <View>
                                    <View style={productStyles.commenterHeaderContainer}>
                                        <Text style={productStyles.commenter}>Anonymous</Text>
                                        <Text style={productStyles.timeCommented}> - {moment(item.date_created).fromNow()}</Text>
                                    </View>
                                    
                                    <Text style={productStyles.commentText}>{item.comment?.review_text}</Text>
                                </View>
                                <View style={productStyles.scoreContainer}>
                                    <Text style={productStyles.score}>{item.review_score}</Text>
                                    <Text style={productStyles.overallScore}> / 5</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>

            <Overlay isVisible={showForm} onBackdropPress={onCancel}>
                <CommentForm
                    item={item}
                    commentArray={reviews}
                    setCommentArray={setReviews}
                    onCancel={onCancel}
                />
            </Overlay>
        </View>
    )
}

export default Reviews
