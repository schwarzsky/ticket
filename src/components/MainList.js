import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';


export default class MainList extends PureComponent {

    state = {
        data: [],
        loading: true
    }

    async componentDidMount(){
        try{
            const apiCall = await fetch('http://localhost:3000/api/tickets/1050');
            const apiData = await apiCall.json();

            this.setState({data: apiData, loading: false});
        } catch(err){
            console.log("Error " + error)
        }
    }

    renderItem(data){
        return(
            <Text style={{fontSize: '26px', fontWeight: 'bold'}}>{data._id}</Text>
        )
    }

    render(){
        const { data, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList
                    data={data.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item._id} 
                    />
        } else {
            return <Text style={{fontSize: '26px', fontWeight: 'bold'}}>Loading</Text>;
        }
    }
}