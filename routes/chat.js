const express = require('express');
const chat = require('../controller/chat.controller.js');

const router = express.Router();

router
  .get('/', chat.getRecentConversation)
  .get('/:chatId', chat.getConversationByRoomId)
  .post('/initiate', chat.initiate)
  .post('/:chatId/message', chat.postMessage)
  .put('/:chatId/mark-read', chat.markConversationReadByRoomId);

export default router;
