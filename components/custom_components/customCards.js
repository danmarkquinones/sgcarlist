import React from 'react'
import { Text, View ,Image , Button, TouchableOpacity} from "react-native"
import { customCardStyles } from '../styles/customCardStyles'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { theme } from '../contants/colors';
import Spacer from './spacer';
import PropTypes from 'prop-types';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EntIcon from 'react-native-vector-icons/Entypo';
import { PrimaryButton, SmallButton } from './customButtons';
import { onCallUser } from '../store/helpers/globalFunctions';

export const SquareCard = props => {
  const {car, Icon, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={customCardStyles.squareCardContainer}>
        {Icon && (
          <View style={customCardStyles.iconSquareContainer}>
            <Icon />
          </View>
        )}
        <View style={customCardStyles.imageSquareContainer}>
          <Image style={customCardStyles.carSquareImage} source={car.url} />
        </View>
        <View style={customCardStyles.textBodyContainer}>
          <Text style={customCardStyles.carName}>{car.name}</Text>
          <Text style={customCardStyles.carPrice}>{car.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const WhiteCard = ({options, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          customCardStyles.whiteCard,
          {height: options.height, width: options.width},
        ]}>
        <Text
          style={{
            textAlign: 'center',
            color: theme.secondaryBlue,
            fontSize: 20,
          }}>
          See More
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListCard = props => {
  const {car, Icon, sellerMode , inFavorites , onPress} = props;
  return (
    <View style={customCardStyles.listCardContainer}>
      <View style={customCardStyles.imageSquareContainer}>
        <Image
          style={customCardStyles.listCarImage}
          source={car.url}
        />
      </View>
      <View style={customCardStyles.textListBodyContainer}>
        <View style={customCardStyles.listCardHeader}>
          <View>
            <Text style={customCardStyles.carName}>{car.name}</Text>
            <Text>{car.location}</Text>
          </View>
          {Icon&&
            <View style={customCardStyles.iconSquareContainer}>
              {inFavorites? 
                <TouchableOpacity onPress={onPress}>
                  <Icon />
                </TouchableOpacity>
              :<Icon />}
            </View>
          }
        </View>

        <Divider style={customCardStyles.line} />

        {!sellerMode ? (
          <View style={customCardStyles.listTextContainer}>
            <Text style={customCardStyles.listCarPrice}>{car.price}</Text>
            <SmallButton title="Contact" options={{color:theme.primaryBlue , textColor:theme.white , height:30}}/>
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <SmallButton title="Edit" options={{color:theme.tertiaryBlue , textColor:theme.white , height:30}}/>
            <Spacer right={8} />
            <SmallButton title="Contact" options={{color:theme.red , textColor:theme.white , height:30}}/>
          </View>
        )}
      </View>
    </View>
  );
};

export const GridCard = props => {
  const {car, Icon , inFavorites , onPress} = props;
  return (
    <View style={customCardStyles.gridCardContainer}>
      {Icon&&
        <View style={customCardStyles.iconSquareContainer}>
          {inFavorites? 
            <TouchableOpacity onPress={onPress}>
              <Icon />
            </TouchableOpacity>
          :<Icon />}
        </View>
      }
      <View style={customCardStyles.imageSquareContainer}>
        <Image
          style={customCardStyles.gridCarImage}
          source={car.url}
        />
      </View>
      <View style={customCardStyles.textBodyContainer}>
        <Text style={customCardStyles.carName}>{car.name}</Text>
        <Text style={customCardStyles.listCarPrice}>{car.price}</Text>
        {/* <Text>{car.location}</Text> */}

        <Divider style={customCardStyles.line} />

        <SmallButton title="Contact Dealer" onPress={()=>onCallUser('09354734378')} options={{color:theme.primaryBlue , textColor:theme.white , height:30}}/>

        {/* <View style={customCardStyles.gridTextContainer}>
          <Text style={customCardStyles.listCarPrice}>{car.price}</Text>
          <SmallButton title="Contact" options={{color:theme.primaryBlue , textColor:theme.white , height:30}}/>
        </View> */}
      </View>
    </View>
  );
};

export const DealerCard = props => {
  const {dealer, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={customCardStyles.squareCardContainer}>
        <View style={customCardStyles.dealerContainer}>
          <View style={customCardStyles.dealerImageContainer}>
            <Image style={customCardStyles.dealerImage} source={dealer.url} />
          </View>
          <Text style={customCardStyles.dealerName}>{dealer.name}</Text>
          <Text style={customCardStyles.dealerDeals}>{dealer.deals} deals</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const PinnedFilterCard = props => {
  const {filter , onPress , onUnpin} = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={customCardStyles.filterContainer}>

        <TouchableOpacity onPress={onUnpin}>
          <EntIcon name="pin" size={25} color={theme.green}/>
        </TouchableOpacity>

        <View style={customCardStyles.filterNameContainer}>
          <Text style={customCardStyles.filterBrand}>{filter.name}</Text>
          <Text style={customCardStyles.filterLocation}>{filter.location}</Text>
        </View>

        <View style={customCardStyles.filterPriceContainer}>
          <Text style={customCardStyles.filterMinPrice}>min : $ {filter.min}</Text>
          <Text style={customCardStyles.filterMaxPrice}>max : $ {filter.max}</Text>
        </View>

        <MatIcon name="keyboard-arrow-right" size={25} color={theme.black}/>
      </View>
      <Divider/>
    </TouchableOpacity>
  );
}

ListCard.prototypes = {
  sellerMode: PropTypes.bool,
};

ListCard.defaultProps = {
  sellerMode: false,
};