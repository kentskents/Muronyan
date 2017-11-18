
import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';


const {
  width: DEVICE_WIDTH,
} = Dimensions.get('window');

const RowNum = 2;

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


class MainScreen extends Component {

    /* fetchでデータ取ってきたい */

    render() {
        return (
            /* androidのエミュではスクロールできないバグあるらしい */
            <FlatList
              style={{marginHorizontal:5}}
              numColumns={RowNum}
              // data={screenProps.cats}
              data={cats}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.key}
                  style={styles.listItem}
                  /* 猫の画像をクリックすると詳細にジャンプ */
                  onPress={() => this.props.navigation.navigate('Detail', item)}
                >
                  <Image style={{width:DEVICE_WIDTH/RowNum,height:200}} source={{uri:item.image}}/>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.container}
            />
        )
    }
}


export default MainScreen
