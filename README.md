# UML-Diagrams-2023

Diagrams use `mermaid` code and nomnoml.com

 ## [Mermaid API](https://mermaid.js.org/config/setup/README.html)
To deploy mermaid without a bundler, insert a script tag with an absolute address and a mermaid.initialize call into the HTML using the following example:
```
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>
```
Doing so commands the mermaid parser to look for the `<div>` or `<pre>` tags with class="mermaid". From these tags, mermaid tries read the diagram/chart definitions and render them into SVG charts.

Examples can be found in [Other examples](https://mermaid.js.org/syntax/examples.html)
