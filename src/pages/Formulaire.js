import React  from 'react';
import { useState } from 'react';
export default function Formulaire () {
    const[nom,setNom]=useState("")
    const[password,setPassword]=useState("")
    const[dateNaissance,setDateNaissance]=useState("")
    const[ville,setVille]=useState("")
    const[genre,setGenre]=useState("")
    const[loisirs,setLoisirs]=useState([]) 

function handleLoisirs(e){
    if (!loisirs.includes(e.target.value)){
        setLoisirs([...loisirs,e.target.value]);
    }
  else{
    setLoisirs([...loisirs.filter((item)=>item!==e.target.value)]);

  }
    
}

function handleSubmit(e){
      e.preventDefault();
      alert("le condidat: "+ nom +" " +password + " " +dateNaissance + ville+" "+" "+genre+" "+loisirs.join(',')+" a ajouter");
    }  
return(
<div>
<form onSubmit={(e)=>handleSubmit(e)} >
     <label>Nom</label>&nbsp; &nbsp;
     <input type="text" name="nom" onChange={(e)=>setNom(e.target.value)}/><br/>
     <label>Mot de passe</label>&nbsp; &nbsp;
     <input type="password" name='motpasse' onChange={(e)=>setPassword(e.target.value)}/><br/>
     <label>Date de naissance</label>&nbsp;&nbsp;
     <input type="date" name='datenais' onChange={(e)=>setDateNaissance(e.target.value)}/><br/>
     <label>Ville</label>&nbsp; &nbsp;
     <select name="ville" onChange={(e)=>setVille(e.target.value)}>
         <option selected="selected">choisir une ville  </option>
         <option value="1">Tunis</option>
        <option value="2">Jendouba</option>
     </select>
     <label>Genre</label> &nbsp; &nbsp;
     <input type="radio" name="genre" value="Homme" onChange={(e)=>setGenre(e.target.value)}/>Homme &nbsp;&nbsp;
     <input type="radio" name="genre" value="Femme" onChange={(e)=>setGenre(e.target.value)}/>Femme <br/>
    <label>loisirs</label> &nbsp; &nbsp;
    <input type="checkbox" name="sport" onChange={(e)=>handleLoisirs(e)}  value="Sport"/>Sport
    <input type="checkbox" name="lecture" onChange={(e)=>handleLoisirs(e)}   value="Lecture"/>Lecture
    <input type="checkbox" name="infomatique" onChange={(e)=>handleLoisirs(e)}  value="informatique"/>Informatique <br/>
    <input type="submit" value="S'inscrire"/>
</form>
</div>
)
}



