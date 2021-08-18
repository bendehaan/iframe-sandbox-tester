# IFrame sandbox tester

These tests can be run to test what's allowed in the iframe sandbox you specify.

The most reliable way to test this is to clone this repository and host the app and tester locally. Run your app like you normally would in development mode. Then, host this tester through e.g. Python or Node.

## Python
```bash
python3 -m http.server
```

## Node
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