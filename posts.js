const mainPostContainer = document.getElementsByClassName('main-post')[0];
const mainPostFooter = document.getElementsByClassName('post-footer')[0];

const originalPostData = {
  name: 'Emma Nakima UX UI Designer',
  imgUrl: './assets/desktop/girl-1.jpg',
  question: 'Cuando se hará la esquiada de Nakima?',
  text: `En la retropspectiva de hoy se ha propuesto por seguna y última vez hacer una esquiada
              con los participantes de Nakima.
              <br>
              Se proponen dos opciones posibles, Andorra y Port Ainé.<br>El finde deberá ser discutido para ver
              cual es el finde que todos pueden.`,
  date: '28/01/2020',
}
const originalPost = document.createElement('div');
originalPost.classList.add('post-content');
originalPost.innerHTML = `
            <div class="post-question-date-container">
              <p class="font-20 bold">${originalPostData.question}</p>
              <p class="light">${originalPostData.date}</p>
            </div>
            <div class="post-author">
              <img class="post-profile-photo" src="${originalPostData.imgUrl}" alt="girl">
              <p class="italic post-author-name">${originalPostData.name}</p>
            </div>
            <p class="font-17">${originalPostData.text}
            </p>
          `

if (mainPostContainer) mainPostContainer.insertBefore(originalPost, mainPostFooter);

const repliesList = document.getElementById('replies-list-container');

const postRepliesList = {
  0: {
    name: 'Nat Nakima UX UI Designer',
    imgUrl: './assets/desktop/girl-2.jpg',
    text: `Yo propongo que no vayamos.
    <br>No voy a esquiar y prefiero mil veces más pasar el die con mi gato.
    <br>Pero bueno que como queráis, si queréis ir perfecto, pero no contéis conmigo.
    <br>Aprovechad ahora que hay nieve.`,
    likes: 5,
    dislikes: 0,
  },
  1: {
    name: 'Pau Nakima Programmer',
    imgUrl: './assets/desktop/man-1.jpeg',
    text: `Ei que tal a tots?
    <br>A mi em sembla be si, pero quan ho voleu fer un finde?
    <br>Jo nrmalment tinc partits els dissabtes pero no us preocupeu, si fem l'esquiada en un fina que no tingui partit compteu amb mi totalment.`,
    likes: 2,
    dislikes: 0,
  },
  2: {
    name: 'Quim Nakima Programmer',
    imgUrl: './assets/desktop/man-2.jpg',
    text: `Bueno... si, jo nose si podré venir pero direu i miro a veure que tal em va.
    <br> Segurament hauré de dir-ho més endavant.Segurament<br>Però que voleu anar a andorra? poder seria millor a Vic.`,
    likes: 8,
    dislikes: 0,
  },
}

if (repliesList) {
  for (element in postRepliesList) {
    const reply = postRepliesList[element];
    const replyHTML = document.createElement('div');
    replyHTML.classList.add('reply');
    replyHTML.innerHTML = `<div class="reply-author">
    <img class="reply-profile-photo" src="${reply.imgUrl}" alt="man">
      <p class="font-20">${reply.name}</p>
              </div>
    <p class="font-17 light">${reply.text}
    </p>
    <div class="reply-likes">
      <img class="post-icon like" src="./assets/mobile/like-black.png" alt="Likes Icon">
        <p class="font-12 center-text">${reply.likes}</p>
        <img class="post-icon dislike" src="./assets/mobile/dislike-black.png" alt="Dislikes Icon">
          <p class="font-12 center-text">${reply.dislikes}</p>
              </div>`;

    if (repliesList.children.length) repliesList.lastChild.classList.add('reply-line');
    repliesList.appendChild(replyHTML);
  }
}


