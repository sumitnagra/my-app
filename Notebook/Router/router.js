import express from 'express'
const router = express.Router()
import { body, validationResult } from 'express-validator';
import Usercontroller from './controller.js'
import getUserById from './middleware.js';
import NoteController from './notescontroller.js';

router.get('/',(req,res)=>{res.send("hello user")})
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], Usercontroller.createUser)

router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
], Usercontroller.Login)

router.post('/getuser', getUserById, Usercontroller.getUser)
router.get('/getallnotes', getUserById, NoteController.getAllNotes)
router.post('/addnotes', getUserById, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 })
], NoteController.addNotes)
router.put('/updatenotes/:id', getUserById, NoteController.updateNotes)
router.delete('/deletenotes/:id', getUserById, NoteController.deleteNotes)

export default router;