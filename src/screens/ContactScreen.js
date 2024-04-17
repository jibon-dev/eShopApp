import {StyleSheet, SafeAreaView} from 'react-native'
import Contact from '../../src/components/Contact/Contact'

const ContactScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Contact/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ContactScreen;