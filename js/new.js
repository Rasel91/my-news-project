
// loadNews

const loadNews = async () => {
    const url = ('https://openapi.programming-hero.com/api/news/categories')
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayNews(data.data.news_category);
};


// news displayNews
const displayNews=(news) =>{
    // console.log(news);
    const navContainer = document.getElementById('nav-container');

    navContainer.innerHTML='';

    news.forEach(category => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('ul');
        newsDiv.innerHTML = `
    <ul> 
        <li class="nav-item">
        <button onclick =loadCountiresDetails('${category.category_id ? category.category_id : "No News found"}')> ${category.category_name} </button>
       
       </li>
    </ul>
        
        `;
        navContainer.appendChild(newsDiv)
        // console.log(category);
    });
};

loadNews();


// ===============
const loadCountiresDetails= async(category_id) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayNewsPart(data.data);
    // console.log(data.data);
};


const displayNewsPart=(information) =>{
    // console.log(information);
      const newsPartContainer = document.getElementById('newspart-container');
      newsPartContainer.innerHTML='';
    information.forEach(info => {
        const newPartDiv = document.createElement('div');
        newPartDiv.classList.add('user');
        newPartDiv.innerHTML = `
       <div class= "d-flex mb-5px">
            <div class="col-md-4">
                 <img src="${info.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${info.title}</h5>
                    <p class="card-text">${info.details.slice(0,150)+'...'}</p>
                </div>
            <div> 
        <div class="d-flex justify-content-evenly" >
          <div class="d-flex align-items-center " >
           <img class='w-25 rounded-4 img-size m-2'src="${info.author.img}" alt="">
           <div>
                <h5>${info.author.name}</h5>
                <p>${info.author.published_date} </p>
           </div>
        </div>

        <div class="d-flex justify-content-between " > 
                <div> 
                    <p> <i class="fa-regular fa-eye"></i></P>
                </div>
                <div> 
                    <p>${info.total_view} </p>
                </div>
            </div>

            <div>
            <button onclick="loadModalDetails('${info._id}') "  class="btn btn-primary btn-size" data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button>  
            </div>
             
        </div>
    </div>
       
    `;
        newsPartContainer.appendChild(newPartDiv);
    });
};

loadCountiresDetails();


const loadModalDetails = async(_id) => {
    const url = (` https://openapi.programming-hero.com/api/news/${_id}`)
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayModalDetails(data.data);
    console.log(data.data);
};


// news displayNews

const displayModalDetails=(modal)=>{
    const modalDetails= document.getElementById('modal-container'); 
    modal.forEach(emodal => {
    // console.log(emodal);
    const modalDiv = document.createElement('div')
        modalDetails.innerHTML=`
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title:${emodal.title}</h5>
            </div>
            <div class="modal-body">
            <img class="w-100" src="${emodal.thumbnail_url}" > 
            <p class="card-text">${emodal.details.slice(0,150)+'...'}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        `;
        modalDetails.appendChild(modalDiv);

   });
}

loadModalDetails();

