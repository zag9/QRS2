
// import React, {Component} from 'react';
// import { Text, View, Button} from 'react-native';
// import {
//   createBottomTabNavigator,
//   createStackNavigator,
//   createAppContainer,
// } from 'react-navigation';
// import Main from './Components/Main';


// class DetailsScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', title: 'Hi' }}>
//         {/* other code from before here */}
//         {/* <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         /> */}
//           <Main />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         {/* <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         /> */}
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen,
// });


// const App =  createAppContainer(createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Settings: SettingsStack,
//   },
//   // {initialRouteName: "rrASDSAd"},
//   {
//     /* Other configuration remains unchanged */
//   }
// ));
// export default App;









import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import Main from "./Components/Main";
import Login from "./Components/Login";
// import DetailsScreen from "./Components/DetailsScreen";
// import HomeScreen from "./Components/HomeScreen";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showScanScreen: true,
      showScanScreen1: false,
      LoginScreen: true,
      MainScreen: false,
      MeterInput: false,
      MeterList: false,
      logOutBtn: false,

      serialNumber: "",
      showAlert: false,

      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  }

  
  // onPress = () => {
  //   if (this.state.showScanScreen1 == true) {
  //     this.setState({
  //       showScanScreen1: false
  //     });
  //   }
  //   this.setState({
  //     showScanScreen: !this.state.showScanScreen
  //   });
  // };

  onPress1 = () => {
    if (this.state.showScanScreen == true) {
      this.setState({
        showScanScreen: false
      });
    }

    this.setState({
      showScanScreen1: !this.state.showScanScreen1
    });
  };

  onLogin = () => {
      this.setState({
        LoginScreen: false,
        MainScreen: true,
        MeterInput: true,
        MeterList: true,
        logOutBtn: true,
      }); }

      onLogout = () => {
        this.setState({
          // MainScreen: false,
          LoginScreen: true,
          MeterInput: false,
          MeterList: false,
          logOutBtn: false,
          MainScreen: false,
        }); }

        onMeterInput = () => {
          this.setState({
            MainScreen: !this.state.MainScreen
          }); }

          onMeterList = () => {
            this.setState({
              MainScreen: false,
            }); }

  render() {
    return (
      // <PTRView onRefresh={this._refresh}>
      
      <View style= {{flex: 1}}>
      <Text style={styles.welcome}>Welcome to My App ♫</Text>

      {this.state.LoginScreen && <Login />}
      {this.state.LoginScreen && <Button title="Login" onPress={this.onLogin} />}
        

      <View style={styles.Buttons}>
      {this.state.MeterInput && <Button title="MeterInput" onPress={this.onMeterInput} />}
      {this.state.MeterList && <Button title="MeterList" onPress={this.onMeterList} />}
      </View>


        <View style={styles.container}>
          {this.state.MainScreen && <Main />}
          {this.state.logOutBtn && <Button title="LogOut" onPress={this.onLogout} />}
        </View>

        </View>
      // </PTRView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginVertical: 5,
    // backgroundColor: "#F5FCFF"
    justifyContent: "space-between"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 5
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  TextInput: {
    width: 200,
    borderBottomColor: "blue",
    borderWidth: 0.5
  },
  Buttons: {
    // flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-around',
    // backgroundColor: 'green',
    // width: '60%',
    // height: 40

  }
});



// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   NewMeter: NewMeterScreen,
//   Details: DetailsScreen,
// });


// const App1 =  createAppContainer(createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     // Settings: SettingsStack,
//   },
//   {
//     /* Other configuration remains unchanged */
//   }
// ));
// export default App1;