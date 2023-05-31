'use client'
import { useState } from 'react';
import GetPokemon from '../../service/get_pokemon'
import style from '../styles/proof.module.css';

const change_base = [ 
    "Bulbasur","Ivisaur", "Benusaur", "Charmander", "Charmaleon", "Charizard",
    "Squirtle","Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
 ];

const Proof_Pokemon = ()=> {

    const [ selectBase, setSelectBase ] = useState('');
    const [ pokemon, setPokemon ] = useState('');
    const [ id, setId ] = useState(0);
    
    const handleBase = async (e)=>{
            e.preventDefault;
            const data_base = e.target.innerHTML;
            setSelectBase(data_base);
            for (let i = 0; i < change_base.length; i++) {
                const element = change_base[i];
                if( element == data_base ){
                    const data = await GetPokemon(i+1);
                    setPokemon(data.name);
                    setId(data.id);
                }
            }
        }
    
      return (
        <div className={ style.Content }>
            <div className={ style.dropdown }>
                <span> Pokemons list: </span>
                <div className={ style.dropdown_content }>
                {
                    change_base.map( ( pokemon, i )=>{
                        return <p onClick={ handleBase } key={ i } >{ pokemon }</p>
                    } )     
                }
                </div>        
            </div>
            <div className={ style.Messagge }>
                <h3> { pokemon } 
                  { (selectBase) 
                    ? <span className='c-teal l-text'> "Exelent choice" </span>
                    : <span className='l-text'> Select a pokemon. "Fetch proof" </span>
                  } 
                </h3>
                { (selectBase) 
                    && <h4 className='c-blue'>Is the pokemon (#{ id }) from the API</h4>
                } 
                
            </div>
            
        </div>
      )
    }
    
    export default Proof_Pokemon; 