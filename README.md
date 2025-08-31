# R4t
### A proxy site

R4t is a website with a collection of games and web proxies. It was created so that people could browse the internet freely at school and play games. It contains the R4t proxy(uses embeds), womginx, and highly customizable settings.

### Deployment

You can deploy this site to pretty much any dynamic hosting platform.

[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/R4tN3twork/R4t)
[![Deploy to Heroku](https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/R4tN3twork/R4t)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/R4tN3twork/R4t&branch=Main&name=R4t)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/R4tN3twork/R4t)

<b>You cannot deploy this website to any static hosts, such as Netlify, Vercel, Github pages, etc.</b>
This site is really only confined to dynamic hosts because of womginx. There may be a future version of R4t that you can deploy to static hosts but doesn't contain womginx.

## Proxy compatibility

### Womginx

What works:
1. recaptcha
2. discord with actual login credentials (no qr code required)
3. websocket sites
4. sites that have cookies

What doesn't work:
1. react sites
2. sites that depend on window.location and are minified
3. YouTube UI (however, you can watch a video like https://proxysite.com/main/https://www.youtube.com/watch?v=vidid and it will work)

### R4t proxy(embed)

What works:
1. Pretty much all frontend sites

What doesn't work:
1. Pretty much all backend sites

## Prerequisites

You need one thing and one thing only: nginx.

Ok maybe not just that, you'll need the following:
1. nginx
2. certbot
3. nodejs (for building wombat)
4. a (sub)domain
5. a vps

## Installation (more simple and contained)

1. [Install Docker](https://docs.docker.com/engine/install/ubuntu/)
2. [Install docker-compose](https://docs.docker.com/compose/install/)
3. Clone this repo by running `git clone https://github.com/R4tN3twork/R4t`
4. `cd womginx` then edit go and edit `docker-compose.yml`
    - To disable safe browsing, delete the line that says `SAFE_BROWSING`
    - To change the port, edit `80:80` to `newport:80`
    - Don't pay attention to `PORT=80` as changing that only changes the port inside the docker container. Only weird environments like Heroku need it.
    - To bind the port locally, do `127.0.0.1:80:80` (do this if you're hosting multiple things and you're using a reverse proxy like nginx or caddy)
    - If you are using a reverse proxy, set the `x-forwarded-for` as womginx's rate limiter relies on this header when running in a container. So for nginx, add `proxy_set_header X-Forwarded-For $remote_addr;`
5. then run `sudo docker-compose up -d` to start it
6. `sudo docker-compose down` to stop
7. If you want to update womginx to the latest version, run `git pull && sudo docker-compose up -d --build`

## Installation

## License

The License is AGPL because wombat uses AGPL, and this repository contains womginx, which uses wombat.

## Credits

- [Binary-person](https://github.com/binary-person)-
  Created womginx
- [Jonas](https://github.com/jonasrhee1208wastaken)-
  Created an about:blank cloak
- [Krupal](https://github.com/lolfactor39)-
  I used the game files from his game site
