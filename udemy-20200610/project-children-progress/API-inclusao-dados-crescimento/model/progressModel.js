import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);

/* A chave primária é incrementada pelo mongooseSquence */
const progressModel = new Schema({
    _id: Number,
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    headCircumference: {
        type: Number,
        required: true
    },
    dateProgress: {
        type: Date,
        required: true
    },
    account:{
        id: {
            type: Number,
            required: true
        },
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
        dateBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        }
}
},{
    _id: false
});

/* Onde se salva o sequencial do mongooseSquence */
progressModel.plugin(AutoIncrement, {
    collection_name: "progress_counter"
});

/* Exportando para uso no sistema */
export default mongoose.model("progress", progressModel);