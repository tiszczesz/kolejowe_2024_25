import { Post } from "../Models/Post";

export const PostsList = (posts:Post[]):HTMLDivElement =>{
    const div = document.createElement("div");    
    for(let post of posts){
        const h4 = document.createElement("h4");
        h4.style.borderTop = "1px solid black";
        h4.textContent = post.title;
        div.appendChild(h4);
        const p = document.createElement("p");
        p.innerHTML = post.body;
        p.style.padding = "10px";
        p.style.backgroundColor = "#f9f9f9";
        div.appendChild(p);
    }
    return div;
}