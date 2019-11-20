"use strict";
const prob = require('probe-image-size');

export class JsonModel {
    constructor(item, axios, onLoaded) {
        this.baseURL = 'https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/';
        this.axios = axios;
        this.fetchModel(item).then(data => {
            onLoaded(data);
        });
    }

    fetchModel(item, child = null) {
        return Promise.all([
            this.axios.get(this.baseURL + item.modelPath).then(model => {
                model = model.data;

                if(child !== null)
                    model.textures = child.textures;
                else
                    model.textures = Object.fromEntries(Object.entries(model.textures).filter(t => t[0] !== 'particle'));

                if('__comment' in model) delete model.__comment;
                if('credit' in model) delete model.credit;
                if('parent' in model) {
                    let parentModel = model.parent.split('/').slice(-1)[0];
                    return this.fetchModel(parentModel, item, model);
                }

                return this.fetchTextures(model, item.textures);
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

    fetchTextures(model, textures) {
        let promises = textures.map(t => {
            return [
                t.name,
                this.loadImage(this.baseURL + t.texture).catch(e => e),
                this.axios.get(this.baseURL + t.texture + '.mcmeta').catch(e => e)
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
