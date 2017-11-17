/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import { GiftedChat } from 'react-native-gifted-chat';
import FCM from "react-native-fcm";
import { StackNavigator,TabNavigator } from 'react-navigation';


const {
  width: DEVICE_WIDTH,
} = Dimensions.get('window');

const RowNum = 2;

// const slideWidth = DEVICE_WIDTH;
// const sliderHeight = DEVICE_WIDTH / 2;

const cats = [
  {
    key:1,
    kind:'雑種',
    sex:'オス',
    age:'２ヶ月齢',
    size:'小型',
    color:'茶白',
    place:'室蘭保健所',
    limit:'１１月２０日（月）',
    detail:'１１月７日に伊達市北稀府町で保護された迷い猫です。当初は威嚇していましたが今ではだいぶ慣れてきました。自分からは近寄ってきませんが手を差し出すとすり寄って気持ちよさそうにしてきます。抱かれるのは苦手ですぐにゲージへ戻ろうとします。えさは固形食で可能ですが、缶詰食がお気に入りのようです。トイレは猫砂で大丈夫です。',
    image:'https://dl.dropboxusercontent.com/s/aohqm9w3ziesatt/171113tyasiro2.JPG'
  },
  {
    key:2,
    kind:'雑種',
    sex:'オス（未去勢）',
    age:'２才',
    size:'中～大型',
    color:'白黒',
    place:'室蘭保健所',
    limit:'H29.１０月３１日（火）',
    detail:'室蘭市で２年間暮らしていましたが、飼い主の都合により引き取られることになりました。飼われていただけあり初対面の人でも問題なく触れ合えますが、一人っ子だったのでほかの猫がいる環境にはあまり慣れていないようです。食欲が強く１日あたり１５０ｇの固形食を平らげます（今は固形食８０～１００ｇ与えています）。ほかの猫がいるストレスなのか軟便が続いています。糞便内に肉眼で確認できる寄生虫はいません。両耳をかゆがっている仕草があり見たところ両耳とも真っ黒に汚れていました。ダニはいませんでしたが念のため駆虫薬を打ち毎日こまめに掃除してあげています。トイレは猫砂で大丈夫です。未去勢なのですでに雌猫を飼っている方の場合は赴任手術が必要です。',
    image:'https://dl.dropboxusercontent.com/s/rszs59dc6smwz5a/171003sirokuro1.jpg'
  },
  {
    key:3,
    kind:'雑種',
    sex:'メス',
    age:'３ヶ月齢',
    size:'中型（やや小さい）',
    color:'キジトラ',
    place:'室蘭保健所',
    limit:'９月１１日（月）',
    detail:'８／１２に登別市内パチンコ店の風除室に捨てられていたところを店員が見つけました。一応負傷動物扱いとして公示しましたが結局飼い主は現れませんでした。生まれつきかどうかはわかりませんが左目をなくしています。それでも日常生活に大きな支障はなく少しくらいの段差なら飛び降りることが出来ます。とても人慣れしており遊びたい盛りで、猫じゃらしによく反応します。抱きかかえてもおとなしいです。ちょっと猫風邪気味なのかくしゃみを時々しています。えさは固形食だけで可能です。トイレは猫砂で大丈夫です。９月１０日の動物愛護フェスティバルinDCMホーマック弥生店に出張予定です。',
    image:'https://dl.dropboxusercontent.com/s/simhof9go66h8so/170821kizitora1.jpg'
  },
  {
    key:4,
    kind:'雑種',
    sex:'オス',
    age:'２ヶ月齢',
    size:'小型',
    color:'茶白',
    place:'室蘭保健所',
    limit:'１１月２０日（月）',
    detail:'１１月７日に伊達市北稀府町で保護された迷い猫です。当初は威嚇していましたが今ではだいぶ慣れてきました。自分からは近寄ってきませんが手を差し出すとすり寄って気持ちよさそうにしてきます。抱かれるのは苦手ですぐにゲージへ戻ろうとします。えさは固形食で可能ですが、缶詰食がお気に入りのようです。トイレは猫砂で大丈夫です。',
    image:'https://dl.dropboxusercontent.com/s/aohqm9w3ziesatt/171113tyasiro2.JPG'
  },
  {
    key:5,
    kind:'雑種',
    sex:'オス（未去勢）',
    age:'２才',
    size:'中～大型',
    color:'白黒',
    place:'室蘭保健所',
    limit:'H29.１０月３１日（火）',
    detail:'室蘭市で２年間暮らしていましたが、飼い主の都合により引き取られることになりました。飼われていただけあり初対面の人でも問題なく触れ合えますが、一人っ子だったのでほかの猫がいる環境にはあまり慣れていないようです。食欲が強く１日あたり１５０ｇの固形食を平らげます（今は固形食８０～１００ｇ与えています）。ほかの猫がいるストレスなのか軟便が続いています。糞便内に肉眼で確認できる寄生虫はいません。両耳をかゆがっている仕草があり見たところ両耳とも真っ黒に汚れていました。ダニはいませんでしたが念のため駆虫薬を打ち毎日こまめに掃除してあげています。トイレは猫砂で大丈夫です。未去勢なのですでに雌猫を飼っている方の場合は赴任手術が必要です。',
    image:'https://dl.dropboxusercontent.com/s/rszs59dc6smwz5a/171003sirokuro1.jpg'
  },
  {
    key:6,
    kind:'雑種',
    sex:'メス',
    age:'３ヶ月齢',
    size:'中型（やや小さい）',
    color:'キジトラ',
    place:'室蘭保健所',
    limit:'９月１１日（月）',
    detail:'８／１２に登別市内パチンコ店の風除室に捨てられていたところを店員が見つけました。一応負傷動物扱いとして公示しましたが結局飼い主は現れませんでした。生まれつきかどうかはわかりませんが左目をなくしています。それでも日常生活に大きな支障はなく少しくらいの段差なら飛び降りることが出来ます。とても人慣れしており遊びたい盛りで、猫じゃらしによく反応します。抱きかかえてもおとなしいです。ちょっと猫風邪気味なのかくしゃみを時々しています。えさは固形食だけで可能です。トイレは猫砂で大丈夫です。９月１０日の動物愛護フェスティバルinDCMホーマック弥生店に出張予定です。',
    image:'https://dl.dropboxusercontent.com/s/simhof9go66h8so/170821kizitora1.jpg'
  },
  {
    key:7,
    kind:'雑種',
    sex:'オス',
    age:'２ヶ月齢',
    size:'小型',
    color:'茶白',
    place:'室蘭保健所',
    limit:'１１月２０日（月）',
    detail:'１１月７日に伊達市北稀府町で保護された迷い猫です。当初は威嚇していましたが今ではだいぶ慣れてきました。自分からは近寄ってきませんが手を差し出すとすり寄って気持ちよさそうにしてきます。抱かれるのは苦手ですぐにゲージへ戻ろうとします。えさは固形食で可能ですが、缶詰食がお気に入りのようです。トイレは猫砂で大丈夫です。',
    image:'https://dl.dropboxusercontent.com/s/aohqm9w3ziesatt/171113tyasiro2.JPG'
  },
  {
    key:8,
    kind:'雑種',
    sex:'オス（未去勢）',
    age:'２才',
    size:'中～大型',
    color:'白黒',
    place:'室蘭保健所',
    limit:'H29.１０月３１日（火）',
    detail:'室蘭市で２年間暮らしていましたが、飼い主の都合により引き取られることになりました。飼われていただけあり初対面の人でも問題なく触れ合えますが、一人っ子だったのでほかの猫がいる環境にはあまり慣れていないようです。食欲が強く１日あたり１５０ｇの固形食を平らげます（今は固形食８０～１００ｇ与えています）。ほかの猫がいるストレスなのか軟便が続いています。糞便内に肉眼で確認できる寄生虫はいません。両耳をかゆがっている仕草があり見たところ両耳とも真っ黒に汚れていました。ダニはいませんでしたが念のため駆虫薬を打ち毎日こまめに掃除してあげています。トイレは猫砂で大丈夫です。未去勢なのですでに雌猫を飼っている方の場合は赴任手術が必要です。',
    image:'https://dl.dropboxusercontent.com/s/rszs59dc6smwz5a/171003sirokuro1.jpg'
  },
  {
    key:9,
    kind:'雑種',
    sex:'メス',
    age:'３ヶ月齢',
    size:'中型（やや小さい）',
    color:'キジトラ',
    place:'室蘭保健所',
    limit:'９月１１日（月）',
    detail:'８／１２に登別市内パチンコ店の風除室に捨てられていたところを店員が見つけました。一応負傷動物扱いとして公示しましたが結局飼い主は現れませんでした。生まれつきかどうかはわかりませんが左目をなくしています。それでも日常生活に大きな支障はなく少しくらいの段差なら飛び降りることが出来ます。とても人慣れしており遊びたい盛りで、猫じゃらしによく反応します。抱きかかえてもおとなしいです。ちょっと猫風邪気味なのかくしゃみを時々しています。えさは固形食だけで可能です。トイレは猫砂で大丈夫です。９月１０日の動物愛護フェスティバルinDCMホーマック弥生店に出張予定です。',
    image:'https://dl.dropboxusercontent.com/s/simhof9go66h8so/170821kizitora1.jpg'
  },
]

