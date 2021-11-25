// let loc = "file:///home/abdulmajeed/Documents/website/abdul4majeed.github.io";
let loc = location.origin;
let image_path = loc +'/images/utils/';
let hover_in_image = 'coffee_in.png';
let hover_out_image = 'coffee_out.png';

function create_developer_img_and_text() {
    let img = new Image(); 
    img.src = image_path+"1.jpg";
    img.style.width = "100%";
    document.getElementById('div_fund').appendChild(img);
    
    let text = document.createElement('p');
    text.innerHTML = `Hello World I am a solo developer and I live in small city 
                        in small area on the surface of the earth.<br /> 
                        If you like my content please support me with cryptocurrency so that 
                        I continue to write the articles and successfully build my own website. 
                        <br />
                        <p><img width='25px' src="`+image_path+'bitcoin.png'+`" />  
                        <span style="vertical-align: super;word-wrap: break-word;"><b>Bitcoin:</b> bc1qfxgdas6d3qa8xccur0xwrglf76psj65h2fj0jy</span>
                        </p>`;
                        // <p><img width='25px' src="`+image_path+'ethereum.png'+`" />  
                        // <span style="vertical-align: super;word-wrap: break-word;"><b>Ethereum:</b> 0x76b887d5C668308cDB0aec3bdf70A21fb630477E</span>
                        // </p>
    text.style.color = "rgba(255,255,255,1)";
    text.style.margin = 0;
    document.getElementById('div_fund').appendChild(text);

}


function create_div_info_close()
{
    let div =  document.createElement('div');
    div.innerText = "x";
    div.style.position = "absolute";
    div.style.right = "1%";
    div.style.top = "0%";
    div.style.cursor = "pointer";
    div.style.color = "#ff0000";
    div.style.fontSize = "20px";
    div.style.fontStyle = "oblique";
    div.onmouseup = (() => { 
        document.getElementById('outer_div').remove();
        document.body.style.overflow = "scroll";
     });
    document.getElementById('div_fund').appendChild(div);


}

function create_div_info()
{
    let outer_div = document.createElement('div');
    outer_div.id = "outer_div";
    outer_div.style.position = "fixed";
   outer_div.style.height = "";
   outer_div.style.top = "0";
   outer_div.style.right = "0";
   outer_div.style.bottom = "0";
   outer_div.style.left = "0";
   outer_div.style.overflow = "auto";
//    outer_div.style.border = "1px solid red";
   outer_div.style.backgroundColor= "rgba(255,255,255,0)";
   document.body.appendChild(outer_div);
   
    let div =  document.createElement('div');
   div.id = 'div_fund';
   div.style.position = "absolute";
   div.style.height = "";
   div.style.top = "1%";
   div.style.right = "25%";
//    div.style.bottom = "25%";
   div.style.left = "25%";
//    div.style.border = "1px solid red";
   div.style.backgroundColor= "rgba(0,0,0,0.7)";
   document.getElementById('outer_div').appendChild(div);
}

function create_holder()
{
   let image_holder =  document.createElement('div');
   image_holder.id = 'img_fund';
   document.body.appendChild(image_holder);
}

function create_image() { 
    create_holder();
    var img = new Image(); 
    img.style.position = "fixed";
    img.style.cursor = "pointer";
    img.style.bottom = "2%";
    img.style.right = "2%";
    img.style.width = "20px";
    img.src =  image_path+hover_out_image; 
    img.position = 'fixed';
    img.onmouseover = (()=>{
        img.src = image_path+hover_in_image; 
    });
    img.onmouseleave = (()=>{
        img.src = image_path+hover_out_image; 
    });
    img.onmousedown = (()=>{
        create_div_info();
        create_div_info_close();
        create_developer_img_and_text();
        document.body.style.overflow = "hidden";
        console.log('clicked');
    });
    document.getElementById('img_fund').appendChild(img); 
}  

create_image();
