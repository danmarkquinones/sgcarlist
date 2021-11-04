import React from 'react'
import { Text, View ,Image , Button} from "react-native"
import { customCardStyles } from '../styles/customCardStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements/dist/divider/Divider';

export const SquareCard = (props) => {
    return(
        <View 
            style={customCardStyles.squareCardContainer}
        >
            <View
                style={customCardStyles.iconSquareContainer}
            >
                <FontAwesome5 name='hotjar' solid />
            </View>
            <View
                style={customCardStyles.imageSquareContainer} 
            >
                <Image
                    style={customCardStyles.carSquareImage}
                    source={require('../../assets/images/car1.jpg')}
                />
            </View>
            <View
                style={customCardStyles.textBodyContainer}
            >
                <Text style={customCardStyles.carName} >SUV High Speed 3145</Text>
                <Text style={customCardStyles.carPrice} >10,000 USD</Text>
            </View>
        </View>
    )
}

export const ListCard = (props) => {

    return(
        <View
            style={customCardStyles.listCardContainer}
        >
            <View
                style={customCardStyles.imageSquareContainer} 
            >
                <Image
                    style={customCardStyles.listCarImage}
                    source={require('../../assets/images/car1.jpg')}
                />
            </View>
            <View
                style={customCardStyles.textBodyContainer}
            >
                <View
                    style={customCardStyles.listCardHeader}
                >
                    <Text style={customCardStyles.carName} >SUV High Speed 3145</Text>
                    <FontAwesome5 name='hotjar' style={customCardStyles.listIconContainer}/>
                </View>

                <Text>Jurong , Singapores</Text>
                
                <Divider style={customCardStyles.line}/>

                <View style={customCardStyles.listTextContainer}>
                    <Text style={customCardStyles.listCarPrice} >10,000 USD</Text>
                    <Button title='Contact'/>
                </View>
            </View>
        </View>
    )
}

export const GridCard = (props) => {
    return(
        <View 
            style={customCardStyles.gridCardContainer}
        >
            <View
                style={customCardStyles.iconSquareContainer}
            >
                <FontAwesome5 name='hotjar' solid />
            </View>
            <View
                style={customCardStyles.imageSquareContainer} 
            >
                <Image
                    style={customCardStyles.gridCarImage}
                    source={require('../../assets/images/car1.jpg')}
                />
            </View>
            <View
                style={customCardStyles.textBodyContainer}
            >
                <Text style={customCardStyles.carName} >SUV High Speed 3145</Text>
                <Text>Jurong , Singapores</Text>

                <Divider style={customCardStyles.line}/>

                <View style={customCardStyles.listTextContainer}>
                    <Text style={customCardStyles.listCarPrice} >10,000 USD</Text>
                    <Button title='Contact'/>
                </View>
            </View>
        </View>
    )
}