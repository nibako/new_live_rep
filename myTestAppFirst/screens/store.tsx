import { assertExpressionStatement } from "@babel/types";
import { AsyncStorage } from "react-native";
import axios from 'axios';

let baseUrlMap = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyB44z5JN3ouk4sCMe-p6WrQzUEvSu6lyyw&query=%22bar%22&location=49.4873425,8.4679418&radius=8000'

class AppStore {

    apiMap = require('axios').create({baseUrlMap})


    constructor()
    {
        this.apiMap.get().then(({})=>console.log())
    }
    



}