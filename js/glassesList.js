export class GlassesList {
    constructor(){
        this.gList = [];
    }
    addGlasses(glasses){
        this.gList.push(glasses);
    }
    renderGlasses(glasses){
        // các thé html chứa nội dung của các đối tượng kính
        let contentHtml = "";
        contentHtml = this.gList.reduce((glcontent,item,index) => {
            glcontent += `
            <div class="col-4" >
                <img src="${item.src}" class="img-fluid" data-id="${item.id}" onclick="tryOnGlasses(event)">
            </div>
            `;
            return glcontent;
        }, ``);
        return contentHtml;
    }
}