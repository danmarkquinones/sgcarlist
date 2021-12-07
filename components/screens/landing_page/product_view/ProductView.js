import React , {useState} from 'react';
import { View , Text , Image , Dimensions, ScrollView} from 'react-native';
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
import { onCallUser } from '../../../store/helpers/globalFunctions';

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
                            <Text style={productStyles.productLoc}>{item.location}</Text>
                        </View>
                        <View>
                            <FA5Icon onPress={() => null} name="star"size={20}/>
                        </View>
                    </View>
                    <Divider/>
                    <View style={productStyles.nameLocPriceCont}>
                        <Text style={productStyles.productPrice}>S$ {item.product_price}</Text>
                        <Text style={productStyles.productPerMonth}>S$ {item.product_price / 12} / month</Text>
                    </View>
                </View>

                <View style={productStyles.secondaryDetailsContainer}>
                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="calendar" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Manufactured : {item.product_edition}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="speedometer" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Mileage : {item.product_mileage} KM</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="gear" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Transmission : {item.product_transmission}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <MatComIcon name="engine-outline" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Engine Cap : {item.product_cc} cc</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="circle" size={20} color="gray"/>
                            <Text style={productStyles.singleSecDetailsText}>Type : {item.vehicle_type}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FA5Icon name="car" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Condition : {item.product_condition}</Text>
                        </View>
                    </View>

                    <Divider/>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <EntIcon name="location" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>Location : Jurong</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FA5Icon name="users" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>No. of owners : {item.number_of_owners}</Text>
                        </View>
                    </View>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="dollar" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>COE : S$ {item.coe}</Text>
                        </View>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="dollar" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>ARF : S$ {item.arf}</Text>
                        </View>
                    </View>

                    <View style={productStyles.rowSecDetailsCont}>
                        <View style={productStyles.singleSecDetailsCont}>
                            <FAIcon name="dollar" size={20}/>
                            <Text style={productStyles.singleSecDetailsText}>OMV : S$ {item.omv}</Text>
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
                    onPress={()=>onCallUser(item.advertisement_contact_details[0].user_contact_details.contact_numbers)} 
                    title="CONTACT DEALER" 
                    color={theme.primaryBlue} 
                    Icon={()=><MatIcon name="call" size={20} color={theme.white}/>}
                />
                <Text>{item.verified_by}</Text>
            </View>
        </View>
    )
}

export default ProductView
