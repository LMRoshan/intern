import express from 'express';
import  expressValidator  from 'express-validator';
import Message from '../models/Message.js';
import fetchUser from '../middleware/Fetchuser.js';
import adminOnly from '../middleware/Admin.js';

const { body, validationResult } = expressValidator;
const router = express.Router();

router.post('/createMessage', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required')
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const message = await Message.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });
        return res.status(201).json({ success:true,  message });
    } catch (error) {
        return res.status(500).json({ success:false, message: 'Internal server error', error: error.message });
    }
})

router.get('/getMessages', fetchUser, adminOnly ,async (req, res) => {
    try {
        const messages = await Message.find();
        return res.status(200).json({ success: true, messages });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

router.delete('/deleteMessage/:id', fetchUser, adminOnly ,async (req, res) => {

    try {
        let message = await Message.findById(req.params.id)
        if (!message) return res.status(404).send("Message not found")

        message = await Message.findByIdAndDelete(req.params.id)
        res.json({ success: true ,"Success": "Message has been deleted", message })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})

export default router;