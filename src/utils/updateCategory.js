const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");


createCategory = async (req, res, next) => {
    const categoryID = req.query.id;

    const newDocID = await tataSalesCollection.doc(categoryID).update({
        current: req.query.current,
        target: req.query.target
    });

    res.send("update done!!");
}

module.exports = createCategory;
