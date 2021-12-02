import React from 'react'
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SkeletonSquareCard = (props) => {
    const {height,width,borderRadius , marginLeft} = props
    return (
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item 
                width={width}
                height={height}
                borderRadius={borderRadius}
                marginLeft={marginLeft}
            />
        </SkeletonPlaceholder>
    )
}

