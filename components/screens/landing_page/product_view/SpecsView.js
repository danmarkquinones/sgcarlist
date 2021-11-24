import React , {useState} from 'react'
import { View , Text , Dimensions } from 'react-native'
import { productStyles } from '../../../styles/productStyle'
import { TabView, TabBar } from 'react-native-tab-view';
import { theme } from '../../../contants/colors';
import { sellersStyles } from '../../../styles/sellersStyles';

const initialLayout = { width: Dimensions.get('window').width };

const SpecsView = (props) => {

    const {item} = props 
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Description' },
        { key: 'second', title: 'Equipments' },
        { key: 'third', title: 'Specification' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <Text>DESCRIPTION</Text>; 
            case 'second':
                return <Text>EQUIPMENTS</Text>; 
            case 'third':
                return <Text>SPECIFICATION</Text>; 
            default:
                return null;
        }
    };

    return (
        <View style={{height:300 , backgroundColor:theme.black}}>
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
                style={productStyles.tabContainer}
            />
        </View>
    )
}

export default SpecsView
