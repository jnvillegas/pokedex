import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokeDetail, Home } from './pages';
import './index.scss'
import PokemonProvider from "./context/PokemonContext";
import React from 'react';


const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},
{
    path: "/:pokeId",
    element: <PokeDetail />,
}
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
        <PokemonProvider>   
            <RouterProvider router={router} />       
        </PokemonProvider>
    
);