/* スタイル */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


/*
 * データのタイトルをリスト表示するコンポーネント
 * ナビゲーターで描画すると引数(props)に`navigation`、`screenProps`が渡される
 */
const ListScreen = ({ navigation, screenProps }) => (
  <FlatList
    style={{marginHorizontal:5}}
    numColumns={RowNum}
    data={screenProps.cats}
    renderItem={({ item }) => (
      <TouchableOpacity
        key={item.key}
        style={styles.listItem}
        /* タイトルが押されたら詳細画面にナビゲート、`item`を引数として渡している */
        onPress={() => navigation.navigate('Detail', item)}
      >
        <Image style={{width:DEVICE_WIDTH/RowNum,height:200}} source={{uri:item.image}}/>
      </TouchableOpacity>
    )}
    contentContainerStyle={styles.container}
  />
);
/* ナビゲーションの見た目や挙動に関する設定 */
ListScreen.navigationOptions = () => ({
  /* 画面ヘッダーに表示するタイトルを'Mathematics'にする */
  title: 'むろニャン！',
});


/*
 * データの詳細を表示するコンポーネント
 */
const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/* `navigation.state.params`からリストで渡した`item`の中身が取れる */}
    <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.sex}</Text>
    <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
  </View>
);
DetailScreen.navigationOptions = {
  title: 'Detail',
};


