import React , {useState} from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import { Avatar, Divider } from 'react-native-elements'
import { profileStyles } from '../../styles/profileStyles'

const ProfileIndex = (props) => {

    const {navigation} = props
    const [information , setInformation] = useState([
        {type:'Username' , text:'LoremIpsum123'},
        {type:'Email' , text:'Loremipusm@gmail.com'},
        {type:'Full Name' , text:'Lorem Ipsum'},
        {type:'Mobile Number' , text:'0912 345 6789'}
    ])

    const onClick = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View
                style={profileStyles.container}
            >
                <View
                    style={profileStyles.headerContainer}
                >
                    <Avatar rounded title="MD" />
                    <Text style={profileStyles.headerName}>Lorem Ipsum</Text>
                </View>

                <View
                    style={profileStyles.infoContainer}
                >
                    <View style={profileStyles.infoHead}>
                        <Text style={profileStyles.infoHeadTitle}>Profile Informations</Text>
                        <Text>Edit</Text>
                    </View>

                    {information.map((info , i)=>
                        <View key={i} style={profileStyles.infoDetailsContainer}>
                            <Text style={profileStyles.infoDetailsType}>{info.type}</Text>
                            <Text style={profileStyles.infoDetailsText}>{info.text}</Text>
                            
                            <Divider/>
                        </View>
                    )}
                </View>

                <View
                    style={profileStyles.othersContainer}
                >
                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Switch to selling</Text>
                        <Text>Switch</Text>
                    </View>

                    <Divider/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Notification</Text>
                        <Text>on/off</Text>
                    </View>

                    <Divider/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Language</Text>
                        <Text>{`>`}</Text>
                    </View>

                    <Divider/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Privacy Policy & Terms of use</Text>
                        <Text>{`>`}</Text>
                    </View>

                    <Divider/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Help & Feedback</Text>
                        <Text>{`>`}</Text>
                    </View>

                    <Divider/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Share this App</Text>
                    </View>

                    <Divider/>


                </View>

                <View
                    style={profileStyles.logoutBtn}
                >
                    <Button title="Log out" onPress={onClick}/>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default ProfileIndex
