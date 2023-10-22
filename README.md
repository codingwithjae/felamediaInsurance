# The Website

Hello and welcome! (:

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWdxcmU1eXg0bWh6d3QwM2tuaDZkOWdyd3hneG01c2d1emt2bGVrZCZlcD12MV9pbnRlcm5hbF9naWZfYnl_faWQmY3Q9Zw/UOMEkiyOPgJiij5zwO/giphy.gif" alt="Gif"/>
</p>

## The Challenge

1. Responsive design that adapts to both mobile and desktop devices.
2. Include multiple pages with relevant and coherent content.
3. Utilize external CSS files for site styling.
4. Incorporate external JavaScript files to add functionality to the pages.
5. Add a registration form that includes data validation, redirects to a thank-you page, and sends an automatic email response.
6. Use the insurance niche for this project, and the company will be named "Felamedia Seguros."

## My Approach

### The Website Topic and Responsive Design

I completed this project using the PSD file as a reference. I extracted all the assets from that file, and some of them I created from scratch. For instance, the Felamedia Seguros logo was created using [Canva](https://mariejoemj.my.canva.site/agradecimiento). For fonts, I used Google Fonts.

The website was built using a mobile-first approach, taking advantage of the fact that the initial reference was designed for mobile devices. From there, I created the desktop version of the site.

The website is deployed on [Vercel](https://vercel.com/).

### Handling Multiple Pages' Content

To create multiple pages, I divided the content from the original PSD into sections. In the end, I created a main page, a FAQs page, and a page for the site's form. This way, the content is presented coherently.

### The Use of CSS Styles

In this project, there are three style sheets. One is the main style sheet, which contains the majority of the page's styles, especially for the main landing page. The other style sheets are for the FAQ page and the form, respectively. Each page has its own HTML, and the CSS was created following the BEM methodology for better readability and maintenance.

### The Use of JavaScript

All the JavaScript code is in a single .js file. It contains the functionality for web form validation and the rendering of the page header as a template. What I did was create an HTML file with the page header to dynamically render it throughout the website without having to repeat the header code in each HTML file. The only part that was done with a framework was the FAQ page, for which I used Bootstrap.

### The Validation Form

As mentioned earlier, the validation form was created using JavaScript. The thank-you page is external, created with Canva, and the form service I used was [FormSubmit](https://formsubmit.co/). This setup also includes a thank-you message sent to the user's email.

## Built With

- HTML5.
- CSS.
- JavaScript.
- Bootstrap.
- Vercel.

## Author

- Portfolio - [Johander Campos](https://codingwithjae.dev/)
