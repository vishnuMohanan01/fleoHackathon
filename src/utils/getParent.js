const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");

const getDocWithChild = async (id) => {
    return await tataSalesCollection.where("child", "==", id).get();
}


getParent = async (req, res, next) => {
    const id = req.query.id;

    const snapshot = getDocWithChild(id);

    if (snapshot.empty) {
        res.send(null);
    } else {
        res.json(snapshot.data);
    }
}

module.exports = getParent;
