import React , {useState} from 'react'
import { View , Text , Image , Dimensions, ScrollView} from 'react-native'
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntIcon from 'react-native-vector-icons/Entypo';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { productStyles } from '../../../styles/productStyle';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import SpecsView from './SpecsView';
import { Reviews } from '../seller_view/SellerViewScene';
import { cars, reviews } from '../../../contants/dummyCarData';
import { FlatList } from 'react-native-gesture-handler';
import { SquareCard } from '../../../custom_components/customCards';
import { theme } from '../../../contants/colors';
import ImageSlider from './ImageSlider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductView = (props) => {

    const {navigation , route} = props
    const item = route.params

    const [config , setConfig] = useState({
        sortBy:'ascending',
        isGridView:true,
        reviews:reviews,
        cars:cars,
        sellerDetails:{name:'Lorem Ipsum' , location:'Jurong , Singapore'}
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={productStyles.imageSliderContainer}>
                <MatComIcon
                    onPress={() => navigation.goBack(null)}
                    name="arrow-left"
                    size={25}
                    color={'#fff'}
                    style={productStyles.backIcon}
                />
                <EntIcon
                    onPress={() => navigation.navigate('ImageViewer')}
                    name="images"
                    size={25}
                    color={'#fff'}
                    style={productStyles.imageIcon}
                />
                <View style={productStyles.sliderContainer}>
                    <ImageSlider/>
                </View>
            </View>

            <View style={productStyles.primaryDetailsContainer}>
                <View style={productStyles.nameLocPriceCont}>
                    <View>
                        <Text style={productStyles.productName}>{item.name}</Text>
                        <Text style={productStyles.productLoc}>{item.location}</Text>
                    </View>
                    <View>
                        <FA5Icon onPress={() => null} name="star"size={20}/>
                    </View>
                </View>
                <Divider/>
                <View style={productStyles.nameLocPriceCont}>
                    <Text style={productStyles.productPrice}>S$ {item.price}</Text>
                    <Text style={productStyles.productPerMonth}>S$ 500 / month</Text>
                </View>
            </View>

            <View style={productStyles.secondaryDetailsContainer}>
                <View style={productStyles.rowSecDetailsCont}>
                    <View style={productStyles.singleSecDetailsCont}>
                        <MatComIcon name="calendar" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>2017</Text>
                    </View>
                    <View style={productStyles.singleSecDetailsCont}>
                        <MatComIcon name="speedometer" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>60-60K KM</Text>
                    </View>
                </View>

                <Divider/>

                <View style={productStyles.rowSecDetailsCont}>
                    <View style={productStyles.singleSecDetailsCont}>
                        <FAIcon name="gear" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>Automatic</Text>
                    </View>
                    <View style={productStyles.singleSecDetailsCont}>
                        <MatComIcon name="engine-outline" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>1368 cc</Text>
                    </View>
                </View>

                <Divider/>

                <View style={productStyles.rowSecDetailsCont}>
                    <View style={productStyles.singleSecDetailsCont}>
                        <FAIcon name="circle" size={20} color="gray"/>
                        <Text style={productStyles.singleSecDetailsText}>Gray</Text>
                    </View>
                    <View style={productStyles.singleSecDetailsCont}>
                        <FA5Icon name="car" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>Used Car</Text>
                    </View>
                </View>

                <Divider/>

                <View style={productStyles.rowSecDetailsCont}>
                    <View style={productStyles.singleSecDetailsCont}>
                        <EntIcon name="location" size={20}/>
                        <Text style={productStyles.singleSecDetailsText}>2017</Text>
                    </View>
                </View>
                
            </View>

            <View style={productStyles.specsContainer}>
                <SpecsView item={item}/>
            </View>
            
            <View style={productStyles.sellerContainer}>
                <Reviews config={config} setConfig={setConfig} {...props}/>
            </View>

            <View style={productStyles.adContainer}>
                <Image style={{height:50 , width:windowWidth}} source={require('../../../../assets/images/ad_3.png')}/>
            </View>

            <View style={productStyles.similarCars}>
                <Text style={productStyles.similarCarsText}>Similar Cars</Text>
                <FlatList
                    horizontal={true}
                    data={config.cars}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item , index})=>(
                        index!==3 ?
                        <SquareCard 
                            onPress={()=>navigation.navigate('ProductView', item)}
                            car={item}
                        />
                        :null
                    )}
                />
            </View>
        </ScrollView>
    )
}

export default ProductView
