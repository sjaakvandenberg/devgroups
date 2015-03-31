# DevGroups

This is the repository of the site http://devgroups.org to submit developer groups links.

## How to add a group?

First of all you need to [fork this repository](https://github.com/caio-ribeiro-pereira/devgroups/fork). 

With this project in your hands, edit the `/public/[platform-folder]/_data.json` and add your group respecting these parameters: 

``` javascript
"index": {
  "name": "platform_name", // lowercase and underscore
  "subtitle": "Platform name",
  "about": "Platform description",
  "site": "url of the official platform site", 
  "image": "platform-logo.jpg",
  "groups": [
    {
      "title" : "Group name", 
      "url": "group's url",
      "image": "group-logo.jpg",// 350x195 size
      "lang": "group language. Ex.: EN, PT-BR, ES..",
      "channel": "facebook, linkedin, reddit, google+ or site",
      "publish": true, // Publish to devgroups site
      "published_at": "20150330" // Current publish date in format YYYYMMDD
    }
  ]
},
```

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `groups.image` the **default platform image will replace it**.

Look this example (`public/nodejs/_data.json`):

``` javascript
{
  "index": {
    "name": "nodejs",
    "subtitle": "Node.js",
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    "site": "http://nodejs.org",
    "image": "nodejs.png",
    "groups": [
      {
        "title" : "Echo JS",
        "url": "http://www.echojs.com",
        "image": "echojs.jpg",
        "lang": "en",
        "channel": "site",
        "publish": true,
        "published_at": "20150330"
      }
    ]
  }
}
```

If you wanna add a new platform (programming language or framework), first you need to add it into `global.platforms` attribute in the file `harp.json`:

``` javascript
{
  "globals": {
    "title": "DevGroups",
    "description": "A huge list of developer groups around the world",
    "name": "Caio Ribeiro Pereira",
    "email": "caio.ribeiro.pereira@gmail.com",
    "platforms": ["nodejs", "meteor", "go", "ruby"] // Just add here a new platform
  }
}
```

## Development mode

To run this project in **development mode**, you need have [Node.js](http://nodejs.org) and [Grunt](http://gruntjs.com) installed. 

To install Node.js, just [follow this wiki rules](http://nodejs.org/download) 

To install Grunt, just run the command below: 

``` bash
npm install grunt-cli -g
```

To get and run this project: 

``` bash
git clone git@github.com:caio-ribeiro-pereira/devgroups.git
cd devgroups
grunt serve
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
