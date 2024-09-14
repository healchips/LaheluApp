import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.menuIcon}
                onPress={() => navigation.toggleDrawer()}
            >
                <Text style={styles.iconText}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.logoText}>LAHELU</Text>
            <TouchableOpacity style={styles.searchIcon}>
                <Text style={styles.iconText}>🔍</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
    },
    menuIcon: {
        padding: 10,
    },
    searchIcon: {
        padding: 10,
    },
    iconText: {
        color: '#fff',
        fontSize: 24,
    },
    logoText: {
        color: '#00aaff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
