import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { HISTORIA } from '../comun/historia';
import { ACTIVIDADES } from '../comun/actividades';
import { ScrollView } from 'react-native-gesture-handler';
import { baseUrl } from '../comun/comun';

function Historia(props) {

    const historia = props.historia;
    
        return(
            <Card>
                <Card.Title> {historia.nombre}</Card.Title>
                <Card.Divider/>
                <Text style={{margin: 20}}>
                    {historia.descripcion}
                </Text>
            </Card>
        );
}

class QuienesSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          historias: HISTORIA,
          actividades: ACTIVIDADES,

        };
    }

    render(){

        return (
        <ScrollView>
            <Historia historia={this.state.historias[0]} />
            <Card>
                <Card.Title>"Actividades y recursos"</Card.Title>
                <Card.Divider/>
                {this.state.actividades.map((item, index) => (
                    <ListItem
                    key={index}
                    bottomDivider>
                    <Avatar source={{ uri: baseUrl + item.imagen }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem> 
            ))}
            </Card>
        </ScrollView>
        );
    } 
}

export default QuienesSomos;