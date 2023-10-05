import {Platform, StyleSheet} from 'react-native'

const colors = {
    primary: '#fff12A',
    secondary: '#479E1C',
    warning: '#BC3C3C',
    black: '#121212',
    bg: '#F3F5FB',
    white:'#fff',
    tabBG:'rgba(231,231,232)',
    gray:'#656565',
    gray2:'#a4a4a8'
};
const fonts = {
    neueMontreal: 'NeueMedium',
    neueRegular: 'NeueRegular'
}
const tab =  StyleSheet.create({
    blur:{
        overflow: 'hidden',
        borderRadius: 50,
        marginHorizontal:10,
        marginBottom: 15,
    },
    barStyle:{
        position: 'absolute',
        borderTopWidth: 0,
        borderRadius: 50,
    }

});
const globalStyles = StyleSheet.create({
    container: {
        flex:1,
    },
    flex: {
        flex: 1,
    },
    main: {
        flex:1,
        marginHorizontal: 15,
        marginTop: 10,
    },
    h1: {
        fontSize: 22,
        fontFamily: fonts.neueMontreal,
        color: colors.black,
    },
    center: {
        textAlign: "center",
    },
    h2: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.neueRegular,
    },
    h3: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.neueRegular,
    },
    h4: {
        fontSize: 16,
        color: colors.black,
        lineHeight:20,
        fontFamily: fonts.neueRegular,
    },

    h5: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.neueRegular,
    },
    h6: {
        fontSize: 12,
        color: colors.black,
        fontFamily: fonts.neueRegular,
    },
    regular:{
        fontFamily: fonts.neueRegular,
    },
    medium:{
        fontFamily: fonts.neueMontreal,
    },
    hr: {
        marginTop: 5,
        borderBottomColor: colors.gray,
        borderBottomWidth: 2,
        alignSelf:'stretch',
    },
    bgGray: {
        backgroundColor: "gray",
        borderBottomColor: 'gray',
    },
    btn: {
        width: '100',
        backgroundColor: colors.primary,
        padding:10,
        borderColor:'red',
    },
    btnCircle: {
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 70,
        right: 20,
        zIndex:3,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export {globalStyles, fonts, colors, tab}