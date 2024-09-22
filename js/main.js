// B1: Hiển thị danh sách
// - tạo ra 2 lớp đối tượng
//  + Glasses
//  + GlassesList
// B2: Xây dựng chức năng thử kính
// B3: Xây dựng chức năng so sánh

//import cac lop doi tuong
import {Glasses} from "./glasses.js";
import {GlassesList} from "./glassesList.js";

let glassesArray = new GlassesList();
//data
let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

// get id func
let getEle = (id) => {
    return document.getElementById(id);
}

// ham hien thi danh sach kinh
let showGlassesList = () => {
    let divGlassesList = getEle("vglassesList");

    // tao doi tuong kinh va them kinh vao danh sach kinh
    // duyet mang du lieu data

    dataGlasses.map((item, index, array) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.description);
        glassesArray.addGlasses(gl)
        console.log(glassesArray)

    });
    divGlassesList.innerHTML = glassesArray.renderGlasses()
}
showGlassesList();
let tryOnGlasses = (event) => {
    let gID = event.target.getAttribute('data-id');
    // event de tim ra doi tuong dang nhan su kien
    // thuoc tinh target de nhan biet the nao
    // lay thuoc tinh data-id de duyet qua vong lap va tim id trung voiw the do
    let gObject = {};
    for (let value of glassesArray.gList) {
        if (value.id === gID) {
            gObject = value;
        }
    }

    // goi ham hien thi kinh o trong ham thu kinh
    showInfo(gObject);

}
window.tryOnGlasses = tryOnGlasses;

const showInfo = (gObject) => {
    let avatar = getEle("avatar");
    let divInfo = getEle("glassesInfo");
    console.log(gObject)
    avatar.innerHTML = `
        <img src="${gObject.virtualImg}" id="glasses">
    `;
    let status ="";
    if(gObject.status === true) {
        status = "stocking";
    } else {
        status = "sold out";
    }


    divInfo.innerHTML = `
        <h5>${gObject.name} - ${gObject.brand} - ${gObject.color}</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">${gObject.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">${gObject.description}</p>
    `;
    divInfo.style.display = "block";
}

// xay dung before va after
const removeGlasses = (isDisplay) => {
    let glasses = getEle("glasses")
    if (isDisplay) {
        glasses.style.display = "block";
    } else {
        glasses.style.display = "none";
    }
}
window.removeGlasses = removeGlasses;


