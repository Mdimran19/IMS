import mongoose from "mongoose";

const teceherSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email:{
    type: String
  },
  phone:{
    type: String
  },
  nid:{
    type: String
  }
  ,
  // dob:{
  //   type: String
  // },
  gender:{
    type: String
  },
 department:{
    type: String
  },
  // titleAvatar: {
  //   public_id: String,
  //   url: String
  // }
  fileAvatar: {
    public_id: {
        type: String,
        
    },
    url: {
        type: String,
      
    },
},
})

export const Teceher = mongoose.model("Teceher", teceherSchema)