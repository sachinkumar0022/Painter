import { StyleSheet, Text, View, Modal,TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';



const Ads = () => {
  const [selectedValue, setSelectedValue] = useState('Work Status');
 

  return (
    <View>
      <Modal transparent  visible={showmodel} >
         
        <View style={styles.centerView}>
          <View style={styles.modelView}>
          <TouchableOpacity style={styles.Wbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Work Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Sbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Ads

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent:'center',
    
  },
  modelView: {
    bottom: 0,
    alignItems:'center',
    
    borderRadius: 20,
    backgroundColor: "#e3e3e3",
    marginBottom:5,
  },
  modeltxt: {
    fontSize: 20,
    margin: 10,
    color: "black",
    borderWidth: 2,
    paddingHorizontal:10,
    borderRadius: 10
  },
  Sbtn:{
    padding:10,
    paddingHorizontal:35,
    backgroundColor:'red',
    borderRadius:10,
    margin:10
  },
  Wbtn:{
    padding:10,
    paddingHorizontal:20,
    backgroundColor:'blue',
    borderRadius:10,
    margin:10
  },
  tbtn:{
    color:'white',
  fontWeight:'700',
  fontSize:15
  },
  Cbtn:{
    padding:10,
    backgroundColor:'green',
    borderRadius:10,
    paddingHorizontal:25,
    margin:10
  },
  Ttext:{
     fontSize:25,
     fontWeight:"600",
  }
})