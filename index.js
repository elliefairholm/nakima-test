console.log('hello');

// need to make the menu for mobile work

function loadEvents () {
  const addReplyFormButton = document.getElementById('add-reply-button-container');
  const closeReplyFormButton = document.getElementById('cancel-reply-button');
  const submitReplyButton = document.getElementById('submit-reply-button');
  const sideBarItems = document.getElementsByClassName('sidebar-item');
  const likes = document.getElementsByClassName('like');
  const dislikes = document.getElementsByClassName('dislike');
  const seenIcons = document.getElementsByClassName('seen');
  const footerTitles = document.getElementsByClassName('footer-title');
  const mobileMenuIcon = document.getElementById('menu-icon');

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
      el.addEventListener('click', (e) => toggleSideBarDropdownContent(e));
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

  if (footerTitles) {
    for (let i = 0; i < footerTitles.length; i++) {
      let el = footerTitles[i];
      el.addEventListener('click', (e) => toggleFooterTitles(e));
    }
  }

  if (mobileMenuIcon) {
    console.log(mobileMenuIcon)
    mobileMenuIcon.addEventListener('click', revealSideMenu);
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
  console.log('hello')
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

function toggleFooterTitles (e) {
  const footerTitle = e.target.classList[0];
  console.log(footerTitle)
  const footerLinks = document.getElementsByClassName(`${footerTitle} footer-links`)[0]
  console.log(footerLinks)

  if (!footerLinks.style.display) {
    footerLinks.style.display = 'flex';
  } else footerLinks.style.display = '';
}

function revealSideMenu () {
  const sideMenu = document.getElementById('sidebar-container');
  const header = document.getElementsByTagName('header')[0];
  const mainSection = document.getElementsByClassName('main-section')[0];
  if (!sideMenu.style.display) {
    sideMenu.style.display = 'flex';
    header.style['padding-left'] = '180px';
    header.style.width = '100%';
    mainSection.style['padding-left'] = '180px';
    mainSection.style.width = '100%';
  } else {
    sideMenu.style.display = '';
    header.style['padding-left'] = '';
    header.style.width = '';
    mainSection.style['padding-left'] = '';
    mainSection.style.width = '';
  };
}

loadEvents();
