import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";


interface BProps {
  activeOpacity?: number;
  children: React.ReactNode;
  buttonStyle?: 'primary' | 'secondary' | 'outlined';
  onPress?: Function;
}

class Button extends React.Component <BProps>{
    constructor(props: BProps){
        super(props)
    }

    static defaultProps = {
        buttonStyle: 'primary'
    }

    isPrimary(style:any){
        if (style == 'primary'){
            return true
        }else if(style == 'secondary') {
            return false
        }
    }

    render(){
        const { children, activeOpacity, buttonStyle, onPress, ...rest } = this.props;

        return buttonStyle === 'outlined'?
            (
                <TouchableOpacity onPress={onPress} style={[styles.button, styles.buttonOutlined]} activeOpacity={activeOpacity || 0.8} {...rest}>
                    <Text style={[styles.buttonText, {color:colors.PRIMARY_BLUE}]}>
                        {children}
                    </Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity onPress={onPress} style={[styles.button, this.isPrimary(buttonStyle)?styles.buttonPrimary:styles.buttonSecondary]} activeOpacity={activeOpacity || 0.8} {...rest}>
                    <Text style={[styles.buttonText, this.isPrimary(buttonStyle)?{color:colors.WHITE}:{color:colors.BLACK}]}>
                        {children}
                    </Text>
                </TouchableOpacity>
            )
    }
}

export default Button;
