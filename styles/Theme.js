import {StyleSheet} from 'react-native'


const Theme = StyleSheet.create(
    {
    screen: {
        height: '100%',
        width: '100%',
        backgroundColor: '#264653',
    },

    body: {
        height: '98%',
        width: '97%',
        justifyContent: 'center',
        margin: '2%',
        marginBottom: '6%',
        backgroundColor: '#f5f3f4',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'center',
    },
    textcol: {
        fontSize: 50,
        color: '#373a40',
    },
    themeCol: {
        color: '#19d3da',
        fontSize: 48,
        fontWeight: 'bold',
    },
    task: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '90%',
        padding: 10,
        margin: 4,
        borderBottomColor: 'grey',
        borderRadius: 30,
        backgroundColor: '#eeeeee',
       
    },
    anu:
    {
        height: '98%',
        width: '97%',
        justifyContent: 'center',
        margin: '2%',
        marginBottom: '6%',
        backgroundColor: '#f5f3f4',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'center',

    }

});


export default Theme ;
