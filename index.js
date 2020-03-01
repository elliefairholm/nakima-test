console.log('hello');

// need to make the icons change when hovered over

// need to allow a new post to be posted

// need to make the form appear on clicking anadir respuesta
// need the x button to work

// on hover over code etc need to make the drop down content appear

// need to make the menu for mobile work

function loadEvents () {
  const addReplyFormButton = document.getElementById('add-reply-button-container');
  const closeReplyFormButton = document.getElementById('cancel-reply-button');

  const submitReplyButton = document.getElementById('submit-reply-button');

  const sideBarItems = document.getElementsByClassName('sidebar-item');

  const likes = document.getElementsByClassName('like');

  const dislikes = document.getElementsByClassName('dislike');

  const seenIcons = document.getElementsByClassName('seen');

  if (addReplyFormButton) {
    addReplyFormButton.addEventListener('click', toggleAddReplyForm);
  }
  if (closeReplyFormButton) {
    closeReplyFormButton.addEventListener('click', toggleAddReplyForm);
  }

  if (submitReplyButton) {
    submitReplyButton.addEventListener('click', submitReply);
  }

  if (sideBarItems) {
    console.log(sideBarItems)
    for (let i = 0; i < sideBarItems.length; i++) {
      let el = sideBarItems[i];
      el.addEventListener('mouseenter', (e) => toggleSideBarDropdownContent(e));
      el.addEventListener('mouseleave', (e) => toggleSideBarDropdownContent(e));
    }
  }

  if (likes) {
    for (let i = 0; i < likes.length; i++) {
      let el = likes[i];
      el.addEventListener('mouseenter', (e) => togglePostIcons(e))
      el.addEventListener('mouseleave', (e) => togglePostIcons(e))
    }
  }

  if (dislikes) {
    for (let i = 0; i < dislikes.length; i++) {
      let el = dislikes[i];
      el.addEventListener('mouseenter', (e) => togglePostIcons(e))
      el.addEventListener('mouseleave', (e) => togglePostIcons(e))
    }
  }

  if (seenIcons) {
    for (let i = 0; i < seenIcons.length; i++) {
      let el = seenIcons[i];
      el.addEventListener('mouseenter', (e) => togglePostIcons(e))
      el.addEventListener('mouseleave', (e) => togglePostIcons(e))
    }
  }
}

function toggleAddReplyForm () {
  const submitReplyForm = document.getElementById('submit-reply-container');

  if (!submitReplyForm.style.display) {
    submitReplyForm.style.display = 'flex';
  } else submitReplyForm.style.display = '';

}

function submitReply () {
  const textArea = document.getElementById('reply-textarea');
  const repliesList = document.getElementById('replies-list-container');

  const replyHTML = document.createElement('div');
  replyHTML.classList.add('reply');
  replyHTML.innerHTML = `<div class="reply-author">
    <img class="reply-profile-photo" src="./assets/desktop/man-1.jpeg" alt="man">
      <p class="font-20">Josep</p>
              </div>
    <p class="font-17 light">${textArea.value}
    </p>
    <div class="reply-likes">
      <img class="post-icon like" src="./assets/mobile/like-black.png" alt="Likes Icon">
        <p class="font-12 center-text">93</p>
        <img class="post-icon dislike" src="./assets/mobile/dislike-black.png" alt="Dislikes Icon">
          <p class="font-12 center-text">38</p>
              </div>`;

  if (repliesList.children.length) repliesList.lastChild.classList.add('reply-line');
  repliesList.appendChild(replyHTML);
  textArea.value = '';
  toggleAddReplyForm();
}

function toggleSideBarDropdownContent (e) {
  const dropDownContent = e.target.nextElementSibling;
  const arrow = e.target.children[1]

  if (dropDownContent && !dropDownContent.style.display && arrow) {
    dropDownContent.style.display = 'flex';
    arrow.style.transform = 'scaleY(-1)';
  } else if (dropDownContent && arrow) {
    dropDownContent.style.display = '';
    arrow.style.transform = ''
  };
}

function togglePostIcons (e) {
  const element = e.target;
  const status = element.classList[1];

  if (!element.style.height) {
    element.style.height = '20px';
    element.src = `./assets/desktop/${status}-clicked.png`;
  } else {
    element.style.height = '';
    element.src = `./assets/desktop/${status}-black.png`;
  }

}

loadEvents();
