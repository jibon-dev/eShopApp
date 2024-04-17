import {StyleSheet, SafeAreaView} from 'react-native'
import About from '../../src/components/About/About'

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <About/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default AboutScreen;