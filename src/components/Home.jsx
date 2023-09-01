import React from 'react'
/* import { Link } from 'react-router-dom' */
import imgmano1 from '../assets/Images/mano_teclado1.png'
import imgmano2 from '../assets/Images/mano_teclado2.png'
import imgmano3 from '../assets/Images/mano_teclado3.png'
import imgmano4 from '../assets/Images/mano_teclado4.png'
import imgobj1 from '../assets/Images/teclado_objetivo1.jpg'
import imgobj2 from '../assets/Images/teclado_objetivo2.jpg'
import imgobj3 from '../assets/Images/teclado_objetivo3.jpg'
import imgobj4 from '../assets/Images/teclado_objetivo4.jpg'

const Home = () => {
  return (
    <div className='cajaHome'>
        <div className="cajaimgtext1">
            <div className="col-xl-6 row border border-2 border-dark m-0 p-0">
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgmano1}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgmano2}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgmano3}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgmano4}/>
            </div>
            <div className="col-xl-6 row">
                <h2 className="text-center mt-4 text-decoration-underline">
                    ¿Quienes somos?
                </h2>
                <div className="ficha-txt">
                    <p className="text-center mb-auto p-3">
                        Somos una empresa que nace de la necesidad de los usuarios de hardware en obtener el teclado más acorde a sus situaciones, esto va desde la anatomía particular de cada persona (manos grandes, dedos pequeños, discapacidades), hasta la subjetividad de cada usuario sobre sus índices de belleza. Es por esto, que no solo somos un local de venta de hardware, sino que nos consideramos facilitadores de confort y funcionalidad.
                        Además, trabajamos para que nuestros colaboradores y equipos se sientan protagonistas de su desarrollo mientras crean una experiencia única, centrada en el usuario, creando así una nueva generación de comerciantes enfocados prioritariamente en la calidad del servicio brindado al cliente, lo cual significará indudablemente, un éxito económico para cualquier empresa.
                    </p>
                </div>
            </div>
        </div>
        <div className="cajaimgtext2">
            <div className="col-xl-6 row">
                <h2 className="text-center mt-4 text-decoration-underline">
                    Nuestro Objetivo
                </h2>
                <div className="ficha-txt">
                    <p className="text-center mb-auto p-3">
                        Nos dedicamos a fomentar experiencias de usuario maravillosas para creadores de contenido, empresarios, jugadores, permitiendo que todos puedan alcanzar un nivel de satisfacción en su vida, como proveedores de hardware nos encontramos en la constante busqueda de mejora, dejando al alcance todo lo mejor para nuestros clientes.
                        Ofrecemos una completa línea de productos de teclados que tiene como objetivo brindar el mejor diseño con las mejores funcionalidades, permitiendo a nuestra clientela elegir la opción más anatómicamente correcta para su uso diario. Preocupándonos siempre por la salud de nuestros clientes, sobre todo, por la salud de sus dedos, manos y muñecas, hemos establecido una reputación como líder en la industria con productos de calidad que incluyen los mejores teclados para PC considerando la situación de cada uno de nuestros clientes.
                    </p>
                </div>
            </div>
            <div className="col-xl-6 row border border-2 border-dark m-0 p-0">
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgobj1}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgobj2}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgobj3}/>
                <img className="col-md-6 object-fit-contain bg-dark border border-3 border-dark p-0" src={imgobj4}/>
            </div>
        </div>
    </div>
  )
}

export default Home