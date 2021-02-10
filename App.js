import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Counter from './componets/Counter';
//import LotsOfGreetings from './componets/LotsOfGreeting';
//import HelloWorld from './componets/HelloWorld';
import SimpleList from './componets/SimpleList';
// from 자바스크립트 파일
// from 디렉토리명 -> 디렉토리/index.js



/* App 컴포넌트 시작 */
export default function App() {
  // JSX
  // UI 템플릿을 작성
  return (
        // 속성={값}
        // 속성={"문자열"}
        // 객체 구조로 넣고싶으면 속성={{name:"sss", phone:"aaa"}}
        // 속성={객체변수}
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/*<LotsOfGreetings></LotsOfGreetings>*/}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>

  );
}
/* App 컴포넌트 끝 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
