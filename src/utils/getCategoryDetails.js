const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");

const getDoc = async (id) => {
    return await tataSalesCollection.doc(id).get();
}

const calcProgress = (docTree) => {
    docTree.progress = (docTree.current/docTree.target)*100;
    docTree.colorCode = (docTree.progress > 33 && docTree.progress < 66) ? "Yellow": (docTree.progress > 66) ? "Green" : "Red";
    docTree.colorCode = (docTree.progress > 33 && docTree.progress < 66) ? "Off track": (docTree.progress > 66) ? "On track" : "At risk";
    return docTree;
}


createCategory = async (req, res, next) => {
    const categoryID = req.query.id;
    let levelNumber = req.query.level;
    let docTree = null;

    const categoryDoc = getDoc(categoryID);

    if (!categoryDoc.exists) {
        console.log(`No such document ID: ${categoryID}!`);
    } else {
        docTree = calcProgress(categoryDoc.data);
        while (docTree.child !== null && levelNumber--) {
            docTree.child = calcProgress(getDoc(docTree.child).data);
        }

        res.json(docTree);
    }
}

module.exports = createCategory;
