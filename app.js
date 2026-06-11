const htmlbody = document.getElementById("body");
for (let i = 1; i < 1000; i++) {
    const img = document.createElement("img");
    img.setAttribute( "src",
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    );
    htmlbody.append(img);
}