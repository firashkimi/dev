const express = require("express")
const app = express()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Request-Method','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    next()
})


let fournisseurs = [
    {nom:"wejden",email:"wejden@gmail.com",tel:22222222},
    
    {nom:"Fethi",email:"fethi@gmail.com",tel:3333333},
    
    {nom:"Nedia",email:"nedia@gmail.com",tel:44444444},
]
let client = [
    {nom:"Youssef",email:"youssef@gmail.com",tel:22435222},
    
    {nom:"Saif",email:"saif@gmail.com",tel:29935222},
    
    {nom:"Leo",email:"leo@gmail.com",tel:27735222},
]

let produit = [
    {nom:"Smartphone Apple IPhone 11 / 64 Go / Noir",description:"RAM 4 Go Mémoire 64 Go",prix:2900},
    {nom:"Smartphone Apple IPhone 12 Pro / 5G / 6 Go / 256 Go",description:"RAM 6 Go Mémoire 256 Go",prix:3500},
    {nom:"Smartphone Samsung Galaxy A03s / 3 Go / 32 Go ",description:"RAM 3 Go Mémoire 32 Go",prix:429},
]
// List des fournisseurs
app.get('/fournisseur',(req,resp,next)=>{
    resp.send(fournisseurs)
})

// List des clients
app.get('/client',(req,resp,next)=>{
    resp.send(client)
})
// List des produits
app.get('/produit',(req,resp,next)=>{
    resp.send(produit)
})

app.listen(3000,()=>{console.log('server running')})