/*
 * StackNavigatorを作成
 * 第一引数は登録する画面(Screen)情報を設定
 * 第二引数はオプション、初期表示画面を設定
 */
const Stack = StackNavigator({
  Detail: { screen: DetailScreen },
  List: { screen: ListScreen },
}, {
  initialRouteName: 'List',
});
/*
 * StackNavigatorをラップするコンポーネント
 * screenPropsにより親からもらったpropsを子にそのまま流している(手抜き)
 * mathematicsリストをAppコンポーネントに持たせているため、
 * ここでListScreenに渡している。
 */
const MathematicsList = ({ screenProps }) => (
  <Stack screenProps={screenProps} />
);
/*
 * タブアイコンの設定
 * tintColorはTabNavigatorのオプションで設定していて、
 * active、inactiveに応じて異なる値が送られてくる
 */
MathematicsList.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Entypo size={24} name="list" color={tintColor} />,
};


/*
 * 項目追加画面を作成
 * 現在はタブアイコンの設定のみのモック
 */
const AddMathItemScreen = () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 42.3180519,
        longitude: 140.9721065,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);
AddMathItemScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Entypo size={24} name="add-to-list" color={tintColor} />,
};


/*
 * TabNavigatorを作成
 * StackNavigatorと基本は同じ
 * 第二引数で画面下タブに表示されるアイコン色とラベル非表示を設定
 */
const Tab = TabNavigator({
  List: { screen: MathematicsList },
  AddItem: { screen: AddMathItemScreen },
}, {
  tabBarOptions: {
    activeTintColor: '#037aff',
    inactiveTintColor: '#737373',
    showLabel: false,
  },
});
/*
 * リストを保持しているAppコンテナコンポーネント
 * 今の所stateを持っている以外はTabNavigatorをラップしているだけ
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats,
    };
  }

  render() {
    /* screenPropsで各子供にmathematicsを渡している */
    return <Tab screenProps={{ cats: this.state.cats }} />;
  }
}
