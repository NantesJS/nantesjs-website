/**
 * script used to retrieve raw data of the production site
 * This transforms the data it found in the DOM into nice json data
 */
var talks = Array.prototype.slice.call(document.querySelectorAll(".meetup"), 0)

talks = talks
  .filter(el => el.querySelector("h4"))
  .map(el => {
   const sel = el.querySelector.bind(el);
    return {
     title: sel("h4").innerText,
      date: sel(".date").innerText,
      place: genPlace(sel),
      talks: genTalks(el, sel),
      sponsor: (sel(".sponsor") || {}).innerText,
      image: sel("img").src
      };
})

function genPlace(sel) {
  return {
     name: sel(".place").innerText,
     link: (sel(".place a") || {}).href
  }
}

function genTalks(el, sel) {
  var sela = el.querySelectorAll.bind(el);

  var talks = [].slice.call(sela(".talk"))

  return talks.map(talk => {
    return {
     title: talk.querySelector(".talk-res").innerText,
      link: (talk.querySelector(".talk-res a")||{}).href,
      speakers: genSpeakers(talk)
    }
  })
}

function genSpeakers(el) {
  var sel = el.querySelectorAll.bind(el);

  var speakers = [].slice.call(sel(".talk-author"))

  return speakers
   .map(speaker => ({
    name: speaker.innerText,
    link: (speaker.querySelector("a") || {}).href
  }))
}
var str = JSON.stringify(talks);
document.querySelector("#felix").innerText = str;
var touch = talks.map(talk => `touch src/_meetups/${talk.title.toLowerCase().replace(" ", "-")}.md`).join("\n")

console.log(touch)
