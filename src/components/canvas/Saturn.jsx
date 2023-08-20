import {Suspense,useEffect,useState} from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import CanvasLoader from '../Loader';

const Saturn = () => {
    const sat = useLoader(OBJLoader, '...');
    return (
        <mesh>
            
        </mesh>
    )
}

export default SaturnCanvas;