---

id: 68e81307-4897-4e68-86db-c9ae52d9355a
status: done
title: 'Meetup #61'
date: '16/09/2021'
image: /images/logotype.png
ticketsUrl: "https://youtu.be/WXCXDrVRO7Y"
remote: true
venue:
id: '54608799'
name: 'NantesJS'
link: 'https://www.youtube.com/c/NantesJS'
sponsor:
id: '1b0a062c-c656-47ad-a31b-f64e53159f70'
name: 'NantesJS'
link: 'https://nantesjs.org'
talks:

- id: 'rqb5zSU11YG0WRi2Z8a9'
  title: 'Splitting the view and the brains in JS using state machines'
  description: 'En tant que développeur frontend, on est souvent confrontés à de la gestion de _state_. Cette gestion est connue pour être rapidement difficile, surtout lorsque l&#x27;application grandie : l&#x27;état initial, les états non-attendus, les races-conditions, sont autant de raisons d&#x27;apparition de bugs. La gestion de l&#x27;état est rendue particulièrement difficile par le nombre de sources différentes qui peuvent contenir ou modifier de l&#x27;état :

* appels à des APIs retournant de la donnée utile à l&#x27;application
* cache local
* interactions utilisateurs à l&#x27;intérieur d&#x27;un composant gérant son propre état
* changements arrivant au niveau d&#x27;un composant enfant ou parent

Il existe de nombreuses solutions de gestion de l&#x27;état, l&#x27;une d&#x27;elle étant méconnue : les machines à état. En utilisant des machines à état (ou _state machines_), on retire la gestion de l&#x27;état du composant (UI) pour le déplacer vers une machine dont la seule responsabilité est de maintenir un état déterministe et une logique métier ou spécifique à l&#x27;application. Pour cela, une machine utilise :

- un nombre fini de noeuds (état), qui représentent les statuts possibles de l&#x27;application
- un nombre fini d&#x27;événements, représentant les interactions possibles, pour chaque noeud
- les transitions, qui permettent de passer d&#x27;un état à un autre et d&#x27;effectuer des changements internes à la machine
- un noeud initial

Les machines à états sont reconnues comme des modèles computationnel et des abstractions fiables, mais ne sont que rarement utilisées dans des applications frontend. Elles sont cependant une solution élégante pour gérer l&#x27;état d&#x27;une application (ou une sous-partie), tout en ayant l&#x27;avantage d&#x27;être framework-agnostique.'
speakers: -
id: 'HPoPLdLqcPZNGJchqgCJVd0sHPX2'
name: 'Aurélien Meunier'
link: 'aumeunier'

- id: 'g4tqKCRaLZJaOkIArCLB'
  title: 'Angular, Vue, React ... et si au final on s&#x27;en fichait ?'
  description: 'Quand on travaille sur un projet web, on a de très grandes chances de tomber sur Angular, Vue ou React.

Ces frameworks sont très présents et ont fait leur preuve sur de nombreux projets. Au point qu&#x27;aujourd&#x27;hui, on ne recherche plus un développeur JS, on recherche un développeur Angular ou React.

Si je te disais qu&#x27;au final le framework que tu utilises n&#x27;a que très peu d&#x27;importance.
Si je te disais que tu te sous estimes en pensant n&#x27;être qu&#x27;un développeur React ?

En quelques minutes, je te montrerai que tu sais faire bien plus qu&#x27;utiliser un seul framework :)
'
speakers: -
id: '3jAixvFWDwMpoISHbnkL3IqGNjP2'
name: 'Jimmy Kasprzak'
link: 'JimmyKasprzak'
