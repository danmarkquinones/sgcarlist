import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../custom_components/customHeader';
import SorterComponent from '../../reusable_components/sorterComponent';
import {cars, pinnedFilters} from '../../contants/dummyCarData';
import {theme} from '../../contants/colors';
import {
  GridCard,
  ListCard,
  PinnedFilterCard,
} from '../../custom_components/customCards';
import {SimpleFallback} from '../../custom_components/customFallbacks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchResult = ({navigation}) => {
  const [config, setConfig] = useState({
    sortBy: 'ascending',
    isGridView: false,
    savedCars: cars,
    pinnedFilters: pinnedFilters,
  });

  const goToProduct = item => {
    navigation.navigate('ProductView', item);
  };

  return (
    <View>
      <CustomHeader title="Search Results" />
      <SorterComponent config={config} setConfig={setConfig} />
      <View style={{backgroundColor: theme.lightBlue}}>
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 8,
            paddingVertical: 24,
            fontSize: 16,
          }}>
          Found 387 cars available
        </Text>

        {config.savedCars.length ? (
          <FlatList
            data={config.savedCars}
            key={config.isGridView}
            contentContainerStyle={{
              alignItems: config.isGridView ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              paddingBottom: 100,
            }}
            numColumns={config.isGridView ? 2 : 1} // set number of columns
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => goToProduct(item)}>
                {config.isGridView ? (
                  <GridCard
                    car={item}
                    Icon={() => (
                      <FontAwesome5
                        name="star"
                        size={20}
                        solid
                        color={theme.yellow}
                      />
                    )}
                    inFavorites={true}
                    onPress={() => removeToFavorite(item)}
                  />
                ) : (
                  <ListCard
                    car={item}
                    Icon={() => (
                      <FontAwesome5
                        name="star"
                        size={20}
                        solid
                        color={theme.yellow}
                      />
                    )}
                    inFavorites={true}
                    onPress={() => removeToFavorite(item)}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        ) : (
          <SimpleFallback message="No saved car." />
        )}
      </View>
    </View>
  );
};

export default SearchResult;
