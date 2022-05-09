const express = require('express');
const deleteController = require('../controller/delete.controller.js');

const router = express.Router();

router
  .delete('/chat/:chatId', deleteController.deleteChatById)
  .delete('/message/:messageId', deleteController.deleteMessageById)

export default router;
