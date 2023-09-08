import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Skills() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 color-white titulo mt-5">
                    <p>Skills</p>
                </div>
                <div className="col-12 color-white">
                    <p>Here are the Technologies and Programs I use in my projects.</p>
                </div>
                <div className="col-12 mt-5 skills-grid">
                    <div>
                    <a href="https://www.w3schools.com/html/default.asp"><img alt="html" height="70" src="/assets/skills/html.png" /></a>
                    </div>
                    <a href="https://www.w3schools.com/css/"><img alt="css" height="70" src="/assets/skills/css.png" /></a>
                    <a href="https://www.w3schools.com/js/"><img alt="js" height="70" src="/assets/skills/js.png" /></a>
                    <a href="https://react.dev/"><img alt="react" height="70" src="/assets/skills/react.png" /></a>
                    <a href="https://getbootstrap.com/"><img alt="bootstrap" height="70" src="/assets/skills/bootstrap.png" /></a>
                    <a href="https://nodejs.org/en"><img alt="nodejs" height="70" src="/assets/skills/nodejs.png" /></a>
                </div>
                <div className="col-12 mt-5 mb-5 skills-grid">
                    <a href="https://www.postgresql.org/"><img alt="pgres" height="70" src="/assets/skills/pgres.png" /></a>
                    <a href="https://expressjs.com/"><img alt="express" height="70" src="/assets/skills/express.png" /></a>
                    <a href="https://www.w3schools.com/cs/index.php"><img alt="csharp" height="70" src="/assets/skills/csharp.png" /></a>
                    <a href="https://dotnet.microsoft.com/en-us/"><img alt="net" height="70" src="/assets/skills/net.png" /></a>
                    <a href="https://www.figma.com/"><img alt="figma" height="70" src="/assets/skills/figma.png" /></a>
                    <a href="https://www.adobe.com/pt/products/illustrator.html"><img alt="ai" height="70" src="/assets/skills/ai.png" /></a>
                    <a href="https://www.adobe.com/pt/products/photoshop.html"><img alt="ps" height="70" src="/assets/skills/ps.png" /></a>
                </div>
            </div>
        </div>
    );
}
