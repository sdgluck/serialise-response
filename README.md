# serialise-response

> Serialise and deserialise a Fetch Response

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/serialise-response"><img alt="npm version" src="https://badge.fury.io/js/serialise-response.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

    npm install serialise-response --save

Exported using UMD pattern, otherwise available on `window` as `serialiseResponse` and `serializeResponse`.

## Usage

`serialiseResponse(response[, toObject]) : String|Object`

- __response__ {Response} response to serialise
- __toObject__ {Boolean} serialise response to an object (default is string)

`serialiseResponse.deserialise(response) : Promise<Response>`

- __response__ {String|Object} response to deserialise

_Function names are also made available in American English: `serializeResponse` and `serializeResponse.deserialize`._

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
