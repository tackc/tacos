const tacoModel = {
    data: [
        {
            name: 'Captain Beefheart',
            protein: 'Carne Asada',
            garnish: 'cheddar, lettuce, and pico'
        },
        {
            name: 'Piggy Azalea',
            protein: 'Carnitas',
            garnish: 'chile peppers and pineapple'
        }
    ],

    addTaco: function(name, protein, garnish) {
        let newTaco = {
            name: name,
            protein: protein,
            garnish: garnish
        };
        this.data.push(newTaco);
    },

    getAllTacos: function() {
        return this.data;
    },

    getTaco: function(id) {
        return this.data[id];
    },

    updateTaco: function(id, name, protein, garnish) {
        if (id < this.data.length && id >= 0) {
            let taco = {
                name: name,
                protein: protein,
                garnish: garnish
            }
            this.data[id] = taco
        }
    },

    deleteTaco:  function(id) {
        if (id < this.data.length && id >= 0) {
            this.data.splice(id, 1)
        }
    }
};


module.exports = tacoModel;
