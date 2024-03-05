
const memberList = document.querySelector('.memberlist')
const teamMembers = [
  {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    position: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    position: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    position: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    position: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    position: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  },
]

for(let member of teamMembers){
  memberList.innerHTML += `
  <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="assets/img/${member.photo}" class="card-img-top" alt="${member.name}">
          <div class="card-body">
            <h2 class="card-title">${member.name}</h2>
            <p class="card-text">${member.position}</p>
          </div>
        </div>
      </div>
  `
}




{/* <div>
     <p> ${member.name} ${member.position} ${member.photo}</p>
   </div> */}