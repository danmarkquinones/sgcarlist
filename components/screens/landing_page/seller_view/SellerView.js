import React , {useState} from 'react'
import { View ,Text, Dimensions ,ScrollView} from 'react-native'
import { theme } from '../../../contants/colors'
import CustomAvatar from '../../../custom_components/customAvatar'
import { sellersStyles } from '../../../styles/sellersStyles'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { About, Listings, Reviews } from './SellerViewScene'
import { TabView, TabBar } from 'react-native-tab-view';
import { cars, reviews } from '../../../contants/dummyCarData'

const initialLayout = { width: Dimensions.get('window').width };

const SellerView = (props) => {

    const {navigation , route} = props 
    const data = route.params
    const [index, setIndex] = useState(0);
    const [config , setConfig] = useState({
        sortBy:'ascending',
        isGridView:true,
        ads:cars,
        reviews:reviews,
    })
    const [scrollY , setScrollY] = useState()

    const [routes] = useState([
        { key: 'first', title: 'Listings' },
        { key: 'second', title: 'About' },
        { key: 'third', title: 'Reviews' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <Listings config={config} setConfig={setConfig} {...props}/>; 
            case 'second':
                return <About config={config} setConfig={setConfig} setScrollY={setScrollY} {...props}/>; 
            case 'third':
                return <Reviews config={config} setConfig={setConfig} {...props}/>; 
            default:
                return null;
        }
    };

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={sellersStyles.sellerHeaderContainer}>
                <MatIcon
                    onPress={() => navigation.goBack(null)}
                    name="arrow-left"
                    size={25}
                    color={theme.gray}
                    style={sellersStyles.back}
                />

                <CustomAvatar initial={data.name} color={theme.gray} size={50}/>
                
                <View style={sellersStyles.nameContainer}>
                    <Text style={sellersStyles.headerName}>{data.name}</Text>
                    <Text>{data.number} - {data.location}</Text>
                </View>
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={(props) => (
                    <TabBar 
                        {...props} 
                        style={{backgroundColor: theme.white}}
                        renderLabel={({ focused, route }) => {
                            return (
                                <Text
                                    style={{
                                        fontWeight:'500',
                                        color:focused?theme.primaryBlue:theme.black
                                    }}
                                >
                                    {route.title}
                                </Text>
                            );
                        }}
                        indicatorStyle={{backgroundColor:theme.primaryBlue}}
                    />
                )}
                
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={sellersStyles.tabContainer}
            />
        </ScrollView>
    )
}

export default SellerView
