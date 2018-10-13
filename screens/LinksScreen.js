import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://vkbotkuzstu.azurewebsites.net/api/groupSchedule/4552')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("all", responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.schedules,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    //componentDidMount() {
    //    return fetch('https://vkbotkuzstu.azurewebsites.net/api/groupSchedule/ÏÈá-162')
    //        .then((response) => response.json())
    //        .then((responseJson) => {

    //            this.setState({
    //                isLoading: false,
    //                dataSource: responseJson
    //            }, function () {

    //            });

    //        })
    //        .catch((error) => {
    //            console.error(error);
    //        });
    //}



    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        console.log("react", this.state.dataSource)
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList style={styles.fla}
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text style={styles.item}>{item.subject}</Text>}
                />
            </View>
        );
    }

}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
        fla: {
            backgroundColor: '#fff'
        }
    })