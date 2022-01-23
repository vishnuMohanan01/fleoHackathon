const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");

const getDoc = async (id) => {
    return await tataSalesCollection.doc(id).get();
}


createCategory = async (req, res, next) => {
    const categoryID = req.query.id;
    let levelNumber = req.query.level;
    let docTree = null;

    const categoryDoc = getDoc(categoryID);

    if (!categoryDoc.exists) {
        console.log(`No such document ID: ${categoryID}!`);
    } else {
        docTree = categoryDoc;
        while (docTree.child !== null && levelNumber--) {
            docTree.child = getDoc(docTree.child);
        }

        res.json(docTree);
    }
}

module.exports = createCategory;
