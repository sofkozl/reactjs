import { ADD_MESSAGE, DELETE_MESSAGES } from "./Actions";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_MESSAGE: {
      const {
        message,
        chatId
      } = action.payload; // из payload достаем объект сообщение и ИД чата

      const newMessages = {...state.messages}; // копируем предыдущее состояние чатов
      // работаем далее с новой копией списка сообщений
      newMessages[chatId] = { // обращаемся по чатИД к объекту с сообщениями, и присваиваем ему массив
        ...(newMessages[chatId] || {}), // 1 - копируем предыдущ сообщения по чатИД
        message, // 2 - новое сообщение доб. в конец списка
      }

      return {
        messages: newMessages // присваиваем новый объект стейту
      }
    }

    case DELETE_MESSAGES: {
      if (!state.messages.hasOwnProperty(action.payload)) { // проверяем, есть ли чатИД в чате
        return state // возвр. стейт без изменений
      }

      const newMessages = {...state.messages}; // если чатИД есть, то снова делаем копию
      delete newMessages[action.payload]; // с помощью оператора делит удаляем вложенный объект сообщений

      return {
        messages: newMessages
      }
    }

    default: {
      return state;
    }
  }
}
