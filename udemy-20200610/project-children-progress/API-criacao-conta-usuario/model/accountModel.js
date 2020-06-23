import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);

/* A chave primária é incrementada pelo mongooseSquence */
const accountModel = new Schema({
    _id: Number,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            /* Para não permitir repetir o email, definimos um index único para o mongodb */
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    dateBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
},{
    _id: false
});

/* Onde se salva o sequencial do mongooseSquence */
accountModel.plugin(AutoIncrement, {
    collection_name: "account_counter"
});

/* Exportando para uso no sistema */
export default mongoose.model("accounts", accountModel);