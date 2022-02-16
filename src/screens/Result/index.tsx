import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
}
const ResultScreen = (props: Props) => {
  const { navigation } = props;
  const [dataResult, setDataResult] = useState([]);

  const _goBack = () => {
    navigation.goBack();
  };

  const getAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('res');
      return data ? JSON.parse(data) : [];
    } catch (error) { }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getAsyncStorage();
      setDataResult(data);
    };
    getData();
  }, [dataResult]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }} onPress={_goBack}>Back</Text>
      <View style={styles.ViewS}>
        {dataResult.map((item) => {
          return (
            <View style={styles.viewChilder}>
              <View style={styles.view1}>
                <Text style={styles.fontSizeView}>
                  {item.res}
                </Text>
              </View>
              <View style={styles.view2}>
                <Text style={styles.fontSizeView1}>
                  {item.total}
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  );
};
export default ResultScreen;
