const piroshkiModel = {
    data: [
        {
            name: 'Cabbage and Onion',
            filling: 'A hearty, savory pie of cooked peppered cabbage with chives',
            size: '8oz'
        },
        {
            name: 'Apple Cinnamon Roll',
            filling: 'Slices of Granny Smith Apples dusted with Cinnamon, rolled into dough and finished with a glaze of honey and lemon',
            size: '10oz'
        },
        {
            name: 'Cherry White Chocolate',
            filling: 'Tart Cherries dotted with White chocolate chips.',
            size: '6oz'
        }
    ],

    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name: name,
            filling: filling,
            size: size
        };
        this.data.push(newPiroshki);
    },

    getAllPiroshkis: function() {
        return this.data;
    },

    getPiroshki: function(id) {
        return this.data[id];
    },

    updatePiroshki: function(id, name, filling, size) {
        if (id < this.data.length && id >= 0) {
            let piroshki = {
                name: name,
                filling: filling,
                size: size
            }
            this.data[id] = piroshki
        }
    },

    deletePiroshki: function(id) {
        if (id < this.data.length && id >= 0) {
            this.data.splice(id, 1)
        }
    }
};

module.exports = piroshkiModel;