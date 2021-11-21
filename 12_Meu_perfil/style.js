import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F1F5',
        alignItems: 'center',
    },
    container2:{
        flex: 1,
        backgroundColor: '#ffd9f8',
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
        color: '#F3F1F5',
        backgroundColor: '#BFA2DB',
        fontSize: 30,
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 80 / 2,
    },
    textotitulo: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 20,
        marginBottom: 2,
        color: '#7F7C82',
        fontWeight: 'bold',
    },
    texto: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
        marginBottom: 2,
        color: '#7F7C82',
    },
    texto2:{
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        marginBottom: 20,
        color: '#7F7C82',
    },
    texto3:{
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        marginBottom: 2,
        color: '#7F7C82',
    },
    box: {
        backgroundColor: '#ffd9f8',
        borderRadius: 80 / 2,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    box2:{
        backgroundColor: '##ffd9f8',
        marginTop: 40,
        marginRight: 15,
        marginLeft: 15,
    },
    image: {
        width: 300, 
        height: 300, 
        borderRadius: 300 / 2, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    borda: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#BFA2DB',
        padding: 2,
        borderRadius: 300/2,
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 40, 
        marginBottom: 15,
       

    }
})

export { styles };