import React , {useState , useEffect} from 'react';
import { View , Text , Image , Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
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
import ImageSliderView from './ImageSlider';
import { PrimaryButton } from '../../../custom_components/customButtons';
import { addToSavedCars, isInFavorites, onCallUser, removeToSavedCars } from '../../../store/helpers/globalFunctions';
import { useIsFocused } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductView = (props) => {

    const {navigation , route} = props
    const item = route.params
    const isFocused = useIsFocused()

    const [config , setConfig] = useState({
        sortBy:'ascending',
        isGridView:true,
        reviews:reviews,
        cars:cars,
        sellerDetails:{name:'Lorem Ipsum' , location:'Jurong , Singapore'},
        inFavorites:false
    })

    useEffect(() => {
        if(isFocused){
            const value = isInFavorites(item._id)
            value.then((res)=>
                setConfig({...config , inFavorites:res})
            )
        }
    }, [isFocused])

    const toggleSave = () => {
        setConfig({...config,inFavorites:!config.inFavorites})
        if(config.inFavorites){
            removeToSavedCars(item)
        }else{
            addToSavedCars(item)
        }
    }

    return (
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={productStyles.imageSliderContainer}>
                    <MatComIcon
                        onPress={() => navigation.goBack(null)}
                        name="arrow-left"
                        size={25}
                        color={theme.white}
                        style={productStyles.backIcon}
                    />
                    <View style={productStyles.imageIcon}>
                        <Text style={productStyles.imageIconNumber}>6</Text>
                        <EntIcon
                            onPress={() => navigation.navigate('ImageViewer')}
                            name="images"
                            size={25}
                            color={theme.white}
                        />
                    </View>
                    
                    <View style={productStyles.sliderContainer}>
                        <ImageSliderView windowWidth={windowWidth}/>
                    </View>
                </View>

                <View style={productStyles.primaryDetailsContainer}>
                    <View style={productStyles.nameLocPriceCont}>
                        <View>
                            <Text style={productStyles.productName}>{item.product_name}</Text>
                            {/* <Text style={productStyles.productLoc}>{item.location}</Text> */}
                            <Text style={productStyles.productPrice}>S$ {item.product_price}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>toggleSave()}>
                                {config.inFavorites?
                                    <FA5Icon  name='star' solid color={theme.yellow} size={20}/>    
                                    :<FA5Icon  name='star' size={20}/>
                                }
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Divider/>
                    {/* <View style={productStyles.nameLocPriceCont}>
                        <Text style={productStyles.productPrice}>S$ {item.product_price}</Text>
                        <Text style={productStyles.productPerMonth}>S$ {item.product_price / 12} / month</Text>
                    </View> */}
                </View>

                <View style={productStyles.secondaryDetailsContainer}>
                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="calendar" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Manufactured : {item.product_edition}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="speedometer" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Mileage : {item.product_mileage} KM</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="gear" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Transmission : {item.product_transmission}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="engine-outline" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Engine Cap : {item.product_cc} cc</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="circle" color={theme.black} size={20} color="gray"/>
                            <Text style={productStyles.singleSecDetailsText}>Type : {item.vehicle_type}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FA5Icon name="car" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Condition : {item.product_condition}</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <EntIcon name="location" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Location : Jurong</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FA5Icon name="users" color={theme.black} size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>No. of owners : {item.number_of_owners}</Text>
                        </View>
                    </View>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <Text style={productStyles.textWithBg}>COE</Text>
                            <Text style={productStyles.singleSecDetailsText}>{item.coe?`S$ ${item.coe}`:'Not available'}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <Text style={productStyles.textWithBg}>ARF</Text>
                            <Text style={productStyles.singleSecDetailsText}>{item.arf?`S$ ${item.arf}`:'Not available'}</Text>
                        </View>
                    </View>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <Text style={productStyles.textWithBg}>OMV</Text>
                            <Text style={productStyles.singleSecDetailsText}>{item.omv?`S$ ${item.omv}`:'Not available'}</Text>
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

            <View style={productStyles.contactButtonContainer}>
                <PrimaryButton 
                    onPress={()=>onCallUser(item.advertisement_contact_details.user_contact_details.contact_numbers)} 
                    title="CONTACT DEALER" 
                    color={theme.primaryBlue} 
                    Icon={()=><MatIcon name="call" size={20} color={theme.white}/>}
                />
            </View>
        </View>
    )
}

export default ProductView
