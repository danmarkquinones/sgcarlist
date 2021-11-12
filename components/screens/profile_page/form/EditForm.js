import React from 'react'
import { ScrollView,  View } from 'react-native'
import { Input } from 'react-native-elements'
import { theme } from '../../../contants/colors'
import { OffCancelButton, PrimaryButton } from '../../../custom_components/customButtons'
import CustomHeader from '../../../custom_components/customHeader';
import { editFormStyles } from './editFormStyles'

const EditForm = (props) => {

    const {navigation , route} = props
    const data = route.params.data

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
        >
            <View>
                <CustomHeader title="Edit Profile Informations"/>
            </View>
            
            <View style={editFormStyles.editFormContainer}>
                <View style={editFormStyles.fieldContainer}>
                    <Input label="Username" value={data.username}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <Input label="Email" value="Lorem Ipsum" value={data.email}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <Input label="First Name" value={data.fname}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <Input label="Last Name" value={data.lname}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <Input label="Mobile Number" value={data.contact}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <PrimaryButton title="save" color={theme.primaryBlue}/>
                </View>
                <View style={editFormStyles.fieldContainer}>
                    <OffCancelButton title="cancel" onPress={()=>navigation.goBack()}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditForm
