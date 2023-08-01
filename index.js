import contactServise from "./contacts.js"
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone}) => {
    switch (action) {
        case "list":
            const contacts = await contactServise.listContacts();
            return console.table(contacts);
        case "get":
            const oneContact = await contactServise.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactServise.addContact({ name, email, phone });
            return console.log(newContact);
        case "remove":
            const removeContact = await contactServise.removeContact(id);
            return console.log(removeContact);
        default:
            console.warn('\x1B[31m Unknown action type!');
         
        }
    
    
}
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv)