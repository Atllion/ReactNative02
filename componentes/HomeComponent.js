import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { EXCURSIONES } from '../comun/excursiones';
import { CABECERAS } from '../comun/cabeceras';
import { ACTIVIDADES } from '../comun/actividades';
import { baseUrl } from '../comun/comun';

const styles = StyleSheet.create({
    titulo: {
        color: 'chocolate',
        fontSize: 31
    }
});

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card>
                  
                    <Card.Divider/>
                    <Card.Image source={{ uri: baseUrl + item.imagen }}>
                        <Card.Title style={styles.titulo}>{item.nombre}</Card.Title>
                    </Card.Image>
                    <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                    
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          excursiones: EXCURSIONES,
          cabeceras: CABECERAS,
          actividades: ACTIVIDADES
        };
    }

    render() {
        
        return(
            <ScrollView>
                <RenderItem item={this.state.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.state.excursiones.filter((excursion) => excursion.destacado)[0]} />
                <RenderItem item={this.state.actividades.filter((actividad) => actividad.destacado)[0]} />
            </ScrollView>
        );
    }
}

export default Home;