
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Shoes from '../../components/Shoes'

const Home = () => {

const navigation = useNavigation();

return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image 
            source={require('../../assets/images/banner.png')}
            style={styles.image}
            />

            <View style={styles.textContainer}>
                <Text style={styles.text}>TÊNIS</Text>
                <Text style={[styles.text, { color: '#CECECF' }]}>-</Text>
                <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:"center"}}>
                    <FontAwesome5 name={'filter'} color="gray" size={24} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.line} />

        <ScrollView>

            <Text style={styles.text}>LANÇAMENTOS</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Shoes img={require('../../assets/images/1.png')} cost="R$ 140,99" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Air Max Dia
                </Shoes>
                <Shoes img={require('../../assets/images/2.png')} cost="R$ 280,90" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Downshifter 10
                </Shoes>
            </View> 
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                <Shoes img={require('../../assets/images/3.png')} cost="R$ 560,90" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Squidward Tentacles
                </Shoes>
                <Shoes img={require('../../assets/images/4.png')} cost="R$ 220,90" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Epic React Flyknit 2
                </Shoes>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Shoes img={require('../../assets/images/5.png')} cost="R$ 120,90" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Joyride Run Flyknit
                </Shoes>
                <Shoes img={require('../../assets/images/6.png')} cost="R$ 920,00" onClick={()=>navigation.navigate('Detalhes')}>
                    Nike Air Max Sport
                </Shoes>
            </View>

        </ScrollView>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image:{
       width: '100%' 
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton-Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2
    }
})


export default Home;