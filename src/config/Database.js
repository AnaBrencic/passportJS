import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost/passport_node').then(() => {
    console.log('Mongo conectado')
}).catch(() => {
    console.log('Erro ao se conectar' + err)
});