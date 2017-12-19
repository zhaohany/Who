/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class home extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center',
        alignItems: 'center'}}>





              <TouchableOpacity onPress={()=>{}} onLongPress={()=>{Alert.alert('You ask me?')}}
              style={{flex: 1}}
                       >


                               <Text style={{flex:1}}>

                               </Text>


                              <Text style={{flex:1,fontSize: 40,
                           fontWeight: 'bold'}}>
                                WHO
                              </Text>


                     </TouchableOpacity>

                     <TouchableOpacity onPress={()=>{}} onLongPress={()=>{Alert.alert('Oh, Come on!')}}
                     style={{flex: 1}}
                              >


                                      <Text style={{flex:1}}>

                                      </Text>



                                     <Text style={{flex:1,fontSize: 40,
                                  fontWeight: 'bold'}}>
                                       ARE
                                     </Text>


                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}} onLongPress={()=>{Alert.alert('Yes, you! Not me!')}}
                            style={{flex: 1}}
                                     >


                                             <Text style={{flex:1}}>

                                             </Text>



                                            <Text style={{flex:1,fontSize: 40,
                                         fontWeight: 'bold'}}>
                                              YOU?
                                            </Text>
                                   </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Alert.alert('Fine')}} onLongPress={()=>{Alert.alert('You found me.')}}
                style={{width: 50,
                height: 100,
                flexDirection: 'row',
    justifyContent: 'space-between'
                }}
                >

                <Text  style={{width: 100,
                height: 100,fontSize: 40,
             fontWeight: 'bold'}}>
             =>
             </Text>
              </TouchableOpacity>

     </View>


    );
  }
}
