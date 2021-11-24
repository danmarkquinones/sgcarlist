import React , {useState} from 'react'
import { ScrollView, Text, View , TouchableOpacity , FlatList} from 'react-native'
import { Rating , Overlay , Divider } from 'react-native-elements'
import { theme } from '../../../contants/colors'
import CustomAvatar from '../../../custom_components/customAvatar'
import { GridCard, ListCard } from '../../../custom_components/customCards'
import PrimaryInput from '../../../custom_components/customInput'
import CommentForm from '../../../reusable_components/commentForm'
import SorterComponent from '../../../reusable_components/sorterComponent'
import { sellersStyles } from '../../../styles/sellersStyles'

export const Listings = (props) => {

    const {config , setConfig , navigation} = props

    const goToProduct=(item)=>{
        navigation.navigate('ProductView', item)
    }

    return (
        <View style={{flex:1}}>
            <SorterComponent {...props}/>
            <View>
                <FlatList
                    data={config.ads}
                    key={config.isGridView}
                    contentContainerStyle={{ 
                        alignItems: config.isGridView ?'flex-start':'center' , 
                        justifyContent: 'space-between', 
                        paddingBottom:100
                    }}
                    numColumns={config.isGridView ? 2 : 1}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item,index})=>(
                        <TouchableOpacity onPress={()=>goToProduct(item)}>
                            {config.isGridView?
                                <GridCard car={item}/>
                                :<ListCard car={item}/>
                            }
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export const About = (props) => {

    const {config , setConfig , setScrollY} = props

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{paddingHorizontal:20 , backgroundColor:theme.white , paddingTop:10,  paddingBottom:20}}
        >
            <Text style={{fontSize:18 , textAlign:'justify'}}>
                According to statistics, about me pages are among the ten most visited by potential customers on your site.

                The “about us” page is a must-have page (this can be a page on your website, separate landing page or even “about me” website as a type of portfolio) used by all types of businesses to give customers more insight into who is involved with a given business and exactly what it does.

                Your “About me” page forms the first impression of a company or product, puts a name and a face to your business, and gives website visitor the opportunity to develop a connection with you (a good reason for a visitor to stay on your website!), and it is your best chance to convert more visits to enquiries/more enquiries to customers.

                About me page is a space for individuality and originality, it is an important marketing tool that should convince. Therefore, they are very different!

                Let’s get the best of the top About us samples and learn how to write about me page, that will pull your customers like a magnet
            </Text>
        </ScrollView>
    )
}

export const Reviews = (props) => {
    const {config , setConfig} = props

    const getAverage = () => {
        const sum = config.reviews.reduce((a, b) => +a + +b.rate, 0);
        const ave = parseFloat(sum/config.reviews.length).toFixed(1)
        return ave
    }

    const [showForm , setShowForm] = useState(false)
    const [form , setForm] = useState({
        rating:3,
        comment:'',
        id:''
    })

    const onSubmit = () => {
        const id = config.reviews.length + 1

        const data = {
            rate:form.rating,
            comment:form.comment,
            commenterName:'Sample Human',
            id:id.toString()
        }
        setConfig({
            ...config,
            reviews:[data , ...config.reviews]
        })
        clearForm()
    }

    const clearForm = () => {
        setForm({rating:3,comment:''})
        setShowForm(!showForm)
    }

    return (
        <ScrollView
            style={sellersStyles.reviewContainer}
            stickyHeaderIndices={[2]}
            contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
        >
            <View style={sellersStyles.ratingHeaderContainer}>
                {config.sellerDetails?
                    <View style={sellersStyles.sellerDetailsInProduct}>
                        <CustomAvatar initial='L' color={theme.secondaryBlue} size={40}/>
                        <Text style={sellersStyles.sellerDetailsInProductName}>{config.sellerDetails.name}</Text>
                    </View>
                    :<Text style={sellersStyles.headerText}>Overall Rating :</Text>
                }
                
                <View style={sellersStyles.ratingContainer}> 
                    <Text style={sellersStyles.headerRate}>{getAverage()}</Text>
                    <Rating imageSize={15} readonly startingValue={getAverage()} ratingCount={5}/>
                </View>
            </View>
            <View>
                <Divider/>
                <TouchableOpacity onPress={()=>setShowForm(!showForm)}>
                    <PrimaryInput borderColor={theme.gray} editable={false} placeholder="Add your review"/>
                </TouchableOpacity>
                <Text style={{marginTop:10}}>{config.reviews.length} review(s)</Text>
            </View>
            <View style={{flex:1}}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 40 }}
                data={config.reviews}
                keyExtractor={(item)=>item.id}
                renderItem={({item,i})=>
                    <View style={sellersStyles.commentContainer}>
                        <View style={{flex:0.95}}>
                            <Text style={sellersStyles.commentName}>{item.commenterName}</Text>
                            <Text style={sellersStyles.comment}>{item.comment}</Text>
                        </View>
                        <Text style={sellersStyles.commentRate}>{item.rate}/5</Text>
                    </View>
                }
            />
            </View>

            <Overlay isVisible={showForm} onBackdropPress={clearForm}>
                <CommentForm
                    form={form}
                    setForm={setForm}
                    onSubmit={onSubmit}
                    onCancel={clearForm}
                />
            </Overlay>
        </ScrollView>
    )
}

