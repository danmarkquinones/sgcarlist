import React from 'react'
import { Text, View ,Image , Button, TouchableOpacity} from "react-native"
import { customCardStyles } from '../styles/customCardStyles'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { theme } from '../contants/colors';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import Spacer from './spacer';
import PropTypes from 'prop-types';

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
  const {car, Icon, sellerMode} = props;
  return (
    <View style={customCardStyles.listCardContainer}>
      <View style={customCardStyles.imageSquareContainer}>
        <Image
          style={customCardStyles.listCarImage}
          source={require('../../assets/images/car1.jpg')}
        />
      </View>
      <View style={customCardStyles.textListBodyContainer}>
        <View style={customCardStyles.listCardHeader}>
          <View>
            <Text style={customCardStyles.carName}>{car.name}</Text>
            <Text>{car.location}</Text>
          </View>
          {!sellerMode ? <Icon /> : null}
        </View>

        <Divider style={customCardStyles.line} />

        {!sellerMode ? (
          <View style={customCardStyles.listTextContainer}>
            <Text style={customCardStyles.listCarPrice}>{car.price}</Text>
            <Button title="Contact" />
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button title="Edit" />
            <Spacer right={8} />
            <Button title="Remove" color={'red'} />
          </View>
        )}
      </View>
    </View>
  );
};

export const GridCard = props => {
  const {car, Icon} = props;
  return (
    <View style={customCardStyles.gridCardContainer}>
      <View style={customCardStyles.iconSquareContainer}>
        <Icon />
      </View>
      <View style={customCardStyles.imageSquareContainer}>
        <Image
          style={customCardStyles.gridCarImage}
          source={require('../../assets/images/car1.jpg')}
        />
      </View>
      <View style={customCardStyles.textBodyContainer}>
        <Text style={customCardStyles.carName}>{car.name}</Text>
        <Text>{car.location}</Text>

        <Divider style={customCardStyles.line} />

        <View style={customCardStyles.listTextContainer}>
          <Text style={customCardStyles.listCarPrice}>{car.price}</Text>
          <Button title="Contact" />
        </View>
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

ListCard.prototypes = {
  sellerMode: PropTypes.bool,
};

ListCard.defaultProps = {
  sellerMode: false,
};