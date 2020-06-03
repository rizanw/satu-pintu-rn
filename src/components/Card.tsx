import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../res/styles"; 


interface Props {
  activeOpacity?: number;
  children: React.ReactNode; 
  onPress?: Function;
}

class Card extends React.Component <Props>{
    constructor(props: Props){
        super(props)
    }

    render(){
        const { children, activeOpacity, onPress, ...rest } = this.props;

        return (
            <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.cardIcon}/>
                <Text style={styles.cardTitle}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

export default Card;
