import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface user_interface {
    email: string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

// 2. Create a Schema corresponding to the document interface.
const user_schema = new Schema<user_interface>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true }
    },
    { timestamps: true }
)

// 3. Create a Model.
const User = model<user_interface>('User', user_schema)

export default User;
