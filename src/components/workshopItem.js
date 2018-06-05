import React from 'react';
import {Card, CardTitle} from 'react-materialize';
const Witem = (props) =>{
    return(
        <Card header={<CardTitle reveal image={props.image} waves='light'/>}
            title={props.title}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">{props.link}</a></p>
        </Card>
    );
}

export default Witem;