const mongoose = require('mongoose');

const craftingItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    material1: {
        type: String
    },
    material2: {
        type: String
    },
    material3: {
        type: String
    },
    material4: {
        type: String
    },
    material5: {
        type: String
    },
    material6: {
        type: String
    },
    material7: {
        type: String
    },
    completed: {
        type: Boolean,
    }
});

module.exports = mongoose.model('CraftingItems', craftingItemSchema, 'craft-list');
