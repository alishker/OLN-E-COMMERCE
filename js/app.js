//variables
const courses = document.querySelector('#courses-list');
const cartContent = document.querySelector('#cart-content tbody');
const clearBtn = document.querySelector('#clear-cart');
document.addEventListener('DOMContentLoaded', getFromLs)








//eventlisteners

loadEventlisteners();

function loadEventlisteners(){
    courses.addEventListener('click', buyCourse);
    cartContent.addEventListener('click', removecourse);
    clearBtn.addEventListener('click', clearall);
} 

    

//functions
function buyCourse(e) {
    e.preventDefault();
  if(e.target.classList.contains('add-to-cart'));

        const course = e.target.parentElement.parentElement;
        getCourseInfo(course);
    
}
function getCourseInfo(course){
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
        
    }
   

   addIntoCart(courseInfo);
   
}

function addIntoCart(course){
    const row = document.createElement('tr');

    row.innerHTML = `
            <tr>
                    <td>
                        <img src="${course.image}" width = 120>
                    </td>

                    <td>${course.title}</td>
                    <td>${course.price}</td>

                
                    <td>
                        <a href="#" class="remove" data-id= "${course.id}">X</a>
                    </td>

            </tr>
    
    
    `;
    cartContent.appendChild(row);
    saveIntoStorage(course);
}

function saveIntoStorage(course) {
    let courses = getCoursesFromLs();
    courses.push(course);
    

   localStorage.setItem('courses', JSON.stringify(courses));
}

function getCoursesFromLs() {
    let courses;


    if(localStorage.getItem('courses') === null) {
        courses = [];

    } else{ 
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
    console.log(courses);
}

function removecourse(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearall(){
   // cartContent.innerHTML ='';
    while(cartContent.firstChild){
       cartContent.removeChild(cartContent.firstChild);
    }
}

function getFromLs(){
    let coursesLS = getCoursesFromLs();
    coursesLS.forEach(function(course){
        const row = document.createElement('tr');

        row.innerHTML = `
                <tr>
                        <td>
                            <img src="${course.image}" width = 120>
                        </td>
    
                        <td>${course.title}</td>
                        <td>${course.price}</td>
    
                    
                        <td>
                            <a href="#" class="remove" data-id= "${course.id}">X</a>
                        </td>
    
                </tr>
        
        
        `;
        cartContent.appendChild(row);

    });
    

}
    


