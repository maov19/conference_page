// navbar popup
const icon = document.getElementById('icon');
const menu = document.getElementById('menuAll');

// The event that opens the menu
icon.onclick = function openMenu() {
  icon.classList.toggle('is-active');
  menu.classList.toggle('is-active');
};

document.onclick = function closeMenu(clickEvent) {
  if (clickEvent.target.id !== 'menuAll' && clickEvent.target.id !== 'icon') {
    icon.classList.remove('is-active');
    menu.classList.remove('is-active');
  }
};

// 1.append a section to the speakers section - done
// 2.display the inner html - done
// 3.create objects with speakers info - done
// 4.loop through objects

const artist = document.getElementById('artists').innerHTML = `
<div class="artist">
<img class="artist_photo" src="images/james.png" alt="metallica logo">
<div class="artist_info">
    <h3 class="artist_name">Metallica</h3>
    <p class="artist_story">Lorem ipsum dolor sit amet.</p>
    <div class="line_left"></div>
    <p class="artist_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.</p>
</div>
</div>
`

const artistInfo = [
  {
    name: 'Metallica',
    photo: 'images/james.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
  },
  {
    name: 'Megadeth',
    photo: 'images/james.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
 },

  {
    name: 'Black Sabbath',
    photo: 'images/ozzy.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
  },

  {
    name: 'Rolling Stones',
    photo: 'images/mickjagger.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
  },

  {
    name: 'Foo Fighters',
    photo: 'www.callingallgigs.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
  },

  {
    name: 'AC/DC',
    photo: 'images/acdc.png',
    story: 'Lorem ipsum dolor sit amet.', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.'
  }
]

for (let i = 0; i < artistInfo.length; i++) {
  
}