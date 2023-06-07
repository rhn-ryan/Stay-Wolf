import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    maxPeople:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    roomNumber:[{number: Number, unavailableDates: {type: [Date]}}],
    
},{timestamps: true});


// [
//     {number:101, unavailableDates:[01.06.2023,02.06.2023]}
//     {number:102, unavailableDates:[01.06.2023,02.06.2023]}
//     {number:103, unavailableDates:[]}
//     {number:104, unavailableDates:[]}
//     {number:105, unavailableDates:[]}
// ]
export default mongoose.model("Room", RoomSchema)