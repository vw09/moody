import mongoose from "mongoose";


const moodSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now }, 
    mood: { 
        type: String, 
        required: true,
        enum: ['happy', 'sad', 'angry', 'spectaculair', 'good', 'upset']},
    description: { type: String, required: true },
    recommendedPlaylist: { type: String, required: true },
    recommendedSong: { type: String, required: true }, 
});

const Mood = mongoose.model('Mood', moodSchema); 

export default Mood; 
