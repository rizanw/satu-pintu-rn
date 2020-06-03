import React from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class BantuanScreen extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <ScreenContainer>
          <ScrollView style={{backgroundColor:colors.WHITE}}>
            <View style={styles.bantuanContainer}>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText, styles.bantuanTextTitle]}>Apa bedanya Akun Penyelenggara dengan Akun Peserta?</Text>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText]}>Akun penyelenggara dikhususkan bila anda adalah seorang penyelenggara lomba atau pihak berwenang lainnya yang mengurus suatu kegiatan perlombaan atau event dengan tujuan Informasinya bisa dimuat di satupintu.</Text>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText]}>Akun Peserta dikhususkan untuk anda yang ingin mencari sebuah informasi mengenai perlombaan atau event dengan mudah serta fitur yang lengkap di satupintu.</Text>
            </View>
            <View style={styles.bantuanContainer}>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText, styles.bantuanTextTitle]}>Apakah layanan satupintu gratis?</Text>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText]}>Jasa pencarian informasi bagi pengguna adalah gratis. Karena kemudahan informasi adalah misi kami. sedangkan dari sisi penyelenggara ada dua opsi</Text>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText]}>Gratis : Informasi hanya dihimpun melalui aplikasi satupintu.</Text>
            <Text style={[styles.bantuanTextContainer, styles.bantuanText]}>Premium : Informasi dihimpun di pada aplikasi satu pintu dengan pilihan rekomendasi pencarian dan juga analisis statistik perlombaan atau event yang di sebarkan melalui satupintu.</Text>
            </View>
          </ScrollView>
      </ScreenContainer>
    );
  }
}
