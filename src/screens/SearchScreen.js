import {StyleSheet, SafeAreaView} from 'react-native'
import Search from '../../src/components/Search/Search'

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Search/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default SearchScreen;