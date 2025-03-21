/*
 This file contains the logic for custom software programs
 that perform more complex actions than just displaying some text or HTML.

 You are invited to edit this file to define your own commands!
 Start by removing the demo ones that you don't need for your game.

 Remember that function names must match the names of the programs in software.json.
 */

/* eslint-disable no-inner-declarations, no-nested-ternary, no-sequences, no-unused-vars */
function contacts() {
    return new Promise((resolve, reject) => {
        const messageList = [];
        if(contactdict[userDatabase.userId] !== undefined) {
            $.each(contactdict[userDatabase.userId], (index, contact) => {
                if(contact.access.includes(userDatabase.userId)) {
                    messageList.push(`[${index}] ${contact.title}`);
                }
            });
        }


        if(messageList.length === 0) {
            reject(new ServerIsEmptyError("Contacts"));
            return;
        }

        resolve(messageList);
    });
}

function other() {
    return new Promise((resolve, reject) => {
        const messageList = [];

        $.each(otherslist, (index, other) => {
            messageList.push(`[${index}] ${other.title}`);
        });

        if(messageList.length === 0) {
            reject(new ServerIsEmptyError("Other list"));
            return;
        }

        resolve(messageList);
    });
}

function factions(args) {
    return new Promise((resolve, reject) => {
        const messageList = [];

        $.each(factionslist, (index, faction) => {
            messageList.push(`[${index}] ${faction.title}`);
        });

        if(messageList.length === 0) {
            reject(new ServerIsEmptyError("Factions list"));
            return;
        }

        resolve(messageList);
    });
}

function places(args) {
    return new Promise((resolve, reject) => {
        const messageList = [];

        $.each(placelist, (index, place) => {
            messageList.push(`[${index}] ${place.title}`);
        });

        if(messageList.length === 0) {
            reject(new ServerIsEmptyError("Places list"));
            return;
        }

        resolve(messageList);
    });
}