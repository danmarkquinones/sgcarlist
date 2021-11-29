import React from 'react'
import { Text, View , ScrollView , Image, TouchableOpacity } from 'react-native'
import { theme } from '../../../contants/colors'
import { landingStyles } from '../../../styles/landingStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomAvatar from '../../../custom_components/customAvatar'
import PrimaryInput from '../../../custom_components/customInput'
import FavoritesLists from './FavoritesLists'
import QualifiedLists from './QualifiedLists'
import HotDealsLists from './HotDealsLists'
import NewCarLists from './NewCarLists'
import TopDealersLists from './TopDealersLists'
import TopLocations from './TopLocations'

const BuyerLanding = (props) => {

    const {navigation} = props


    const handleSeeMore = (route , type) => {
        const filter = {
            type
        }
        navigation.navigate(route , filter)
    }


    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[1]}
        >
            <View style={landingStyles.headerContainer}>
                <CustomAvatar initial='L' color={theme.secondaryBlue} size={50}/>
                <View style={landingStyles.headerNameView}>
                    <Text style={landingStyles.greetName}>HELLO , LOREM IPSUM</Text>
                    <Text style={landingStyles.listedCar}>We have 123,342 cars listed</Text>
                </View>
            </View>

            <View style={landingStyles.searchContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('FilterIndex')}>
                    <PrimaryInput 
                        editable={false} 
                        placeholder="Find you dream car now" 
                        Icon={()=><FontAwesome5 name='search' size={20}/>}
                    />
                </TouchableOpacity>
            </View>

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

            <View>
                <FavoritesLists handleSeeMore={handleSeeMore} {...props}/>
            </View>
            

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <FontAwesome5 name='check-circle' size={20} solid color={theme.green}/>
                    <Text style={landingStyles.listHeaderText}>Qualified Cars</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <View>
                <QualifiedLists {...props} handleSeeMore={handleSeeMore}/>
            </View>
            

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <FontAwesome5 name='hotjar' size={20} solid color={theme.red}/>
                    <Text style={landingStyles.listHeaderText}>Hot Deals</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>

            <View>
                <HotDealsLists {...props} handleSeeMore={handleSeeMore}/>
            </View>

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.newBadge}>NEW</Text>
                    <Text style={landingStyles.listHeaderText}>Car Deals</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>
            
            <View>
                <NewCarLists {...props} handleSeeMore={handleSeeMore}/> 
            </View>

            <View style={landingStyles.adContainer}>
                <Image style={landingStyles.adsImage} source={require('../../../../assets/images/ad_2.png')}/>
            </View>

            <View style={landingStyles.listHeaderContainer}>
                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.listDealerText}>Top Dealers</Text>
                </View>
                <Text style={landingStyles.listDesc}>The cars are thoroughly inspected and protected with an extended warranty endorsed by Warranty Smart</Text>
            </View>
            
            <View>
                <TopDealersLists {...props} handleSeeMore={handleSeeMore}/>
            </View>
            
            <View style={landingStyles.locationListContainer}>

                <View style={landingStyles.listHeaders}>
                    <Text style={landingStyles.listDealerText}>Top 5 Location</Text>
                </View>

                <TopLocations {...props} handleSeeMore={handleSeeMore}/>
            </View>
            
            
        </ScrollView>
    )
}

export default BuyerLanding
