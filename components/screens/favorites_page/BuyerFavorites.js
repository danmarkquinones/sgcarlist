import React , {useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import CustomHeader from '../../custom_components/customHeader';
import {theme} from '../../contants/colors';
import SorterComponent from '../../reusable_components/sorterComponent';
import { cars } from '../../contants/dummyCarData';
import { GridCard , ListCard } from '../../custom_components/customCards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SavedCars = ({config , setConfig}) => {

    const removeToFavorite=(item)=>{
        setConfig({
            ...config,
            savedCars:config.savedCars.filter((el)=>el.id!==item.id)
        })
    }

    return(
        <View style={styles.scene} >

                <SorterComponent config={config} setConfig={setConfig}/>

                <View style={styles.sceneList}>
                    {config.savedCars&&
                        <FlatList
                            data={config.savedCars}
                            key={config.isGridView}
                            contentContainerStyle={{ 
                                alignItems: config.isGridView ?'flex-start':'center' , 
                                justifyContent: 'space-between', 
                                paddingBottom:100
                            }}
                            numColumns={config.isGridView ? 2 : 1}                  // set number of columns 
                            keyExtractor={item=>item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item , index})=>(
                                config.isGridView ?
                                <GridCard 
                                    car={item} 
                                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                                    inFavorites={true}
                                    onPress={()=>removeToFavorite(item)}
                                />
                                :<ListCard 
                                    car={item} 
                                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                                    inFavorites={true}
                                    onPress={()=>removeToFavorite(item)} 
                                />
                            )}
                        />
                    }
                    
                </View>
        </View>
    )
};

const PinnedFilters = ({config , setConfig}) => (
    <View style={styles.scene} >
        <View style={styles.sceneList}>
            <Text>HELLO </Text>
        </View>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };


const BuyerFavorites = (props) => {

    const [index, setIndex] = useState(0);

    const [config , setConfig] = useState({
        sortBy:'ascending',
        isGridView:true,
        savedCars:cars,
        pinnedFilters:[]
    })

    const [routes] = React.useState([
        { key: 'first', title: 'Saved Cars' },
        { key: 'second', title: 'Pinned Filters' },
    ]);


    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <SavedCars config={config} setConfig={setConfig} />; // passing data as data prop
          case 'second':
            return <PinnedFilters config={config} setConfig={setConfig} />;
          default:
            return null;
        }
    };

    return (
        <View style={{flex:1}}>
            <CustomHeader title="Favorites"/>
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
                style={styles.container}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:theme.lightBlue
  },
  scene: {
    flex: 1,
  },
  sceneList:{
    //   padding:20
  }
});


export default BuyerFavorites;