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
    Open each <code>.yaml</code> file inside the <strong>infra</strong> and change username from<code> sepc: - image: username/imagename
    </code> with you docker userid keep the imagename same.
</p>

<h4>Docker Image Build </h4>
<p>
Run following command to create an image on docker.
</p>
<li><code>docker build -t yourdockerusername/client</code></li>
<li><code>docker build -t yourdockerusername/comments</code></li>
<li><code>docker build -t yourdockerusername/event-bus</code></li>
<li><code>docker build -t yourdockerusername/moderation</code></li>
<li><code>docker build -t yourdockerusername/posts</code></li>
<li><code>docker build -t yourdockerusername/query</code></li>

<p>
<a href="https://kubernetes.github.io/ingress-nginx/deploy/">Ingress</a> The Ingress is a Kubernetes resource that lets you configure an HTTP load balancer for applications running on Kubernetes, represented by one or more Services. Such a load balancer is necessary to deliver those applications to clients outside of the Kubernetes cluster.
<strong>Please follow documentation to create and ingress image on docker</strong>
<br>
<strong>create a Ingress image inside the event-bus folder</strong>
</p>

<h4>Development and services setup</h4>
<p>
Get into the K8s derectory
</p>
<li><code>kubectl apply -f .</code> set up developement and create service.</li>
<li><code>kubectl get pods</code> Check the application is runnning or not.</li>
<li><code>kubectl describe pod podname</code> See the detail if you got an error.</li>

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






