# IFrame sandbox tester

These tests can be run to test what's allowed in the iframe sandbox you specify.

Either use it by referencing this GitHub repository's [`gh-pages` instance](https://bendehaan.github.io/iframe-sandbox-tester/) or by cloning this repo and using it locally.


## Using the repo directly

## Local usage

Clone the repository and serve it in a plain http server. Simple ways to to this are available in e.g. Python and Node.

### Python
```bash
python3 -m http.server
```

### Node
Using `serve` ([available via npm](https://www.npmjs.com/package/serve)):

```bash
serve -s
```

## Examples

Make sure to set the `sandbox` and `src` attribute to desired settings.

### Plain HTML

```html
<iframe sandbox="allow-scripts allow-same-origin" src="http://localhost:5000"></iframe>
```

### React
```javascript
<Container>
    <iframe
    sandbox="allow-scripts allow-same-origin"
    src="http://localhost:5000"
    />
</Container>
```