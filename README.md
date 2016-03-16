# serialise-response

> Serialise and deserialise a Fetch Response

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/serialise-response"><img alt="npm version" src="https://badge.fury.io/js/serialise-response.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

    npm install serialise-response --save

Exported using UMD pattern, otherwise available on `window` as `serialiseResponse` and `serializeResponse`.

## Usage

### `serialiseResponse(response[, toObject]) : String|Object`

Serialise a Response.

Function also made available as `serializeResponse`.

- __response__ {Response} response to serialise
- __toObject__ {Boolean} serialise response to an object (default is string)

<p>______</p>

### `serialiseResponse.deserialise(response) : Promise<Response>`

Deserialise a Response serialised using `serialise-response`.

Function also made available as `serializeResponse.deserialize`.

- __response__ {String|Object} response to deserialise

## Example

    import serialiseResponse from 'serialise-response'

    const serialisedResponse = serialiseResponse({ foo: 'bar' }))

    // ...

    const response = serialiseResponse.deserialise(serialisedResponse)

    request.json().then((data) => {
      console.log(data) //=> { foo: bar }
    })

## What about serialising a Request?

Check out the [`serialise-request`](https://github.com/sdgluck/serialise-request) sibling module.

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds' [great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!
