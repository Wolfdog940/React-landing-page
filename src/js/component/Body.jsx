import React from "react";

const Body = () => {
  const cartas = [
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4_C2BJwtuYIxdTPYXoJMBy5yUrf_8UshjA&usqp=CAU",
      titulo: "Buenos Días",
      texto:
        "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",
      boton: "Find Out more!",
    },
    {
      foto: "https://picsum.photos/id/1000/5626/3635",
      titulo: "Buenas Tardes",
      texto:
        "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet",
      boton: "Find Out more!",
    },
    {
      foto: "https://picsum.photos/id/1001/5616/3744",
      titulo: "Buenas Noches",
      texto:
        "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",
      boton: "Find Out more!",
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwaW6Rd5R0ASlcCLY8W1LhGhLTf0JcegafA&usqp=CAU",
      titulo: "A Dormir",
      texto:
        "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",
      boton: "Find Out more!",
    },
  ];

  return (
    <div className=" container row d-flex  justify-content-center p-0 m-auto " id="carta">
     <div className="row d-flex"> {cartas.map((item, i) => (
        <div key={i} className="col-12 col-md-3   p-0 ">
          <div className="container p-0 d-flex justify-content-center ">
            <div className="card p-0 m-2 ">
             <div c> <img 
                className="card-img-top"
                src={item.foto}
                alt="Card image cap"
              /></div>
              <div className="card-body">
                <h5 className="card-title  text-center mb-2">{item.titulo}</h5>
                <div className=" text-center mb-2">
                  <p className="card-text mt-auto">{item.texto}</p>
                </div>
                <div className="container d-flex justify-content-center">                                    
                  <a href="#" className="btn btn-primary mt-5">
                    {item.boton}
                  </a>
                </div>                                     
              </div>
            </div>
          </div>
        </div>
      ))}</div>
      
    </div>
  );
};

export default Body;
