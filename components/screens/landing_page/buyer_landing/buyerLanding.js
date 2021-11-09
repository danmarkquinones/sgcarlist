import React from 'react'
import { FlatList, Text, View , ScrollView , Image } from 'react-native'
import { theme } from '../../../contants/colors'
import { DealerCard, SquareCard, WhiteCard } from '../../../custom_components/customCards'
import { landingStyles } from '../../../styles/landingStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements/dist/divider/Divider'

const BuyerLanding = (props) => {

    const {items , dealers ,  navigation} = props

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={landingStyles.adContainer}>
                <Image style={landingStyles.adsImage} source={require('../../../../assets/images/ad_3.png')}/>
            </View>

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <FontAwesome5 name='star' size={20} solid color={theme.yellow}/>
                    <Text style={landingStyles.listHeaderText}>Your Favorites</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <FlatList
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    index!==3 ?
                    <SquareCard
                        onPress={()=>navigation.navigate('ProductView', item)}
                        car={item} 
                        Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                    />
                    :<WhiteCard onPress={()=>navigation.navigate('SearchResult')} options={{width:150}}/>
                )}
            />

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <FontAwesome5 name='check-circle' size={20} solid color={theme.green}/>
                    <Text style={landingStyles.listHeaderText}>Qualified Cars</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <FlatList
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    index!==3 ?
                    <SquareCard 
                        car={item} 
                        Icon={()=><FontAwesome5 name='check-circle' size={20} solid color={theme.green}/>}
                    />
                    :<WhiteCard options={{width:150}}/>
                )}
            />

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <FontAwesome5 name='hotjar' size={20} solid color={theme.red}/>
                    <Text style={landingStyles.listHeaderText}>Hot Deals</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <FlatList
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    index!==3 ?
                    <SquareCard 
                        car={item} 
                        Icon={()=><FontAwesome5 name='hotjar' size={20} solid color={theme.red}/>}
                    />
                    :<WhiteCard options={{width:150}}/>
                )}
            />

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.newBadge}>NEW</Text>
                    <Text style={landingStyles.listHeaderText}>Car Deals</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <FlatList
                horizontal
                data={items}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    index!==3 ?
                    <SquareCard 
                        car={item} 
                        // Icon={()=><Entypo name='new' size={20} solid color={theme.tertiaryBlue}/>}
                    />
                    :<WhiteCard options={{width:150}}/>
                )}
            />

            <View style={landingStyles.adContainer}>
                <Image style={landingStyles.adsImage} source={require('../../../../assets/images/ad_2.png')}/>
            </View>

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.listDealerText}>Top Dealers</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <FlatList
                horizontal
                data={dealers}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    index!==3 ?
                    <DealerCard 
                        dealer={item} 
                        // Icon={()=><Entypo name='new' size={20} solid color={theme.tertiaryBlue}/>}
                    />
                    :<WhiteCard options={{width:150}}/>
                )}
            />

            
            
            <View style={landingStyles.locationListContainer}>

                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.listDealerText}>Top Location</Text>
                </View>
                <Text style={landingStyles.listDesc}>
                    The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart
                </Text>

                <FlatList
                    data={dealers}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item , index})=>(
                        <View>
                            {index!==3 ?
                                <View style={landingStyles.locationItemContainer}>
                                    <Text style={landingStyles.locationText}>
                                        Jurong , Singapore
                                    </Text>
                                    <Divider/>
                                </View>
                                :<Text style={landingStyles.locationSeeMore}>
                                    See More
                                </Text>
                            }
                        </View>
                    )}
                />
            </View>
            
            
        </ScrollView>
    )
}

export default BuyerLanding
