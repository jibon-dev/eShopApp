import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

const RelatedProduct = ({navigation, item}) => {
    return (
        <View>
            <View style={styles.relatedProductSquare}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetailStack')}>
                    <View style={styles.relatedProductCard}>
                        {/* <Image source={{uri: `${item.image}`}} style={styles.relatedProductCardImage}/> */}
                        <Image
                            source={require('../../assets/icon/no-photo.png')}
                            style={styles.relatedProductCardImage}
                        />
                        <Text style={styles.relatedProductOfferTitle}>10 % off</Text>
                        {/* <Text style={styles.noRelatedProductOfferTitle}/> */}
                        <View style={styles.relatedProductCardContent}>
                            <Text style={styles.relatedProductCardTitle} numberOfLines={2}>Title ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    relatedProductSquare: {
        width: 150,
        height: 180,
        marginBottom: 5
    },
    relatedProductCard: {
        borderRadius: 5,
        overflow:"hidden",
        elevation: 3,
        backgroundColor: "#FFF",
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 2,
        marginVertical: 1,
    },
    relatedProductCardImage: {
        width: "100%",
        height: 130,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        overflow:"hidden",
    },
    relatedProductOfferTitle: {
        position: 'absolute',
        color: "#FFF",
        backgroundColor: "black",
        width:75,
        padding: 2,
        borderRadius: 5,
        overflow:"hidden",
        textAlign:"center",
        alignSelf: 'flex-end'
    },

    noRelatedProductOfferTitle: {
        position: 'absolute',
        color: "#FFF",
        padding: 2,
        borderRadius: 5,
        overflow:"hidden",
        alignSelf: 'flex-end'
    },
    relatedProductCardContent: {
        margin: 10,
    },
    relatedProductCardTitle: {
        fontSize: 12,
        textAlign: "left"
    },
});

export default RelatedProduct;