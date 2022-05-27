import React, {useState} from 'react';
import { Text ,View, TextInput, TouchableOpacity, TouchableNativeFeedback, Keyboard} from 'react-native';
import style from '../Title/style';
import ResultImc from './ResultImc/result'
import styles from "./style"


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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75' 
                    keyboardType='numeric'>
                    </TextInput>
                    <Text style={styles.formLabel}>Peso:</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={setWeigth}
                    value={weigth}
                    placeholder='Ex. 88.9' 
                    keyboardType='numeric'>
                </TextInput>
                    {/* <Button title={textButton} onPress={()=>validetionIMC()}></Button> */}

                <TouchableOpacity 
                    style={styles.buttonCalculator}
                        onPress={()=>{
                            validetionIMC()
                        }}
                    > 
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc resultImc={imc} messageResultImc={messageImc}></ResultImc>
        </View>
    </TouchableNativeFeedback>
    );
};