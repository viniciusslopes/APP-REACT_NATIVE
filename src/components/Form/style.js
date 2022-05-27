import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const FormContext = styled.View`
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: "#ffffff";
    align-items: center;
    margin-top: 50px;
    border-top-left-radius:30px;
    border-top-right-radius: 30px;
`;


const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        marginTop:50,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:30,

    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:10,
        paddingLeft:10
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0000",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30
    }
});

export default styles