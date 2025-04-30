import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';  // SplashScreen 모듈을 가져옵니다.
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import { Asset, assets } from 'expo-asset';

SplashScreen.preventAutoHideAsync(); // 스플래시 화면을 자동으로 숨기지 않도록 방지

export default function App() {
  const [ready, setReady] = useState(false); // 상태가 ready일 시, true 주로 로딩할 때 많이 쓰임  
  
  

  // 로딩이 완료되었는지 확인
  useEffect(() => {
    if (assets && loaded) {
      setReady(true); // 모든 리소스가 로드되면 준비 완료 상태로 변경
    }
  }, [assets, loaded]);

  // 스플래시 화면 숨기기
  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync(); // 앱이 준비되면 스플래시 화면을 숨깁니다.
    }
  }, [ready]);



  if (!ready) {
    // 앱이 준비되지 않으면 로딩 화면을 표시
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }


}
      
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  doneText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});