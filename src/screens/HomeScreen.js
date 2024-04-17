import {StyleSheet, SafeAreaView} from 'react-native'
import Home from '../../src/components/Home/Home'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Home/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default HomeScreen;