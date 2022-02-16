import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 30,
    },
    resultText: {
        fontSize: 30,
        color: 'black'
    },
    calculationText: {
        fontSize: 24,
        color: 'black'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flexGrow: 7,
        flexDirection: 'row'
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    numbers: {
        flex: 8,
        backgroundColor: '#434343',
    },
    operations: {
        flex: 3,
        justifyContent: 'space-around',
        backgroundColor: '#636363'
    },
    white: {
        color: 'white'
    },
    viewTab: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 80
    },
    touchableOpacity: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    resultView: { 
        flex: 1, 
        marginHorizontal: 20 
    },
    viewData: { 
        height: 50, 
        flexDirection: 'row' 
    },
    viewChilder: { 
        height: 50, 
        flexDirection: 'row' 
    },
    view1: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    view2: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    fontSizeView: { 
        fontSize: 20 
    },
    fontSizeView1: { 
        fontSize: 30, color: 'red'
    }
});
