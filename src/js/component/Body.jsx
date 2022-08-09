import React from "react";

const Body =()=>{
    
    const Cartas =[{ foto :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4_C2BJwtuYIxdTPYXoJMBy5yUrf_8UshjA&usqp=CAU",titulo :"Buenos Días",texto :"Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",boton :"Find Out more!",},
                   { foto :"https://www.iluminacionfotografica.net/wp-content/uploads/2020/08/iluminacion-del-amanecer-y-el-atardecer.jpg",titulo :"Buenas Tardes",texto :"Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet",boton :"Find Out more!",},
                   { foto :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRdcsRicst15J7sZKhfUbkTKIyRhF3t28Yg&usqp=CAU",titulo :"Buenas Noches",texto :"Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",boton :"Find Out more!",},
                   { foto :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwaW6Rd5R0ASlcCLY8W1LhGhLTf0JcegafA&usqp=CAU",titulo :"A Dormir",texto :"Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",boton :"Find Out more!",}];


    

return(
    <div className="row p-0"id="carta">
    {Cartas.map((item,i) =>( <div key={i} className="col">
        <div className="container-fluid "> 
            
            <div className="card" > 
   <img className="card-img-top" src={item.foto} alt="Card image cap" /> 
   <div className="card-body">
   <h5 className="card-title  text-center mb-2">{item.titulo}</h5>
   <div className=" text-center mb-2">
    <p className="card-text mt-auto">{item.texto}</p>
    </div>
   <div className="container d-flex justify-content-center"><a href="#" className="btn btn-primary">{item.boton}</a></div>
   
   </div>
 </div>
 </div>
   
 
 </div>))}
  </div>

  
     )
    

}

export default Body;