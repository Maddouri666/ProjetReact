import React  from "react";
export default function TechnoAdd(){
    return (
        <div className="technoAdd">
        <h1>Ajouter une technologie</h1>
        <form>
        <label htmlFor="techno-name">Nom</label>
        <br/>
         <input type="text" name="techno-name" id="techno-name"/>
         <br/> 
         <label htmlFor="techno-cat">Catogorie</label>
         <br/> 
        <select name="techno-cat" id="techno-cat">
        <option value="front">Front</option>
        <option value="back">Back</option>
        <option value="fullstack">Full Stack</option>
        <option value="autre">Autre</option>
        </select>
        <br/>
        <label htmlFor="techno-Des">Nom</label>
        <br/>
        <textarea name="techno-Des" id="techno-Des" 
           cols="30" 
           rows="10">
        </textarea>
        <br/>
        <input type="submit"  value="Ajouter techo"/>
        </form>  
        </div>
    );
}