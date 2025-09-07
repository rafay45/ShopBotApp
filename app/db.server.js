const fakeDB = {
  chats: [],
};

export async function saveChat(message) {
  fakeDB.chats.push({
    id: fakeDB.chats.length + 1,
    message,
    createdAt: new Date(),
  });
  return true;
}

export async function getChats() {
  return fakeDB.chats;
}

export default {
  saveChat,
  getChats,
};