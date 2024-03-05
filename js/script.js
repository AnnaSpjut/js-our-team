
const memberList = document.querySelector('.memberlist')
const teamMembers = [
  {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angerla Caroll',
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
  <div>
     <p> ${member.name} ${member.position} ${member.photo}</p>
   </div>`
}
