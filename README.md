## ⭐️ antdwash.com ⭐️

This repo holds the source for my personal website, [antdwash.com](https://antdwash.com/).

## 🚧 Under Construction 🚧

I can't believe it's been <b>5 years</b> since I last updated it. A lot has changed! 🤓

Right now the site is trimmed down to a single HTML page while I rebuild what the new version will look like. Stay tuned!

## ☁️ Hosting & Deployment ☁️

- The site is served as a static website from [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).
- Every push to `main` triggers a [GitHub Actions](https://docs.github.com/en/actions) workflow that syncs the `public/` folder to the S3 bucket.
- The workflow authenticates to AWS with [OIDC](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services), so no long-lived AWS keys are stored in the repo's secrets.

## 🛠 Local Development 🛠

There's no build step. Serve the `public/` folder with a local web server and open the URL in your browser.

If you have [Node](https://nodejs.org/) installed:

    npx serve public

Then visit http://localhost:3000.

If you have [Python 3](https://www.python.org/) installed:

    python3 -m http.server -d public

Then visit http://localhost:8000.
