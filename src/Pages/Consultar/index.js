import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import styleExterno from '../../../styles.js';
import {db} from '../../../firebase.js'


export default function Consultar({navigation}){
    const [aptos,setarAptos] = useState([]);
      console.disableYellowBox = true;

    useEffect(()=>{
		db.collection('Aptos').onSnapshot(snapshot=>{
			setarAptos(snapshot.docs.map(function(doc){
			return {info:doc.data()}
			}));
		})
    },[])

    return(
        <View style={{flex:1}}>
        <ScrollView style={styleExterno.container3}> 
            <View style={{width:'100%',height:'20%'}}></View>
            {
                aptos.map((val)=>{
                    return(
                        <>  
                            <View style  ={styleExterno.table}>
                                <View style = {{width:'100%',flexDirection:'column',flexWrap:'wrap',justifyContent:'center'}}>
                                    <Text style= {styleExterno.tableText}>Nome: {val.info.Nome}</Text>
									<Text style= {styleExterno.tableText}>Status: {val.info.Status}</Text>
                                    <Text style= {styleExterno.tableText}>ID: {val.info.ID}</Text>
                                </View>	                                                                                          
                            </View>                                                                                                                                        
                        </>
                    );
                })
            }
            <View style={{paddingBottom:200 }}></View>
        </ScrollView>
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