const firestore = require("../firebaseAdmin/firestore");

const tataSalesCollection = firestore.collection("tata");

const getDocWithChild = async (id) => {
    return await tataSalesCollection.where("child", "==", id).get();
}

deleteCategory = async (req, res, next) => {
    const id = req.query.id;

    let doc = await tataSalesCollection.doc(id).get();
    let docNext = doc;

    if (!doc.exists()) {
        res.send("No such Doc found");
    }
    else {
        if (res.query.deletechildren === "true") {
            while (doc.data.child !== null) {
                docNext = await tataSalesCollection.doc(doc.data.child).get()
                await tataSalesCollection.doc(id).delete();
                doc = docNext;
            }

            res.send("delete done !!");
        }
        else {
            let parent = getDocWithChild(id).data;
            await tataSalesCollection.doc(parent.id).update({child: null});
            res.send("delete done !!")
        }
    }


}

module.exports = deleteCategory;
