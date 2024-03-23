module.exports = {
    async raiz(req,res){
        let resp = "Servidor Requisitado"
        console.log(resp)
        res.send(resp)
    }
}