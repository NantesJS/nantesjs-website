'use strict';

const isUrl = require('is-url')

const convertDate = (date) => {
  const split = date.split('/');
  return [split[2], split[1], split[0]].join('-');
}

// Output article content based on frontmatter
const formatContent = ({
    title,
    date,
    talks,
    sponsor,
    venue,
    ticketsUrl
  }) => {
    const talkList = talks.reduce((acc, t) => `
      ${acc}
      <h3>${t.title}</h3>
      <p>${t.description}</p>
      <p>Par:</p>
      <ul>
        ${t.speakers.reduce((b, s) => isUrl(s.link) ? (`${b}<li><a href="${s.link}">${s.name}</a></li>`) :
        `${b}<li><a href="${"https://twitter.com/"+s.link}">${s.name}</a></li>`, '')}
      </ul>
    `, '');
    const sponsorLink = (sponsor && sponsor.link && sponsor.name) ? `<h2>Sponsor</h2><a href="${sponsor.link}">${sponsor.name}</a>` : '';
    const register = ticketsUrl ? `<h2>Ticket</h2><a href="${ticketsUrl}">Réserver votre place</a>` : '';
    const {
      postal_code,
      address,
      city,
      name,
      link
    } = venue;
    const location = `
  ${link ? `<a href="${link}">${name}</a>`: name}<br/>
  ${address ?? ""} ${postal_code ?? ""} ${city ?? ""}
  `;

  return `
  <h1>${title} - ${date}</h1>
  <h2>Talks</h2>
  ${talkList}
  <h2>Lieu</h2>
  ${location}
  <br/>
  ${sponsorLink}
  <br/>
  ${register}
  `;
}

module.exports = {
  convertDate,
  formatContent
};
