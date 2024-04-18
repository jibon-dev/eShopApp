import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Brand from '../components/Brand/Brand';

const BrandScreens = ({navigation}) => {
  return (
    <SafeAreaView style={styles.brandContainer}>
      <View style={styles.brand}>
        {/* Brand Title */}
        <View style={styles.brandSearchForm}>
          <View style={styles.sectionSearch}>
            <TextInput
              name="searchData"
              placeholder="Search Our Brand Name"
              textAlign="center"
              style={styles.searchStyleInput}
              selectionColor="#551E18"
            />
            <FontAwesome name="search" size={20} style={styles.searchIcon} />
          </View>
        </View>
        {/* Brand Main Content */}
        <ScrollView>
          <Brand navigation={navigation} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  brand: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  brandTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  brandSearchForm: {
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5,
  },

  sectionSearch: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#551E18',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
      android: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#551E18',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
    }),
  },
  searchStyleInput: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: 10,
  },
  searchIcon: {
    backgroundColor: '#551E18',
    color: '#FFF',
    padding: 10,
    height: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default BrandScreens;
