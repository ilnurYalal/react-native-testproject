import React, { Component, PropTypes } from 'react';
import { Alert, View, Image, TouchableOpacity, Text, ListView, RefreshControl } from 'react-native';
import styles from './styles';
import AppConfig from 'AppConfig';
import AppStyles from 'AppStyles';
import { SearchBar, HeaderBar } from 'AppComponents';
import { FilterScene, ListDetailScene, } from 'AppScenes';
import { RequestApi, MakeCancelable, GlobalStorage } from 'AppUtilities';
import _, { isEqual } from 'lodash';

class AppointmentsDetailScene extends Component {
  static propTypes = {
    popBack: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isRefreshing: false,
    };
    // Alert.alert(AppConfig.global_userToken);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftImageTitleView}>
            <TouchableOpacity
              onPress={() => {this.props.popBack();}}
            >
              <Image source={require('img/icon/icon_back.png')} style={styles.leftImageTitleViewIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.centerImageTitleView}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Appointments Detail
            </Text>
          </View>
          <View style={styles.rightImageTitleView}>
            <TouchableOpacity>
              {/*<Image source={require('img/icon/icon_arrow.png')} style={styles.rightImageTitleViewIcon} />*/}
            </TouchableOpacity>
          </View>
        </View>


      </View>

    );
  }
}

export default AppointmentsDetailScene;
