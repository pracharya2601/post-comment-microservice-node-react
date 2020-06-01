<h1>post-comment-microservice-node-react-application</h1>
<p>
This application intended to be the part of microservice architecture using <code>nodejs</code><code>Reactjs</code>. 
</p>
<h2>Development</h2>
<p>
Before you can build this project, you must install and configure the following:
</p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a>: Node to run a development web server and build the project. Install node either source or as a pre-packaged bundle.</li>
<li><a href="https://create-react-app.dev/">React.js</a>: A javascript Library for building Interface.</li>
<li><a href="https://www.docker.com/">Docker</a>:Docker provides the ability to package and run an application in a loosely isolated environment called container which contain everything that is required to run one single program. It makes easier to deploy the microservice application.
    <li> create a docker hub account</li>
</li>
</ul>

<h3>Get Started</h3>
<p>Clone the repository<p>
<p><code>git clone git@github.com:pracharya2601/post-comment-microservice-node-react.git</code></p>
<p>
Once you clone the repository <code>cd post-comment-microservice-node-react </code> and you will see several different folder with different services. Get into all folder and <code>npm install</code> except infra folder which is for developement and services.
</p>
<p>
    Open each <code>.yaml</code>file and change the username <code> sepc: - image: username/imagename</code> with your docker user_id keep the imagename same.
</p>

<h4>DockerImage Build and Creating Services on Kubernetes usinf Skaffold</h4>

<p><a href="https://skaffold.dev/">Skaffold</a> is only for local machine only. Skaffold handles the workflow for building, pushing and deploying your application.</p>

<p>Follow the documentaion to install skaffold <a href="https://skaffold.dev/docs/install/">here</a>.</p>
<br>
<p>Once you install the skaffold run the command <code> skaffold dev </code>.</p>

<br>
<h4>Host file tweak</h4>

<p>Go the the file</p>
<li>For window <code>C:\Windows\System32\drivers\etc\hosts</code></li>
<li>For mac <code>/etc/hosts</code></li>
<p>Add the following line and save it.</p>
<p><code>127.0.0.1 myposts.com</code></p>

<h4>Run the app on browser<h4>
<p><code>myposts.com</code></p>

<h3>Screenshot</h3>

<div align="center">
    <img src="assets/microservice.gif" width="700" height="auto" />
</div>
<div align="center">
    <img src="assets/microservice.png" width="700px"> 
</div>






