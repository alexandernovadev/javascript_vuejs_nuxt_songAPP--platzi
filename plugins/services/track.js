import platziMusicService from './platzi-music'


const trackService = {}//objeto vacio

/*metodo search*/
/* query => indica query*/
// trackService.search = function (query){
trackService.search = function (q){
    const type = 'track'//tipo de busqueda
    
    return platziMusicService.get('/search',{
        params:{q, type}     
    })
    .then(res => res.data) 
    /*.then((res) =>{return res.tada}) para mas de una
    // linea se mantiene el return y las llaves
    .then(function(res){
        return res.data//respuesta de la api
    })*/
}

trackService.getById = function(id){
    return platziMusicService.get(`/tracks/${id}`)
            .then(res=> res.data)
}

export default trackService