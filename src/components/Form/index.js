import { useState } from "react";
import { TextInput, View, Text, Button} from "react-native";
import Resultado from "./Resultado";

export default function Form()
{
   const [height, setHeight] = useState(null);
   const [weight, setWeight] = useState(null);
   const [mensagem, setMensagem] = useState('Preencha o peso e a altura');
   const [imc, setImc] = useState(null);
   const [buttonTitle, setButtontitle] = useState('calcular');

   function calcularImc()
   {
    return setImc((weight/(height*height)).toFixed(2));
   }

   function validarImc()
   {
        if (weight !=null && height !=null)  {
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMensagem('seu IMC é igual:');
            setButtontitle('Calcular novamente');
            return;
        }
        setImc(null);
        setButtontitle('calcular');
        setMensagem('Preencha o peso e altura');
    }

    return (
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput placeholder="1.79"
                    keyboardtype="numeric"
                    onChangeText={setHeight}
                    value={height}
                />

                <Text>Peso</Text>
                <TextInput placeholder="60 (KG)" 
                    keyboardtype="numeric" 
                    onChangeText={setWeight}
                    value={weight}
                />

                <Button title={buttonTitle} onPress={() => validarImc()}/>
            </View>

            <Resultado mensagem={mensagem} imc={imc}></Resultado>
        </View>
    );
}
