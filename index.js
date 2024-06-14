// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const databaseIdentifier= await central(id); 
  const userData = await dbs[databaseIdentifier](id);
  const personalData = await vault(id)
  const userDataObject = {
    id: id,
    name: personalData.name,
    username: userData.username,
    email: personalData.address,
    phone: personalData.phone,
    website: userData.website,
    company: userData.company
  };
  return userDataObject
} catch(error){
  throw new Error(`Error fetching user data:`)
}

