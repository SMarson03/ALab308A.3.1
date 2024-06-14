// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  try{
    //get database identifier from central db
  const databaseIdentifier= await central(id);
  
  //Use identifier to access correct identifier
  const userData = await dbs[databaseIdentifier](id);
 
 //get the uers personal data
  const personalData = await vault(id);
  
  //combine all of it?
  const userDataObject = {
    id: id,
    name: personalData.name,
    username: userData.username,
    email: personalData.address,
    phone: personalData.phone,
    website: userData.website,
    company: userData.company
  };
  return userDataObject;
} catch(error){
  throw new Error(`Error fetching user data: ${error.message}`)
}
}

(userDataObject)