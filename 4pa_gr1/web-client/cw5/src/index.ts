import { colors } from "./data.js";
import { Post, posts } from "./dataposts.js";

function generSelect(colors: string[]): string {
    let html = `<select id="colors">`;
    for (let color of colors) {
        html += `<option value="${color}">${color}</option>`;
    }
    html += `</select>`;
    return html;
}
function generPosts(posts: Post[]): string {
    let html = ``;
    for (let post of posts) {
        html += `<div class="card m-2">
                    <div class="card-body">
                        <div
                        style="text-decoration: underline;"
                         class=" p-2 card-title bg-warning-subtle">${post.title}</div>
                        <div class="card-text">${post.body}</div>
                    </div>
                </div>`;
    }

    return html;
}

const root = document.querySelector<HTMLDivElement>("#root");
if (root) {
    root.innerHTML = generSelect(colors);
    document.querySelector<HTMLSelectElement>("#colors")?.addEventListener("change", (e) => {
        document.body.style.backgroundColor = (e.target as HTMLSelectElement)?.value;
    });
}
const root2 = document.querySelector<HTMLDivElement>("#root2");
if (root2) {
    root2.innerHTML = generPosts(posts);
}