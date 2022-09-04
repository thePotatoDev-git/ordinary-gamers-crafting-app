const CraftingItem = require('../models/CraftingItems');

module.exports = {
    getIndex: async (req, res) => {
        try {
            const itemsLeft = await CraftingItem.countDocuments({completed: false})
            const items = await
            CraftingItem.find();
            res.render('index.ejs', { craftingItems: items, left: itemsLeft });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    addItem: async (req, res) => {
        const craftingItem = new CraftingItem(
            {
                item: req.body.item,
                material1: req.body.material1,
                material2: req.body.material2,
                material3: req.body.material3,
                material4: req.body.material4,
                material5: req.body.material5,
                material6: req.body.material6,
                material7: req.body.material7,
                completed: false,
            });
        try {
            await craftingItem.save();
            console.log(craftingItem);
            res.redirect('/');
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect('/');
        }
    },
    markComplete: async (req, res)=>{
        try{
            await CraftingItem.findOneAndUpdate({item: req.body.itemFromJS},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await CraftingItem.findOneAndUpdate({item: req.body.itemFromJS},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        console.log(req.body.itemFromJS)
        try{
            await CraftingItem.findOneAndDelete({item: req.body.itemFromJS})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
};

// // GET
// app.get('/', async (req, res) => {
//     // const craftItems = await db.collection('craft-list').find().toArray()
//     // const craftIncomplete = await db.collection('craft-list').countDocuments({completed: false})
//     // res.render('index.ejs', { items: craftItems, left: craftIncomplete })
//     db.collection('craft-list').find()
//         .toArray()
//     .then(data => {
//         db.collection('craft-list').countDocuments({completed: false})
//         .then(itemsLeft => {
//             res.render('index.ejs', { items: data, left: itemsLeft })
//         })
//     })
// });

// // POST
// app.post('/addCraftingItem', (req, res) => {
//     db.collection('craft-list').insertOne({item: req.body.craftingItem, 
//         material1: req.body.mat1, 
//         material2: req.body.mat2, 
//         material3: req.body.mat3, 
//         material4: req.body.mat4, 
//         material5: req.body.mat5, 
//         material6: req.body.mat6, 
//         material7: req.body.mat7, 
//         completed: false})
//     .then(result => {
//         console.log('Crafting Item Added')
//         res.redirect('/')
//     })
//     .catch(error => console.error(error))
// });