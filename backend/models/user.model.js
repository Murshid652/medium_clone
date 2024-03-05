import mongoose ,{Schema} from "mongoose";


const userSchema = new Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        followers : [
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    }
)


userSchema.methods.follow = function(user){
    if(this.following.inddexOf === -1){
        this.following.push(user);
    }
    return this.save();
}

userSchema.methods.addFollower = function(user){
    this.followers.push(user)
}




export const User = mongoose.model("User", userSchema);