const { Router } = require('express');
const { add, get } = require('./controller');
const router = Router();

router.post('/addContacts', add);
router.get('/getconts:id', get);

module.exports = router;