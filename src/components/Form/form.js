import React, {useState} from 'react';
import { Text ,View, TextInput, TouchableOpacity, TouchableNativeFeedback, Keyboard} from 'react-native';
import style from '../Title/style';
import ResultImc from './ResultImc/result'
import styles, { FormContext, FormInput, TextLabel } from "./style"
import styled from 'styled-components/native';


export default () => {
    //Estados para pode gerenciar (Altura,Peso,messagem,IMC,TextButton)
    const [height, setHeight] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [messageImc, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")

    // Formula para calcular IMC
    function imcCalculator(){
        return setImc((weigth/(height * height)).toFixed(2))
    };

    // Validando o IMC
    function validetionIMC(){
        if(weigth != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeigth(null)
            setMessageIMC(`Seu imc é igual`)
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageIMC("Preencha o peso e altura")
    }

return (
    <TouchableNativeFeedback onPress={()=>{Keyboard.dismiss()}}>
        <FormContext>
            <Form>
                <TextLabel>Altura:</TextLabel>
                <FormInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75' 
                    keyboardType='numeric'>
                    </FormInput>
                    <TextLabel>Peso:</TextLabel>
                    <FormInput 
                    onChangeText={setWeigth}
                    value={weigth}
                    placeholder='Ex. 88.9' 
                    keyboardType='numeric'>
                </FormInput>
                    {/* <Button title={textButton} onPress={()=>validetionIMC()}></Button> */}

                <TouchableOpacity 
                    style={styles.buttonCalculator}
                        onPress={()=>{
                            validetionIMC()
                        }}
                    > 
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </Form>
            <ResultImc resultImc={imc} messageResultImc={messageImc}></ResultImc>
        </FormContext>
    </TouchableNativeFeedback>
    );
};