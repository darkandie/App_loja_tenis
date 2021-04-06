
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

const Footer = () => {
    return(
        <View>
            <Text style={styles.title}> VOCÊ TAMBEM PODE GOSTAR </Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/images/1.png')} cost="R$ 140,99">
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/images/2.png')} cost="R$ 280,90">
                        Nike Downshifter 10
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/images/3.png')} cost="R$ 560,90">
                        Nike Squidward Tentacles
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton-Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})

export default Footer;