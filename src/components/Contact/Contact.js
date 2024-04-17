import {View, StyleSheet, Text} from 'react-native'

const Contact = () => {
    return (
        <View style={styles.contactContainer}>
            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Hello, Contact </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    contactContainer: {
        flex: 1,
    },
    contact: {
        flex: 1,
        padding:5,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    contactTitle:{
        textAlign:"center"
    }
});

export default Contact;