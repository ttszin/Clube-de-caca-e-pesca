import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import {db} from '../../../firebase.js';

export default function Home({navigation}){

    const [nome,setNome] = useState('');
    const [cpf, setCpf] = useState('');


    return(
        <View style={styles.container}>
            <Text>
                Aba Home
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});