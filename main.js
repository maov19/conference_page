// hamburger animation
// open menu when clicking hamburger
// closing menu when clicking x
// closing menu when clicking menu item

const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

mobileMenu.addEventListener('click', () => {
  menuButton.classList.remove('is-active');
  mobileMenu.classList.remove('is-active');
});

// artists dynamic display

// 0.create a sample artist display
// 1.create objects with speakers info - done
// 2.append a section to the speakers section - done
// 3.display the sample display in inner html - done
// 4.loop through objects - done

const artistInfo = [
  {
    name: 'Metallica',
    photo: 'images/james.png',
    story: ' story is: Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },
  {
    name: 'Megadeth',
    photo: 'images/megadeth.png',
    story: ' story is: Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },

  {
    name: 'Black Sabbath',
    photo: 'images/ozzy.png',
    story: ' story is: Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },

  {
    name: 'Rolling Stones',
    photo: 'images/mickjagger.png',
    story: ' story is: Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },

  {
    name: 'Foo Fighters',
    photo: 'images/www.callingallgigs.png',
    story: ' story is: Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },

  {
    name: 'AC/DC',
    photo: 'images/acdc.png',
    story: ' story is:Lorem ipsum.',
    description: ' description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum, quaerat fugit vel magni modi.',
  },
];

const artist = document.getElementById('artists');
const lineUp = document.createElement('div');
lineUp.setAttribute('id', 'featuredArtists');
artist.appendChild(lineUp);

for (let i = 0; i < artistInfo.length; i += 1) {
  lineUp.innerHTML += `
  <div class="artist">
  <img class="artist_photo" src= ${artistInfo[i].photo} alt="metallica logo">
  <div class="artist_info">
      <h3 class="artist_name">${artistInfo[i].name}</h3>
      <p class="artist_story">${artistInfo[i].name}${artistInfo[i].story}</p>
      <div class="line_left"></div>
      <p class="artist_description">${artistInfo[i].name}${artistInfo[i].description}</p>
  </div>
  </div>
`;
}

const artistTitle = document.createElement('h2');
artistTitle.innerHTML = 'Featured artists';
artistTitle.classList.add('artistTitle');
artist.prepend(artistTitle);
