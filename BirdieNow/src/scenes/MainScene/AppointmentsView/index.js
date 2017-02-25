import React, { Component, PropTypes } from 'react';
import { Alert, View, Image, TouchableOpacity, Text, ListView, RefreshControl } from 'react-native';
import styles from './styles';
import AppConfig from 'AppConfig';
import AppStyles from 'AppStyles';
import { SearchBar } from 'AppComponents';
import { FilterScene, AppointmentsDetailScene } from 'AppScenes';
import { RequestApi, MakeCancelable, GlobalStorage } from 'AppUtilities';
import _, { isEqual } from 'lodash';

class AppointmentsView extends Component {
  static propTypes = {
    pushNavScene: PropTypes.func,
    pushScene: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isRefreshing: false,
      ListDataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) }),
    };

    this.ListSource = ['row 1', 'row 2'];
    this.state.ListDataSource = this.state.ListDataSource.cloneWithRows(this.ListSource);

    this.renderRow = this.renderRow.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.pushCallback = this.pushCallback.bind(this);
  }

  pushCallback() {

  }

  showDetail(rowData) {
    // this.props.pushNavScene(AppointmentsDetailScene, { ...this.props, rowData, callback: this.pushCallback });
    this.props.pushScene(AppointmentsDetailScene, null, "FadeAndroid");
  }

  renderRow(rowData, sectionID, rowID) {
    let pStyle=[styles.rowContainer];
    const aryAccount=[];
    aryAccount.push(
      <TouchableOpacity
        style={[AppStyles.row, { paddingRight: 15, paddingVertical: 8 }]}
        key={'dis'}
      >
        <Text style={[AppStyles.boldFont, styles.txtTicketType]}>DISCOUNT</Text>
        <Text style={{ flex: 1, textAlign: 'right', color: '#e23c14', marginRight: 10 }}>{'From $49.90'}</Text>
        <Image source={require('img/icon/icon_arrow.png')} style={styles.iconArrow} />
      </TouchableOpacity>);
    aryAccount.push(<View key="dis-sep" style={{ backgroundColor: '#ececec', height: 1, marginRight: 15 }} />);

    return (
      <View style={pStyle}>
        <View style={styles.listRow}>
          <TouchableOpacity style={styles.imageWrapper} onPress={() => this.showDetail(rowData)}>
            <Image source={require('img/icon/icon_arrow.png')} style={styles.rowImage} />
          </TouchableOpacity>
          <View style={styles.contentWrapper}>
            <View style={[AppStyles.row, styles.titleWrapper]}>
              <Text style={[AppStyles.boldFont, styles.txtTitle]} numberOfLines={1} ellipsizeMode="tail">
                {rowData.name}</Text>
              <TouchableOpacity style={styles.iconHeartWrapper} onPress={() => {}}>
                <Image source={require('img/icon/icon_heart_empty.png')} style={styles.iconHeart} />
              </TouchableOpacity>
            </View>
            <Text style={[AppStyles.baseFont, styles.txtTitleDetail]} numberOfLines={1} ellipsizeMode="tail">
              {rowData.tagline} </Text>

            <View style={{ backgroundColor: '#ececec', height: 1, marginRight: 15, marginTop: 7 }} />

            {aryAccount}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={this.state.ListDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default AppointmentsView;
