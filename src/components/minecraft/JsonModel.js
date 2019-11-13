"use strict";
const prob = require('probe-image-size');

export class JsonModel {
    constructor(model, axios, onLoaded) {
        this.baseURL = 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/';
        this.axios = axios;
        this.fetchModel(model).then(data => {
            onLoaded(data);
        });
    }

    fetchModel(model, child = null) {
        return Promise.all([
            this.axios.get(this.baseURL + 'models/block/' + model + '.json').then(model => {
                model = model.data;

                if(child !== null)
                    model.textures = child.textures;
                else
                    model.textures = Object.fromEntries(Object.entries(model.textures).filter(t => t[0] !== 'particle'));

                if('__comment' in model) delete model.__comment;
                if('credit' in model) delete model.credit;
                if('parent' in model) {
                    let parentModel = model.parent.split('/').slice(-1)[0];
                    return this.fetchModel(parentModel, model);
                }

                return this.fetchTextures(model);
            })
        ]).then(values => {
            let textures = [];
            for(let i = 1; i < values[0].length; i+=3) {
                let name = values[0][i];
                let texture = values[0][i+1];
                let mcmeta = values[0][i+2];

                let t = {name: name, texture: texture, mcmeta: mcmeta instanceof Error ? null : mcmeta.data};
                if(t.mcmeta === null || t.mcmeta === undefined) delete t.mcmeta;
                textures.push(t);
            }
            return {model: values[0][0], textures: textures};
        });
    }

    fetchTextures(model) {
        let promises = Object.entries(model.textures).map(t => {
            let textureName = t[1].split('/').slice(-1)[0];
            return [
                textureName,
                this.loadImage(this.baseURL + 'textures/block/' + textureName + '.png').catch(e => e),
                this.axios.get(this.baseURL + 'textures/block/' + textureName + '.png.mcmeta').catch(e => e)
            ]
        });
        let flatPromises = promises.reduce((e1, e2) => e1.concat(e2));
        flatPromises.unshift(model);

        return Promise.all(flatPromises);
    }

    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.addEventListener('load', _ => resolve(img));
            img.src = url;
        });
    }
}