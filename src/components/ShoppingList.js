import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends Component{

    constructor(){
        super();
        this.state = {
            dataSource: []
        }
    }

    async componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a4ad16933d12431d9e072c79c84a7a3a").then(response => response.json()).then(response => this.setState({dataSource: response.articles}))
    }
    render(){
        return(
            <ScrollView style = {{backgroundColor: '#F5F5F5'}}>
                {
                    this.state.dataSource.map(
                        eachItem => {
                            return(
                                <ShoppingItem key= {eachItem.title} eachItem = {eachItem}/>
                            )
                        }
                    )
                }
            </ScrollView>
        )
    }
}
