import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

// Perfil usando desestructuracion
export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    const [mostrar, setMostrar] =useState(false)

    return(
        <View>
            <Text> {nombre}</Text>

            {/* De un lado la función y del otro lo que se quiere ocultar */}
            {mostrar &&
            <>
            <Text> {carrera} </Text>
            <Text> {materia}</Text>
            <Text> {cuatri}</Text>
            </>
            }
            {/* onPress detecta que estas presionando el boton y cambia de verdadero a falso o viceversa */}
            <Button title =" Ver Perfil" onPress={()=> setMostrar(!mostrar)}/>
        </View>
    )
}



// export const Perfil = (props) => {
//     return(
//         <View>
//             <Text> {props.nombre}</Text>
//             <Text> {props.carrera} </Text>
//             <Text> {props.materia}</Text>
//             <Text> {props.cuatri}</Text>
//         </View>
//     )
// }

