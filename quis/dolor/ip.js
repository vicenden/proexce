async function getCollectionData() {
  try {
    const db = await client.db('mydatabase');
    const collection = db.collection('mycollection');
    // Perform operations on the collection
  } catch (error) {
    console.error('Error accessing the collection:', error);
  }
}
