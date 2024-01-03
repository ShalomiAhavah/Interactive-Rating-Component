# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview ![](https://64.media.tumblr.com/47309b78dfe6ca119db651d6f4bb4234/7c261ccb2fa0a960-f4/s75x75_c1/8e3697526ec183c8f897fcf0466d0bcd79225d45.gifv)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](/design/app%20screenshot.jpeg)
![](/design/success-state%20screenshot.jpeg)
![](/design/re-open%20screenshot.jpeg)

### Links

- Solution URL: [GitHub Solution](https://github.com/ShalomiAhavah/Interactive-Rating-Component)
- Live Site URL: [Vercel live site](https://interactive-rating-component-six-nu.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Less to Css
- Iconbuddy

### What I learned

I really enjoyed incorporating javascript in this project. It boosted my confidence by giving me some easy wins.
I also learned to incorporate the html `dialog` element.

```html
<dialog open id="dialog">
  <h4 id="dialog-text">Would you like to re-open the element?</h4>
  <button id="re-open" onclick="reOpen()">Yes</button>
</dialog>
```

```js
addEventListener("click", (e) => {
  var target = e.target;
  rating.forEach((rating) => {
    rating.classList.remove("rates-active");
  });

  if (Object.values(rating).includes(target)) {
    target.classList.add("rates-active");
    globalTarget = target;
  }
});
```

### Continued development

I decided to add a lot of extra features to practice and I am really proud of how the project turned out.
I would like to learn more about working with svgs in development.

### Useful resources

- [Blackbox AI](https://www.blackbox.ai/) - To understand concepts and test your code. DO NOT JUST COPY AND PASTE

## Author

- Website - [Julia Gaugler](https://juliagaugler-frontend.carrd.co/)
- Frontend Mentor - [@ShalomiAhavah](https://www.frontendmentor.io/profile/ShalomiAhavah)
