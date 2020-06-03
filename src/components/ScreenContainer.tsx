import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
    children: any,
    bgcolor?: 'blue' | 'white',
}

export class ScreenContainer extends React.Component<Props>{
    constructor(props: Props){
        super(props); 
    }

    static defaultProps = {
        bgcolor: 'white'
    }
    
    render() {
        const { bgcolor, ...rest } = this.props;

        return bgcolor === 'white'?
        (
            <SafeAreaView style={[styles.containerMain, {backgroundColor: colors.WHITE}]}>
                <StatusBar barStyle="dark-content"/>
                {this.props.children}
            </SafeAreaView>
        ):(
            <SafeAreaView style={[styles.containerMain, {backgroundColor: colors.PRIMARY_BLUE}]}>
                <StatusBar barStyle="dark-content"/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}