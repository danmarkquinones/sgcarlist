import React from 'react'
import { Text, View ,Image , Button} from "react-native"
import { customCardStyles } from '../styles/customCardStyles'
import { Divider } from 'react-native-elements/dist/divider/Divider';

export const SquareCard = (props) => {
    const {car , Icon} = props
    return(
        <View 
            style={customCardStyles.squareCardContainer}
        >
            <View
                style={customCardStyles.iconSquareContainer}
            >
                <Icon/>
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
                <Text style={customCardStyles.carName} >{car.name}</Text>
                <Text style={customCardStyles.carPrice} >{car.price}</Text>
            </View>
        </View>
    )
}

export const ListCard = (props) => {
    const {car , Icon} = props
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
                style={customCardStyles.textListBodyContainer}
            >
                <View
                    style={customCardStyles.listCardHeader}
                >
                    <View>
                        <Text style={customCardStyles.carName} >{car.name}</Text>
                        <Text>{car.location}</Text>
                    </View>
                    <Icon/>
                </View>

                
                
                <Divider style={customCardStyles.line}/>

                <View style={customCardStyles.listTextContainer}>
                    <Text style={customCardStyles.listCarPrice} >{car.price}</Text>
                    <Button title='Contact'/>
                </View>
            </View>
        </View>
    )
}

export const GridCard = (props) => {
    const {car , Icon} = props
    return(
        <View 
            style={customCardStyles.gridCardContainer}
        >
            <View
                style={customCardStyles.iconSquareContainer}
            >
                <Icon />
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
                <Text style={customCardStyles.carName} >{car.name}</Text>
                <Text>{car.location}</Text>

                <Divider style={customCardStyles.line}/>

                <View style={customCardStyles.listTextContainer}>
                    <Text style={customCardStyles.listCarPrice} >{car.price}</Text>
                    <Button title='Contact'/>
                </View>
            </View>
        </View>
    )
}