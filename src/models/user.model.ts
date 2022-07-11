import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

// 1. Create an interface representing a document in MongoDB.
export interface user_interface {
    email: string,
    name: string,
    password: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
    comparePassword(candidatePassword: string): Promise<boolean>;
}

// 2. Create a Schema corresponding to the document interface.
const user_schema = new Schema<user_interface>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

user_schema.index({ email: 1 });

// When the user registers
user_schema.pre("save", async function (this, next) {
      // only hash the password if it has been modified (or is new)
      if (!this.isModified("password")) return next();
  
      // Random additional data
      const salt = await bcrypt.genSalt(10);
  
      const hash = await bcrypt.hashSync(this.password, salt);
  
      // Replace the password with the hash
      this.password = hash;
  
      return next();
    }
);

// Compare a candidate password with the user's password
user_schema.methods.comparePassword = async function (candidate_password: string): Promise<boolean> {
    // So we don't have to pass this into the interface method
    const user = this as user_interface;
  
    return bcrypt.compare(candidate_password, user.password).catch((e) => false);
};

// 3. Create a Model.
const User = model<user_interface>('User', user_schema)

export default User;
