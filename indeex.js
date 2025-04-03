function runCode() {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const js = document.getElementById('js').value;
    const iframe = document.getElementById('output');
    
    const code = `
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>
                setTimeout(() => { ${js} }, 0);
            <\/script>
        </body>
        </html>`;
    
    iframe.srcdoc = code;
}