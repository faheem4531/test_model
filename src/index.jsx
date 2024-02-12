import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Header from './Header.jsx'
import Title from "./images/heading.svg";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <>
        <div className="nav">
            <Header />
        </div>

        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [4, 2, 6]
            }}
        >
            <Experience />
        </Canvas>

        <div className="content">
            <img src={Title} />
            <p className="dextopText">We provide expert animation services, bringing your ideas to life with creativity and flair.
                Elevate your storytelling with our exceptional team at your service.</p>
            <button className='button' >Watch our Showreel</button>
        </div>
    </>
)