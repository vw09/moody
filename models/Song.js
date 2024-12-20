import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true, enum: ['angry', 'upset', 'sad', 'good', 'happy', 'spectacular'],},
});

const Song = mongoose.model('Song', songSchema);
export default Song;